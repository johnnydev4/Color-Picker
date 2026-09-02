# Color Picker

A responsive color scheme generator built with HTML, CSS, and vanilla JavaScript — my Scrimba solo project, powered by [The Color API](https://www.thecolorapi.com/).



🔗 Live demo: https://johnnydev4.github.io/Color-Picker/



## About

Pick a seed color and a color scheme mode, and the app fetches a matching palette from The Color API, rendering each swatch with its hex code. Click any swatch or hex code to copy it to your clipboard.

## Features

- 🎨 Native color picker (`<input type="color">`) to choose the seed color
- 📋 Custom-styled dropdown to choose the scheme mode (monochrome, analogic, complement, triad, and more), built with the experimental `appearance: base-select`
- 🔄 Dynamic grid of color swatches, rendered from the API response with `.map()`
- 📐 Grid auto-sizes to however many colors are returned (3 for analogic/triad, 5 for the rest), staying centered when there are fewer swatches
- ✨ Inner glow hover effect on swatches
- 📎 Click-to-copy on any swatch or hex code, with "Copiado!" feedback
- 📱 Fully responsive, mobile-first design

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid with `auto-fit`/`minmax`, `box-shadow`, experimental `appearance: base-select` and `::picker()`)
- JavaScript (Fetch API, Promises, ES Modules, array methods: `.map()`, `.closest()`)
- [The Color API](https://www.thecolorapi.com/)

## Project Structure

```
color-picker/
├── index.html
├── styles.css
├── script.js
├── images/
│   └── screenshot.png
└── README.md
```

## Running Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/color-picker.git
   ```
2. Open the folder in VS Code.
3. Right-click `index.html` → **Open with Live Server**.

## What I Learned

- Working with the Fetch API and chaining Promises with `.then()`
- Reading nested API response data (`data.colors[i].hex.value`)
- Building dynamic, responsive grids with `auto-fit` + `minmax` that adapt to a variable number of items
- Using `navigator.clipboard.writeText()` for click-to-copy functionality
- Event delegation with `.closest()` to handle clicks across a group of related elements
- Styling native form controls (`<input type="color">`, `<select>`) beyond their default browser appearance
- Experimenting with the new `appearance: base-select` / `::picker()` CSS features, and recognizing when a browser-experimental feature isn't worth full cross-browser commitment

## Browser Notes

The custom-styled dropdown (`appearance: base-select`) currently only renders its full custom styling in Chromium-based browsers (Chrome, Edge). In other browsers it falls back to the native dropdown — functional, just without the custom styling.

## Author

**johnnydev4**
[GitHub](https://github.com/johnnydev4)
