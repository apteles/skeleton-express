import express from 'express'
import Youch from 'youch'
import 'express-async-errors'
import routes from './app/routes'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() { }

  routes() {
    this.server.use(routes)
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON()

      return res.status(500).json(errors)
    })
  }
}

export default new App().server
