
const params = new URLSearchParams(window.location.search);

console.log(params.get('timestamp'));

//const timestamp = Date();
//console.log(timestamp);

const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const orgTitle = document.querySelector('#organization-title');
const email = document.querySelector('#email');
const mobileNum = document.querySelector('#mobile-number');
const orgName = document.querySelector('#organization-name');
const rating = document.querySelector('#rating');
const desc = document.querySelector('#description');
const timestmp = document.querySelector('#time');

firstName.innerHTML = params.get('first-name');
lastName.innerHTML = params.get('last-name');
orgTitle.innerHTML = params.get('organization-title');
email.innerHTML = params.get('email');
mobileNum.innerHTML = params.get('mobile-number');
orgName.innerHTML = params.get('organization-name');
rating.innerHTML = params.get('rating');
desc.innerHTML = params.get('description');
timestmp.innerHTML = params.get('timestamp');






