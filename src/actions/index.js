import * as registartion from './registrationAction'
import * as login from './loginAction'
import * as users from './userAction'
import * as colors from './colorsAction'

export const ActionCreators = Object.assign({},
    registartion,
    login,
    users,
    colors
)