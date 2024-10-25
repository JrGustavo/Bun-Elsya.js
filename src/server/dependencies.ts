import {UserRepository} from "../user/infraestructure/userRepository";
import {CreateUser} from "../user/application/create";
import {CreateController} from "../user/infraestructure/controllers/createController";
import {Hash} from "../services/hash";
import {LoginUser} from "../user/application/login";
import {LoginController} from "../user/infraestructure/controllers/login";
import {JWT} from "../services/jwt";


const userRepository = new UserRepository()
const hashService = new Hash()
const jwtService = new JWT()


const createUser = new CreateUser(UserRepository,  hashService)
export const createUserController = new CreateController(createUser)

const loginUser = new LoginUser(hashService, userRepository, jwtService)
export const loginUserController = new LoginController(loginUser)