// URL book에 해당하는 parameter 값 읽어보자(string)
// var url = window.location.href; //현재 페이지 주소 가져오기
// var book = url.substring(url.indexOf("=") + 1); //페이지 주소에서 '=' 다음부터 출력하기
let url = new URL(location.href);
let book = url.searchParams.get("book");
// book이 null이면 책장으로 가자
if(book === null) {
    location.href = 'index.html';
    // window.open('index.html', "_top"); // _top : 현재 창에 열기
}
console.log(`book : ${book} type : ${typeof book}`); // "3" string

// book 값(string) -> bookId(number) 변환하자 = "3" -> 3
let bookId = Number(book);
console.log(`bookId : ${bookId} type : ${typeof bookId}`); // 3 number

// books 를 돌면서 bookId(number)와 같은 id값의 책을 가져오자
let bookData;
for (let bookOne of books) {
    if(bookId === bookOne.id) {     // === : 값과 자료형 타입 둘 다 맞아야 True
        bookData = bookOne;
        break;
    }
}

// 제목 보여주자
let title = bookData.title;
console.log(title);

let author = bookData.author;
let publisher = bookData.publisher;
let bookImg = bookData.img;
console.log(title, author, publisher, bookImg);

// HTML 요소를 js 변수로 가져오기
// js 변수.innerHTML
const bookImgDiv = document.getElementsByClassName("book-image")[0];
bookImgDiv.innerHTML = `<img src = "${bookImg}" />`; // div에 이미지 넣기

// HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = title;

// titleDiv에 title 속성에 값으로 title를 넣자
// titleDiv.setAttrubute(속성명, 속성값);
titleDiv.setAttribute("title", title); // titleDiv.title = title; <= 이것도 가능

const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;

const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;

// 읽은 날짜 : 임시로 오늘의 날짜 표시하자
// 오늘의 날짜 구하자
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
// 사람이 알아보는 형식으로 바꾸자
let dateString = `${year}년 ${month}월 ${date}일`;
// HTML -> js
const readDateDiv = document.getElementsByClassName("read-date")[1];
// 오늘의 날짜 값 넣자
readDateDiv.innerHTML = dateString;