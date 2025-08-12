import { GlobalMarket, Status, Project, Company, Country } from '../modules/Companies/company.interface'

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
    projects: proj,
  },
  {
    name: 'Green Energy Solutions',
    creationDate: '2018-07-22',
    telephone: '+44-20-1234-5678',
    country: Country.UK,
    isGlobal: false,
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
]

export function getCompanies(): Company[] {
  return sampleCompanies
}

export function addCompany(company: Company): Company {
  sampleCompanies.push(company)
  return company
}

export function updateCompany(index: number, updatedCompany: Partial<Company>): Company {
  sampleCompanies[index] = { ...sampleCompanies[index], ...updatedCompany }
  return sampleCompanies[index]
}

export function getCompany(id: number) {
  return sampleCompanies[id]
}
