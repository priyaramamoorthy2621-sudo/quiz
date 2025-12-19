var quiz = [
    {
        q: "1. What is HTML?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark",
            "Home Tool Markup"
        ],
        answer: 0
    },
    {
        q: "2. CSS is used for?",
        options: ["Database", "Styling", "Service", "Logic"],
        answer: 1
    },
    {
        q: "3. JavaScript is a?",
        options: ["Markup Language", "Styling Language", "Programming Language", "Database"],
        answer: 2
    },
    {
        q: "4. Which tag is used to create a link?",
        options: ["src", "href", "link", "url"],
        answer: 1
    },
    {
        q: "5. How do you select an ID in CSS?",
        options: [".header", "#header", "*header", "header"],
        answer: 1
    },
    {
        q: "6. Which property adds space inside an element?",
        options: ["margin", "padding", "border", "outline"],
        answer: 1
    },
    {
        q: "7. Which keyword is block scoped?",
        options: ["var", "let", "static", "function"],
        answer: 1
    },
    {
        q: "8. Which method adds element at end of array?",
        options: ["pop()", "shift()", "push()", "unshift()"],
        answer: 2
    },
    {
        q: "9. Largest HTML heading tag?",
        options: ["h6", "h3", "h1", "heading"],
        answer: 2
    },
    {
        q: "10. Difference between == and === ?",
        options: [
            "== checks value only, === checks value & type",
            "=== checks value only",
            "Both same",
            "Used for strings only"
        ],
        answer: 0
    }
];

var index = 0;
var score = 0;

function loadQuestion() {
    document.getElementById("question").innerHTML = quiz[index].q;

    var optionsHTML = "";
    for (var i = 0; i < quiz[index].options.length; i++) {
        optionsHTML +=
            '<label>' +
            '<input type="radio" name="option" value="' + i + '">' +
            quiz[index].options[i] +
            '</label><br>';
    }

    document.getElementById("options").innerHTML = optionsHTML;
}

function nextQuestion() {
    var selected = document.querySelector('input[name="option"]:checked');

    if (selected == null) {
        alert("Please select an answer");
        return;
    }

    if (selected.value == quiz[index].answer) {
        score = score + 1;
    }

    index = index + 1;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            "<h2>Your Score: " + score + " / " + quiz.length + "</h2>";
    }
}

loadQuestion();
