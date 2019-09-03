'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('select * from person', function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.first_name = function(req, res) {
    connection.query('select first_name from person', function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.last_name = function(req, res) {
    connection.query('select last_name from  person', function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("hello from nodejs", res)
};

exports.findUsers = function(req, res) {
    var user_id = req.params.user_id;

    connection.query('select * from person where id = ?', [user_id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    connection.query('insert into person( first_name, last_name) values (?,?)', [first_name, last_name], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("Berhasil Menambah Data. Nama  : " + [first_name, last_name], res)
        }
    });
};

exports.updateUsers = function(req, res) {
    var user_id = req.body.user_id;
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    connection.query('update person set first_name = ? , last_name = ? where id = ?', [first_name, last_name, user_id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("BErhasil Update User" + user_id, res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    var user_id = req.body.user_id;
    connection.query('delete from person where id = ?', [user_id], function(error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok("Berhasil Menghapus user" + user_id, res)
        }
    });
};