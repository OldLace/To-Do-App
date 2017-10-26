const db = require('../db/config');

const todo = {};

todo.findAll = () => {
    return db.query('SELECT * FROM tasks');
};

todo.findById = (id) => {
    return db.oneOrNone(`
        SELECT * FROM tasks
        WHERE id = $1
    `, [id]);
};

todo.create = (todo) => {
    return db.one(
        `
        INSERT INTO tasks
        (description, priority, status)
        VALUES ($1, $2, $3)
        RETURNING *
    `, [todo.description, todo.priority, todo.status]);
};

todo.update = (tasks, id) => {
    return db.one(`
    UPDATE tasks SET
    description = $1,
    priority = $2,
    state = $3
    WHERE id = $4
    RETURNING *
    `, [todo.description, todo.priority, todo.status, id]);
};

todo.destory = (id) => {
    return db.none(`
    DELETE FROM tasks
    WHERE id = $1
`, [id]);
};

module.exports = todo;