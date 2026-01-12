function showNoResults(){
		alert("No Results found");
}

// Reusable card data structure
const cardData = [
    {
        image: "pic1.jpg",
        title: 'Designing',
        description: "Design Layout is the structural arrangement and organization of all visual elements on a web page  "
    },
    {
        image: "pic2.jpg",
        title: 'UI/UX',
        description: 'Professionals combine both to build intuitive, beautiful, and functional digital products like apps and websites.     '
    },
    {
        image: "pic3.jpg",
        title: 'Web Design',
        description: " It's about planning and arranging content for clarity and visual appeal"
    }
];

function createCard(data) {
    const card = document.createElement('div');
    card.className = 'card';
    
    card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="card-image">
        <div class="card-content">
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <button class="card-button">Learn More</button>
        </div>
    `;
    
    return card;
}

function renderCards() {
    const grid = document.getElementById('cardsGrid');
    grid.innerHTML = '';
    
    cardData.forEach(data => {
        const card = createCard(data);
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);


// Initialize when page loads
document.addEventListener('DOMContentLoaded', renderCards);


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
