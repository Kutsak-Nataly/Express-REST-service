import express, {Request, Response} from 'express';
import {getReasonPhrase, StatusCodes} from 'http-status-codes'
import {User} from './user.model';
import {usersService} from './user.service';

const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
    const users = await usersService.getAll();
    res.status(StatusCodes.OK).json(users.map(User.toResponse));
});

router.route('/:id').get(async (req: Request, res: Response) => {
    if (req.params['id']) {
        const user = await usersService.getById(req.params['id']);
        if (user) {
            res.json(User.toResponse(user));
            res.status(StatusCodes.OK).json(user);
        } else {
            res.status(StatusCodes.NOT_FOUND).json({message: getReasonPhrase(StatusCodes.NOT_FOUND)});
        }
    }
});

router.route('/').post(async (req: Request, res: Response) => {
    const user = new User(req.body.name, req.body.login, req.body.password);
    await usersService.postUser(user);
    res.status(StatusCodes.CREATED).json(User.toResponse(user));
});

router.route('/:id').put(async (req: Request, res: Response) => {
    const user = new User(
        req.body.name,
        req.body.login,
        req.body.password,
        req.params['id']
    );
    await usersService.putUser(user);
    res.status(StatusCodes.OK).json(user);
});

router.route('/:id').delete(async (req: Request, res: Response) => {
    if (req.params['id']) {
        await usersService.deleteById(req.params['id']);
        res.status(StatusCodes.OK).send('delete user by ID successfully completed');
    }
});

export {router};
