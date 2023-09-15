import { NextFunction, Request, Response } from "express";
import { ObjectSchema, func } from "joi";

export function validateSchemaMid (schema: ObjectSchema){
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body);
        if (validation.error){
            return res.status(422).send({error: validation.error.message})
        }
        next();
    };
}