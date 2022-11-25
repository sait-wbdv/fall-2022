---
title: Assignment 4 - Page Building in Vue/Nuxt
type: assignment
points: 15
---

## Instructions

Web Frameworks like Vue and Nuxt give you the ability to create reusable components. This helps DRY out your code and separates the presentation and information layers of your website - increasing maintainability and code organization.

For this assignment, you will need to make 2 web pages that use the same components for repeating design patterns. Use the `HomeView.vue` and `AboutView.vue` pages that the vue cli provides and create your components in the `components/` directory. _Adjust syntax for whether you're using vue 3 or nuxt 3_

Deploy your site to Netlify.

### Specifications

**Change syntax for Nuxt if you use that**

- Reuse the same general UI elements in the `App.vue` file (navigation bar and footer)
- Use `<RouterView />` in the `App.vue` page to inject your page content into the UI layout
- Reuse layout components in your pages with props, slots, and class bindings for content and style variations
  - Suggested Components (At least 5 components required):
    - TheNav, TheFooter, TheMain, TheMainHeader
    - AppSection, AppSectionHeader,.. (truncate if preferred)
    - AppCard, AppList, AppListItem, AppButon, AppLink...
- Reuse utility components in your pages and layout components

## Rubric

### Component Reusability - 5

- Properly defined props and slots
- class bindings used in page header for greater distinction
- v-bind and moustache syntax used correctly
- Components imported and rendered correctly

### V-for and v-on - 5

- lists and repeating content (3 card layout) uses v-for to render multiple items
- v-for syntax used correctly
- v-on used at least once for interactive content (minimal example is fine)

### General Requirements - 5

- Code Quality
- README
  - assignment info
  - attributions
- Design Assets
  - Make one of the following to track your design visuals (if applicable):
    - Mood board
    - Set of Issues
  - Content (if applicable):
    - screen shots of inspiration components
    - images of wireframes
- **Site Deployed to Netlify**
- Submission does not include node_modules folder

## Submission

1. Create a GitHub repo of your project;
2. Download a ZIP of the project;
3. In Brightspace, submit your ZIP and include the following as a comment in your submission:
   - a link to your GitHub repo;
   - A note on which files contain which components

### Notes

- Do not push or zip node_modules
- No forking other people's repos
- Options API and Composition API syntax are accepted
- Style your components with any css approach that you want
- Follow [VueJS naming conventions](https://v2.vuejs.org/v2/style-guide/?redirect=true)
  - These guidelines give some room for flexibility, use what makes sense to you
