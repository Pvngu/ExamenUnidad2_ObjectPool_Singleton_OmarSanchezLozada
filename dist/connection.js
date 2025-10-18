"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
class Connection {
    constructor() {
        this.status = 'disconnected';
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.connect();
    }
    connect() {
        this.status = 'connected';
        console.log(`🔌 Conexión ${this.id} establecida.`);
    }
    disconnect() {
        this.status = 'disconnected';
        console.log(`🔌 Conexión ${this.id} cerrada.`);
    }
    sendData(data) {
        if (this.status === 'connected') {
            console.log(`📡 Enviando datos vía ${this.id}: "${data}"`);
        }
        else {
            console.error(`❌ No se pueden enviar datos. La conexión ${this.id} no está activa.`);
        }
    }
}
exports.Connection = Connection;
