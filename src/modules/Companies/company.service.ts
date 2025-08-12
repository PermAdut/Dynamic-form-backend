import { AppError } from '../../middlewares/errorHandler'
import { addCompany, getCompanies, getCompany } from '../../utils/database'
import { ErrorMessages } from '../../utils/errorMessage'
import { HttpStatusCode } from '../../utils/statusCodes'
import { Company } from './company.interface'
import { CompanyRequestDto } from './dto/company.request.dto'
import { CompanyResponseDto } from './dto/company.response.dto'

export async function getAllCompanies(): Promise<CompanyResponseDto[]> {
  try {
    return getCompanies()
  } catch {
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}

export async function createCompany(company: CompanyRequestDto): Promise<CompanyResponseDto> {
  try {
    const companyInsertBody: Company = { ...company, creationDate: company.creationDate.toString() }
    return addCompany(companyInsertBody)
  } catch {
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}

export async function getOneCompany(id: number): Promise<CompanyResponseDto> {
  try {
    return getCompany(id)
  } catch {
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}
