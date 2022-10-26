"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class FacturaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Facturas'));
    }
}
const facturaRoutes = new FacturaRoutes();
exports.default = facturaRoutes.router;
