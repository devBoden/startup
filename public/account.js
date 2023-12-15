
function saveName() {
    var inputValue = document.getElementById(inputId).value;
    var fieldName = inputId.replace('name-input-', '')

    console.log('Field Name;', fieldName)
    console.log('Input Value:', inputValue)

    alert('Data saved: ' + inputValue + ' for' + fieldName);
}

function saveData(inputId) {
    var inputValue = document.getElementById(inputId).value;
    var fieldName = inputId.replace('name-input-', '');
  
    // Create an object to hold the data you want to save
    var dataToSave = {
      field: fieldName,
      value: inputValue,
    };}

    fetch('/api/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSave),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(responseData => {
          // Handle the response from the server if needed
          console.log('Server response:', responseData);
          alert('Data saved successfully!');
        })
        .catch(error => {
          // Handle errors that occurred during the fetch
          console.error('Error during fetch:', error);
          alert('Error saving data. Please try again.');
        });