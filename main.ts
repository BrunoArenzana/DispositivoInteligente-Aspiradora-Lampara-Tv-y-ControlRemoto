import { IConectable } from "./iConectable";
import { DispositivoInteligente } from "./dispositivoInteligente";
import { Televisor } from "./televisor";
import { AspiradoraRobot } from "./aspiradoraRobot";
import { ControlRemoto } from "./controlRemoto";
import { LamparaInteligente } from "./lamparaInteligente";


//instancio el contro remoto que va componer el televisor
const controlRemoto = new ControlRemoto;
//instancio el televisor compuesto por el contro de arriba
const televisor1 = new Televisor("Sanyo", "Shine", controlRemoto);
//instancio una lampara inteligente y una aspiradora robot
const lampara1 = new LamparaInteligente("LG", "Mod15421");
const aspiradora1 = new AspiradoraRobot("CCleaner", "Silence 1.1");


const dispositivos: DispositivoInteligente[] = [televisor1, lampara1, aspiradora1]

dispositivos.forEach((dispositivo) => {
    console.log("----------------------")
    dispositivo.conectar(); // dentro del metodo conectar en la clase televisor, llamo al metodo encender del control remoto, por lo tanto enciende y conecta juntos
    dispositivo.mostrarInfo();
    dispositivo.funcionar();
    dispositivo.desconectar();// dentro del metodo desconectar en la clase televisor, llamo al metodo apagar del control remoto, por lo tanto apaga y desconecta juntos
    
});
