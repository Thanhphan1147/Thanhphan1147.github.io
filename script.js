function calcul_date() {
    var date = 1606521600;
    var time_stamp = Math.floor(Date.now() / 1000);
    // console.log(time_stamp);
    // console.log((time_stamp - date));
    var date_since = Math.floor((time_stamp - date) / 86400);
    // console.log(date_since);
    var date =  new Date((time_stamp-date) * 1000).toISOString().substr(11, 8)
    // console.log(date);
    var h = date.substr(0,2);
    var m = date.substr(3,2);
    var s = date.substr(6,2);
    var string = "Số ngày đợi thiệp mời cưới của bạn Mai: " + date_since + " ngày " + (h - date_since * 24) + " giờ " + m + " phút " + s + " giây";
    console.log(string);
    document.getElementById("display").innerHTML = string;
}   

setInterval(calcul_date, 1000);
