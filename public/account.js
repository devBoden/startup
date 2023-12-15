function submitForm() {
    // Get values from input fields
    var value1 = document.getElementById('input1').value;
    var value2 = document.getElementById('input2').value;
    var value3 = document.getElementById('input3').value;

    // Paste values into text boxes
    document.getElementById('output1').value = value1;
    document.getElementById('output2').value = value2;
    document.getElementById('output3').value = value3;

    // Reset form if needed
    document.getElementById('myForm').reset();
}