import { AppError } from '../../middlewares/error.middleware'
import { addCompany, getCompanies, getCompany, updateCompany } from '../../utils/database'
import { ErrorMessages } from '../../utils/errorMessage'
import { HttpStatusCode } from '../../utils/statusCodes'
import { Company } from './company.interface'
import { CompanyRequestDto } from './dto/company.request.dto'
import { CompanyResponseDto } from './dto/company.response.dto'

export async function getAllCompanies(): Promise<CompanyResponseDto[]> {
  try {
    return getCompanies()
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(
        err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
        err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
      )
    }
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}

export async function createCompany(company: CompanyRequestDto): Promise<CompanyResponseDto> {
  try {
    const companyInsertBody: Company = { ...company, creationDate: company.creationDate.toString() }
    return addCompany(companyInsertBody)
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(
        err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
        err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
      )
    }
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}

export async function getOneCompany(id: number): Promise<CompanyResponseDto> {
  try {
    return getCompany(id)
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(
        err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
        err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
      )
    }
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}

export async function updateOneCompany(id: number, body: Partial<CompanyRequestDto>) {
  try {
    const { creationDate, ...rest } = body

    const updBody: Partial<Company> = {
      ...rest,
      ...(creationDate ? { creationDate: creationDate.toString().slice(0, 10) } : {}),
    }
    return updateCompany(id, updBody)
  } catch (err) {
    if (err instanceof AppError) {
      throw new AppError(
        err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
        err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
      )
    }
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}
