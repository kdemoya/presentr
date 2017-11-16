<div align=center>

# Presentr
###### 👩🏼‍💻 Configuration based presentation engine. 👨🏽‍💻

</div>

## Installation

##### Yarn
```bash
yarn add presentr
```

##### NPM
```bash
npm install --save presentr
```


## Usage
You need to have a server running with an html file to mount the slides in.
Then you have to pass the ID of the element and an object describing your slides.

Note that slides object keys have to be numbered right now: `slide1, slide2, slide3, ...`


## Example
```javascript
import { presentr } from 'presentr';

const slidesConfig = {
  slide1: {
    type: 'simple',
    header: 'Hello World!',
    notes: 'Notes for speakers view.'
  },
  slide2: {
    type: 'list',
    header: 'This is a list',
    subHeader: 'Sup there!',
    list: ['List Item 1', 'List Item 2', 'List Item 3'],
    background: require('./assets/background.jpg'),
  },
  slide3: {
    type: 'quote',
    quote: 'It compiles... Ship it!',
    author: 'Someone',
  },
};

presentr('app', slidesConfig);
```

## Boilerplate
If you want a working solution out of the box, just:
1. Download [this boilerplate](https://github.com/kdemoya/presentr-boilerplate).
2. `yarn` or `npm install`.
3. Add your slides configuration to `slides.js`.
4. `yarn run start` or `npm start`


## Slide Types
### simple:
Renders a simple slide with title and subtitle.
##### Options:
 - `header` - String or array of strings 
 - `subHeader` - String

### image:
Renders a slide with an image.
##### Options:
 - `header` - String
 - `subHeader` - String
 - `image` - String
 
### list:
Renders a slide with an list.
##### Options:
 - `list` - Array of strings
 
### listImage:
Renders a slide with an image and a list.
##### Options:
 - `header` - String
 - `subHeader` - String
 - `image` - String
 - `list` - Array of strings
 
### quote:
Renders a slide with a quote and its author.
##### Options:
 - `quote` - String
 - `author` - String
 - `image` - String
 
 
## Speaker Mode
All slides accepts a property called `notes`, which receive a string.
When you run your server, you can go to `/speaker` in another browser tab or window to see a private screen with the current slides progress
and the notes you specified for each slide.


## Note
As of now, the engine is very strict with how you use it. I did it to be able to bootstrap simple web-based presentations without any code, just a configuration file.
I'll be improving it on the go as I use it and start needing new features, but improvements are always welcome in the form of PRs.


## Roadmap
- [ ] Add documentation for missing slide types.
- [ ] Fix the header to make it fit.
- [ ] Provide more configuration options.
- [ ] Add MD support.
