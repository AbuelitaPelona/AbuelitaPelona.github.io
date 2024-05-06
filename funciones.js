//Arreglo que contiene las respuestas correctas
let correctas=[3,2,1,3,2,3,3,1,2,2,3,1,1,3,3,1,2,2,1,2];

//Arreglo para guardar la respuesta del usuario
let opcion_elegida=[];
let cantidad_correctas=0;

//Función que toma el número de pregunta y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo respuesta
    opcion_elegida[num_pregunta]=seleccionada.value;
    id="p"+num_pregunta;
  
}

//Función para comparar los arreglos y saber cuantas fueron correctas
function resultado(){
    cantidad_correctas=0;
    for(i=0; i<correctas.length; i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
   }
   respues_Iq = cantidad_correctas*10;

   if(respues_Iq==200){
    respues_Iq=130;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==190){
    respues_Iq=124;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==180){
    respues_Iq=118;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==170){
    respues_Iq=111;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==160){
    respues_Iq=105;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==150){
    respues_Iq=98;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==140){
    respues_Iq=92;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==130){
    respues_Iq=85;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==120){
    respues_Iq=79;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq==110){
    respues_Iq=72;
    document.getElementById("nivel").innerHTML=respues_Iq;
}else if (respues_Iq<100){
    respues_Iq="Discapacidad intelectual";
    document.getElementById("nivel").innerHTML=respues_Iq;
}
}



let preguntaActual = 0;
        
        function mostrarSiguiente() {
            // Oculta la pregunta actual
            document.getElementById("p" + preguntaActual).style.display = "none";
            
            // Aumenta el número de la pregunta
            preguntaActual++;
            
            // Muestra la siguiente pregunta
            if (document.getElementById("p" + preguntaActual)) {
                document.getElementById("p" + preguntaActual).style.display = "block";
            } else {
                // Si ya no hay más preguntas, muestra un mensaje
                alert("Ya no hay más preguntas.");
            }
        }
      
        
        function mostraratras() {
            // Oculta la pregunta actual
            document.getElementById("p" + preguntaActual).style.display = "none";
            
          
            // Aumenta el número de la pregunta
            preguntaActual--;
            
            // Muestra la siguiente pregunta
            if (document.getElementById("p" + preguntaActual)) {
                document.getElementById("p" + preguntaActual).style.display = "block";
            } else {
                // Si ya no hay más preguntas, muestra un mensaje
                alert("Ya no hay más preguntas.");
            }
        }