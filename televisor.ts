import { ControlRemoto } from "./controlRemoto";
import { DispositivoInteligente } from "./dispositivoInteligente";

export class Televisor extends DispositivoInteligente {
    private controlRemoto: ControlRemoto;

    constructor(pMarca:string, pModelo:string, pControl:ControlRemoto) {
        super(pMarca, pModelo);
        this.controlRemoto = pControl;
    }

    conectar(): void {
        console.log("Conectando con el control")
        this.controlRemoto.encender();
        console.log(`el televisor ${this.marca} está conectado.`);
    }

    funcionar(): void {
       
        console.log(`el televisor ${this.marca} está funcionando.`);
    }

    mostrarInfo(): void {
        console.log(`Televisor : Información del dispositivo: ${this.marca} y el modelo es ${this.modelo}`);
    }

    desconectar(): void {
        this.controlRemoto.apagar();
        console.log("Desconectando con el control")
        console.log(`El televisor ${this.marca} está desconectado.`);
    }
}

