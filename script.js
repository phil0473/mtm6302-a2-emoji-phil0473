// Array containing 12 dec Unicode emoji codes (single code points)
const emojiCodes = [
  128512, // 😀
  128514, // 😂
  128517, // 😅
  128525, // 😍
  128526, // 😎
  128545, // 😡
  128561, // 😱
  128570, // 😺
  128640, // 🚀
  129315, // 🤣
  129409, // 🥺
  129505  // 🧡
];
// reference to the gallery container in index.html
const gallery = document.getElementById("gallery");

// function to build n render emoji cards
function showEmojis(count = emojiCodes.length) {
  // clear container to prevent duplicate cards across re-runs
  gallery.innerHTML = "";
}

function showEmojis(count = emojiCodes.length) {
  // clear container to prevent duplicate cards across re-runs
  gallery.innerHTML = "";

  //lloop through items up to the specified count
  for (let i = 0; i < count; i++) {
    const code = emojiCodes[i];
    const emojiChar = String.fromCodePoint(code);

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <span class="emoji">${emojiChar}</span>
      <span class="code">${code}</span>
    `;

    gallery.appendChild(card);
  }
}

showEmojis();