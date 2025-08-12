export interface CompanyResponseDto {
  name: string
  creationDate: string
  telephone?: string
  country: string
  isGlobal: boolean
  globalMarkets?: string[]
  globalMarketKeySecretIndex?: string
  projects?: ProjectResponseDto[]
}

export interface ProjectResponseDto {
  name: string
  price: string
  status: string
}
