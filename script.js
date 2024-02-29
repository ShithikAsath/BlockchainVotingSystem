document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationForm').addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
        });
  
        if (!response.ok) {
          const errorMessage = await response.text();
          throw new Error(errorMessage || 'Registration failed');
        }
  
        alert('User registered successfully');
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Error registering user: ' + error.message);
      }
    });
  });
  