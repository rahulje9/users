import * as registartion from './registrationAction'
import * as login from './loginAction'
import * as users from './userAction'

export const ActionCreators = Object.assign({},
    registartion,
    login,
    users
)