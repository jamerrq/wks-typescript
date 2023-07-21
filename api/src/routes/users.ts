import { Response, Request, Router } from 'express';
import { User } from '../models/User';

const router = Router();

router.get('/', (req: Request, res: Response) => {

    User.findAll().then((users) => {
        res.send(users);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.post('/', (req: Request, res: Response) => {

    const user = req.body;
    User.create(user).then((userCreated) => {
        res.send(userCreated);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

export default router;
