// // sayHello라는 함수를 만들고 함수를 호출하면 alert창 띄우기
function sayHello() {
    alert("안녕!!");
}
// sayHello();

// 1. HTML -> js
// 햄버거 메뉴 -> navToggleDiv
// 햄버거 메뉴 i(아이콘) -> navToggleI
// .nav-list -> navListUl
// const navToggleDiv = document.getElementById("nav_toggle");
const navToggleI = nav_toggle.getElementsByTagName("i")[0]; //nav_toggle 요소안에 찾기
const navListUl = document.getElementsByClassName("nav-list")[0];

// 2. Event Handling
// 햄버거 메뉴 클릭하면, 햄버거 메뉴 i "bi-bi-list" -> X "bi bi-x-lg"
// 햄버거 메뉴 클릭하면, .nav-list에 .show-menu 보여주기 => 보여주기 <-> 안보여주기

/* 시험에 나옴 */
//함수 호출 ㄴㄴ, 함수 정의만 ㄱㄴ
// nav_toggle.onclick = sayHello;
// function과 변수 대신 '=>' 로 표현 ㄱㄴ
nav_toggle.onclick = () => alert("안녕!"); // => 바로 실행되지 않음
// nav_toggle.onclick = alert("안녕!"); => 바로 실행

//-------------------------------------------------------------------------------
//HTML -> js
// //id
// const navToggleDiv = document.getElementById("nav-toggle");
// nav_toggle //js 변수규칙은 반드시 지켜야함

// //class
// const navToggleDiv = document.getElementsByClassName("nav-toggle")[0];

// //tag
// const navToggleDiv = document.getElementsByTagName("div")[0];

// //QuerySelector, QuerySelectorAll
// const navToggleDiv = document.querySelector("#nav_toggle");
// const navToggleDiv = document.querySelectorAll(".nav-toggle")[0];
// const navToggleDiv = document.querySelectorAll("div")[0];