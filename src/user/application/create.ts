

import type {IUser} from "../domain/IUser";
import {Hash} from "../../services/hash";

export class CreateUser {
    constructor(
        private userRepository: IUser,
        private hash: Hash
    ){}

    async run(email: string, password: string) {
        const hashPassword = this.hash.hash(password);
        return await this.userRepository.create(email, password)
    }
}
