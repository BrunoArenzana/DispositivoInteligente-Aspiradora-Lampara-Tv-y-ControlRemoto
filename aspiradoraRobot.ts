import { DispositivoInteligente } from "./dispositivoInteligente";

export class AspiradoraRobot extends DispositivoInteligente{

    funcionar(): void {
        console.log(`Funcionamiento Correcto, la Aspiradora tiene su Bateria en optimo estado`);
    }
}