"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = __importDefault(require("../controllers/LoginController"));
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LoginController_1.default.list);
        this.router.get('/:id', LoginController_1.default.getOne);
        this.router.post('/', LoginController_1.default.create);
        this.router.put('/:id', LoginController_1.default.update);
        this.router.delete('/:id', LoginController_1.default.delete);
    }
}
exports.default = new LoginRoutes().router;
