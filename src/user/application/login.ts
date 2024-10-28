import type {IUser} from "../domain/IUser";
import {IJWT} from "../../services/interfaces/IJWTS";
import {Hash} from "../../services/hash";


export class LoginUser {
    constructor(
        private userRepository: IUser,
        private hash: Hash,
        private jwt: IJWT
    ){}

    async run (email: string, password: string) {
        const user = await this.userRepository.find(email)
        if (!user) { throw new Error("User not found") }
        const isValid = this.hash.compare(password, user.password)
        if(!isValid) throw new Error('Invalidate password' )
        const token = this.jwt.sign(user.id)
        user.setToken(token)


        return {
            token: this.jwt.sign(user.id),
            user

        }
    }

}

