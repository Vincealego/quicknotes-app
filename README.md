# QuickNotes

QuickNotes is a small note-taking web app built with plain HTML, CSS and JavaScript. You can write short notes, give each one a category, search through them and delete the ones you no longer need. Your notes are saved in the browser, so they are still there after you refresh the page.

## Features

- Add a note with a category: Personal, Work, Study or Ideas
- A different card colour for each category
- Delete any note
- Live search that filters notes as you type
- Validation: an empty note, or one over 200 characters, shows an error message
- A note counter that handles zero, one and many notes
- Notes saved with `localStorage`, so they survive a page refresh
- Responsive layout that changes on screens 600px wide or smaller

## How to run locally

1. Clone the repository:

```
   git clone https://github.com/YOUR-USERNAME/quicknotes-app.git
   cd quicknotes-app
```

2. Open the folder in VS Code.
3. Right-click `index.html` and choose **Open with Live Server**. You can also double-click `index.html` to open it in your browser.
4. No installation or build step is needed.

## What I learned

- How to structure a page with semantic HTML (`header`, `main`, `section`, `footer`) and link each `label` to its input using `for` and `id`.
- How to keep data in an array of objects and use a `render()` function to rebuild the list after every change.
- How to use `createElement` and `textContent` instead of `innerHTML`, so text typed by the user can never be run as HTML.
- How `localStorage` only stores strings, so notes have to be converted with `JSON.stringify` when saving and `JSON.parse` when loading.
- How to use Flexbox for the form layout and a media query to adapt the design on small screens.
