---
title: Assignment 2 - If This, Then That (forms)
type: assignment
points: 5
---

In this assignment, you create a form that dynamically changes some aspect of the page.

While you can use open-source content as inspiration, it should be unique and on-topic.

## Content Topic
The goal of this assignment is to use HTML form elements to trigger dynamic changes to its page using Javascript.

For example, you may create:
- a drop down menu that highlights different page content depending on the menu selection;
- a radio button list that changes the page's colour scheme;
- a form that shows different options based on a previous form input;
    - Example: If "favourite pet" is "dog" show a list of checkboxes to select the "best breeds".
- etc.

The content should make sense and be of potential value to the (hypothetical) reader.

**Note: the page can contain other content that does not distract from the assignment requirements.** Feel free to re-purpose past assignments or projects.

---

## Instructions
Place your app in a validated HTML file named `index.html`:
- JS should linked as a deferred external `<script>` in the `<head>` of the document;
- CSS should be linked as an external stylesheet in a `<link>` element in the `<head>` of the document.

---

## Marking Rubric
**Each of the following requirements will be worth 1 point** for a total of 5 points. 

### 1. Form control(s) with event listener
- [ ] Create a dropdown menu, radio button list or other appropriate form control;
    - Proper `<label>` and `<fieldset>`/`<legend>` elements should be provided for accessibility;
    - See: [Accessible forms](https://sait-wbdv.github.io/slides/f22/cpnt-262/js-forms.html#/1) for further guidelines;
    - Required fields need the `required` attribute with a visual indication to the user that it is required.
- [ ] Optional: Use `<form>` element, if appropriate;
- [ ] Add an appropriate event listener that triggers a change in the page;

### 2. DOM Manipulation
- [ ] Change content on the page using on or more of the following methods:
    - Change `:root`-level CSS Variables using Javascript's `Element.style.setProperty()` method, OR;
    - Use `Element.classList` to modify an element's presentation;

### 3. Three states
- [ ] Create three different page states that are controlled using the form control(s). Based on the above Content Topic examples there should be at least three:
    - colour schemes;
    - menu options with page effects;
    - conditional form options.

### 4. Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:
- **Animation**: have your page change fade/slide in/out of the page, for example, OR;
- **Custom form styling**: using a method of your choice, create a custom checkbox or radio button instead of the default styling, OR;
- **Figma prototype**: include a link to a matching Figma prototype of your project.

Provide a clear indication of which option you've chosen in your README (see below):
- Which did you choose?
- What file(s) and line number(s) can it be found?

### 5. Documentation and Code Quality
**In addition to the standard requirements**, include the a TODO comment in your Javascript that:
- summarizes a feature you'd like to add to the project, OR;
- outlines how a code segment can be refactored, OR;
- highlights a bug that needs to be fixed;

Example:
```js
// TODO: Move function to js/utilities.js
const someFunction = function() {
  console.log("I'm a function!");
}
```

**Standard Requirements:**
- Include a `README.md` in your project that contains the following information:
  - Course title;
  - Assignment name;
  - Author name;
  - A link to the GH Pages site
- **Important**: Any attributions for code and/or assets you used that are not your own;
- Follow guidelines in [Javascript Basics](https://sait-wbdv.github.io/slides/f22/cpnt-262/js-introduction.html) slides;
- Follow guidelines in [Files and Directories - Naming Conventions](https://gist.github.com/acidtone/d77059ec1851eff266339a3df70f6984)

---

## Submission Requirements
- Push this assignment to a GitHub repo named `cpnt262-a2` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site

