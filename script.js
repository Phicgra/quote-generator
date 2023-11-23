let btn = document.querySelector('#new-quote');
let quote = document.querySelector(".quote");
let person = document.querySelector(".author");

const quotes = [
    {
        quote: "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
        person: " – Madeleine"
    },
    {
        quote: "We write to taste life twice, in the moment and in retrospect",
        person: " – Madeleine"
    },
    {
        quote: "If you don't have time Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
        person: " –  Mark Twain"
    },
    {
        quote: "One day I will find the right words, and they will be simple.",
        person: " –  Jack Kerouac, The Dharma Bums"
    },
    {
        quote: "Either write something worth reading or do something worth writing.",
        person: " – Benjamin Franklin"
    },
    {
        quote: "You never have to change anything you got up in the middle of the night to write.",
        person: " – Saul Bellow"
    },
    {
        quote: "Read, read, read. Read everything trash, classics, good and bad, and see how they do it. Just like a carpenter who works as an apprentice and studies the master. Read! You'll absorb it. Then write. If it's good, you'll find out. If it's not, throw it out of the window.",
        person: " – William Faulkner"
    }
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
