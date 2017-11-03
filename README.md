# Payments API

![screenshot](Screenshot.png?raw=true "screenshot")

> This API was built in Node.js


## Build Setup

``` bash
# install dependencies
npm install

# run nodemon (you must have modemon intalled)
nodemon index.js

```
## Create databse on mysql

login in Mysql then:
```bash
create database payfast;

use payfast;

create table pagamentos(id int(11) not null auto_increment, forma_de_pagamento varchar(255) not null, valor decimal(10,2) not null, moeda varchar (3) not null, status varchar(255) not null, data date, descricao text, primary key(id));

```
