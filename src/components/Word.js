var programming_languages = [
    "python",
    "c",
    "csharp",
    "fortran",
    "java",
    "javascript",
    "php",
    "r",
    "matlab",
    "haskell",
    "ruby",
    "cobol",
    "emojicode",
    "basic",
    "lisp",
    "perl",
    "prolog",
    "scala"
]

function randomWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }