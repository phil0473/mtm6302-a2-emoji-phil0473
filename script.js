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