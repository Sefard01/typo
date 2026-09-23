"use strict";


/* =========================
   TEXT
========================= */

const TEXTS = {

  beginner: [

    "The quick brown fox jumps over the lazy dog. Practice typing slowly and carefully. Accuracy is more important than speed when you are learning.",

    "Learning to type takes patience and regular practice. Keep your fingers relaxed and look at the screen instead of your keyboard.",

    "Good typing comes from repetition. Start with simple words and short sentences, then slowly increase your speed as your accuracy improves."

  ],

  intermediate: [

    "The ability to communicate clearly is an important skill. Good typing allows you to write ideas faster without interrupting your thinking process.",

    "Technology has changed the way we work, learn, and communicate. Strong keyboard skills can save time during everyday tasks and professional work.",

    "Consistency matters more than short bursts of speed. A typist who maintains accuracy for several minutes will usually perform better than someone who types quickly with many mistakes."

  ],

  advanced: [

    "Modern software development requires developers to move quickly between documentation, source code, terminals, databases, and communication tools without losing concentration.",

    "Performance optimization is not simply about making software faster. A well-designed system should remain predictable, responsive, maintainable, and understandable as complexity increases.",

    "Reliable software is built through careful observation, deliberate engineering, meaningful testing, and continuous improvement. Speed matters, but correctness and consistency matter just as much."

  ]

};


/* =========================
   ELEMENTS
========================= */

const textDisplay =
  document.getElementById("textDisplay");

const typingContainer =
  document.getElementById("typingContainer");

const wpmElement =
  document.getElementById("wpm");

const accuracyElement =
  document.getElementById("accuracy");

const errorsElement =
  document.getElementById("errors");

const timerElement =
  document.getElementById("timer");

const typingHint =
  document.getElementById("typingHint");

const testScreen =
  document.getElementById("testScreen");

const resultScreen =
  document.getElementById("resultScreen");

const finalWpm =
  document.getElementById("finalWpm");

const finalAccuracy =
  document.getElementById("finalAccuracy");

const finalCorrect =
  document.getElementById("finalCorrect");

const finalIncorrect =
  document.getElementById("finalIncorrect");

const finalErrors =
  document.getElementById("finalErrors");

const resultMessage =
  document.getElementById("resultMessage");

const mistakeList =
  document.getElementById("mistakeList");

const settingsBtn =
  document.getElementById("settingsBtn");

const closeSettings =
  document.getElementById("closeSettings");

const settingsPanel =
  document.getElementById("settingsPanel");

const overlay =
  document.getElementById("overlay");

const backspaceToggle =
  document.getElementById("backspaceToggle");

const soundToggle =
  document.getElementById("soundToggle");


/* =========================
   STATE
========================= */

const state = {

  duration: 60,

  difficulty: "beginner",

  text: "",

  currentIndex: 0,

  started: false,

  finished: false,

  startTime: null,

  timerFrame: null,

  correctCharacters: 0,

  incorrectCharacters: 0,

  errors: 0,

  mistakes: {},

  typedCharacters: [],

  allowBackspace: true,

  soundEnabled: false,

  theme: "light"

};


/* =========================
   AUDIO
========================= */

let audioContext = null;


function createAudioContext() {

  if (!audioContext) {

    const AudioContext =
      window.AudioContext ||
      window.webkitAudioContext;

    if (!AudioContext) {
      return null;
    }

    audioContext =
      new AudioContext();

  }

  if (
    audioContext.state === "suspended"
  ) {

    audioContext.resume();

  }

  return audioContext;

}


function playTypingSound(
  isCorrect = true
) {

  if (!state.soundEnabled) {
    return;
  }

  const ctx =
    createAudioContext();

  if (!ctx) {
    return;
  }

  const oscillator =
    ctx.createOscillator();

  const gain =
    ctx.createGain();

  /*
    Two very subtle tones.
    They are intentionally short so
    they don't become annoying.
  */

  oscillator.type = "sine";

  oscillator.frequency.value =
    isCorrect
      ? 145
      : 105;

  gain.gain.setValueAtTime(
    0.0001,
    ctx.currentTime
  );

  gain.gain.exponentialRampToValueAtTime(
    isCorrect ? 0.035 : 0.05,
    ctx.currentTime + 0.005
  );

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + 0.045
  );

  oscillator.connect(gain);

  gain.connect(ctx.destination);

  oscillator.start();

  oscillator.stop(
    ctx.currentTime + 0.05
  );

}


