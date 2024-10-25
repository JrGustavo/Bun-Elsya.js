import {Elysia} from "Elysia";
import {createUseDTO, loginUserDTO } from "./domain/userDTO";
import {createUserController, loginUserController} from "../server/dependencies";



export const userRouter = new Elysia({prefix: '/users'})
    .post('/' , createUserController.run.bind(createUserController) , createUseDTO)
    .post('/login' , loginUserController.run.bind(loginUserController)  , loginUserDTO)


