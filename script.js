document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
    // Get form values
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('email').value;
   
    // Perform validation (you can add your own validation logic here)
    if (name === '' || contactNumber === '' || address === '' || email === '') {
      alert('Please fill in all fields');
      return;
    }
   
    // Display success message
    alert('Form submitted successfully');
   
    // Optionally, you can reset the form fields after submission
    document.getElementById('contactForm').reset();
  });