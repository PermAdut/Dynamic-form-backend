export enum Country {
  USA = 'US',
  CANADA = 'CA',
  UK = 'GB',
  GERMANY = 'DE',
  FRANCE = 'FR',
  JAPAN = 'JP',
  AUSTRALIA = 'AU',
  POLAND = 'PL',
  ITALY = 'IT',
}

export enum GlobalMarket {
  NORTH_AMERICA = 'NORTH AMERICA',
  EUROPE = 'EUROPE',
  ASIA_PACIFIC = 'ASIA PACIFIC',
  SOUTH_AMERICA = 'SOUTH AMERICA',
  AFRICA = 'AFRICA',
  MIDDLE_EAST = 'MIDDLE EAST',
}

export enum Status {
  COMPLETED = 'completed',
  IN_PROGRESS = 'in progress',
  FAILED = 'failed',
}

export interface Project {
  name: string
  price: string
  status: Status
}

export interface Company {
  name: string
  creationDate: string
  telephone?: string
  country: Country
  isGlobal: boolean
  globalMarkets?: GlobalMarket[]
  globalMarketKeySecretIndex?: string
  projects?: Project[]
}
