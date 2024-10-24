//arreglo
/*
let array = ["dato1",1,Boolean];
console.log("tamaño del array: " + array.length);
array.push("Nuevo Valor");
console.log(array[3]);
console.log("nuevo tamaño del array: " + array.length);
console.log(array[3]);
*/
//una iteracion que haga la tabla del 5 hasta 6 espacios
/*
let tabla2 = [];
for(let i=0 ; i<10 ; i++ ){
    tabla2.push(5*(i+1));
} 
for(let i=0;i<tabla2.length;i++){
    console.log((i+1)+"*"+"5"+"="+tabla2[i]);
}
console.log("FIN DEL ARREGLO VALOR DE LA POSICIION " + tabla2.length+" = "+tabla2[tabla2.length -1]);
*/
//ELIMINAR ELEMENTOS DE UN ARRAY
/*
let array =["dato1","dato2","dato3"];
array.push("dato4");
console.log(array[3]);
//elimira
array.splice(1,1);
console.log(array);
*/

Document.title = 'Iniciar Sesión';

//contenedor principla
const container = document.createElement('div');
container.style.margin = '20px';

//crear titulo
const title = document.createElement('h2');
title.textContent = 'Ingrese su tarea';
container.appendChild(title);

//crear el formulario
const form = document.createElement('form');
const tareainput = document.createElement('input');
tareainput.placeholder ='Ingrese su tarea';
tareainput.type = 'text';
tareainput.required = true;
form.appendChild(tareainput);



const sumbitbutton = document.createElement('button');
sumbitbutton.textContent = 'Agregar tarea';
form.appendChild(sumbitbutton);

//Mensaje de respuesta
const mensaje = document.createElement('p');
container.appendChild(form);
container.appendChild(mensaje);
document.body.appendChild(container);
form.addEventListener('submit',(event) => {
    event.preventDefault();
    
})

    