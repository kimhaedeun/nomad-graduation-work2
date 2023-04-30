const quotes=[
    {
        quote: "부지런히 사고하다 보면 생각을 통해 사유할 수 있고 사유를 바탕으로 사색 하게 된다.",
        author: "숭",
    },
    {
        quote: "어려운 것을 쉽게 쉬운 것을 깊게 깊은 것을 유쾌하게",
        author: "숭",
    },
    {
        quote: "기울어진 운동장을 평평하게 만드는 것은 우리가 놓지 말아야 할 일",
        author: "숭",
    },
    {
        quote: "기록에 관하여, 글로 써두지 않으면 말은 증발한다. 공기에 흩어지는 말을 잡아 놓는게 글이다.말할 동안에 잊혀지는데 글로 적어두면 다시 그 말이 살아난다. 잊혀질만한 순간들을 다시 상기시켜줄 것이다. ",
        author: "숭",
    },
    {
        quote: "현재의 유산은 과거의 누군가에겐 최선이었다..",
        author: "숭",
    },
    {
        quote: "우리는 모두 각자의 방식으로, 각자의 언어로 자존감을 정의한다.",
        author: "숭",
    },
    {
        quote: "부지런히 사고하다 보면 생각을 통해 사유할 수 있고 사유를 바탕으로 사색 하게 된다.",
        author: "",
    },
    {
        quote: "나는 자유가 부족해서 오는 불편함보다는 자유가 넘쳐나서 오는 불편함을 겪겠다.",
        author: "숭",
    },
    {
        quote: "피곤함도 인생이에요. 비 오고 눈 오고 바람 불고 그런 것이에요. 당연하게 생각하고 하고 싶은 것을 해야 해요.",
        author: "숭",
    },
    {
        quote: "배움에 얼마나 시간이 드는지 '시간의 총량'을 자꾸 의식한다. 하지만 고민할 동안에도 시간은 흐른다. 우물쭈물할 시간이 없다. 무언가 하고 싶다면 그냥 시작해보자.",
        author: "숭",
    },
]

const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");

const todaysQuote=(quotes[Math.floor(Math.random()*quotes.length)]);

quote.innerText=todaysQuote.quote;
author.innerText=todaysQuote.author;
