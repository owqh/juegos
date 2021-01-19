//Definiendo los valores para las variables
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

//funcion que obtiene una opcion de forma aleatoria
function opcionMaquina(){
    var opciones = ["piedra", "papel", "tijera"];
    //Math.random() * (max - min); maximo excluido; tambien puede ser con opciones.length
    var opcion = Math.floor(Math.random() * (4 - 1));
    return opciones[opcion];
};

//Funcion para jugar piedra papel y tijera
function jugar (opcionJugador){
    var maquina = opcionMaquina(); //Escoge una opcion al azar 
    var mensaje;
    
    if(maquina != opcionJugador){ //Evalua si son iguales las respuestas
        if( (maquina === piedra && opcionJugador === tijera) || 
            (maquina === tijera && opcionJugador === papel) || 
            (maquina === papel && opcionJugador === piedra) ){
            mensaje = "Gana la maquina con: "+maquina +" Opcion del jugador: "+opcionJugador;
            return console.log(mensaje);
        }else{
            mensaje = "Gana el jugador con: "+opcionJugador+ " Opcion de la maquina: "+maquina;
            return console.log(mensaje);
        }
    }else{
        mensaje = "Ohh! parece ser un empate";
        return console.log(mensaje);
    }
};