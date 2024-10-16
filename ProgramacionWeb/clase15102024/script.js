/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');
}

//llamada al afuncion
hello();
*/
//retorno de una funcion
/*
function hello(){
    return 'hola clase';
}
const result = hello();
console.log(result);
*/

//funcion que retorna otra funcion
/*
function hello(){
    return function(){
        return 'hola soy la funcion 2';
    }
}
console.log(hello()());
*/
/*
function add(x){

    console.log(x);
}

add(5);
*/
//funcion con parametros
/*
function add(x,y){
    console.log(x+y);
}

add(5,7);
*/
/*
function add(x,y){
    if (y===undefined){
        y=0
    }
    console.log(x+y);
}
add(5,undefined);
*/
//ojetos
const user = {
    nombre:'Alvarado',
    apellidom:'reyes',
    apellidop:'Quiroz',
    edad: 91,
    direccion:{
        calle:'Nicolas BRavo',
        numero: 568,
        colonia: 'nacarvarte',
        delegacion: 'Los Pinos',
    },
    amigos:['Raul','Maria'],
    activo:true
}
//console nombre appellidoP apellidoM
//alert activo;
//consola edad
//alert calle colonia y delegacion
//consola amigos
function nombre(){
    console.log(user.nombre,user.apellidop,user.apellidom);
}
function alerta1(){
    if(activo=true){
        alert('esta activo');
    }
}

function consola2(){
    console.log(user.edad);
}
function alerta2(){
    alert(user.direccion.calle + user.direccion.colonia)
}
function consola3(){
    console.log(user.amigos[0] + '  ,  ' + user.amigos[1]);
}

alerta1();
alerta2();
nombre();
consola2();
consola3();


