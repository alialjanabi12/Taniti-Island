const customerNeedsData = {
  restaurants: [
    {
      img: 'https://images.pexels.com/photos/8472635/pexels-photo-8472635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Seafood Paradise',
    },
    {
      img: 'https://marleyspoon.com/media/recipes/16665/main_photos/large/ID00911HERO_SesameWhiteFish_108-524bb6474a9677d58f33869224f73cff.jpg',
      name: 'Local Fish & Rice',
    },
    {
      img: 'https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'American Cuisine',
    },
    {
      img: 'images/pan.jpeg',
      name: 'Pan-Asian Fusion',
    },
  ],
  hotels: [
    {
      img: 'https://images.pexels.com/photos/5231747/pexels-photo-5231747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Beachside Hotel',
    },
    {
      img: 'https://images.pexels.com/photos/9310033/pexels-photo-9310033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Family Hotel',
    },
    {
      img: 'https://images.pexels.com/photos/2734622/pexels-photo-2734622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Luxury Villas',
    },
    {
      img: 'https://images.pexels.com/photos/5785084/pexels-photo-5785084.jpeg',
      name: 'Island Retreat',
    },
  ],
  stores: [
    {
      img: 'https://images.pexels.com/photos/28427930/pexels-photo-28427930/free-photo-of-convenience-store-shopping-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Convenience Store',
    },
    {
      img: 'https://images.pexels.com/photos/12696959/pexels-photo-12696959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Souvenir Shop',
    },
    {
      img: 'https://images.pexels.com/photos/12975053/pexels-photo-12975053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Organic Market',
    },
    {
      img: 'images/crafts.jpeg',
      name: 'Local Crafts',
    },
  ],
  entertainment: [
    {
      img: 'https://rainforestadventure.com/wp-content/uploads/2021/04/braulio-carrillo-canopy-tour.jpeg',
      name: 'Rainforest Zip-line',
    },
    {
      img: 'https://images.pexels.com/photos/30489757/pexels-photo-30489757/free-photo-of-art-enthusiast-observing-classic-painting-in-gallery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'History Museum',
    },
    {
      img: 'https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Fishing Charter',
    },
    {
      img: 'https://images.pexels.com/photos/6982443/pexels-photo-6982443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Dance Club',
    },
  ],
  sightseeing: [
    {
      img: 'https://images.pexels.com/photos/4700579/pexels-photo-4700579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Island Hiking',
    },
    {
      img: 'https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Boat Tours',
    },
    {
      img: 'https://images.pexels.com/photos/3757138/pexels-photo-3757138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Helicopter Ride',
    },
    {
      img: 'https://images.pexels.com/photos/235763/pexels-photo-235763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Taniti Volcano',
    },
  ],
  transportation: [
    {
      img: 'https://images.pexels.com/photos/7251577/pexels-photo-7251577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Airport Shuttle',
    },
    {
      img: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Car Rentals',
    },
    {
      img: 'https://images.pexels.com/photos/4671462/pexels-photo-4671462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Bicycle Rentals',
    },
    {
      img: 'https://images.pexels.com/photos/1637113/pexels-photo-1637113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Taxi',
    },
  ],
};

const gridContainer = document.getElementById('grid-container');
const filterButtons = document.querySelectorAll('.filter-buttons button');

function renderCustomerNeeds(type) {
  gridContainer.innerHTML = '';

  customerNeedsData[type].forEach((item, index) => {
    const div = document.createElement('div');
    div.classList.add('grid-item');

    if (index === 2) div.classList.add('div3');
    if (index === 3) div.classList.add('div4');

    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="info">
        <h5 class="card-text"><i class="fa-solid fa-quote-right"></i>
         ${item.name}</h5>
      </div>
    `;
    gridContainer.appendChild(div);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const type = button.getAttribute('data-filter');
    renderCustomerNeeds(type);
  });
});

renderCustomerNeeds('restaurants');
