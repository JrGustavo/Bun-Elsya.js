export class User {
    constructor(
        public id: string,
        public password: string,
        public token?: string,
    ){}

    setToken(token: string) {
        this.token = token
    }
}