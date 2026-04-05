// Configs
import { cookieOptions } from '@src/config'

// Libs
import { generateRequestID } from '@qucore-dynamic/packages'

// Helpers
import throwError from '@helpers/v1.0.0/answers/throwError'
import sendResponse from '@helpers/v1.0.0/answers/sendResponse'

// Services
import { registService } from '@services/v1.0.0/regist.service'

// Types
import { Request, Response } from 'express'

// Intrefaces
import { Tokens } from '@ts/interfaces/tokens.interface'

export const registHandler = (req: Request, res: Response) => {
  const rayID = generateRequestID()

  const { refreshToken: oldRefreshToken, accessToken: oldAccessToken } = req.signedCookies

  if (oldRefreshToken || oldAccessToken)
    throwError({
      rayID,
      status: 403,
      code: 'ALREADY_REGISTERED',
      message: 'User is already registered',
    })

  //TODO: Call the registration service
  const data: Tokens = registService()

  return sendResponse(res, {
    code: 'OK',
  })
  //   .cookie('refreshToken', data.refreshToken, {
  //     ...cookieOptions,
  //     maxAge: Number(process.env.REFRESH_AGE),
  //     path: '/v1.0.0/tokens-refresh',
  //     signed: true,
  //   })
  //   .cookie('accessToken', data.accessToken, {
  //     ...cookieOptions,
  //     maxAge: Number(process.env.ACCESS_AGE),
  //     path: '/',
  //     signed: true,
  //   })
}
