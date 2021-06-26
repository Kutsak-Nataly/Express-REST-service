import express, {NextFunction, Request, Response} from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {User} from './user.model'
import {usersService} from './user.service';
import {MyError} from '../../error_handler/myError';
import {CRYPT_SALT, JWT_SECRET_KEY} from '../../common/config';

const router = express.Router();

router.route('/add-user').post(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user: User = req.body;
        bcrypt.hash(user.password, CRYPT_SALT, (err, hash) => {
            next(err);
            user.password = hash;
        });
        await usersService.postUser(user);
        res.status(201).json(User.toResponse(user));
    } catch (err) {
        next(err);
    }
});

router.route(`/signin`).post(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.params['password'] && req.params['login']) {
        try {
            const user = await usersService.getByLogin(req.params['login']);
            if (user) {
                bcrypt.compare(req.params['password'], user.password, (err, result) => {
                    next(err);
                    if (result) {
                        jwt.sign({login: user.login, id: user.id}, JWT_SECRET_KEY, {
                            algorithm: 'RS256',
                            expiresIn: '1h'
                        }, (error, accessToken) => {
                            next(error);
                            if (accessToken) {
                                res.status(201).json({
                                    token: accessToken,
                                    user: User.toResponse(user),
                                    auth: true,
                                    message: "Successfully authenticated",
                                });
                            }
                        });
                    }
                });
            }
        } catch (err) {
            next(err);
        }
    } else {
        const err = new MyError('Bad Request login and/or password', 'validation', 400);
        next(err);
    }
});


export {router};
