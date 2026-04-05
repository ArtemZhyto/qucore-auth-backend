// Types
import { Request, Response } from 'express'

export const blockHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
