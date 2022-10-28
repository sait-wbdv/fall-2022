---
title: Individual Project - Fetching API Data
type: assignment
points: 15
---

In this assignment you'll be fetching data asynchronously from a [public API](https://github.com/public-apis/public-apis) and displaying in on a web page. You may use an API endpoint of your choice that has not been demonstrated in class. Have fun with it! 

Speak to your instructor if you'd like to try something that doesn't quite fit the requirements listed below.

---

## Instructions
1. Choose a JSON API that serves information you'd like to display in your project;
    - [Full list of Public APIs](https://github.com/public-apis/public-apis);
    - [Shortlist of APIs used by past students](#appendix);
    - Or you may use an suitable API not found in these lists;
2. Construct an `index.html` page that will `fetch()` an array of objects with proper error handling;
    - JS should linked as a deferred external `<script>` in the `<head>` of the document;
    - CSS should be linked as an external stylesheet in a `<link>` element in the `<head>` of the document.
3. Use a loop to display either a gallery or chart of the API data on the page;

---

## Marking Rubric
**Each of the following requirements will be worth 3 points** for a total of 15 points. 

### 1. `fetch()` request and error handling
- [ ] Using the `fetch()` Web API retrieve an array or object from a public API using a `GET` request.
    - Your `fetch()` can use either `then`/`catch` block or `async`/`await`;
- All errors must be handled gracefully:
    - [ ] Rejected `fetch()` Promises are handled by a `catch` block (for example, there is a network error) or similar;
    - [ ] The request doesn't return a `200 OK` response code such as `404 Not found`.
    - [ ] API data validated in case it's missing, is of an unexpected data type or otherwise `undefined`.
    - All errors should be human readable and intuitive. 
        - [ ] General "There was a problem." if data can't be displayed for any reason;
        - [ ] Data should be validated before output to avoid printing empty or `undefined` values.

### 2. Loop
The information retrieved should include an array of objects for you to work with.
- [ ] Use a `for` loop, or similar statement (see Above and Beyond) to process your data. For example:
    - You can populate an `output` accumulator variable that contains a gallery for you to display on the page;
    - You can clean problematic data in your API response;
    - You can create a simplified/summarized copy of your data to use in a chart.

### 3. HTML Output
You can either:
Display a gallery of at least 10 items on an `index.html` page, including:
- [ ] A name or title
    - Name or title should be displayed in an appropriate heading;
- [ ] An off-site link that's directly related to the data
- [ ] At least one other property that can be displayed on the page:
    - An image;
        - Image should not be distorted and include a custom `alt` attribute derived from the retrieved data;
    - A date;
        - Dates (if applicable) should be formatted to be human-readable;   
    - A description, or;
    - Some other relevant information included in your chosen API:
        - All other data should be displayed appropriately according to the content.

**OR**

Display a summary of information in a chart using [ChartJS](https://www.chartjs.org/), or similar library;
- [ ] Chart should be displayed on the page with no scroll bars;
- [ ] Information displayed in the chart should be derived from the API data;
- [ ] Information should be relevant to a real potential user;

### 4. Above and Beyond
Show off your coding skills by using ONE (use of more than one does not guarantee more marks) of the following:
- Use an event listener to load your gallery/chart when the user clicks a button instead of on page load;
- Use a higher order function such as:
    - `.forEach()` or `.map()` instead of a `for` loop;
    - `.find()` or `.filter()` to show a subset of items in your gallery;
- Use a `<template>` element to store a template of your gallery card HTML instead of using `.innerHTML`;
    - See [`<template>`: The Content Template element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) on MDN

**Provide a clear indication** of which option you've chosen in your README (see below):
- Which did you choose?
- What file(s) and line number(s) can it be found?

### 5. Documentation and Code Quality
**In addition to the standard requirements**, include a sample of a javascript object served by your chosen API in a [code block in markdown](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).
- See [example in the appendix](#example-api-sample)

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
- Push this assignment to a GitHub repo named `cpnt262-individual-project` and enable GitHub Pages;
- ZIP all files required for the site to operate and submit to Brightspace;
- Include the following as a comment in your Brightspace submission:
  - GH repo
  - GH Pages site
  - Link to the API used on your project

---

## Appendix
### Example API Sample
A Disney character returned by the [Disney API](https://disneyapi.dev/):
```js
{
  films: [],
  shortFilms: [],
  tvShows: [
    "Pickle and Peanut"
  ],
  videoGames: [],
  parkAttractions: [],
  allies: [],
  enemies: [],
  _id: 12,
  name: "90's Adventure Bear",
  imageUrl: "https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png",
  url: "https://api.disneyapi.dev/characters/12"
}
```

### APIs used by previous students
This does not guarantee these APIs are suitable for this assignment, but past students have had at least limited success using them:
- [FFXIV Collect](https://ffxivcollect.com/) - Final Fantasy XIV data on collectables
- [Jikan](https://jikan.moe/) - Unofficial MyAnimeList API
- [Hyrule Compendium](https://github.com/gadhagod/Hyrule-Compendium-API) - Data on all interactive items from The Legend of Zelda: BOTW
- [FakeStoreAPI](https://fakestoreapi.com/) - Fake store rest API for your e-commerce or shopping website prototype
- [Studio Ghibli](https://ghibliapi.herokuapp.com/) - Resources from Studio Ghibli films
- [Clash Royale](https://developer.clashroyale.com/) - Clash Royale Game Information
  - API Key
- [Zoo Animals](https://zoo-animal-api.herokuapp.com/) - Facts and pictures of zoo animals
- [Digimon Information](https://digimon-api.vercel.app/) -	Provides information about digimon creatures
- [Final Space](https://finalspaceapi.com/docs/) -	Final Space API
- [Dungeons and Dragons](https://www.dnd5eapi.co/docs/) -	Reference for 5th edition spells, classes, monsters, and more
    - No CORS
- [TVMaze](http://www.tvmaze.com/api) -	TV Show Data
- [Rick and Morty](https://rickandmortyapi.com/) -	All the Rick and Morty information, including images
- [NASA](https://api.nasa.gov/) -	NASA data, including imagery
    - No CORS
- [Deck of Cards](http://deckofcardsapi.com/) -	Deck of Cards
- [Open Library](https://openlibrary.org/developers/api) -	Books, book covers and related data
    - No CORS
- [Disney](https://disneyapi.dev/) -	Information of Disney characters
- [Harry Potter Characters](https://hp-api.herokuapp.com/) -	Harry Potter Characters Data with with imagery
- [RandomUser](https://randomuser.me/) -Generates and list user data
- [Imgflip](https://imgflip.com/api) -	Gets an array of popular memes
- [Metropolitan Museum of Art](https://metmuseum.github.io/)
    - No CORS