// Types
import { Request, Response } from 'express'

export const singleLogoutHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
