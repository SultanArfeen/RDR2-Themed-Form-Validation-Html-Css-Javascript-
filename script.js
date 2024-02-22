// Function to display error message
function showError(element, message) {
  const errorElement = element.nextElementSibling;
  errorElement.textContent = message;
  errorElement.classList.add('error');
}

// Function to remove error message
function clearError(element) {
  const errorElement = element.nextElementSibling;
  errorElement.textContent = '';
  errorElement.classList.remove('error');
}

// Validate username (not empty)
document.getElementById('username').addEventListener('blur', function() {
  const username = this.value;
  if (username.trim() === '') {
    showError(this, 'Alias on the Wanted Poster is required!');
  } else {
    clearError(this);
  }
});

// Validate password (not empty, at least 8 characters, containing a number and a special character)
document.getElementById('password').addEventListener('blur', function() {
  const password = this.value;
  if (password.trim() === '') {
    showError(this, 'Secret Saloon Passcode is required!');
  } else if (password.length < 8) {
    showError(this, 'Passcode must be at least 8 characters long!');
  } else if (!/\d/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    showError(this, 'Passcode needs a number and a special character (like yer trusty sidearm)!');
  } else {
    clearError(this);
  }
});

// Validate email (valid email format)
document.getElementById('email').addEventListener('blur', function() {
  const email = this.value;
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    showError(this, 'Invalid email address. Check the format, partner!');
  } else {
    clearError(this);
  }
});

// Validate age (not empty, within a specific range)
document.getElementById('age').addEventListener('blur', function() {
  const age = parseInt(this.value);
  if (isNaN(age)) {
    showError(this, 'Enter a valid number for your age (how many moons you\'ve seen)');
  } else if (age < 18 || age > 100) {
    showError(this, 'Age must be between 18 and 100 years old (outlaw life ain\'t for youngsters)!');
  } else {
    clearError(this);
  }
});

// Validate town (not empty)
document.getElementById('town').addEventListener('blur', function() {
  const town = this.value;
  if (town.trim() === '') {
    showError(this, 'Tell us where you hang your hat (town name is required)!');
  } else {
    clearError(this);
  }
});

// Validate skills (selected)
document.getElementById('skills').addEventListener('change', function() {
  const skills = this.value;
  if (skills === '') {
    showError(this, 'Choose your outlaw skill (it ain\'t optional)!');
  } else {
    clearError(this);
  }
});

// Prevent form submission if validation fails
document.getElementById('signin-form').addEventListener('submit', function(event) {
  const isValid = true; // Assume valid initially

  // Check all input fields for errors
  const fields = this.querySelectorAll('input, select');
  for (const field of fields) {
    if (field.classList.contains('error')) {
      isValid = false;
      break; // Stop checking if an error is found
    }
  }

  if (!isValid) {
    event.preventDefault(); // Prevent form submission if there are errors
    alert('Hold yer horses, partner! Fix the errors before saddlin\' up.');
  }
});

// Similar logic for signup form submission

document.getElementById('signup-form').addEventListener('submit', function(event) {
  // Implement your specific
