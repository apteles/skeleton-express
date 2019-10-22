import { Router } from 'express'
const routes = new Router()


import HelloController from './controllers/HelloController'


routes.get('/', HelloController.index)


export default routes
