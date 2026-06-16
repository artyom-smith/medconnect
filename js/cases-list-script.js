const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('search-input');
let currentCategory = 'all';


function filterContent () {
  const searchText = searchInput.value.toLowerCase();
  let isEmptyOutput = true;

  cards.forEach(card => {
    const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
    const cardCategory = card.dataset.category;
    const matchCategory = currentCategory === 'all' || cardCategory === currentCategory;
    const matchText = cardTitle.includes(searchText);

    if (matchCategory && matchText) {
      card.classList.remove('hidden');
      isEmptyOutput = false;
    }
    else {
      card.classList.add('hidden');
    }
  });

  if (isEmptyOutput) {
    document.getElementById('cards-list').classList.add('hidden');
    document.getElementById('no-results').classList.remove('hidden');
  }
  else {
    document.getElementById('cards-list').classList.remove('hidden');
    document.getElementById('no-results').classList.add('hidden');
  };
};


searchInput.addEventListener('input', () => {
  filterContent();
});

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active-button'));
    button.classList.add('active-button');

    currentCategory = button.dataset.filter;

    filterContent();
  });
});

