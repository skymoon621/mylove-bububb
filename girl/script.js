const messages = [
    "Makasih sayaang",
    "Aku ada beberapa kata buat kamuuuu",
    "Kamu adalah hadiah termanis di Hari Valentine yang bisa aku minta",
    "Kamu selalu mencerahkan hariku, tidak sabr menunjukan betapa aku mencitaimu",
    "Kamu selalu sabar terhadap aku yang kadang nyebelin ke kamu",
    "Tapi aku tahu kamu selalu bisa menghadapi apapun yang terjadi",
    "Akupun sebaliknya ",
    "Makasih untuk hubungan ini yang kita sudah jalanin",
    "Makasiih terhadap sayaang acuuuu Loveee uuu moree sayaaang ❤︎⸜(｡˃ ᵕ ˂ )⸝♡💕⃝🕊️ 💕⃝🕊️🥀🌍♥️🫵🏻",
    "Maaf sayaang cuma ini yang bisa kuberikan di hari spesial iniii 🙏🏼"
];

let messageIndex = 0;

function handleYaClick() {
    const yaButton = document.querySelector('.ya-button');
    const yesButton = document.querySelector('.yes-button');
    yaButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}