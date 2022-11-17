---
title: Assignment 3 - Crafting Components
type: assignment
points: 10
---

## Instructions

1. Create a vue project named `cpnt-262-assignment-3`
2. Create a header component
   - Use moustache syntax to render information that is stored in the script tag of the component (do not write it statically)
   - use a `slot` to add more flexibility to the content
     - Add either an image or some text from the parent page
   - Use the header component on the HomeView Page
3. Create a list component
   - Apply the list onto your HomeView Page
   - render your content with a `v-for`
4. Create a footer component
   - Your copyright information should be stored inside your footer component
5. Create a card or navbar component
   - if navbar, use on App.vue, if a card, make a 3 card layout using a v-for on the HomeView or AboutView pages

---

## Rubric

### Component Structure - 5

- A header (page header) component
- A footer component
- List and list item components
- Either a card or navbar component with appropriate sub components

### Syntax - 5

- v-bind used for content and at least 1 class tag
- props have type and default value
- v-for used for any repeating content
- use javascript variables to reduce static text on pages
- minimal styling

---

## Submission

1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
   - a link to your GitHub repo;
   - A note on which files contain which components

### Notes

- Do not push node_modules
- No forking other people's repos
- Options API and Composition API syntax are accepted
- Style your components with any css approach that you want
- Follow [VueJS naming conventions](https://v2.vuejs.org/v2/style-guide/?redirect=true)
  - These guidelines give some room for flexibility, use what makes sense to you
  - **hard rule** 2+ word component names