/* =========================
   TIME
========================= */

function formatTime(seconds) {

  seconds =
    Math.max(
      0,
      Math.ceil(seconds)
    );

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    seconds % 60;

  return `${minutes}:${String(
    remaining
  ).padStart(2, "0")}`;

}


function elapsedSeconds() {

  if (!state.startTime) {
    return 0;
  }

  return (
    performance.now() -
    state.startTime
  ) / 1000;

}


/* =========================
   METRICS
========================= */

function calculateWPM() {

  const elapsed =
    elapsedSeconds();

  if (elapsed <= 0) {
    return 0;
  }

  const characters =
    state.correctCharacters +
    state.incorrectCharacters;

  const words =
    characters / 5;

  return Math.round(
    words / (elapsed / 60)
  );

}


function calculateAccuracy() {

  const total =
    state.correctCharacters +
    state.incorrectCharacters;

  if (!total) {
    return 100;
  }

  return Math.round(
    (
      state.correctCharacters /
      total
    ) * 100
  );

}


/* =========================
   TEXT
========================= */

function randomText() {

  return TEXTS[state.difficulty][
    Math.floor(
      Math.random() *
      TEXTS[state.difficulty].length
    )
  ];

}


function loadText() {

  state.text =
    randomText();

  state.currentIndex = 0;

  textDisplay.innerHTML = "";

  const fragment =
    document.createDocumentFragment();

  [...state.text].forEach(
    (character, index) => {

      const span =
        document.createElement("span");

      span.className = "char";

      span.dataset.index =
        index;

      span.textContent =
        character === " "
          ? "\u00A0"
          : character;

      fragment.appendChild(span);

    }
  );

  textDisplay.appendChild(
    fragment
  );

  updateCursor();

}


/* =========================
   CURSOR
========================= */

function updateCursor() {

  const old =
    textDisplay.querySelector(
      ".current"
    );

  if (old) {
    old.classList.remove("current");
  }

  const current =
    textDisplay.querySelector(
      `[data-index="${state.currentIndex}"]`
    );

  if (!current) {
    return;
  }

  current.classList.add(
    "current"
  );

  /*
    Only scroll vertically when necessary.
    Never allow horizontal movement.
  */

  if (state.started) {

    const rect =
      current.getBoundingClientRect();

    const containerRect =
      typingContainer.getBoundingClientRect();

    if (
      rect.bottom >
      containerRect.bottom - 30
    ) {

      current.scrollIntoView({
        block: "center",
        inline: "nearest"
      });

    }

  }

}


/* =========================
   START
========================= */

function startTest() {

  if (state.started) {
    return;
  }

  state.started = true;

  state.startTime =
    performance.now();

  typingHint.classList.add(
    "hidden"
  );

  createAudioContext();

  requestAnimationFrame(
    updateTimer
  );

}


/* =========================
   TIMER
========================= */

function updateTimer() {

  if (
    !state.started ||
    state.finished
  ) {
    return;
  }

  const elapsed =
    elapsedSeconds();

  const remaining =
    state.duration - elapsed;

  timerElement.textContent =
    formatTime(remaining);

  updateStats();

  if (remaining <= 0) {

    finishTest();

    return;

  }

  state.timerFrame =
    requestAnimationFrame(
      updateTimer
    );

}


/* =========================
   STATS
========================= */

function updateStats() {

  wpmElement.textContent =
    calculateWPM();

  accuracyElement.textContent =
    `${calculateAccuracy()}%`;

  errorsElement.textContent =
    state.errors;

}


/* =========================
   INPUT
========================= */

function typeCharacter(character) {

  if (state.finished) {
    return;
  }

  if (!state.started) {
    startTest();
  }

  const expected =
    state.text[state.currentIndex];

  if (expected === undefined) {
    appendMoreText();
  }

  const current =
    textDisplay.querySelector(
      `[data-index="${state.currentIndex}"]`
    );

  if (!current) {
    return;
  }


  const isCorrect =
    character ===
    state.text[state.currentIndex];


  playTypingSound(
    isCorrect
  );


  if (isCorrect) {

    state.correctCharacters++;

    current.classList.remove(
      "current"
    );

    current.classList.add(
      "correct"
    );

  } else {

    state.incorrectCharacters++;

    state.errors++;

    const expectedCharacter =
      state.text[state.currentIndex];

    state.mistakes[
      expectedCharacter
    ] =
      (
        state.mistakes[
          expectedCharacter
        ] || 0
      ) + 1;

    current.classList.remove(
      "current"
    );

    current.classList.add(
      "incorrect"
    );

  }


  state.typedCharacters.push({
    expected:
      state.text[state.currentIndex],

    actual:
      character,

    correct:
      isCorrect
  });


  state.currentIndex++;

  if (
    state.currentIndex >=
    state.text.length
  ) {

    appendMoreText();

  }

  updateCursor();

  updateStats();

}


