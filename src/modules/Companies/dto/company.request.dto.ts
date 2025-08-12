import { Country, GlobalMarket, Status } from '../company.interface'

export interface CompanyRequestDto {
  name: string
  creationDate: Date
  telephone?: string
  country: Country
  isGlobal: boolean
  globalMarkets?: GlobalMarket[]
  globalMarketKeySecretIndex?: string
  projects?: ProjectRequestDto[]
}

export interface ProjectRequestDto {
  name: string
  price: string
  status: Status
}
