document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Reset error messages
    document.getElementById("usernameError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("responseMessage").textContent = "";
  
    // Get form values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;
  
    let valid = true;
  
    // Validate username/email
    if (!username) {
      document.getElementById("usernameError").textContent = "Email is required";
      valid = false;
    } else if (!validateEmail(username)) {
      document.getElementById("usernameError").textContent = "Invalid email format";
      valid = false;
    }
  
    // Validate password
    if (!password) {
      document.getElementById("passwordError").textContent = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
      valid = false;
    }
  
    if (valid) {
      document.getElementById("loadingSpinner").style.display = "block";
  
      // Call the open login API
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById("loadingSpinner").style.display = "none";
        document.getElementById("responseMessage").textContent = "Login successful!";
      })
      .catch(error => {
        document.getElementById("loadingSpinner").style.display = "none";
        document.getElementById("responseMessage").textContent = "Login failed!";
      });
    }
  });
  
  // Validate email format
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Toggle password visibility
  document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    if (this.checked) {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });
  