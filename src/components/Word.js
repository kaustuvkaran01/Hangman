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
    "scala",
    "m",
    "perl",
    "solidity",
    "lua",
    "typescript",
    "bash",
    "julia",
    "sql",
    "swift",
    "unity",
    "kotlin",
    "dart",
]

function randomWord() {
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }
