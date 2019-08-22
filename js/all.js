//----首頁----//
//AJAX
var index_xhr = new XMLHttpRequest();
index_xhr.open('get', 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms');
index_xhr.setRequestHeader("Accept", "application/json");
index_xhr.setRequestHeader("Authorization", "Bearer 3oEl3P7cj0TenuUy2nuIUCPgVdEd1jTpCWLSJ1RcN2fJy5DoBHSP8MYh5MHL");
index_xhr.send();
index_xhr.onload = function () {
    var data = JSON.parse(index_xhr.responseText);
    var allRoomData = data.items;

    //DOM
    var roomList = document.querySelector('.roomList');
    //渲染所有房間
    function showRooms() {
        var len = allRoomData.length;
        var str = '';
        for (i = 0; i < len; i++) {
            str +=
                '<li class="room"><div class="picbox"><img src="'
                + allRoomData[i].imageUrl +
                '"><p class="roomTitle">'
                + allRoomData[i].name +
                '</p><div class="hideInfo"><a href="../'
                + allRoomData[i].id + '.html" class="hideTitle">'
                + allRoomData[i].name +
                '</a><div class="pricebox"><p class="day">平日（一～四）</p><p class="price">$NT '
                + allRoomData[i].normalDayPrice
                + ' / 晚</p></div><div class="pricebox"><p class="day">假日（五～日）</p><p class="price">$NT '
                + allRoomData[i].holidayPrice
                + ' / 晚</p></div></div></div></li>'
        }
        roomList.innerHTML = str;
    }
    showRooms();

    //全部房源按鈕
    //DOM
    var allRoomsBtn = document.querySelector('.allRooms');
    //監聽
    allRoomsBtn.addEventListener('click', showRooms);

    //分類各類別房間
    var seletedArr = [allRoomData[1], allRoomData[4]];
    var praiseArr = [allRoomData[2], allRoomData[3]];
    var specialArr = [allRoomData[3], allRoomData[5]];
    var affordableArr = [allRoomData[0]];
    //DOM
    var selectedR = document.querySelector('.selectedRooms');
    var praiseR = document.querySelector('.praiseRooms');
    var specialR = document.querySelector('.specialRooms');
    var affordableR = document.querySelector('.affordableRooms');
    //監聽
    selectedR.addEventListener('click', showSelectedR);
    praiseR.addEventListener('click', showPraiseR);
    specialR.addEventListener('click', showSpecialR);
    affordableR.addEventListener('click', showAffordableR);
    //渲染各類房間
    function showSelectedR() {
        str = '';
        for (i = 0; i < seletedArr.length; i++) {
            str +=
                '<li class="room"><div class="picbox"><img src="'
                + seletedArr[i].imageUrl +
                '"><p class="roomTitle">'
                + seletedArr[i].name +
                '</p><div class="hideInfo"><a href="../'
                + seletedArr[i].id + '.html" class="hideTitle">'
                + seletedArr[i].name +
                '</a><div class="pricebox"><p class="day">平日（一～四）</p><p class="price">$NT '
                + seletedArr[i].normalDayPrice
                + ' / 晚</p></div><div class="pricebox"><p class="day">假日（五～日）</p><p class="price">$NT '
                + seletedArr[i].holidayPrice
                + ' / 晚</p></div></div></div></li>'
        }
        roomList.innerHTML = str;
    }//精選房源 function 結束

    function showPraiseR() {
        str = '';
        for (i = 0; i < praiseArr.length; i++) {
            str +=
                '<li class="room"><div class="picbox"><img src="'
                + praiseArr[i].imageUrl +
                '"><p class="roomTitle">'
                + praiseArr[i].name +
                '</p><div class="hideInfo"><a href="../'
                + praiseArr[i].id + '.html" class="hideTitle">'
                + praiseArr[i].name +
                '</a><div class="pricebox"><p class="day">平日（一～四）</p><p class="price">$NT '
                + praiseArr[i].normalDayPrice
                + ' / 晚</p></div><div class="pricebox"><p class="day">假日（五～日）</p><p class="price">$NT '
                + praiseArr[i].holidayPrice
                + ' / 晚</p></div></div></div></li>'
        }
        roomList.innerHTML = str;
    } // 好評房源 function 結束

    function showSpecialR() {
        str = '';
        for (i = 0; i < specialArr.length; i++) {
            str +=
                '<li class="room"><div class="picbox"><img src="'
                + specialArr[i].imageUrl +
                '"><p class="roomTitle">'
                + specialArr[i].name +
                '</p><div class="hideInfo"><a href="../'
                + specialArr[i].id + '.html" class="hideTitle">'
                + specialArr[i].name +
                '</a><div class="pricebox"><p class="day">平日（一～四）</p><p class="price">$NT '
                + specialArr[i].normalDayPrice
                + ' / 晚</p></div><div class="pricebox"><p class="day">假日（五～日）</p><p class="price">$NT '
                + specialArr[i].holidayPrice
                + ' / 晚</p></div></div></div></li>'
        }
        roomList.innerHTML = str;
    } //特殊房源 function 結束

    function showAffordableR() {
        str = '';
        for (i = 0; i < affordableArr.length; i++) {
            str +=
                '<li class="room"><div class="picbox"><img src="'
                + affordableArr[i].imageUrl +
                '"><p class="roomTitle">'
                + affordableArr[i].name +
                '</p><div class="hideInfo"><a href="../'
                + affordableArr[i].id + '.html" class="hideTitle">'
                + affordableArr[i].name +
                '</a><div class="pricebox"><p class="day">平日（一～四）</p><p class="price">$NT '
                + affordableArr[i].normalDayPrice
                + ' / 晚</p></div><div class="pricebox"><p class="day">假日（五～日）</p><p class="price">$NT '
                + affordableArr[i].holidayPrice
                + ' / 晚</p></div></div></div></li>'
        }
        roomList.innerHTML = str;
    } //平價房源結束


}//onload function 結束



