---
title: Achievements Round 1
type: achievements
points: 9
---

## Marking Rubric
Achievements will be marked differently than other Assignments in Brightspace:
- **You will be graded for three 3-point mini-assignments** (Achievements) in one Round for the _first half_ of CPNT 262;
- Submissions for Achievements Round 1 will close Wednesday, October 19th @ 11:59pm;
- You can choose from any of the following Achievements for this Round;

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

### 1. Plugin Away
3rd-party plugin/library implementation. Show that you've installed and implemented a 3rd party plugin or service from the following list:
- Suggestions for beginners:
    - [ChartJS](https://www.chartjs.org/): Simple yet flexible JavaScript charting for designers & developers.
    - [lodash](https://lodash.com/)
    - [anime.js](https://animejs.com/)
- For more inspiration see (or a similar "Best Of" list):
    - [10 Awesome JavaScript Libraries You Should Try Out in 2021](https://www.freecodecamp.org/news/10-javascript-libraries-you-should-try/)
    - [The 40 Best JavaScript Libraries and Frameworks for 2022](https://kinsta.com/blog/javascript-libraries/)

**Instructions**
1. Using the documentation provided by the library, follow the instructions and install the library.
    - Suggestions for beginners:
        - Avoid installation methods using `npm` or `yarn`
        - Libraries with a [CDN](https://www.cloudflare.com/en-ca/learning/cdn/what-is-a-cdn/) option are generally easier to install. 
2. Create a simple demo that shows a working implementation.

---

### 2. Before and After
Show your knowledge of Javascript `Number`, `String` and `Array` methods and properties.

**Instructions**
1. Create an empty `index.html` page;
2. Choose a `Number`, `String` or `Array` achievement below; 
2. Complete the chosen achievement as either:
    - embedded Javascript in a `<script>` element just before the `</body>` tag, OR;
    - an external `client.js` (or similar) file linked in the `<head>` with a deferred `<script>` element.
3. In your Javascript, log an initial `Number`, `String` or `Array` value (of your choice) to the console with the "Before" label as a first argument:
    ```js
    const number = 4;
    console.log("Before", number);
    ```
4. Modify your initial value using at least three methods or properties from the relevant list below:
    ```js
    const squared = number ** 2;
    const remainder = number % Math.PI;

    console.log("After - squared", squared);
    console.log("After - remainder", remainder);
    console.log("After - as money", `$${number.toFixed(2)}`);

    ```
    - You may log multiple "After" values or just one if you're modifying the same value multiple times;
5. Zip, push and submit as normal to Achievements Round 1.

**You may submit one, two, or three of the following achievements for Round 1 for 3 points each.**

**Number Achievement**<br>
Display or modify your chosen `number` with at least **three** of the following:
- Increment or decrement a number using `++`/`--`;
- Convert a `number` to a string with `Number.toString()`;
- Convert a `number` to exponential notation with `Number.toExponential()`;
- Convert a `number` to a string with a given number of decimals with `Number.toFixed()`;
- Convert a `number` to a given number of floating point decimals with `Number.toPrecision()`;
- Convert a `number` to a language-sensitive string representation with `Number.toLocaleString()`
- Convert a `number` or `string` to an integer with `Number.parseInt()`
- Convert a `number` or `string` to a floating point number with `Number.parseFloat()`
- Check if a `number` is an integer with `Number.isInteger()`
- Check if a "number" is actually a `number` with `Number.isNaN()`
- Check if a `number` is finite with `Number.isFinite()`

-OR-

**String Achievement**<br>
Display or modify your chosen `string` with at least **three** of the following:
- Show the number of characters in your `string` with `String.length`;
- Show a sub-string of your `string` with `String.substr()` or `String.substring()`;
- Show a sub-string of your `string` with `String.slice()`;
- Show the first character of your `string`;
- Show the last character of your `string`;
- Show the first `index` of a word that can be found in your string with `String.indexOf()`;
- Replace a word or phrase in your `string` with a new word or phrase using `String.replace()` or `String.replaceAll()`;
- Concatenate two strings with `String.concat()`;
- Use `String.startsWith()` to show if your `string` starts with a word of your choice;
- Use `String.endsWith()` to show if your `string` starts with a word of your choice;
- Use `String.includes()` to show if a substring is present in your `string`;

---

### 3. Proof of Work
Submit code that you have written based on:
- a course
- a tutorial
- documentation example
- etc.

**Examples**:
- [Playlist of Javascript exercises](https://www.youtube.com/playlist?list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA) by Coding Addict

**Requirements**:
- Courses shouldn't have Hints that make it easy to submit code you haven't written yourself;
- Tutorials shouldn't provide examples of finished code;

**BUT** if Hints or sample code exist, you may submit an Achievement if you've proven that you've written the code yourself and/or changed, improved, refactored the code, such as:
- Do the same thing, but in a different way;
- You improve/refactored the code provided;
- You've customized the code in your own unique project/activity.

**Include in your Submission**:
- **Before** example of what's provided by the resource (if necessary);
- **After** example of what you've done to refactor the code;
- **Code comments** describing what you changed and how/why;
- If necessary, add a **submission comment** on why you think this code should qualify as an Achievement.

---

