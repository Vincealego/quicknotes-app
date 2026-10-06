// ---------- Select elements ----------
const noteForm = document.querySelector("#note-form");
const noteInput = document.querySelector("#note-input");
const noteCategory = document.querySelector("#note-category");
const searchInput = document.querySelector("#search-input");
const notesList = document.querySelector("#notes-list");
const noteCount = document.querySelector("#note-count");
const errorMessage = document.querySelector("#error-message");

const MAX_LENGTH = 200;

// ---------- Data: array of { id, text, category, createdAt } ----------
let notes = [];

// ---------- Storage ----------
const STORAGE_KEY = "quicknotes";

function loadNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

notes = loadNotes();

// ---------- Helpers ----------
function formatDate(isoString) {
  return new Date(isoString).toLocaleString();
}

function showError(message) {
  errorMessage.textContent = message;
}

function updateCount(shown) {
  if (notes.length === 0) {
    noteCount.textContent = "No notes yet.";
  } else if (shown === 0) {
    noteCount.textContent = "No notes match your search.";
  } else if (shown === 1) {
    noteCount.textContent = "1 note";
  } else {
    noteCount.textContent = `${shown} notes`;
  }
}

// ---------- Render: rebuilds the list from the array ----------
function render() {
  let visible = notes;

  const term = searchInput.value.trim().toLowerCase();
  if (term !== "") {
    visible = notes.filter(function (note) {
      return note.text.toLowerCase().includes(term);
    });
  }

  notesList.replaceChildren();

  visible.forEach(function (note) {
    const item = document.createElement("li");
    item.classList.add("note", `note-${note.category}`);

    const badge = document.createElement("span");
    badge.classList.add("badge");
    badge.textContent = note.category;

    const text = document.createElement("p");
    text.classList.add("note-text");
    text.textContent = note.text;

    const date = document.createElement("time");
    date.classList.add("note-date");
    date.dateTime = note.createdAt;
    date.textContent = formatDate(note.createdAt);

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      deleteNote(note.id);
    });

    item.append(badge, text, date, deleteBtn);
    notesList.appendChild(item);
  });

  updateCount(visible.length);
}

// ---------- Add (with validation) ----------
function addNote(event) {
  event.preventDefault();
  const text = noteInput.value.trim();

  if (text === "") {
    showError("Please enter a note before adding.");
    return;
  }
  if (text.length > MAX_LENGTH) {
    showError(`Note is too long (${text.length}/${MAX_LENGTH} characters).`);
    return;
  }

  notes.push({
    id: Date.now(),
    text: text,
    category: noteCategory.value,
    createdAt: new Date().toISOString(),
  });
  saveNotes();

  noteInput.value = "";
  showError("");
  render();
}

// ---------- Delete ----------
function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  saveNotes();
  render();
}

// ---------- Events ----------
noteForm.addEventListener("submit", addNote);

noteInput.addEventListener("input", function () {
  showError("");
});

searchInput.addEventListener("input", render);

// ---------- Start ----------
render();
