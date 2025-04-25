import { DispositivoInteligente } from "./dispositivoInteligente";

export class LamparaInteligente extends DispositivoInteligente{

    funcionar(): void {
        console.log(`Funcionamiento Correcto, Los Leds funcionan al 100% de su capacidad`);
    }
}