var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

// < : 이전 달
month -= 1;
// > : 이후 달
month += 1;

const setCalendar = (year, month) => {
    console.log(year, month);
}
setCalendar(year, month);


// 해당 월의 마지막 날짜
// 9월 마지막 날짜
var thisMonthLastDate = new Date(year, month+1-1, 0).getDate(); // 10월의 전날 : 9월 30일

// 해당 월의 1일은 무슨 요일인가?
var thisMonthFirstDay = new Date(year, month-1, 1).getDay();

console.log(thisMonthLastDate, thisMonthFirstDay);


// switch(thisMonthFirstDay) {
//     case 0 : thisMonthFirstDay = "일요일"; break;
//     case 1 : thisMonthFirstDay = "월요일"; break;
//     case 2 : thisMonthFirstDay = "화요일"; break;
//     case 3 : thisMonthFirstDay = "수요일"; break;
//     case 4 : thisMonthFirstDay = "목요일"; break;
//     case 5 : thisMonthFirstDay = "금요일"; break;
//     case 6 : thisMonthFirstDay = "토요일"; break;
// }

// 해당 월의 마자막 요일