import { Router } from 'express'
import companyController from './company.controller'

const companyRouter = Router()

companyRouter.route('/api/v1.0/companies').get(companyController.getAll)
companyRouter.route('/api/v1.0/companies/create').post(companyController.create)
export default companyRouter
