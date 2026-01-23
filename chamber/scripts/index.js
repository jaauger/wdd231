
const url = 'data/members.json';

const cards = document.querySelector('.cards');

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();   
  displaybusinesss(data.businesses); 
}

getBusinessData();

function getMembershipLevel(num) {
  switch (num) {
    case 3:
      return 'Gold';
    case 2:
      return 'Silver';
    case 1:
      return 'Bronze';
    default:
      return 'Member';
  }
}

const displaybusinesss = (businesses) => {
  const randomThree = [...businesses]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  randomThree.forEach((business) => {
    const card = document.createElement('section');
    card.classList.add('card');

    /* ---------- Header ---------- */
    const header = document.createElement('div');
    header.classList.add('card-header');

    const name = document.createElement('h2');
    name.textContent = business.name;

    /* === MEMBERSHIP BADGE === */
    const badge = document.createElement('span');
    badge.classList.add('membership-badge');

    const level = getMembershipLevel(business.member);
    badge.textContent = level;
    badge.classList.add(level.toLowerCase());

    header.appendChild(name);
    header.appendChild(badge);

    /* ---------- Content ---------- */
    const content = document.createElement('div');
    content.classList.add('card-content');

    /* Logo */
    const logo = document.createElement('img');
    logo.src = business.imageurl ?? 'images/placeholder.png';
    logo.alt = `Logo of ${business.name}`;
    logo.loading = 'lazy';

    /* Details */
    const details = document.createElement('div');
    details.classList.add('card-details');

    if (business.email) {
      const email = document.createElement('p');
      email.innerHTML = `<strong>EMAIL:</strong> ${business.email}`;
      details.appendChild(email);
    }

    if (business.phone) {
      const phone = document.createElement('p');
      phone.innerHTML = `<strong>PHONE:</strong> ${business.phone}`;
      details.appendChild(phone);
    }

    if (business.website) {
      const website = document.createElement('a');
      website.href = `https://${business.website}`;
      website.textContent = business.website;
      website.target = '_blank';

      const url = document.createElement('p');
      url.innerHTML = `<strong>URL:</strong> `;
      url.appendChild(website);
      details.appendChild(url);
    }

    content.appendChild(logo);
    content.appendChild(details);

    card.appendChild(header);
    card.appendChild(content);
    cards.appendChild(card);
  });
};


    
