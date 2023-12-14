async function login() {
  // ... (your existing code for setting localStorage)

  const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: nameEl.value }),
  });

  // Redirect to the account page after successful login
  if (response.ok) {
      window.location.href = "account.html";
  }

  // Fetch and display users on the page
  fetchUsers();
}

async function fetchUsers() {
  try {
      const response = await fetch('/api/users');
      if (!response.ok) {
          throw new Error('Failed to fetch users');
      }

      const users = await response.json();
      displayUsers(users);
  } catch (error) {
      console.error('Error fetching users:', error);
  }
}

function displayUsers(users) {
  // Assuming you have an element with the id 'usersList' to display the users
  const usersList = document.getElementById('usersList');

  // Clear previous content
  usersList.innerHTML = '';

  // Create a list of users and append it to the usersList element
  const ul = document.createElement('ul');
  users.forEach((user) => {
      const li = document.createElement('li');
      li.textContent = `Name: ${user.name}, Skills: ${user.skills}, Occupation: ${user.occupation}`;
      ul.appendChild(li);
  });

  usersList.appendChild(ul);
}

// Call fetchUsers() when the page loads to initially display users
document.addEventListener('DOMContentLoaded', fetchUsers);
