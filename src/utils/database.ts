import { AppError } from '../middlewares/error.middleware'
import { GlobalMarket, Status, Project, Company, Country } from '../modules/Companies/company.interface'
import { ErrorMessages } from './errorMessage'
import { HttpStatusCode } from './statusCodes'

const proj: Project[] = [
  { name: 'Project Alpha', price: '14,13', status: Status.COMPLETED },
  { name: 'Project Beta', price: '20,00', status: Status.IN_PROGRESS },
  { name: 'Project Gamma', price: '10,50', status: Status.COMPLETED },
  { name: 'Project Delta', price: '18,75', status: Status.COMPLETED },
  { name: 'Project Epsilon', price: '25,00', status: Status.COMPLETED },
  { name: 'Project Zeta', price: '12,99', status: Status.IN_PROGRESS },
  { name: 'Project Eta', price: '30,00', status: Status.COMPLETED },
  { name: 'Project Theta', price: '15,25', status: Status.COMPLETED },
  { name: 'Project Iota', price: '22,10', status: Status.COMPLETED },
  { name: 'Project Kappa', price: '19,80', status: Status.IN_PROGRESS },
  { name: 'Project Lambda', price: '17,45', status: Status.COMPLETED },
  { name: 'Project Mu', price: '21,30', status: Status.COMPLETED },
  // Новые проекты
  { name: 'Project Nu', price: '16,50', status: Status.IN_PROGRESS },
  { name: 'Project Xi', price: '28,75', status: Status.COMPLETED },
  { name: 'Project Omicron', price: '13,20', status: Status.FAILED },
  { name: 'Project Pi', price: '19,99', status: Status.COMPLETED },
  { name: 'Project Rho', price: '24,00', status: Status.IN_PROGRESS },
  { name: 'Project Sigma', price: '11,80', status: Status.IN_PROGRESS },
]

const sampleCompanies: Company[] = [
  {
    name: 'Tech Innovations Inc.',
    creationDate: '2015-03-10',
    telephone: '+1-555-123-4567',
    country: Country.AUSTRALIA,
    isGlobal: true,
    globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.EUROPE, GlobalMarket.ASIA_PACIFIC],
    globalMarketKeySecretIndex: 'GMI-2025-XYZ',
    projects: proj.slice(0, 5),
  },
  {
    name: 'Green Energy Solutions',
    creationDate: '2018-07-22',
    telephone: '+44-20-1234-5678',
    country: Country.UK,
    isGlobal: false,
    projects: [],
  },
  {
    name: 'AsiaTech Ltd.',
    creationDate: '2020-01-15',
    country: Country.JAPAN,
    isGlobal: true,
    globalMarkets: [GlobalMarket.ASIA_PACIFIC, GlobalMarket.NORTH_AMERICA],
    globalMarketKeySecretIndex: 'GMI-2025-ABC',
    projects: [],
  },
  {
    name: 'Global Dynamics Corp.',
    creationDate: '2017-09-05',
    telephone: '+1-415-987-6543',
    country: Country.USA,
    isGlobal: true,
    globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.SOUTH_AMERICA],
    globalMarketKeySecretIndex: 'GMI-2025-DEF',
    projects: proj.slice(2, 7),
  },
  {
    name: 'Nordic Tech Solutions',
    creationDate: '2019-11-30',
    telephone: '+46-8-123-4567',
    country: Country.UK,
    isGlobal: false,
    projects: [proj[1], proj[3], proj[12]],
  },
  {
    name: 'Quantum Innovations',
    creationDate: '2021-04-12',
    country: Country.CANADA,
    isGlobal: true,
    globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.EUROPE, GlobalMarket.AFRICA],
    globalMarketKeySecretIndex: 'GMI-2025-GHI',
    projects: proj.slice(5, 10),
  },
  {
    name: 'EcoTech Enterprises',
    creationDate: '2016-06-18',
    telephone: '+49-30-9876-5432',
    country: Country.GERMANY,
    isGlobal: false,
    projects: [proj[0], proj[7], proj[14]],
  },
  {
    name: 'Pacific Software Ltd.',
    creationDate: '2022-02-28',
    country: Country.POLAND,
    isGlobal: true,
    globalMarkets: [GlobalMarket.ASIA_PACIFIC],
    globalMarketKeySecretIndex: 'GMI-2025-JKL',
    projects: proj.slice(8, 13),
  },
  {
    name: 'Bright Future Tech',
    creationDate: '2020-08-14',
    telephone: '+33-1-2345-6789',
    country: Country.FRANCE,
    isGlobal: false,
    projects: [proj[2], proj[10], proj[15]],
  },
  {
    name: 'Innovate Brazil',
    creationDate: '2018-12-01',
    country: Country.ITALY,
    isGlobal: true,
    globalMarkets: [GlobalMarket.MIDDLE_EAST, GlobalMarket.EUROPE],
    globalMarketKeySecretIndex: 'GMI-2025-MNO',
    projects: proj.slice(0, 3),
  },
  {
    name: 'SkyNet Solutions',
    creationDate: '2023-03-20',
    telephone: '+81-3-1234-5678',
    country: Country.JAPAN,
    isGlobal: false,
    projects: [proj[4], proj[9], proj[17]],
  },
  {
    name: 'Global Trade Co.',
    creationDate: '2014-05-09',
    telephone: '+86-10-8765-4321',
    country: Country.CANADA,
    isGlobal: true,
    globalMarkets: [GlobalMarket.ASIA_PACIFIC, GlobalMarket.AFRICA, GlobalMarket.EUROPE],
    globalMarketKeySecretIndex: 'GMI-2025-PQR',
    projects: proj.slice(6, 12),
  },
  {
    name: 'Southern Innovations',
    creationDate: '2019-10-25',
    country: Country.GERMANY,
    isGlobal: false,
    projects: [proj[1], proj[13], proj[16]],
  },
]

export function getCompanies(): Company[] {
  return sampleCompanies
}

export function addCompany(company: Company): Company {
  sampleCompanies.push(company)
  return company
}

export function updateCompany(index: number, updatedCompany: Partial<Company>): Company {
  getCompany(index)
  sampleCompanies[index] = { ...sampleCompanies[index], ...updatedCompany }
  return sampleCompanies[index]
}

export function getCompany(id: number): Company | null {
  if (!sampleCompanies[id]) {
    throw new AppError(HttpStatusCode.NOT_FOUND, ErrorMessages.COMPANY_DOES_NOT_EXISTS)
  }
  return sampleCompanies[id]
}
