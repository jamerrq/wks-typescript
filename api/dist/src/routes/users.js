"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const { User } = db_1.default.models;
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    User.findAll().then((users) => {
        res.status(200).send((users).map(user => {
            const userData = user.toJSON();
            return {
                id: userData.id,
                name: userData.name,
                lastName: userData.lastName,
            };
        }));
    }).catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
});
router.post('/', (req, res) => {
    const user = req.body;
    User.create(user).then((userCreated) => {
        return res.status(201).send(userCreated);
    }).catch((err) => {
        console.error(err);
        return res.sendStatus(500);
    });
});
// router.put('/:id', (req: Request, res: Response) => {
//     const id = req.params.id;
//     const user = req.body;
//     User.update(user, { where: { id } }).then((userUpdated) => {
//         res.sendStatus(200).send(userUpdated);
//     }).catch((err) => {
//         console.error(err);
//         res.sendStatus(500);
//     });
// });
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield User.findByPk(id);
        if (user) {
            yield user.destroy();
            // send user back
            res.status(200).send(user);
        }
        else {
            res.sendStatus(404);
        }
    }
    catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}));
exports.default = router;
//# sourceMappingURL=users.js.map