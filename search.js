const userCardTemplate = document.querySelector("[data-user-template]")

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data => {
        const card = userCardTemplate.textContent.cloneNode(true)
    })
    console.log(card)