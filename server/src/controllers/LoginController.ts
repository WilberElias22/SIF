import { Request, Response } from 'express';


import pool from '../database';

class LoginController {

    public async list(req: Request, res: Response): Promise<void> {
        const login = await pool.query('SELECT * FROM vendedores');
        res.json(login);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const login = await pool.query('SELECT * FROM vendedores WHERE ID_Vendedor = ?', [id]);
        console.log(login.length);
        if (login.length > 0) {
            return res.json(login[0]);
        }
        res.status(404).json({ text: "El Usuario no Existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO vendedores set ?', [req.body]);
        res.json({ message: 'Usuario Guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldLogin = req.body;
        await pool.query('UPDATE vendedores set ? WHERE ID_Vendedor = ?', [req.body, id]);
        res.json({ message: "El usuario a sido Actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM vendedores WHERE ID_Vendedor = ?', [id]);
        res.json({ message: "Usuario borrado" });
    }
}

const loginController = new LoginController;
export default loginController;