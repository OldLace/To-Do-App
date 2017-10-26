const Todo = require('../models/todo');

const todoController = {};

todoController.index = (req, res) => {
    Todo.findAll() .then(tasks => {
        console.log(task)
        res.render('tasks/tasks-index', {
            data: tasks,
        })

        }) .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
};

todoController.create = (req, res) => {
    Todo.create ({
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status
    })  .then((todo) => {
        res.send(todo)
    }).catch(err=>{
    console.log(err)
    res.status(500).json(err)
})
}

todoController.show = (req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
        res.render('tasks/tasks-single', {
            data: tasks
            })
        }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
}
// todoController.update = (req,res) => {
//     Todo.update(
//         [description: req.body.description,
//         priority: req.body.priority,
//         status: req.body.status])
//         .then((tasks) => {
//         res.redirect('back')
//     }).catch(err => {
//         console.log(err)
//         res.status(500).json(err)
//     })
//         }

todoController.delete = (req, res) => {
    Todo.delete(req.params.id).then(
        res.redirect('/todo')).catch(err => {
        console.log(err)
        res.status(500).json(err)
        })
}

module.exports = todoController