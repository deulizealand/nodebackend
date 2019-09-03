'use strict';

module.exports = function(app) {
    var tl = require('./controller');

    app.route('/users')
        .get(tl.users);
    app.route('/')
        .get(tl.index);
    app.route('/first')
        .get(tl.first_name);
    app.route('/last')
        .get(tl.last_name);
    app.route('/users/:user_id')
        .get(tl.findUsers);
    app.route('/users')
        .post(tl.createUsers);
    app.route('/users')
        .put(tl.updateUsers);
    app.route('/users')
        .delete(tl.deleteUsers);
};