import {Elysia} from "Elysia";
import {createUseDTO, loginUserDTO } from "./domain/userDTO";
import {createUserController, loginController} from "../server/depenncies";




export const userRouter = new Elysia({prefix: '/users'})
    .post('/' , createUserController.run.bind(createUserController) , createUseDTO)
    .post('/login' , loginController.run.bind(loginController)  , loginUserDTO)