/* =========================
   APPEND TEXT
========================= */

function appendMoreText() {

  const more =
    " " +
    randomText();

  const start =
    state.text.length;

  state.text += more;

  const fragment =
    document.createDocumentFragment();

  [...more].forEach(
    (character, index) => {

      const span =
        document.createElement("span");

      span.className =
        "char";

      span.dataset.index =
        start + index;

      span.textContent =
        character === " "
          ? "\u00A0"
          : character;

      fragment.appendChild(
        span
      );

    }
  );

  textDisplay.appendChild(
    fragment
  );

}


/* =========================
   BACKSPACE
========================= */

function backspace() {

  if (
    !state.started ||
    !state.allowBackspace ||
    state.currentIndex <= 0
  ) {
    return;
  }

  const previousIndex =
    state.currentIndex - 1;

  const previous =
    textDisplay.querySelector(
      `[data-index="${previousIndex}"]`
    );

  const previousTyped =
    state.typedCharacters.pop();

  if (!previousTyped) {
    return;
  }


  if (previousTyped.correct) {

    state.correctCharacters--;

  } else {

    state.incorrectCharacters--;

    state.errors--;

    const expected =
      previousTyped.expected;

    state.mistakes[expected]--;

    if (
      state.mistakes[expected] <= 0
    ) {

      delete state.mistakes[
        expected
      ];

    }

  }


  if (previous) {

    previous.classList.remove(
      "correct",
      "incorrect"
    );

  }


  state.currentIndex--;

  updateCursor();

  updateStats();

}


/* =========================
   KEYBOARD
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }


    if (
      event.target.tagName ===
        "INPUT" ||
      event.target.tagName ===
        "TEXTAREA"
    ) {
      return;
    }


    if (event.key === "Escape") {

      event.preventDefault();

      resetTest();

      return;

    }


    if (event.key === "Tab") {

      event.preventDefault();

      resetTest();

      return;

    }


    if (
      event.key ===
      "Backspace"
    ) {

      event.preventDefault();

      backspace();

      return;

    }


    if (
      event.key.length === 1
    ) {

      event.preventDefault();

      typeCharacter(
        event.key
      );

    }

  }
);


/* =========================
   RESET
========================= */

function resetState() {

  cancelAnimationFrame(
    state.timerFrame
  );

  state.currentIndex = 0;

  state.started = false;

  state.finished = false;

  state.startTime = null;

  state.correctCharacters = 0;

  state.incorrectCharacters = 0;

  state.errors = 0;

  state.mistakes = {};

  state.typedCharacters = [];

}


function resetTest() {

  resetState();

  testScreen.classList.remove(
    "hidden"
  );

  resultScreen.classList.add(
    "hidden"
  );

  timerElement.textContent =
    formatTime(
      state.duration
    );

  wpmElement.textContent =
    "0";

  accuracyElement.textContent =
    "100%";

  errorsElement.textContent =
    "0";

  typingHint.textContent =
    "Start typing to begin";

  typingHint.classList.remove(
    "hidden"
  );

  loadText();

  typingContainer.focus();

}


/* =========================
   FINISH
========================= */

function finishTest() {

  if (state.finished) {
    return;
  }

  state.finished = true;

  cancelAnimationFrame(
    state.timerFrame
  );

  timerElement.textContent =
    "0:00";

  showResults();

}


/* =========================
   RESULTS
========================= */

