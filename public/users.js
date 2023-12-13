async function login() {
  // ... (your existing code for setting localStorage)

  const response = await fetch('/api/names', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({name : nameEl.value}),
  });

  // Redirect to the account page after successful login
  if (response.ok) {
    window.location.href = "account.html";
  }

  // Fetch and display names on the page
  fetchNames();
}

async function fetchNames() {
  try {
    const response = await fetch('/api/names');
    if (!response.ok) {
      throw new Error('Failed to fetch names');
    }

    const names = await response.json();
    displayNames(names);
  } catch (error) {
    console.error('Error fetching names:', error);
  }
}

function displayNames(names) {
  // Assuming you have an element with the id 'namesList' to display the names
  const namesList = document.getElementById('namesList');

  // Clear previous content
  namesList.innerHTML = '';

  // Create a list of names and append it to the namesList element
  const ul = document.createElement('ul');
  names.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });

  namesList.appendChild(ul);
}

// Call fetchNames() when the page loads to initially display names
document.addEventListener('DOMContentLoaded', fetchNames);
