

import type {IUser} from "../domain/IUser";
import {IHash} from "../../services/interfaces/IHash";

export class CreateUser {
    constructor(
        private userRepository: IUser,
        private hash: Hash
    ){}

    async run(email: string, password: string) {
        const hashedPassword = this.hash.hash(password);
        return await this.userRepository.create(email, password)
    }
}