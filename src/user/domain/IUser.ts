import {User} from "./User";

export interface  IUser {

    create(email: string, password:string): Promise <User>
    find(email: string): Promise<User | null>
    update(email: string, password:string): Promise<User | null>
    delete(email: string): Promise<User | null>
    list(): Promise<User[] | null>


}
