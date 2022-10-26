import express, { Router } from 'express';

import LoginController from '../controllers/LoginController';

class LoginRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', LoginController.list);
        this.router.get('/:id', LoginController.getOne);
        this.router.post('/', LoginController.create);
        this.router.put('/:id', LoginController.update);
        this.router.delete('/:id', LoginController.delete);
    }

}

export default new LoginRoutes().router;