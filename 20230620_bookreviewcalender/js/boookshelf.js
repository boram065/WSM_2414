//.book-item > img 태그의 src 속성 초기화 하기

//HTML -> js
const bookItems = document.getElementsByClassName("book-item");
let i = 0;
for(let bookItem of bookItems) {
    //.book-item 하나씩 꺼내어 img 태그 가져오기
    const bookItemImg = bookItem.getElementsByTagName("img")[0];

    //data.js 에서 img 값 가져와서 img 태그에 적용하기
    bookItemImg.src = books[i].img;
    i++;
}