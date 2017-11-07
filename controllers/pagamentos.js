module.exports = function (app) {

    app.post('/pagamentos/pagamento', (req,res) => {

        req.assert('forma_de_pagamento','Forma de pagamento obrigatoria').notEmpty();
        req.assert('valor','O valor e obrigatorio e deve ser decimal').notEmpty().isFloat();

        var erros = req.validationErrors();

        if(erros) {
            console.log('Erros de validacao encontrados');
            res.status(400).send(erros);
            return;
        }

        var pagamento = req.body;
        console.log('Processando requisicao de novo pagamento');

        pagamento.status = 'CRIADO';
        pagamento.data = new Date;

        var connection = app.persistencia.connectionFactory();
        var PagamentosDAO = new app.persistencia.PagamentosDAO(connection);

        PagamentosDAO.salva(pagamento, (erro,resultado) => {
            if (erro) {
                console.log('Erro ao inserir no banco: ' + erro);
                res.status(500).send(erro);

            } else {
                console.log('Pagamento Criado');
                res.location('/pagamentos/pagamento/'+resultado.insertId);
                res.status(201).json(pagamento);
            }
        });
    });
}