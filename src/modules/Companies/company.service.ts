import { AppError } from '../../middlewares/errorHandler'
import { getCompanies } from '../../utils/database'
import { ErrorMessages } from '../../utils/errorMessage'
import { HttpStatusCode } from '../../utils/statusCodes'
import { CompanyResponseDto } from './dto/company.response.dto'

export async function getAllCompanies(): Promise<CompanyResponseDto[]> {
  try {
    return getCompanies()
  } catch {
    throw new AppError(HttpStatusCode.INTERNAL_SERVER_ERROR, ErrorMessages.INTERNAL_SERVER_ERROR)
  }
}
