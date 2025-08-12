import { Request, Response, NextFunction } from 'express'
import { CompanyResponseDto } from './dto/company.response.dto'
import { createCompany, getAllCompanies, getOneCompany } from './company.service'
import { HttpStatusCode } from '../../utils/statusCodes'
import { CompanyRequestDto } from './dto/company.request.dto'

const getAll = async (req: Request<object, CompanyResponseDto, null, null>, res: Response, next: NextFunction) => {
  try {
    const companies = await getAllCompanies()
    res.status(HttpStatusCode.OK).json(companies)
  } catch (error) {
    next(error)
  }
}

const create = async (
  req: Request<object, CompanyResponseDto, CompanyRequestDto, null>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const company = await createCompany(req.body)
    res.status(HttpStatusCode.CREATED).json(company)
  } catch (error) {
    next(error)
  }
}

const getOne = async (req: Request<{ id: number }, null, null, null>, res: Response, next: NextFunction) => {
  try {
    const company = await getOneCompany(req.params.id)
    res.status(HttpStatusCode.OK).json(company)
  } catch (err) {
    next(err)
  }
}

export default {
  getAll,
  create,
  getOne,
}
