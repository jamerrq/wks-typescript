import { Response, Request, Router } from 'express';
import db from '../db';
const { User } = db.models;
import { UserAttributes } from '../models/types';


const router = Router();

router.get('/', (req: Request, res: Response) => {

    User.findAll().then((users) => {
        res.status(200).send((users).map(user => {
            const userData = user.toJSON() as UserAttributes;
            return {
                id: userData.id,
                fullname: userData.fullname,
                gender: userData.gender,
                picture: userData.picture,
                nat: userData.nat,
                email: userData.email,
            };
        }));
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.post('/', (req: Request, res: Response) => {

    const user = req.body;
    User.create(user).then((userCreated) => {
        return res.status(201).send(userCreated);
    }).catch((err) => {
        console.error(err);
        return res.sendStatus(500);
    });

});

router.put('/:id', (req: Request, res: Response) => {

    const id = req.params.id;
    const user = req.body;
    User.update(user, { where: { id } }).then((userUpdated) => {
        res.sendStatus(200).send(userUpdated);
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });

});

router.delete('/:id', async (req: Request, res: Response) => {

    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            // send user back
            return res.status(200).send(user);
        } else {
            return res.sendStatus(404);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }

});

export default router;
