import express, {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import {User} from './user.model';
import {usersService} from './user.service';
import {MyError} from '../../error_handler/myError';
import {JWT_SECRET_KEY} from '../../common/config';

const router = express.Router();

// router.route('/').post(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//
//     const user: User = req.body;
//     const salt = bcrypt.genSaltSync(+CRYPT_SALT);
//     const hash = bcrypt.hashSync(user.password, salt);
//     user.password = hash;
//     usersService.postUser(user)
//         .then(userAdd => {
//             const token = jwt.sign({login: user.login, id: user.id}, JWT_SECRET_KEY, {expiresIn: 60 * 60 * 24});
//             res.status(201).json({token, user: User.toResponse(userAdd)});
//         })
//         .catch(err => next(err));
// });
router.route('/').post(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.body.password && req.body.login) {
        usersService.getByLogin(req.body.login)
            .then(user => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password)
                        .then(result => {
                            if (!result) {
                                const error = new MyError('User not found. Bad password', 'error', 403);
                                next(error);
                            } else {
                                const token = jwt.sign({
                                    login: user.login,
                                    id: user.id
                                }, JWT_SECRET_KEY, {expiresIn: 60 * 60 * 24});
                                res.status(201).json({token, user: User.toResponse(user)});
                            }
                        })
                        .catch(() => {
                            const err = new MyError('User not found. Password do not match', 'error', 403);
                            next(err);
                        });
                } else {
                    const err = new MyError('User not found', 'error', 403);
                    next(err);
                }
            })
            .catch(err => {
                const error = new MyError(`User not found. ${err}`, 'error', 403);
                next(error);
            });
    } else {
        const err = new MyError('Bad Request login and/or password', 'validation', 400);
        next(err);
    }
});

export {router};
