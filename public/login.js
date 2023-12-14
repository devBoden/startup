async function login() {
  const nameEl = document.querySelector("#name");
  const skillsInputEl = document.querySelector("#skillsinput");
  const occupationInputEl = document.querySelector("#occupationInput");

  const user = {
      name: nameEl.value,
      skills: skillsInputEl.value,
      occupation: occupationInputEl.value,
  };

  localStorage.setItem("userName", user.name);
  localStorage.setItem("skillsText", user.skills);
  localStorage.setItem("occupationText", user.occupation);

  const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
  });

  if (response.ok) {
      window.location.href = "account.html";
  }
}


function displayQuote(data) {
  fetch('https://api.quotable.io/random')
  .then((response) => response.json())
  .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
  });
}

displayQuote();