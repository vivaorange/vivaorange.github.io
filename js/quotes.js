const quotes = [
  {
    quote: "가는 말이 고우면 얕본다",
    author: "거성",
  },
  {
    quote: "세 번 참으면 호구된다",
    author: "그레이트박",
  },
  {
    quote: "어려운 길은 길이 아니다",
    author: "하찮은",
  },
  {
    quote: "잘생긴 놈은 얼굴값하고 못생긴놈은 꼴값한다",
    author: "고유명수",
  },
  {
    quote: "늦었다고 생각한 때가 진짜 늦은거다 그러니 지금 당장 시작하라",
    author: "꼴뚜기",
  },
  {
    quote: "일찍 일어나는 새가 피곤하다",
    author: "명수세끼",
  },
  {
    quote: "포기하면 편하다 안 되면 말고",
    author: "바다의왕자",
  },
  {
    quote: "즐길수 없으면 피해라",
    author: "명수옹",
  },
  {
    quote: "헌신하면 헌신짝 된다",
    author: "미래소년",
  },
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요가 없다",
    author: "민두래곤",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
