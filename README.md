# Dishwasher website

https://js-dishwashers.herokuapp.com/

## Summary

The Dishwasher website is a single page app built using React and served by a node.js server

Tech choices were chosen to showcase job description essentials.

* Javascript, HTML5, CSS3, SASS, responsive web design
* React.js
* Building to accessibility standards
* TDD - Jest & Enzyme
* REST API consumption
* Node.js - Express

The node.js server is needed to proxy requests to the JLP API.

## Usage

**Install**

```
npm install
npm install --prefix client
```

**Development**

```
npm run dev
```

This brings up 3 processes

* `client` runs a live-loading React app on `localhost:3001/`
* `dev:sass` watches for changes and compiles style files
* `server` runs a node server on `localhost:3000` that serves the latest production build of the client app and proxies
  requests to the JLP api on `/api/`

**Build production app**

```
npm run build --prefix client
```

## Accessibility notes

I have consciously kept this app to accessible standards during building. Not difficult across two pages with minimal
interaction but still…

* Unique title for each page
* Semantic html layout
* Cascading header tags
* Pages are keyboard navigable
* Images have no semantic content so can have empty string for alt-text
* Carousel can be totally hidden from screen-readers
* Accordion content is interpreted as full text by screen-readers whether it is open or closed
* Skip-link is not needed

## Things I have left for later

- Cross-browser compatibility (built on Chrome 90.0)
- Responsive design is limited to tablet-portrait and tablet-landscape - larger desktop screens will centre content -
  phones are not catered for
- A no-javascript version

## Dependencies

I have tried to keep dependencies to a minimum by using core React components.

Two exceptions to this are `react-router-dom` and `Enzyme` both of which are widely used. For accessibility purposes I
have added `react-document-title`  to give each page a descriptive title.

The node.js app uses `Express` as a lightweight server

## Assumptions

### General

* Api responses do not need to be validated
* `html` returned by the api (as in `productInformation`) is properly formatted

### Design

If I were working with a designer I would seek clarification on certain design points. For this project I have just made
a decision in each case.

- Image source gives 4:3 images but designs are for 1:1. I’ve fitted the images to a 1:1 window
- Carousel behaviour - I’ve added left and right arrows for now
- Header colour - I’ve used `#FBFBFB` throughout
- The position of `product code`  - I have placed it above product information.
- `Read more` section - I have added it as an accordion using the first paragraph of html returned by the api as a
  summary.
- Responsive breakpoints - I’ve used 900px for this limited version
- Responsive grid page - I’ve used 4 cards wide for landscape, 3 for portrait
