function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "account.html"
    window.location.href = "schedule.html"

    const skillsinputEl = document.querySelector("#skillsinput");
    localStorage.setItem("skillsText", skillsinputEl.value);
    window.location.href = "account.html"

    const occupationInputEl = document.querySelector("#occupationInput");
    localStorage.setItem("occupationText", occupationInputEl.value);
    window.location.href = "account.html"
}