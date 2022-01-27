const quotes = [
    { 
        quote : " its first awkjdbajkwdbajkwbd",
        author : " wang jong wook",
    },
    {
        quote : "its seconds akwjdnjkawbdjkawbd",
        author : " wang jong wook",
    },
    {
        quote : "its third akjwdkawjbdkjabwdjkabw",
        author : " wang jong wook",
    },
    { 
        quote : " its first awkjdbajkwdbajkwbd",
        author : " wang jong wook",
    },
    {
        quote : "its seconds akwjdnjkawbdjkawbd",
        author : " wang jong wook",
    },
    {
        quote : "its third akjwdkawjbdkjabwdjkabw",
        author : " wang jong wook",
    },
    { 
        quote : " its first awkjdbajkwdbajkwbd",
        author : " wang jong wook",
    },
    {
        quote : "its seconds akwjdnjkawbdjkawbd",
        author : " wang jong wook",
    },
    {
        quote : "its third akjwdkawjbdkjabwdjkabw",
        author : " wang jong wook",
    },
    {
        quote : "its third akjwdkawjbdkjabwdjkabw",
        author : " wang jong wook",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
