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

const userpaswordlable = document.createElement('label');
const userpaswordinput = document.createElement('input');
userpaswordlable.textContent = 'Contraseña del Usuario';
userpaswordinput.type = 'text';
userpaswordinput.required = true;
form.appendChild(userpaswordinput);
form.appendChild(userpaswordlabel);
