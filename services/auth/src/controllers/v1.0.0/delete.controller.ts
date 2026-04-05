// Types
import { Request, Response } from 'express'

export const deleteHandler = (req: Request, res: Response) => {
  res.json({ message: 'ok' })
}
