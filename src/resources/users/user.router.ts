import express, {NextFunction, Request, Response} from 'express';
import {User} from './user.model';
import {usersService} from './user.service';
import {MyError} from '../../error_handler/myError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response, next: NextFunction) => {
    const users = await usersService.getAll();
    if (users) {
        res.status(200).json(users.map(User.toResponse));
    } else {
        const err = new MyError('Users Not found', 'error', 404);
        next(err);
    }
});


router.route('/:id').get(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.params['id']) {
        const user = await usersService.getById(req.params['id']);
        if (user) {
            res.json(User.toResponse(user));
            res.status(200).json(user);
        } else {
            const err = new MyError('User Not found', 'error', 404);
            next(err);
        }
    }
});

router.route('/').post(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = new User(req.body.name, req.body.login, req.body.password);
    if (user) {
        await usersService.postUser(user);
        res.status(201).json(User.toResponse(user));
    } else {
        const err = new MyError('Bad Request for post user', 'validation', 400);
        next(err);
    }
});

router.route('/:id').put(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = new User(
        req.body.name,
        req.body.login,
        req.body.password,
        req.params['id']
    );
    if (user) {
        await usersService.putUser(user);
        res.status(200).json(user);
    } else {
        const err = new MyError('Bad Request for put user', 'validation', 400);
        next(err);
    }
});

router.route('/:id').delete(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.params['id']) {
        await usersService.deleteById(req.params['id']);
        res.status(200).send('delete user by ID successfully completed');
    } else {
        const err = new MyError('Bad Request parameter for delete user', 'validation', 400);
        next(err);
    }
});

export {router};
