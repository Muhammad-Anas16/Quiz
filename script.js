const data = [
    {
        qno: 1,
        question: "What does HTML stand for?",
        opt: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
        ],
        correct: "Hyper Text Markup Language",
    },
    {
        qno: 2,
        question: "Which of the following is used to style a web page?",
        opt: ["HTML", "CSS", "JavaScript", "Python"],
        correct: "CSS",
    },
    {
        qno: 3,
        question: "Inside which HTML element do we put the JavaScript?",
        // opt: ["<javascript>", "<js>", "<script>", "<scripting>"],
        opt: ["javascript", "js", "script", "scripting"],
        // correct: "<script>",
        correct: "script",
    },
    {
        qno: 4,
        question: "Which CSS property controls the text size?",
        opt: ["font-size", "text-style", "font-style", "text-size"],
        correct: "font-size",
    },
    {
        qno: 5,
        question: "How do you create a function in JavaScript?",
        opt: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "myFunction(): function"
        ],
        correct: "function myFunction()",
    },
    {
        qno: 6,
        question: "What is the correct way to comment in HTML?",
        opt: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "# This is a comment"
        ],
        correct: "<!-- This is a comment -->",
    },
    {
        qno: 7,
        question: "Which property is used to change the background color in CSS?",
        opt: ["color", "background-color", "bgcolor", "background"],
        correct: "background-color",
    },
    {
        qno: 8,
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        opt: [
            "msg('Hello World');",
            "alert('Hello World');",
            "msgBox('Hello World');",
            "alertBox('Hello World');"
        ],
        correct: "alert('Hello World');",
    },
    {
        qno: 9,
        question: "Which tag is used to create a hyperlink in HTML?",
        // opt: ["<link>", "<a>", "<href>", "<hyperlink>"],
        opt: ["link", "a", "href", "hyperlink"],
        // correct: "<a>",
        correct: "a",
    },
    {
        qno: 10,
        question: "Which CSS property is used to make the text bold?",
        opt: ["font-style", "font-weight", "text-bold", "weight"],
        correct: "font-weight",
    },
    {
        qno: 11,
        question: "How do you declare a JavaScript variable?",
        opt: ["var myVariable;", "variable myVariable;", "v myVariable;", "declare myVariable;"],
        correct: "var myVariable;",
    },
    {
        qno: 12,
        question: "Which HTML element is used for the largest heading?",
        // opt: ["<heading>", "<h6>", "<h1>", "<head>"],
        opt: ["heading", "h6", "h1", "head"],
        // correct: "<h1",
        correct: "h1",
    },
    {
        qno: 13,
        question: "How can you add a comment in CSS?",
        opt: [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->",
            "# This is a comment"
        ],
        correct: "/* This is a comment */",
    },
    {
        qno: 14,
        question: "Which method can be used to find the length of a string in JavaScript?",
        opt: [".size()", ".length()", ".getLength()", ".len()"],
        correct: ".length()",
    },
    {
        qno: 15,
        question: "What is the correct HTML for inserting an image?",
        // opt: [
        //     "<img src='image.jpg'>",
        //     "<image src='image.jpg'>",
        //     "<img href='image.jpg'>",
        //     "<img link='image.jpg'>"
        // ],
        opt: [
            " img src='image.jpg' ",
            " image src='image.jpg' ",
            " img href='image.jpg' ",
            " img link='image.jpg' "
        ],
        // correct: "<img src='image.jpg'>",
        correct: "img src='image.jpg'",
    },
    {
        qno: 16,
        question: "Which CSS property is used to set the spacing between lines of text?",
        opt: ["line-height", "letter-spacing", "spacing", "text-spacing"],
        correct: "line-height",
    },
    {
        qno: 17,
        question: "Which of the following is the correct syntax to print a message in the console in JavaScript?",
        opt: ["'console.log('Hello');'", "'log.console('Hello');'", "'print('Hello');'", "'echo('Hello');'"],
        correct: "'console.log('Hello');'",
    },
    {
        qno: 18,
        question: "What does the <br> tag in HTML do?",
        opt: [
            "Makes text bold",
            "Adds a break between lines",
            "Creates a horizontal line",
            "None of the above"
        ],
        correct: "Adds a break between lines",
    },
    {
        qno: 19,
        question: "How do you select an element with id 'demo' in CSS?",
        opt: ["#demo", ".demo", "demo", "*demo"],
        correct: "#demo",
    },
    {
        qno: 20,
        question: "Which symbol is used for single-line comments in JavaScript?",
        opt: ["//", "/* */", "#", "<!-- -->"],
        correct: "//",
    },
    {
        qno: 21,
        question: "Which HTML attribute specifies an alternate text for an image?",
        opt: ["src", "title", "alt", "longdesc"],
        correct: "alt",
    },
    {
        qno: 22,
        question: "What is the default value of the position property in CSS?",
        opt: ["relative", "absolute", "static", "fixed"],
        correct: "static",
    },
    {
        qno: 23,
        question: "Which JavaScript method is used to round a number to the nearest integer?",
        opt: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.rnd()"],
        correct: "Math.round()",
    },
    {
        qno: 24,
        question: "What does the <ul> tag in HTML represent?",
        opt: [
            "A bold text list",
            "An ordered list",
            "An unordered list",
            "A description list"
        ],
        correct: "An unordered list",
    },
    {
        qno: 25,
        question: "Which CSS property is used to control the layout of an element?",
        opt: ["float", "position", "display", "layout"],
        correct: "display",
    },
    {
        qno: 26,
        question: "How do you add an event listener in JavaScript?",
        opt: [
            "element.attachEvent()",
            "element.addEventListener()",
            "element.setEventListener()",
            "element.addListener()"
        ],
        correct: "element.addEventListener()",
    },
    {
        qno: 27,
        question: "Which HTML tag is used to define a table row?",
        // opt: ["<tr>", "<td>", "<th>", "<table-row>"],
        opt: ["tr", "td", "th", "table-row"],
        // correct: "<tr>",
        correct: "tr",
    },
    {
        qno: 28,
        question: "Which CSS property is used to hide an element?",
        opt: ["visibility", "display", "opacity", "hide"],
        correct: "display",
    },
    {
        qno: 29,
        question: "Which JavaScript keyword is used to define a constant?",
        opt: ["var", "let", "constant", "const"],
        correct: "const",
    },
    {
        qno: 30,
        question: "What does DOM stand for?",
        opt: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Model",
            "Data Oriented Model"
        ],
        correct: "Document Object Model",
    },
];

let h2 = document.getElementById("h2");
let optBox = document.getElementById("opt");
let sec1 = document.getElementById("sec1");
let sec2 = document.getElementById("sec2");

let index = 0;
let score = 0;

let checkScore = (e) => {

    if(e.target.textContent == data[index - 1].correct){
        score++
        console.log(true);
        console.log("score", score);
        return
    }
    console.log(false);
    
}

let questionShow = () => {

    sec1.style.display = "none";
    sec2.style.display = "flex";

    optBox.innerHTML = "";
    h2.innerHTML = data[index].question;

    for (var i in data[index].opt) {
        var list = document.createElement("button");
        list.setAttribute("class", "ansItem");
        list.setAttribute("onClick", "checkScore(event)");
        list.setAttribute("onClick", "questionShow()");
        list.innerHTML = data[index].opt[i]
        optBox.appendChild(list);
    }
    index++
};