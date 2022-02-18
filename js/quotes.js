'use strict'

const quotes = [
    {
        quote: `"어디를 가든지 마음을 다해 가라."`,
        author: "공자",
    },
    {
        quote: `"우리가 노력 없이 얻는 거의 유일한 것은 노년이다."`,
        author: "글로리아 피처",
    },
    {
        quote: `"모든 논쟁의 뒤에는 누군가의 무지함이 있다."`,
        author: "루이스 D. 브랜다이스",
    },
    {
        quote: `"사랑은 무엇보다도 자신을 위한 선물이다."`,
        author: "장 아누이",
    },
    {
        quote: `"믿음이 부족하기 때문에 도전하길 두려워하는 바, 나는 스스로를 믿는다."`,
        author: "무하마드 알리",
    },
    {
        quote: `"나는 사랑으로 내가 이해하는 모든 것들을 이해한다."`,
        author: "레프 톨스토이",
    },
    {
        quote: `"남들이 우리와 다르게 살아가고 행동하며 경험한다는 사실을 알고 이에 기뻐하는 것이 사랑 아니고 무엇이겠는가?"`,
        author: "프레드리히 니체",
    },
    {
        quote: `"젊음은 한때 이지만, 철없음은 영원할 수 있다."`,
        author: "데이브 배리",
    },
    {
        quote: `"개선이란 무언가가 좋지 않다고 느낄 수 있는 사람들에 의해서만 만들어질 수 있다."`,
        author: "프레드리히 니체",
    },
    {
        quote: `"노력 없이 쓰인 글은 대개 감흥 없이 읽힌다."`,
        author: "사무엘 존슨",
    },

]

const quote = document.querySelector(".quote_quote");
const author = document.querySelector(".quote_author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
