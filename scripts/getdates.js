
const now = new Date();

document.getElementById("currentyear").innerHTML = now.getFullYear();
document.getElementById("lastmodified").innerHTML = `Last Modified: ${now.getMonth()+1}/${now.getDate()}/${now.getFullYear()}  ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
