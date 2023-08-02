import { Response, Request, Router } from 'express';
import db from '../db';
const { User } = db.models;

const router = Router();

router.get('/', (req: Request, res: Response) => {

    User.findAll().then((users) => {
        res.status(200).send(users);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.post('/', (req: Request, res: Response) => {

    const user = req.body;
    User.create(user).then((userCreated) => {
        res.status(201).send(userCreated);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

export default router;
