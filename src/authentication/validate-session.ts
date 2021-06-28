import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {JWT_SECRET_KEY} from '../common/config'
import {usersService} from '../resources/users/user.service';
import {getToken} from './utilities';

const validation = (req: Request, res: Response, next: NextFunction): void => {
    const token = getToken(req.headers.authorization);
    if (!token) res.status(401).json({auth: false, message: "No token provided"});
    else {
        jwt.verify(token, JWT_SECRET_KEY, (_err, decoded) => {
            if (decoded) {
                usersService.getById(decoded['userId']).then().catch(err => next(err));
                next();
            } else {
                res.status(408).send({error: "not authorized"});
            }
        });
    }
};

// const validation = (req: Request, res: Response, next: NextFunction): void => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         if (!token) {
//             res.status(401).json({auth: false, message: "No token provided"});
//         } else {
//             jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
//                 if (decoded) {
//                     getRepository(User).findOne({where: {id: decoded['id'], login: decoded['login']}})
//                         .then(user => {
//                                 console.log(`user: ${user}`);
//                                 next();
//                             },
//                             () => {
//                                 res.status(401).send({error: "not authorized"});
//                             });
//                 } else {
//                     res.status(408).json({error: "not authorized"});
//                 }
//                 next(err);
//             });
//         }
//     }
// };

export {validation};
