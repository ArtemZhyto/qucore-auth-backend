// Modules
import jwt from 'jsonwebtoken'

export const tokensValidator = (refreshToken: string, accessToken: string): void => {
  jwt.verify(refreshToken, process.env.REFRESH_SECRET!)
  jwt.verify(accessToken, process.env.ACCESS_SECRET!)
}
