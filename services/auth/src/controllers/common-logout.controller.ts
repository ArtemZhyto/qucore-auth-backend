// Types
import { Request, Response } from 'express'

export const commonLogoutHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
