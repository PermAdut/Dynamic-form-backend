import { AppError } from '../../middlewares/error.middleware'
import { GlobalMarket, Status, Project, Company, Country } from './company.interface'
import { ErrorMessages } from '../../utils/errorMessage'
import { HttpStatusCode } from '../../utils/statusCodes'

class CompanyRepository {
  private projects: Project[] = [
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
    { name: 'Project Nu', price: '16,50', status: Status.IN_PROGRESS },
    { name: 'Project Xi', price: '28,75', status: Status.COMPLETED },
    { name: 'Project Omicron', price: '13,20', status: Status.FAILED },
    { name: 'Project Pi', price: '19,99', status: Status.COMPLETED },
    { name: 'Project Rho', price: '24,00', status: Status.IN_PROGRESS },
    { name: 'Project Sigma', price: '11,80', status: Status.IN_PROGRESS },
  ]

  private companies: Company[] = [
    {
      name: 'Tech Innovations Inc.',
      creationDate: new Date('2015-03-10'),
      telephone: '+1-555-123-4567',
      country: Country.AUSTRALIA,
      isGlobal: true,
      globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.EUROPE, GlobalMarket.ASIA_PACIFIC],
      globalMarketKeySecretIndex: 'GMI-2025-XYZ',
      projects: this.projects.slice(0, 5),
    },
    {
      name: 'Green Energy Solutions',
      creationDate: new Date('2018-07-22'),
      telephone: '+44-20-1234-5678',
      country: Country.UK,
      isGlobal: false,
      projects: [],
    },
    {
      name: 'AsiaTech Ltd.',
      creationDate: new Date('2020-01-15'),
      country: Country.JAPAN,
      isGlobal: true,
      globalMarkets: [GlobalMarket.ASIA_PACIFIC, GlobalMarket.NORTH_AMERICA],
      globalMarketKeySecretIndex: 'GMI-2025-ABC',
      projects: [],
    },
    {
      name: 'Global Dynamics Corp.',
      creationDate: new Date('2017-09-05'),
      telephone: '+1-415-987-6543',
      country: Country.USA,
      isGlobal: true,
      globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.SOUTH_AMERICA],
      globalMarketKeySecretIndex: 'GMI-2025-DEF',
      projects: this.projects.slice(2, 7),
    },
    {
      name: 'Nordic Tech Solutions',
      creationDate: new Date('2019-11-30'),
      telephone: '+46-8-123-4567',
      country: Country.UK,
      isGlobal: false,
      projects: [this.projects[1], this.projects[3], this.projects[12]],
    },
    {
      name: 'Quantum Innovations',
      creationDate: new Date('2021-04-12'),
      country: Country.CANADA,
      isGlobal: true,
      globalMarkets: [GlobalMarket.NORTH_AMERICA, GlobalMarket.EUROPE, GlobalMarket.AFRICA],
      globalMarketKeySecretIndex: 'GMI-2025-GHI',
      projects: this.projects.slice(5, 10),
    },
    {
      name: 'EcoTech Enterprises',
      creationDate: new Date('2016-06-18'),
      telephone: '+49-30-9876-5432',
      country: Country.GERMANY,
      isGlobal: false,
      projects: [this.projects[0], this.projects[7], this.projects[14]],
    },
    {
      name: 'Pacific Software Ltd.',
      creationDate: new Date('2022-02-28'),
      country: Country.POLAND,
      isGlobal: true,
      globalMarkets: [GlobalMarket.ASIA_PACIFIC],
      globalMarketKeySecretIndex: 'GMI-2025-JKL',
      projects: this.projects.slice(8, 13),
    },
    {
      name: 'Bright Future Tech',
      creationDate: new Date('2020-08-14'),
      telephone: '+33-1-2345-6789',
      country: Country.FRANCE,
      isGlobal: false,
      projects: [this.projects[2], this.projects[10], this.projects[15]],
    },
  ]

  getCompanies(): Company[] {
    return this.companies
  }

  addCompany(company: Company): Company {
    this.companies.push(company)
    return company
  }

  getCompany(id: number): Company {
    if (!this.companies[id]) {
      throw new AppError(HttpStatusCode.NOT_FOUND, ErrorMessages.COMPANY_DOES_NOT_EXISTS)
    }
    return this.companies[id]
  }

  updateCompany(index: number, updatedCompany: Partial<Company>): Company {
    this.getCompany(index)
    this.companies[index] = { ...this.companies[index], ...updatedCompany }
    return this.companies[index]
  }
}

const companyRepository = new CompanyRepository()
export default companyRepository
