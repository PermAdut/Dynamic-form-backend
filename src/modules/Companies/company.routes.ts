import { Router } from 'express'
import companyController from './company.controller'
import paramValidator from '../../middlewares/param.middleware'

const companyRouter = Router()

companyRouter.route('/api/v1.0/companies').get(companyController.getAll)
companyRouter.route('/api/v1.0/companies').post(companyController.create)
companyRouter.route('/api/v1.0/companies/:id').get(companyController.getOne, paramValidator)
companyRouter.route('/api/v1.0/companies/:id').patch(companyController.updateOne, paramValidator)
export default companyRouter
