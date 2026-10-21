const quotes = [
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Great things are done by a series of small things brought together.", author: "Vincent van Gogh" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The future depends on what you do today.", author: "Mahatma Gandhi" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C. S. Lewis" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteButton = document.getElementById("new-quote");
let previousIndex = -1;

function showRandomQuote() {
  let index;

  // Avoid showing the same quote twice in a row.
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (quotes.length > 1 && index === previousIndex);

  previousIndex = index;
  quoteText.textContent = quotes[index].text;
  quoteAuthor.textContent = `— ${quotes[index].author}`;
}

newQuoteButton.addEventListener("click", showRandomQuote);

// Show a random quote whenever the app is opened or refreshed.
showRandomQuote();
