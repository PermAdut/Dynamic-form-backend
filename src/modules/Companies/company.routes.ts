import { Router } from 'express'
import companyController from './company.controller'

const companyRouter = Router()

companyRouter.route('/api/v1.0/companies').get(companyController.getAll)

export default companyRouter
