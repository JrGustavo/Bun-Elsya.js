
import { CreateUser } from "../user/application/create.js";
import { Hash } from "../services/hash.js";
import { LoginController } from "../user/infraestructure/controllers/login.js";
import { LoginUser } from "../user/application/login.js";
import { JWT } from "../services/jwt.js";
import {UserRepository} from "../user/infraestructure/userRepository";
import {CreateUserController} from "../user/infraestructure/controllers/createController";



const userRepository = new UserRepository();
const hashService = new Hash();
const jwtService = new JWT();


const createUser = new CreateUser(userRepository, hashService);
export const createUserController = new CreateUserController(createUser);
const loginUser = new LoginUser(userRepository, hashService, jwtService);
export const loginController = new LoginController(loginUser);