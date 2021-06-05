import express, {NextFunction, Request, Response} from 'express';
import {User} from './user.model';
import {usersService} from './user.service';
import {MyError} from '../../common/myError';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response,) => {
    const users = await usersService.getAll();
    res.status(200).json(users.map(User.toResponse));
});


router.route('/:id').get(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.params['id']) {
        const user = await usersService.getById(req.params['id']);
        if (user) {
            res.json(User.toResponse(user));
            res.status(200).json(user);
        } else {
            const err = new MyError('User Not found', 'validation', 404 );
            next(err);
        }
    }
});

router.route('/').post(async (req: Request, res: Response) => {
    const user = new User(req.body.name, req.body.login, req.body.password);
    await usersService.postUser(user);
    res.status(201).json(User.toResponse(user));
});

router.route('/:id').put(async (req: Request, res: Response) => {
    const user = new User(
        req.body.name,
        req.body.login,
        req.body.password,
        req.params['id']
    );
    await usersService.putUser(user);
    res.status(200).json(user);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
    if (req.params['id']) {
        await usersService.deleteById(req.params['id']);
        res.status(200).send('delete user by ID successfully completed');
    }
});

export {router};
