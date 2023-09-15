var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;

const datesContainerDiv = document.getElementsByClassName("dates container")[0];

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

    // 1일을 해당 요일로 이동하자
    let firstDateDiv = datesContainerDiv.querySelector(".date.item:nth-child(1)");
    // css : .date.item:nth-child(1) {grid-column-start: 6;}
    // 1일의 요일 구하자 year, month -> month 1일의 요일 :  9월 : 5
    var firstDateDay = new Date(year, month-1, 1).getDay();
    firstDateDiv.style.gridColumnStart = firstDateDay+1;

    // 토요일 : 파란색 글자로
    let saturdayFirstDate = 2;
    let saturdayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${saturdayFirstDate}`);
    for (let saturdayDiv of saturdayDivs) {
        // .date.item:nth-child(7n+2) {color:blue;}
        saturdayDiv.style.color = "blue";
    }

    // 일요일 : 빨간색 글자로
    let sundayFirstDate = 3;
    let sundayDivs = datesContainerDiv.querySelectorAll(`.date.item:nth-child(7n+${sundayFirstDate})`);
    for (let sundayDiv of sundayDivs) {
        // .date.item:nth-child(7n+3) {color:red;}
        sundayDiv.style.color = "red";
    }

}
setCalendar(year, month);

// < : 이전 달
const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    let prevMonth = new Date(year, month-1);
    year = prevMonth.getFullYear();
    month = prevMonth.getMonth()+1;
    setCalendar(year, month);
}
// leftDiv.addEventListener("click", () => console.log("이전 달"));

// > : 이후 달
let rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
}

// 해당 월의 마자막 요일