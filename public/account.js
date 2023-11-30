let Name = localStorage.getItem("userName")
console.log(Name)
let Username = document.getElementById("Name")
Username.innerText=Name

let skills = localStorage.getItem("skillsText")
console.log(skills)
let SkillsText = document.getElementById("skills")
SkillsText.innerText=skills

let occupation = localStorage.getItem("occupationText")
console.log(occupation)
let OccupationText = document.getElementById("occupation")
OccupationText.innerText=occupation