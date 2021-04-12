const testimonials = [
    {
        id: 1,
        text: "'Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec'",
        author: "Edward Newgate",
        job: "Founder Circle"
    },
    {
        id: 2,
        text: "'Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec'",
        author: "John Smith",
        job: "Founder Rectangle"
    },
    {
        id: 3,
        text: "'Quisque in lacus a urna fermentum euismod.'",
        author: "Alice Cooper",
        job: "Founder Ellipse"
    },
    {
        id: 4,
        text: "'Morbi blandit sit amet turpis nec'",
        author: "Anna Thompson",
        job: "Founder Square"
    },
]

let text = document.getElementById("text");
let author = document.getElementById("author");
let job = document.getElementById("job");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentItem = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    showTestimonial()
});

function showTestimonial() {
    const item = testimonials[currentItem];
    text.innerHTML = item.text;
    author.innerHTML = item.author;
    job.innerHTML = item.job;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > testimonials.length - 1) {
        currentItem = 0;
    }
    showTestimonial()
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = testimonials.length - 1;
    }
    showTestimonial()
});