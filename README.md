# QuickNotes

A small note-taking web app built with plain HTML, CSS and JavaScript. You can add categorised notes, search them, delete them, and your notes are still there after you refresh the page.

## Features

- Add a note with a category (Personal, Work, Study or Ideas)
- Each category has its own card colour
- Delete any note
- Live search that filters notes as you type
- Validation: empty notes and notes over 200 characters show an error message
- A note counter that handles zero, one and many notes
- Notes are saved in the browser with `localStorage`, so they survive a refresh
- Responsive layout that adapts on screens 600px wide or smaller

## How to run locally

1. Clone the repository:
   ```
   git clone https://github.com/YOUR-USERNAME/quicknotes-app.git
   cd quicknotes-app
   ```
2. Open the folder in VS Code and start it with the **Live Server** extension (right-click `index.html`, then **Open with Live Server**).
   You can also just double-click `index.html` to open it in your browser.
3. No installation or build step is needed.

## What I learned

- How to build a page with semantic HTML (`header`, `main`, `section`, `footer`) and link every `label` to its input with `for` and `id`.
- How to use `createElement` and `textContent` to build the list, so user text is never inserted as HTML.
- How to keep data in an array of objects and use a `render()` function to rebuild the page from that data after every change.
- How `localStorage` only stores strings, so notes have to go through `JSON.stringify` and `JSON.parse`.
- How to use Flexbox for the form and a media query to change the layout on small screens.
