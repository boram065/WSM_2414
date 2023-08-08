// URL book에 해당하는 parameter 값 읽어보자(string)
var url = window.location.href; //현재 페이지 주소 가져오기
var book = url.substring(url.indexOf("=") + 1); //페이지 주소에서 '=' 다음부터 출력하기
console.log(`book : ${book}`);

// book 값(string) -> bookId(number) 변환하자
// books 를 돌면서 bookId(number)와 같은 id값의 책을 가져오자

// console.log("book : ");