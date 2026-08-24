import express, { type Router } from 'express'
import { validateRequest } from '../../shared/middleware/validateRequest.js'
import { userCreateSchema, userLoginSchema } from '../user/user.schema.js'
import { authController } from './auth.controller.js'

const authRoutes: Router = express.Router()

authRoutes.post(
  '/register',
  validateRequest(userCreateSchema),
  authController.register
)
authRoutes.post(
  '/login',
  validateRequest(userLoginSchema),
  authController.login
)
authRoutes.post('/logout', authController.logout)

export default authRoutes
