import express from 'express'
import UsersCtrl from '../users/users.controller.js'

const router = express.Router()

router.route('/users').get(UsersCtrl.apiGetUsers)

export default router
