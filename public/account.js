let Name = localStorage.getItem("userName")
console.log(Name)
document.getElementById("Name").innerText = Name

let skills = localStorage.getItem("skillsText")
console.log(skills)
let SkillsText = document.getElementById("skills")
SkillsText.innerText=skills

let occupation = localStorage.getItem("occupationText")
console.log(occupation)
let OccupationText = document.getElementById("occupation")
OccupationText.innerText=occupation

