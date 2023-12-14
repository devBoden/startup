document.addEventListener('DOMContentLoaded', fetchUserData);

async function fetchUserData() {
    try {
        const response = await fetch('/api/users');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }

        const users = await response.json();
        if (users.length > 0) {
            // Assuming you have a way to let the user choose their account, for example, using a dropdown
            const selectedUserId = promptUserForAccount(users);

            const user = users.find(u => u._id === selectedUserId);
            if (user) {
                console.log('Selected user data from MongoDB:', user);

                document.getElementById("Name").innerText = user.name;
                document.getElementById("skills").innerText = user.skills;
                document.getElementById("occupation").innerText = user.occupation;
            } else {
                console.log('User not found in MongoDB.');
            }
        } else {
            console.log('No users found in MongoDB.');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
function promptUserForAccount(users) {
    // Simple prompt for the user to select their account
    const userNames = users.map(u => u.name).join('\n');
    const selectedUserName = prompt(`Select your account:\n${userNames}`);
    
    // Find the user ID based on the selected user name
    const selectedUser = users.find(u => u.name === selectedUserName);
    return selectedUser ? selectedUser._id : null;
}



//let Name = localStorage.getItem("userName")
//console.log(Name)
//document.getElementById("Name").innerText = Name

//let skills = localStorage.getItem("skillsText")
//console.log(skills)
//let SkillsText = document.getElementById("skills")
//SkillsText.innerText=skills

//let occupation = localStorage.getItem("occupationText")
//console.log(occupation)
//let OccupationText = document.getElementById("occupation")
//OccupationText.innerText=occupation

