/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppError } from '../../middlewares/error.middleware'
import companyRepository from './company.repository'
import { ErrorMessages } from '../../utils/errorMessage'
import { HttpStatusCode } from '../../utils/statusCodes'
import { CompanyRequestDto } from './dto/company.request.dto'
import { CompanyResponseDto } from './dto/company.response.dto'

export async function getAllCompanies(): Promise<CompanyResponseDto[]> {
  try {
    return companyRepository.getCompanies()
  } catch (err: any) {
    throw new AppError(
      err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
      err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
    )
  }
}

export async function createCompany(company: CompanyRequestDto): Promise<CompanyResponseDto> {
  try {
    return companyRepository.addCompany(company)
  } catch (err: any) {
    throw new AppError(
      err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
      err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
    )
  }
}

export async function getOneCompany(id: number): Promise<CompanyResponseDto> {
  try {
    return companyRepository.getCompany(id)
  } catch (err: any) {
    throw new AppError(
      err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
      err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
    )
  }
}

export async function updateOneCompany(id: number, company: Partial<CompanyRequestDto>) {
  try {
    return companyRepository.updateCompany(id, company)
  } catch (err: any) {
    throw new AppError(
      err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
      err.message || ErrorMessages.INTERNAL_SERVER_ERROR,
    )
  }
}
