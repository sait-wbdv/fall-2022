---
title: Assignment 1 - Push of a button
type: assignment
points: 5
---

In this assignment, you will create a DOM variable for a button, add an event listener and modify a page when the button is clicked.

## Button action
Your button may perform an action of your choice, such as print:
- A random item in an array;
- A greeting to the user;
- A calculation;

---

## Instructions
1. Create a `<button>` and empty `<p>` element (or similar) on an HTML page;
2. Create HTML variables for each element;
3. Using an Event Listener and callback function, change the content of the `<p>` when the button is clicked;
3. Place your app in a validated HTML file named `index.html`. JS may be either be either:
    - embedded in a `script` element before the `</body>`, OR;
    - linked as an external script in the `<head>` of the document.

---
## Marking Rubric
**Each of the following requirements will be worth 1 point** for a total of 5 points.

### Button element
- [ ] Create a valid `<button>` element on a page;
- [ ] Style the button so that it doesn't use default borders, colours, padding, etc;
- [ ] Add `:hover` and `:active` styles to the button;
- [ ] Create a Javascript variable that contains your button, using `document.querySelector()` with a selector of your choice;

### Event listener with callback function
- [ ] Create a named callback function that will modify your page;
- [ ] Add an event listener to your button that invokes your callback function when the button is clicked;
- [ ] Use a `Number`, `String` or `Array` method to modify a value using the callback function, such as:
    - `Number.toFixed()`;
    - `String.substr()`;
    - `Array.join()`.

### Document modification
- [ ] Use `Element.innerHTML()` to change the content of a DOM element;
- [ ] Use template literals to wrap content inside a new HTML element that's not already on the page;

### Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:
- Use `prompt()` to print a dynamic message to the page, OR;
- Use `Element.classList()` to add or change an element's class attribute, OR;
- Add an event listener to a form control other than a button:
    - checkbox;
    - radio button;
    - select menu.

Provide a clear indication of which option you've chosen in your README (see below):
- Which did you choose?
- What file(s) and line number(s) can it be found?

### Documentation and Code Readability
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site
- **Important**: Any attributions for code and/or assets you used that are not your own;
- Follow guidlines in [Javascript Basics](https://sait-wbdv.github.io/slides/f22/cpnt-262/js-introduction.html) slides;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)

---

## Submission Requirements
- Push this assignment to a GitHub repo named `cpnt262-a1` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
