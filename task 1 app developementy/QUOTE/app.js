// ============================================================
//  app.js  —  Core logic for Random Quote App
//  Language : Vanilla JavaScript (ES6+)
//  No external libraries or frameworks required
// ============================================================

// ── State ────────────────────────────────────────────────────
let currentIndex = -1;   // Index of the currently shown quote
let shownCount   = 0;    // How many times the user has clicked

// ── DOM References ───────────────────────────────────────────
const quoteText    = document.getElementById('quoteText');
const quoteAuthor  = document.getElementById('quoteAuthor');
const quoteBadge   = document.getElementById('quoteBadge');
const quoteCounter = document.getElementById('quoteCounter');
const copyFeedback = document.getElementById('copyFeedback');
const quoteCard    = document.getElementById('quoteCard');

// ── Helper: pick a random index, never the same one twice ───
function getRandomIndex() {
  if (QUOTES.length === 1) return 0;
  let next;
  do {
    next = Math.floor(Math.random() * QUOTES.length);
  } while (next === currentIndex);
  return next;
}

// ── Main function: show a new quote with fade transition ─────
function showNextQuote() {
  // 1. Fade out
  quoteCard.classList.add('fade-out');

  setTimeout(() => {
    // 2. Update data
    currentIndex = getRandomIndex();
    shownCount++;

    const q = QUOTES[currentIndex];

    quoteText.textContent   = q.text;
    quoteAuthor.textContent = q.author;
    quoteBadge.textContent  = q.category;
    quoteCounter.textContent = `Quote ${shownCount} of ${QUOTES.length}`;

    // 3. Fade in
    quoteCard.classList.remove('fade-out');
    quoteCard.classList.add('fade-in');

    // 4. Remove animation class after it completes
    setTimeout(() => quoteCard.classList.remove('fade-in'), 400);

  }, 300); // match CSS transition duration
}

// ── Copy quote to clipboard ──────────────────────────────────
function copyQuote() {
  if (currentIndex < 0) return;

  const q    = QUOTES[currentIndex];
  const text = `"${q.text}" — ${q.author}`;

  navigator.clipboard.writeText(text).then(() => {
    copyFeedback.classList.add('visible');
    setTimeout(() => copyFeedback.classList.remove('visible'), 2000);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    copyFeedback.classList.add('visible');
    setTimeout(() => copyFeedback.classList.remove('visible'), 2000);
  });
}

// ── Keyboard shortcut: press Space or Enter for new quote ────
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault();
    showNextQuote();
  }
});

// ── Auto-load a quote on page open ──────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  showNextQuote();
});
