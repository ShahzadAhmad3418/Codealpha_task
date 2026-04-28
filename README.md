# QuoteBox — Random Quote App

A clean, minimal random quote generator. No frameworks. No build tools. Just open and run.

---

## Project Structure

```
quote-app/
├── index.html    ← Main page (structure)
├── style.css     ← All styles (design + responsive + dark mode)
├── quotes.js     ← Quote database (25 quotes, loaded first)
└── app.js        ← All logic (random pick, fade, copy, keyboard)
```

---

## Languages Used

| File        | Language               |
|-------------|------------------------|
| index.html  | HTML5                  |
| style.css   | CSS3                   |
| quotes.js   | JavaScript (ES6+)      |
| app.js      | JavaScript (ES6+)      |

---

## How to Run

### Option 1 — Double-click (Easiest)
1. Download / unzip the project folder
2. Double-click `index.html`
3. It opens directly in your browser — done!

### Option 2 — VS Code Live Server (Recommended for development)
1. Install [VS Code](https://code.visualstudio.com/)
2. Install the **Live Server** extension (by Ritwick Dey)
3. Open the project folder in VS Code
4. Right-click `index.html` → **Open with Live Server**
5. App opens at `http://127.0.0.1:5500`

### Option 3 — Python Local Server
```bash
# Python 3
cd quote-app
python -m http.server 8000
# Open http://localhost:8000
```

### Option 4 — Node.js Local Server
```bash
cd quote-app
npx serve .
# Open the URL shown in the terminal
```

---

## Features

- Random quote shown on every page load
- "New Quote" button — never repeats the same quote twice in a row
- Quote text + Author name clearly displayed
- Category badge (inspiration, wisdom, humor, etc.)
- Quote counter (e.g. "Quote 5 of 25")
- Copy to clipboard button
- Smooth fade transition between quotes
- Keyboard shortcut: press **Space** or **Enter** for a new quote
- Fully responsive (works on mobile, tablet, desktop)
- Auto dark mode (follows OS setting)

---

## Browser Support

| Browser        | Supported |
|----------------|-----------|
| Chrome 80+     | ✅ Yes    |
| Firefox 75+    | ✅ Yes    |
| Safari 13+     | ✅ Yes    |
| Edge 80+       | ✅ Yes    |
| Opera 67+      | ✅ Yes    |
| IE 11          | ❌ No     |

---

## Extending the App

### Add more quotes
Open `quotes.js` and add a new object to the `QUOTES` array:
```js
{
  text: "Your quote here.",
  author: "Author Name",
  category: "category"
}
```

### Change colors
Open `style.css` and edit the `:root` variables at the top:
```css
:root {
  --color-primary: #534ab7;   /* Change to any hex color */
  --bg-page:       #f5f4f0;
}
```
# Codealpha_task
