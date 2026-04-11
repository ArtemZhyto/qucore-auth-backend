// Modules
import path from 'path'
import dotenv from 'dotenv'

const envPath = (file: string) => path.resolve(process.cwd(), `../../${file}`)

dotenv.config({ path: envPath('.env') })
dotenv.config({ path: envPath('.env.prod'), override: true })

const isProd = process.env.MODE === 'prod'

export const __PORT = process.env.AUDIT_SERVICE
export const cookieOptions = {
  httpOnly: true,
  sameSite: (isProd ? 'strict' : 'lax') as 'strict' | 'lax',
  secure: isProd,
  ...(isProd && { domain: process.env.DOMAIN }),
}
