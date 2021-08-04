import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {JWT_SECRET_KEY} from '../common/config'
import {getToken} from './utilities';

const validation = (req: Request, res: Response, next: NextFunction): void => {
    const token = getToken(req.headers.authorization);
    if (!token) res.status(401).json({auth: false, message: "No token provided"});
    else {
        jwt.verify(token, JWT_SECRET_KEY, (err, _decoded) => {
            if (err) {
                res.status(401).send({error: "not authorized"});
            } else {
                next();
            }
        });
    }
};

export {validation};
