import {LoginUser} from "../../application/login";


export class LoginController {
    constructor (
        private loginUser: LoginUser
    ) { }

    async run({body}: any) {
        try {
            const user = await this.loginUser.run(body.email, body.password)
            return {

                status: 200,
                 user,
                message: 'User logged in',
            }
        }catch (error) {
            const err = error as Error
            return {
                status: 500,
                body: {
                    message: err.message
                }

        }
        }
    }
}



