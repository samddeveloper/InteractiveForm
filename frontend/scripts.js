document.addEventListener("DOMContentLoaded", function() {
  VANTA.FOG({
      el: "#vanta-container",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00
  });
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const first_name = document.getElementById('first_name').value;
  const last_name = document.getElementById('last_name').value;
  const email = document.getElementById('email').value;

  if (!isValidEmail(email)) {
      alert('Ogiltig e-postadress. Vänligen fyll i en giltig e-postadress.');
      return;
  }

  fetch('http://localhost:3000/customers', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ first_name, last_name, email })
  })
  .then(response => response.json())
  .then(data => {
      const messageElement = document.getElementById('message');
      if (data.success) {
          messageElement.innerHTML = 'Tack för att du prenumererar! <span class="checkmark">✔️</span>';
          document.getElementById('first_name').value = '';
          document.getElementById('last_name').value = '';
          document.getElementById('email').value = '';
      } else {
          messageElement.textContent = 'Något gick fel. Försök igen senare.';
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

