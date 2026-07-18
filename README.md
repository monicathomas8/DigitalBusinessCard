# Digital Business Card 

🔗 **Live Demo:** [monicathomas8.github.io/DigitalBusinessCard](https://monicathomas8.github.io/DigitalBusinessCard/)

A lightweight, customizable digital business card - built with plain HTML, CSS, and JavaScript. No frameworks, no build tools, no dependencies.

Scan a QR code (or share a link) to load a personal card with:
- Contact info with tap-to-call / tap-to-email links
- A "Save My Contact" button that downloads a vCard, adding you straight to the visitor's phone contacts
- A "Connect with Me" popup so visitors can send you their details
- A Linktree-style list of your social/website links
- A "Want your own digital card?" enquiry popup

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks)
- [Formspree](https://formspree.io) - handles form submissions with no backend required

## Getting Started

1. Clone this repo
2. Open `index.html` in your browser to preview locally
3. Replace the placeholder content in `index.html` with your own details (name, title, phone, email, links)
4. Replace the placeholder vCard details in `assets/js/script.js`
5. Create a free [Formspree](https://formspree.io) account, create a form, and replace `https://formspree.io/f/yourFormId` in `script.js` with your real endpoint URL
6. Deploy (e.g. via GitHub Pages) and generate a QR code pointing to your live URL

## Project Structure
```
DigitalBusinessCard/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── LICENSE
└── README.md
```