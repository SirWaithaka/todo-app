const { User, Todo } = require('./models')

module.exports = (app) => {
  app.get('/todos', async (req, res) => {
    try {
      const todos = await Todo.findAll()
      res.send(todos.toJSON())
    } catch (err) {
      res.status(400).send({ error: 'Failed to get Todos' })
    }
  })
  app.post('/todos', async (req, res) => {
    try {
      const todo = await Todo.create(req.body)
      res.send(todo.toJSON())
    } catch (err) {
      res.status(400).send({ error: 'Failed to add Todo' })
    }
  })
  app.post('/users', async (req, res) => {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({ error: 'Failed to create user' })
    }
  })
  app.post('/', (req, res) => {
    res.send({
      message: `Hello ${req.body.name}`
    })
  })
}
