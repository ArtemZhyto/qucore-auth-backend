// Modules
import { Router } from 'express'

// Controllers
import { registerHandler } from '@controllers/register.controller'
import { loginHandler } from '@controllers/login.controller'
import { singleLogoutHandler } from '@controllers/single-logout.controller'
import { commonLogoutHandler } from '@controllers/common-logout.controller'
import { deleteHandler } from '@controllers/delete.controller'
import { blockHandler } from '@controllers/block.controller'

const authRouter = Router()

authRouter.get('/register', registerHandler)
authRouter.get('/login', loginHandler)
authRouter.get('/single-logout', singleLogoutHandler)
authRouter.get('/common-logout', commonLogoutHandler)
authRouter.get('/delete', deleteHandler)
authRouter.get('/block', blockHandler)

export default authRouter
