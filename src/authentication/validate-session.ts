import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {getRepository} from 'typeorm';
import {JWT_SECRET_KEY} from '../common/config'
import {User} from '../resources/users/user.model'

const validation = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(403).json({auth: false, message: "No token provided"})
    } else {
        console.log(token);
        jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
            next(err);
            if (decoded) {
                const user = getRepository(User).findOne({where:{login: decoded['login'], id: decoded['id']}});
                console.log(user);
                next();
            } else {
                res.status(400).json({error: "not authorized"});
            }
        });

    }
};

export {validation};
