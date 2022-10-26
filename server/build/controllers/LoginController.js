"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class LoginController {
    async list(req, res) {
        const login = await database_1.default.query('SELECT * FROM vendedores');
        res.json(login);
    }
    async getOne(req, res) {
        const { id } = req.params;
        const login = await database_1.default.query('SELECT * FROM vendedores WHERE ID_Vendedor = ?', [id]);
        console.log(login.length);
        if (login.length > 0) {
            return res.json(login[0]);
        }
        res.status(404).json({ text: "El Usuario no Existe" });
    }
    async create(req, res) {
        const result = await database_1.default.query('INSERT INTO vendedores set ?', [req.body]);
        res.json({ message: 'Usuario Guardado' });
    }
    async update(req, res) {
        const { id } = req.params;
        const oldLogin = req.body;
        await database_1.default.query('UPDATE vendedores set ? WHERE ID_Vendedor = ?', [req.body, id]);
        res.json({ message: "El usuario a sido Actualizado" });
    }
    async delete(req, res) {
        const { id } = req.params;
        await database_1.default.query('DELETE FROM vendedores WHERE ID_Vendedor = ?', [id]);
        res.json({ message: "Usuario borrado" });
    }
}
const loginController = new LoginController;
exports.default = loginController;
