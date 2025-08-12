import { Request, Response, NextFunction } from 'express'
import { CompanyResponseDto } from './dto/company.response.dto'
import { getAllCompanies } from './company.service'
import { HttpStatusCode } from '../../utils/statusCodes'

const getAll = async (req: Request<object, null, CompanyResponseDto, null>, res: Response, next: NextFunction) => {
  try {
    const companies = await getAllCompanies()
    res.status(HttpStatusCode.OK).json(companies)
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
}
