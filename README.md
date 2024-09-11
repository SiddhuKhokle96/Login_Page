                                         Simple Login Form

                                         
This project is a basic login form built with HTML, CSS, and JavaScript. It includes email and password fields, form validation, password visibility toggle, and an option to remember the user. The form also simulates a login API call using fetch() with a loading spinner for better user experience.

Features
Responsive Design: The layout adjusts to different screen sizes, providing a user-friendly experience on mobile devices.
Email and Password Validation: Checks for required input fields and valid email format. Ensures the password is at least 6 characters long.
Show/Hide Password: Users can toggle the visibility of the password.
Remember Me: A checkbox to remember user preferences.
Loading Spinner: Displays a loading spinner during the simulated API request.
API Simulation: Simulates an API login request using fetch() to demonstrate interaction with a backend.
Project Structure
index.html: The HTML structure for the login form.
index.css: The CSS file for styling the form, including responsive design.
index.js: The JavaScript file for handling form validation, toggling password visibility, and submitting the login request.
Files
HTML (index.html)
The login form is structured with a simple form element containing the following:

Email input field (<input type="text" id="username">)
Password input field (<input type="password" id="password">)
Show password checkbox (<input type="checkbox" id="showPassword">)
Remember me checkbox (<input type="checkbox" id="rememberMe">)
Submit button (<button type="submit">Login</button>)
CSS (index.css)
The CSS file provides styling for the form, including:

Centering the form on the page using flexbox.
Styling the form elements like the input fields and the button.
Adding a gradient background to the page.
Responsive design for smaller screens.
JavaScript (index.js)
The JavaScript handles the following:

Form Validation: Checks for valid email format and ensures that the password is at least 6 characters long.
Password Visibility Toggle: Allows users to show or hide their password by toggling the checkbox.
API Call Simulation: Sends a POST request to a mock API endpoint (https://jsonplaceholder.typicode.com/posts) and shows a success or failure message.
How to Run the Project
Clone or download the project files.
Open the index.html file in a web browser.
Fill in the login form with an email and password.
Toggle the password visibility and click "Login" to submit the form.
Note: The form simulates a login API request and does not actually authenticate the user. You can replace the mock API call with a real backend server for actual login functionality.

Dependencies
None. This project uses plain HTML, CSS, and JavaScript, so it requires no external libraries or frameworks.
Future Enhancements
Connect the form to a real backend server for actual authentication.
Store "Remember Me" functionality in local storage or cookies for user persistence.
Add stronger password validation (e.g., special characters, uppercase letters, etc.).

License
This project is open-source and free to use under the MIT license
