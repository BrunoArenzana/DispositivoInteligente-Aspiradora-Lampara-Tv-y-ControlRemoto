import { IConectable } from "./iConectable";

export abstract class DispositivoInteligente implements IConectable{
    
    protected marca: string;
    protected modelo: string;

    constructor(pMarca: string, pModelo: string) {
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    mostrarInfo() {
        console.log(`El dispositivo inteligente pertecene a la marca " ${this.marca} ", y su modelo es ${this.modelo}`)
    }
    
    
    conectar(): void {
        console.log(`Conectando dispositivo ${this.marca}-${this.modelo}.... Enlazado con Exito!`)
    }
    desconectar(): void {
        console.log(`Desconectando dispositivo ${this.marca}-${this.modelo}.... !`)
    }
    
    abstract funcionar(): void;
}