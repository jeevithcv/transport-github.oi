function submitForm(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const transportation = document.getElementById('transportation').value;
    const date = document.getElementById('date').value;
  
    // Simulate form submission
    console.log("Form Submitted");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Transportation:", transportation);
    console.log("Date:", date);
  
    // Simulate sending an email (This needs a backend service to work properly)
    alert("Your request has been submitted. We will send more details to " + email);
  
    // Show confirmation message
    document.getElementById('responseMessage').classList.remove('hidden');
  
    // Reset the form
    document.getElementById('bookingForm').reset();
  }
  