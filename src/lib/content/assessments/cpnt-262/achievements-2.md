---
title: Achievements Round 2
type: achievements
points: 6
---

## Marking Rubric
- **You will be graded for two 3-point mini-assignments** (Achievements) in Round 2 for the _first half_ of CPNT 262;
- Submissions for Achievements Round 2 will close Monday, October 31st @ 11:59pm;
- Achievements from Round 1 are **not eligible** for this Round.

---

## Achievements
Submission Instructions:
1. In Brightspace: submit a ZIP of relevant files to _Round 1_; 
2. As a comment: share links to make it easy for the instructor to quickly evaluate your work:
    - GH repos, Pages, Projects (Beta), etc.
    - Codepens, Figma, FigJam, etc.
3. Double check the Achievement for specific instructions.
4. If applicable, include a README containing the following;
    - Achievement name and author;
    - Attributions: **Did anyone help you?** Give credit to any classmates, articles, tutorials, etc that helped you complete this project.
    - Include self-assessments, observations, research, etc under the heading "Code Journal" in your README. 
4. Submit Achievements as you finish them; your Instructor will try to keep up!

---

### 1. Comma-separated list of words
Starting with an array of words such as:
```js
const nouns = [
  "cat",
  "dog",
  "hamster",
  "parrot",
  "dolphin"
]
```
Print a complete sentence on the page that includes the list of words such that:
- they are separated by a comma and a space;
- the last word is separated by the word "and".

Example output: "My favourite pets are the cat, dog, hamster, parrot and dolphin."

---

### 2. Studly caps (SpongeBob case)
Using a loop of your choice, create a function that changes a sentence into studly caps (aka: [mocking SpongeBob case](https://nymag.com/intelligencer/2017/05/what-is-the-mocking-spongebob-capitalized-letters-chicken-meme.html)).

The function should accept a sentence as an argument:
> **"Can I get some extra credit?"**

and return the same sentence in studly caps:
> **"cAn i GEt SomE eXtRa creDiT?"**

Output this sentence to a web page.

---

### 3. Intersection Observer proof-of-concept
Using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), create a long HTML page that changes content as it scrolls into the viewport. For example, the content can:
- scroll into place,
- fade in,
- be highlighted in some way,
- etc.

Hint: There are many Intersection Observer tutorials that you can find online.

---

### 4. Text area counter
Add a dynamic text character counter that displays the number of characters entered into a `<textarea>` element such that:
- Counter shows a dynamic count of characters present in a `<textarea>` element;
- Counter updates as the user types;
- A character limit is shown next to character count.

![Example of a text area counter](../../../images/assessments/text-area-counter.png)

See [this gist](https://gist.github.com/acidtone/74727a562940ead812f46c1b1b870d19) for starter code and detailed instructions.

---

### 5. `<template>` Element proof-of-concept
`Element.innerHTML` is not considered the best method of adding HTML content to a page. 

Create a proof-of-concept project that, instead, stores HTML in a [`<template>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) which is cloned, modified and added to the page using Javascript.
- Use content of your choice that contains valid HTML elements;
- `<template>` content may be modified in a way of your choosing;
- The new content may be displayed when the page loads (no user action required).

For example, you may refactor any of the in-class examples shown thus far that uses `Element.innerHTML` to output content to the page.