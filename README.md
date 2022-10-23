# LastPass Clone - Password Manager

![Nuxtjs](https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

## Table of Content

1. [Summary](#summary)
2. [Algorithm and Approach](#algorithm-and-approach)
3. [Technical Dependencies and Libraries](#technical-dependencies-and-libraries)
4. [Setup](#setup)

## Summary

This is a Coding Challenge. The main goal is to clone the Password Manager LastPass using Nuxt 3, Vue.JS 3 and TailwindCSS.

We all have a large number of usernames and passwords that we must remember. And each site/app has a different password policy and sometimes they assign our usernames to us so we have varied usernames and passwords.

And for the apps/sites we only use occasionally, we can constantly be forced to go through a “forgot your password” and sometimes “forgot your username” process because we simply cannot recall what they are.

## Algorithm and Approach

I decided to use Nuxt v3 because being a Vue.JS framework I can use the latest features to make my life easier during development. I also decided to use TailwindCSS to create my styles quickly and easily, as I am very good with this tool.

I started by creating an overview to display the cards and a modal to create new password cards. I made my own Inputs components and used a popular form validation library called Vee-validate, just to show off that functionality and easily implement it. To further enhance this functionality, I added the Yup library.

I chose to create each component to break down the code to the minimum, thinking of the strategy of reusable components that improve development time.

My preference for using TypeScript allows me to document my code and give it the characteristic robustness of a statically typed language.

The need to use Pinia as State Management is purely by preference, since it allows me to preserve data between components and share it quickly to show similar behavior when using endpoints.

For the folder structure I decided to use specific names for greater readability of the project. Highlight composable folders, which are for storing reusable functions that use the Composition API to implement reactive logic

## Technical Dependencies and Libraries

- Vue.JS v3.4 - the latest version.
- Nuxt:JS v3.0.0-rc.12 - the latest version. I decided to use Nuxt.JS 3 for the latest features such as:
  - Use the Composition API and Nuxt 3's composables for true code re-usability.
  - Auto imports components.
  - NuxtKit, brand new module development with TypeScript and cross-version compatibility.
- TailwindCSS Module for Nuxt v6.0.1 - This module helps you set up Tailwind CSS (version 3) in your Nuxt 3 application in seconds.
- UUID v9.0.0 - A library to create unique ID's for the password cards.
- Vee-Validate v4.7.0 and yup v0.32.11 - libraries for form validation.
- Pinia Module for Nuxt v0.4.3 - This module helps you to set up Pinia (State Management) in your Nuxt 3 application in seconds.
- Pinia-plugin-persistedstate v2.3.0 - This plugin helps you to persist the data from Pinia State Management in the LocalStorage.

## Setup

Make sure to install the dependencies:

```bash
yarn install
```

### Development Server

Start the development server on <http://localhost:3000>

```bash
yarn dev
```

### Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```