function showResults() {

  testScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );

  const wpm =
    calculateWPM();

  const accuracy =
    calculateAccuracy();

  finalWpm.textContent =
    `${wpm} WPM`;

  finalAccuracy.textContent =
    `${accuracy}%`;

  finalCorrect.textContent =
    state.correctCharacters;

  finalIncorrect.textContent =
    state.incorrectCharacters;

  finalErrors.textContent =
    state.errors;


  if (accuracy >= 98) {

    resultMessage.textContent =
      "Excellent accuracy. Try increasing your speed while keeping this consistency.";

  } else if (accuracy >= 94) {

    resultMessage.textContent =
      "Good balance between speed and accuracy. Keep practicing consistently.";

  } else if (accuracy >= 85) {

    resultMessage.textContent =
      "Your speed is developing. Focus on accuracy before pushing your speed higher.";

  } else {

    resultMessage.textContent =
      "Slow down and focus on accuracy. Speed will naturally follow.";

  }


  renderMistakes();

}


/* =========================
   MISTAKES
========================= */

function renderMistakes() {

  const mistakes =
    Object.entries(
      state.mistakes
    )
      .sort(
        (a, b) =>
          b[1] - a[1]
      )
      .slice(0, 8);


  if (!mistakes.length) {

    mistakeList.textContent =
      "No mistakes";

    return;

  }


  mistakeList.innerHTML = "";


  mistakes.forEach(
    ([character, count]) => {

      const item =
        document.createElement(
          "div"
        );

      item.className =
        "mistake-item";

      item.innerHTML = `
        <strong>
          ${escapeHTML(character)}
        </strong>

        <small>
          ${count} errors
        </small>
      `;

      mistakeList.appendChild(
        item
      );

    }
  );

}


function escapeHTML(value) {

  return value
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );

}


/* =========================
   DURATION
========================= */

document
  .querySelectorAll(".mode-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".mode-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.duration =
          Number(
            button.dataset.time
          );

        resetTest();

      }
    );

  });


/* =========================
   DIFFICULTY
========================= */

document
  .querySelectorAll(
    ".difficulty-btn"
  )
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".difficulty-btn"
          )
          .forEach(btn =>
            btn.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.difficulty =
          button.dataset.difficulty;

        resetTest();

      }
    );

  });


/* =========================
   THEME
========================= */

function setTheme(theme) {

  state.theme =
    theme;

  document.documentElement
    .setAttribute(
      "data-theme",
      theme
    );

  localStorage.setItem(
    "typing-theme",
    theme
  );

  const themeButton =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  themeIcon.textContent =
    theme === "dark" ? "☀" : "◐";

  const nextThemeLabel =
    theme === "dark"
      ? "Switch to light mode"
      : "Switch to dark mode";

  themeButton.setAttribute(
    "aria-label",
    nextThemeLabel
  );

  themeButton.setAttribute(
    "title",
    nextThemeLabel
  );

}


document
  .getElementById("themeToggle")
  .addEventListener(
    "click",
    () => {

      setTheme(
        state.theme === "dark"
          ? "light"
          : "dark"
      );

    }
  );


const savedTheme =
  localStorage.getItem(
    "typing-theme"
  );

if (
  savedTheme === "dark" ||
  savedTheme === "light"
) {

  setTheme(
    savedTheme
  );

}


/* =========================
   SETTINGS
========================= */

function openSettings() {

  settingsPanel.classList.add(
    "open"
  );

  overlay.classList.add(
    "open"
  );

}


function closeSettingsPanel() {

  settingsPanel.classList.remove(
    "open"
  );

  overlay.classList.remove(
    "open"
  );

}


settingsBtn.addEventListener(
  "click",
  openSettings
);

closeSettings.addEventListener(
  "click",
  closeSettingsPanel
);

overlay.addEventListener(
  "click",
  closeSettingsPanel
);


/* =========================
   BACKSPACE SETTING
========================= */

backspaceToggle.addEventListener(
  "change",
  () => {

    state.allowBackspace =
      backspaceToggle.checked;

  }
);


/* =========================
   SOUND
========================= */

soundToggle.addEventListener(
  "change",
  () => {

    state.soundEnabled =
      soundToggle.checked;

    /*
      Browsers often require an
      explicit user interaction
      before AudioContext can play.
    */

    if (state.soundEnabled) {
      createAudioContext();
    }

  }
);


/* =========================
   BUTTONS
========================= */

document
  .getElementById("restartBtn")
  .addEventListener(
    "click",
    resetTest
  );


document
  .getElementById("tryAgainBtn")
  .addEventListener(
    "click",
    resetTest
  );


document
  .getElementById("newTestBtn")
  .addEventListener(
    "click",
    resetTest
  );


/* =========================
   INIT
========================= */

loadText();

timerElement.textContent =
  formatTime(
    state.duration
  );

typingContainer.focus();