//單一房型 API 開始//
//AJAX
var xhr = new XMLHttpRequest();
xhr.open('get', 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz');
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer 3oEl3P7cj0TenuUy2nuIUCPgVdEd1jTpCWLSJ1RcN2fJy5DoBHSP8MYh5MHL");
xhr.send();
xhr.onload = function () {
    var data = JSON.parse(xhr.responseText);
    var roomdata = data.room;

    //渲染圖片
    function addPics() {
        var pic = roomdata[0].imageUrl;
        var picbox = document.querySelector('.picbox');
        var content = '';
        for (i = 0; i < pic.length; i++) {
            content +=
                '<a href="' + pic[i]
                + '"data-fancybox="gallery" class="image' + (i + 1) + '"><img src="'
                + pic[i] + '"></a>'
        }
        picbox.innerHTML = content;
        document.querySelector('.image1').style.width = "1000px";
        document.querySelector('.image2').style.width = "440px";
        document.querySelector('.image3').style.width = "440px";
    }
    addPics();

    //渲染房型簡介欄
    function info_bar() {
        var barInfo = roomdata[0].descriptionShort; //物件
        var checkTime = roomdata[0].checkInAndOut; //物件
        var bar = document.querySelector('.info_bar');
        var str = '<div class="basicInfo"><p>房間人數：</p><p class="info_text">'
            + barInfo.GuestMin + ' ~ '
            + barInfo.GuestMax + ' 人</p></div><div class="basicInfo"><p> 床型：</p><p class="info_text">'
            + barInfo.Bed + '</p></div><div class="basicInfo"><p>房間大小：</p><p class="info_text">'
            + barInfo.Footage + ' 平方公尺</p></div><div class="basicInfo"><p>衛浴數量：</p><p class="info_text">1 間</p></div ><div class="check"><p>CheckIn 時間</p><p class="info_text">'
            + checkTime.checkInEarly + ' ~ '
            + checkTime.checkInLate + '</p></div><div class="check"><p>CheckOut 時間</p><p class="info_text">'
            + checkTime.checkOut + '</p></div> '
        bar.innerHTML = str;
    }
    info_bar();

    //渲染描述欄
    function addDesc() {
        var desc = document.querySelector('.desc');
        var str = '<h2>' + roomdata[0].name + '</h2><p>'
            + roomdata[0].description + '</p>'
        desc.innerHTML = str;
    }
    addDesc();

    //渲染設備欄: html 先寫好所有項目,跑迴圈+判斷,如果 true 就加樣式
    function lightFacility() {
        //把API裡設施物件的值都存成陣列(因為原始資料裡有dash, 編譯器format之後會讀錯)
        var amenities = roomdata[0].amenities; //物件
        var faciArr = [];
        for (var prop in amenities) {
            faciArr.push(amenities[prop]);
        }
        console.log(faciArr);
        //選取設備DOM
        var wifi = document.querySelector('#Wi-Fi');
        var minibar = document.querySelector('#Mini-Bar');
        var tv = document.querySelector('#Television');
        var fridge = document.querySelector('#Refrigerator');
        var view = document.querySelector('#Great-View');
        var child = document.querySelector('#Child-Friendly');
        var breakfast = document.querySelector('#Breakfast');
        var roomservice = document.querySelector('#Room-Service');
        var airCon = document.querySelector('#Air-Conditioner');
        var sofa = document.querySelector('#Sofa');
        var smoke = document.querySelector('#Smoke-Free');
        var pet = document.querySelector('#Pet-Friendly');

        //判斷條件
        if (faciArr[0]) {
            wifi.classList.add("active");
        }
        if (faciArr[2]) {
            minibar.classList.add("active");
        }
        if (faciArr[4]) {
            tv.classList.add("active");
        }
        if (faciArr[6]) {
            fridge.classList.add("active");
        }
        if (faciArr[8]) {
            view.classList.add("active");
        }
        if (faciArr[10]) {
            child.classList.add("active");
        }
        if (faciArr[1]) {
            breakfast.classList.add("active");
        }
        if (faciArr[3]) {
            roomservice.classList.add("active");
        }
        if (faciArr[5]) {
            airCon.classList.add("active");
        }
        if (faciArr[7]) {
            sofa.classList.add("active");
        }
        if (faciArr[9]) {
            smoke.classList.add("active");
        }
        if (faciArr[11]) {
            pet.classList.add("active");
        }


    }
    lightFacility();

    //渲染.booking中的價格
    function addPrice() {
        var normalData = roomdata[0].normalDayPrice;
        var holidayData = roomdata[0].holidayPrice;
        var priceDom = document.querySelector('.pricebar');
        var str = '<div class="pricebox"><p class="day">平日(一~四)</p><p class="price">$NT '
            + normalData + ' / 晚</p></div><span class="split_line"></span><div class="pricebox"><p class="day">假日(五~日)</p><p class="price">$NT '
            + holidayData + ' / 晚</p></div>'
        priceDom.innerHTML = str;
    }
    addPrice();


} //單一房型API onload func 結束 //


//---訂房API---//
//datepicker取值->區分假日價跟平日價並加總
//監聽: 所有欄位都沒空白->按下按鈕啟動函式->執行AJAX傳送資料->執行成功或失敗就回傳訊息
//已預定的時間要在datepicker上顯示disabled