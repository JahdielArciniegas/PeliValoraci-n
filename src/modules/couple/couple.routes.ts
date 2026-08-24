import { coupleControllers } from './couple.controller.js'
import express, { type Router } from 'express'
import { validateRequest } from '../../shared/middleware/validateRequest.js'
import {
  coupleValidateSchema,
  coupleChangeNameSchema,
  coupleRemoveSchema,
} from './couple.schema.js'

const coupleRouter: Router = express.Router()

coupleRouter.post('/code', coupleControllers.getCoupleCode)
coupleRouter.put(
  '/code/validate',
  validateRequest(coupleValidateSchema),
  coupleControllers.validateCouple
)
coupleRouter.put(
  '/:id',
  validateRequest(coupleChangeNameSchema),
  coupleControllers.changeName
)
coupleRouter.get('/:id', coupleControllers.getOneCouple)
coupleRouter.delete(
  '/:id',
  validateRequest(coupleRemoveSchema),
  coupleControllers.removeCouple
)

export default coupleRouter
