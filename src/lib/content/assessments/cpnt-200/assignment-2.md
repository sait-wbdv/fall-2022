---
title: Assignment 2 - Strapi Project and Model
type: assignment
points: 30
---

In this assignment, you will create a Strapi project and define a Model for an app/website of your choice.

For example, the app/website could be:
- A bar, pub or restaurant;
- An online store;
- Service-focused (i.e. web developer, law office, hair-stylist, etc).

This project model should match and represent the content you are building for the Content Achievements. You will enter for Content entries into this project to receive marks for your achievements.

## General Requirements
1. Collectively, your Collection and Page Content-types must incorporate at least one of the following field types:
    - Text (short or long);
    - Rich text
    - Number or Date
    - Boolean
    - Media image or video
2. Each Content-type should have one example Entry in the Content Manager to illustrate its use.

---

## Marking Rubric
Each of the following will be worth 4 points for a total of 20 points.

## 1. Project Topic
Replace the default README file with a description of your project topic, including:
- A descriptive project title.
- A project description defining a hypothetical client or your own company/website/app. The description should be 150-250 words.
- A potential Sitemap that your project would have on the frontend.

## 2. Collection Types
Define the models for at least two Collection Types that match the content you create for your Content Achievements.

Collectively, these Collections(s) must include examples of the following fields:
- A title or name;
- At least three other fields that fulfill the General Requirements above.

## 3. Single Types
Define the models for 2-4 Single Types that match the content you create for your Content Achievements. 

These pages must include:
- A page title;
- A rich text field for page content.
- At least one other field that fulfills the General Requirements above.

## 4. Extras
Include at least one example of each of the following:
- An appropriate bi-directional relation between two Content-types, logically labelled;
- A re-usable component that is used in one or more Content-types;

In your README, provide some details of where the Relation and Components can be found in your project and how they are used.

## 5. API Token
Create a read-only Bearer token for your project and include it as a comment in your Brightspace submission.

---

## Submission Instructions
- If possible: [Deploy your project](https://sait-wbdv.github.io/slides/f22/cpnt-200/strapi-deployment.html) to [render.com](https://render.com)
- Submit the following files:
    - A ZIP of your project (without the `node-modules` directory)
    - The `.env` file of your project
    - The `data.db` file located in the `.tmp` directory of your project
- As a comment in your Brightspace submission, include:
    - A GitHub repo link
    - If available: The URL of your deployed Strapi project
    - The login information for a Super-user (either yours or an invite link)