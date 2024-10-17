Document.title = 'Iniciar Sesión';

//contenedor principla
const container = document.createElement('div');
container.style.margin = '20px';

//crear titulo
const title = document.createElement('h2');
title.textContent = 'Inicar sesión';
container.appendChild(title);

//crear el formulario
const form = document.createElement('form');
//crear un campo denombre de usuario
const usernamelable = document.createElement('label');
usernamelable.textContent = 'Nombre de Usuario';
const usernameinput = document.createElement('input');
usernameinput.type = 'text';
usernameinput.required = true;
form.appendChild(usernamelable);
form.appendChild(usernameinput);

const userpaswordlabel = document.createElement('label');
const userpaswordinput = document.createElement('input');
userpaswordlabel.textContent = 'Contraseña';
userpaswordinput.type = 'password';
userpaswordinput.required = true;
form.appendChild(userpaswordinput);
form.appendChild(userpaswordlabel);

const sumbitbutton = document.createElement('button');
sumbitbutton.textContent = 'Iniciar Sesión';
form.appendChild(sumbitbutton);

//Mensaje de respuesta
const mensaje = document.createElement('p');
container.appendChild(form);
container.appendChild(mensaje);

//contenedor de nuestro boddy
document.body.appendChild(container);

//datos de inicio de sesion predefinida

const validaUser = 'Juanito';
const validaPassword = '12345';

///validar el suaurio y el password
form.addEventListener('submit',(event) => {
    event.preventDefault();
    //validar el nbombre y el pass
    if(usernameinput.value === validaUser && userpaswordinput.value === validaPassword){
        mensaje.textContent = 'Hola';
        mensaje.style.color = 'green';
    }else{
        mensaje.textContent = 'Los datos solicitados estan incorrectois';
        mensaje.style.color = 'Red';
    }

    //limpiar los unputs
    usernameinput.value = '';
    userpaswordinput.value = '';
})
