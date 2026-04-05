// Modules
import { Router } from 'express'

// Controllers
import { registHandler } from '@controllers/v1.0.0/regist.controller'
import { loginHandler } from '@controllers/v1.0.0/login.controller'
import { updateHandler } from '@controllers/v1.0.0/update.controller'
import { deleteHandler } from '@controllers/v1.0.0/delete.controller'
import { blockHandler } from '@controllers/v1.0.0/block.controller'
import { singleLogoutHandler } from '@controllers/v1.0.0/single-logout.controller'
import { commonLogoutHandler } from '@controllers/v1.0.0/common-logout.controller'
import { tokensRefreshHandler } from '@controllers/v1.0.0/tokens-refresh.controller'

const routerV1_0_0 = Router()

routerV1_0_0.post('/regist', registHandler)
routerV1_0_0.get('/login', loginHandler)
routerV1_0_0.get('/update', updateHandler)
routerV1_0_0.get('/delete', deleteHandler)
routerV1_0_0.get('/block', blockHandler)
routerV1_0_0.get('/single-logout', singleLogoutHandler)
routerV1_0_0.get('/common-logout', commonLogoutHandler)
routerV1_0_0.get('/tokens-refresh', tokensRefreshHandler)

export default routerV1_0_0
