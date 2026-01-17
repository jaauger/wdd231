
const url = 'data/members.json';

const headers = document.querySelector('.list-headers');
const cards = document.querySelector('.cards');
const membershipMap = {
  1: { label: 'Member', class: 'member' },
  2: { label: 'Silver', class: 'silver' },
  3: { label: 'Gold', class: 'gold' }
};

async function getBusinessData() {
  const response = await fetch(url); // request
  const data = await response.json(); // parse the JSON data
  console.table(data.businesses); // temp output test of data response
  displaybusinesss(data.businesses); 
}

getBusinessData();

const displaybusinesss = (businesses) => {
  businesses.forEach((business) => {
    const card = document.createElement('section');
    card.classList.add('card');

    const name = document.createElement('h2');
    name.textContent = business.name;
    if (membershipMap[business.member]) {
      const badge = document.createElement('span');
      badge.classList.add('badge', membershipMap[business.member].class);
      badge.textContent = membershipMap[business.member].label;
      name.appendChild(badge);
    }
    const website = document.createElement('a');
    const phone = document.createElement('p');
    const address = document.createElement('p');
    const busLogo = document.createElement('img');

    

    if (business.website) {
      website.href = `https://${business.website}`;
      website.textContent = business.website;
      website.target = '_blank';
    }

    phone.textContent = business.phone;
    address.textContent = business.address;

    busLogo.src = business.imageurl ?? 'images/placeholder.png';
    busLogo.alt = `Logo of ${business.name}`;
    busLogo.loading = 'lazy';

    card.appendChild(busLogo);
    card.appendChild(name);
    if (business.website) card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(address);

    cards.appendChild(card);
  });
};

document.querySelector('#cardView').addEventListener('click', () => {
  cards.classList.remove('list');
});

document.querySelector('#listView').addEventListener('click', () => {
  cards.classList.add('list');
});

const cardBtn = document.querySelector('#cardView');
const listBtn = document.querySelector('#listView');

cardBtn.addEventListener('click', () => {
  cards.classList.remove('list');
  headers.style.display = 'none';
  cardBtn.classList.add('active');
  listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  cards.classList.add('list');
  headers.style.display = 'grid';
  listBtn.classList.add('active');
  cardBtn.classList.remove('active');
});

