import bcrypt from 'bcrypt';



export class Hash {
    hash(password: string) {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
    }

    compare(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }
}