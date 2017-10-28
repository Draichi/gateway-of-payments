function PagamentosDAO (connection) {
    this._connection = connection;
}

PagamentosDAO.prototype.salva = function (pagamento, callback) { 
    this._connection.query('insert into pagamentos set ?', pagamento, callback);
}

PagamentosDAO.prototype.lista = function (callback) { 
    this._connection.query('select * from pagamentos', callback);
}

PagamentosDAO.prototype.buscaPorId = function (id, callback) { 
    this._connection.query('select * from pagamentos where id = ?', [id], callback);
}

module.exports = function () { 
    return PagamentosDAO;
};