


FIRST COMMIT


![Screenshot 2025-04-04 at 10 29 28 PM](https://github.com/user-attachments/assets/5182bdcf-5c6f-4f31-b46f-129f6a6df34b) <br><br><br>



Here, we want to select the class associated with the entire form element and store it in a variable named form.

A class named Login is defined. It's designed to handle form validation for when the user submits the form.

It takes two parameters:
* form → The HTML form element.
* fields → An array of input field IDs (e.g., ["username", "password"]).

When an instance of the Login class is created, it immediately calls this.validateonSubmit() to set up form validation. <br><br><br><br>


validateonSubmit() METHOD BREAKDOWN:

**let self = this;**
* In JavaScript, the this keyword inside an event listener callback (like () => {}) might not always refer to the class instance.
* So, self = this is used to keep a reference to the class instance (Login) so you can still access this.fields inside the callback.
  
**this.form.addEventListener("submit", (e) => { ... })**
* You're attaching an event listener to the form.
* It listens for the submit event—i.e., when the user tries to submit the form.
  
**e.preventDefault();**
* Prevents the form from actually submitting and reloading the page.
* Useful when you want to validate or process the data first via JavaScript.
  
**self.fields.forEach((field) => { ... })**
* Loops through each field ID provided (like "username" and "password").

**const input = document.querySelector(\#${field}`);`**
* Uses document.querySelector to grab the DOM element with the matching ID (e.g., <input id="username">).
console.log(input.value);
* Logs the current value inside that input field to the console.
* This is where you’d typically do validation (e.g., check if empty, validate email format, etc.), but for now it just logs the values. <br><br><br><br>

if statement BREAKDOWN:

This script finds the login form on the page (with the class .loginForm).

If the form exists, it defines an array with the field names "username" and "password".

Then, it creates an instance of the Login class, passing the form and the field names to it. This instance will likely be responsible for handling validation or other logic related to the login form. <br><br><br><br>


SUMMARY OF THE BEHAVIOR:

When the user submits the form:
1. The default form submission is prevented.
2. The script loops through the username and password fields.
3. It retrieves the values entered in the fields.
4. These values are logged in the console.

Currently, this script does not perform actual validation (e.g., checking if the fields are empty, have correct formats, etc.).

It only logs input values, but it does not give feedback to the user or prevent invalid submissions.
The form does not redirect to /dashboard.html because of e.preventDefault(). <br><br><br><br>




