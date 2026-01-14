function showNoResults(){
		alert("No Results found");
}

//Alert//
	
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
/****************************************** ALERT */
   function showNotification(message, type = 'success') {
            const container = document.getElementById('notificationContainer');
            const notification = document.createElement('div');
            
            notification.className = `notification ${type}`;
            notification.innerHTML = `
                <span>${message}</span>
                <button class="close-btn" onclick="this.closest('.notification').classList.add('exit'); setTimeout(() => this.closest('.notification').remove(), 300);">&times;</button>
            `;
            
            container.appendChild(notification);
            
            // Auto dismiss after 5 seconds
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.classList.add('exit');
                    setTimeout(() => notification.remove(), 300);
                }
            }, 5000);
        }

// Day 8: Form Input & Submit
// ================================

const usernameInput = document.getElementById("username");
const errorMsg = document.getElementById("errorMsg");
const submitBtn = document.getElementById("submitBtn");
const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

if (usernameInput && submitBtn && contactForm) {

  // Enable / disable submit button
  usernameInput.addEventListener("input", () => {
    if (usernameInput.value.trim() === "") {
      submitBtn.disabled = true;
      errorMsg.style.display = "block";
    } else {
      submitBtn.disabled = false;
      errorMsg.style.display = "none";
    }
  });
  // Prevent empty submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (usernameInput.value.trim() === "") {
      errorMsg.style.display = "block";
      submitBtn.disabled = true;
      return;
    }
 successMsg.textContent = "Form submitted successfully!";
errorMsg.style.display = "none";
usernameInput.value = "";
submitBtn.disabled = true;
    
  });
}