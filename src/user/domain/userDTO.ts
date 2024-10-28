import {t } from "Elysia"


export const createUseDTO = {

    body: t.Object({
        email: t.String(),
        password: t.String()
    })
}

export const loginUserDTO = {

    body: t.Object({
        email: t.String(),
        password: t.String()
    })
}

