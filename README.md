[![Build Status](https://travis-ci.org/rwajon/sendit-react.svg?branch=develop)](https://travis-ci.org/rwajon/sendit-react) [![Coverage Status](https://coveralls.io/repos/github/rwajon/sendit-react/badge.svg?branch=develop)](https://coveralls.io/github/rwajon/sendit-react?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/802fe28946d9c3889961/maintainability)](https://codeclimate.com/github/rwajon/sendit-react/maintainability) <a href="https://codeclimate.com/github/rwajon/sendit-react/test_coverage"><img src="https://api.codeclimate.com/v1/badges/802fe28946d9c3889961/test_coverage" /></a>

# SendIT

[SendIT](https://rwajon-sendit.herokuapp.com) is a courier service that helps users deliver parcels to different destinations.
SendIT provides courier quotes based on weight categories.

## Website

[https://rwajon-sendit.herokuapp.com](https://rwajon-sendit.herokuapp.com)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Prerequisites

```
Node 11.x
```

```
NPM 6.x
```

### Installing

After cloning this repo, cd into it and an type `npm install` in the CLI to install all the required packages.
If you have Node.js and npm installed, you can start the app with this command `npm start`.

```
rwajon@kali:~/sendit# npm install
```

```
rwajon@kali:~/sendit# npm start
```

## Running the tests

Testing libraries used are **_Mocha_** and **_Chai_**.
After cloning this repo, cd into it and an type `npm run test` in the CLI

## Deployment

To deploy this project on heroku use the following commands:

```
git remote set-url heroku <repo git>
```

```
git push -u origin master
```
