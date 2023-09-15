var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

// < : 이전 달
// month -= 1;
// > : 이후 달
// month += 1;

const setCalendar = (year, month) => {
    // 현재 월 제목에 표시하자
    // html -> js
    var titleMonthDiv = document.getElementsByClassName("month")[0];

    //= `${month}월`;
    titleMonthDiv.innerHTML = `${month}월`;

    // 1~해당 월의 마직막 날짜까지 날짜 만들자
    // 해당 월의 마지막 날짜
    var thisMonthLastDate = new Date(year, month+1-1, 0).getDate(); // 10월의 전날 : 9월 30일
    for(let date = 1; date <= thisMonthLastDate; date++) {
        let dateItemDiv = document.createElement("div"); // <div></div>
        dateItemDiv.classList.add("date"); // <div class="date"></div>
        dateItemDiv.classList.add("item"); // <div class="item"></div>
        dateItemDiv.innerHTML = date;

        // dates.container에게 자식으로 붙이자
        datesContainerDiv.appendChild(dateItemDiv);
    }

    // 해당 월의 1일은 무슨 요일인가?
    var thisMonthFirstDay = new Date(year, month-1, 1).getDay();

}
setCalendar(year, month);


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