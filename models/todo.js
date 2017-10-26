const db = require('../db/config');

const todo = {};

todo.findAll = () => {
    console.log('Model Find All')
    return db.query('SELECT * FROM todos');

};

todo.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM todos
        WHERE id = $1
    `, [id]);
};

todo.create = (todo) => {
    return db.one(
        `
        INSERT INTO todos
        (description, priority, status)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [todo.description, todo.priority, todo.status]);
};

todo.update = (tasks, id) => {
    return db.one(`
    UPDATE todos SET
    description = $1,
    priority = $2,
    state = $3
    WHERE id = $4
    RETURNING *
    `, [todo.description, todo.priority, todo.status, id]);
};

todo.destory = (id) => {
    return db.none(`
    DELETE FROM todos
    WHERE id = $1
`, [id]);
};

module.exports = todo;