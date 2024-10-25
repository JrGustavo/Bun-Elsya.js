import {Elysia} from 'Elysia'
import {userRouter} from "../user/userRouter";


export class Server {
    private app: Elysia

    constructor() {
        this.app = new Elysia()
        this.app.device((headers)) => {
            const auth = headers['authorization']

            return {
                token: auth?.startWith('Bearer') ? auth.slice('7'): null
            }
        }




    }

    public start() {
        this.app.listen(process.env.PORT || 3000, () => {
            console.log('Server is running on port 3000')
        })
    }
}