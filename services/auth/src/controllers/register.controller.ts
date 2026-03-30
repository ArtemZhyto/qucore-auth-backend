// Types
import { Request, Response } from 'express'

export const registerHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
