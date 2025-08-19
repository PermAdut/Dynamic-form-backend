import { NextFunction, Request, Response } from 'express'
import { HttpStatusCode } from '../utils/statusCodes'
import { ErrorMessages } from '../utils/errorMessage'

export default function paramValidator(req: Request<{ id: string }, null, null>, res: Response, next: NextFunction) {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id < 0) {
    return res.status(HttpStatusCode.BAD_REQUEST).json(ErrorMessages.COMPANY_INDEX_MUST_BE_A_NUMBER)
  }
  next()
}
