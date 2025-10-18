export class Connection {
    public id: string;
    public status: string = 'disconnected';

    constructor() {
        this.id = `conn_${Math.random().toString(36).substring(2, 9)}`;
        this.connect();
    }

    public connect(): void {
        this.status = 'connected';
        console.log(`🔌 Conexión ${this.id} establecida.`);
    }

    public disconnect(): void {
        this.status = 'disconnected';
        console.log(`🔌 Conexión ${this.id} cerrada.`);
    }

    public sendData(data: string): void {
        if (this.status === 'connected') {
            console.log(`📡 Enviando datos vía ${this.id}: "${data}"`);
        } else {
            console.error(`❌ No se pueden enviar datos. La conexión ${this.id} no está activa.`);
        }
    }
}