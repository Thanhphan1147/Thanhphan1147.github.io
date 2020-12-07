function calcul_date() {
    let date = 1606588320;
    let time_stamp = Math.floor(Date.now() / 1000);
    // console.log("-------");
    // console.log((time_stamp - date));
    let date_since = Math.floor((time_stamp - date) / 86400);
    // console.log(date_since);
    let dt =  ((time_stamp - date) - (date_since * 86400)) // NB seconds left
    // console.log((time_stamp - date));
    // console.log(date_since * 86400);
    // console.log(dt);
    let h = Math.floor(dt / 3600);
    let m = Math.floor((dt - h*3600)/60 );
    let s = ((dt-h*3600) - m*60)
    let string = "Số ngày đợi thiệp mời cưới của bạn Mai: " + date_since + " ngày " + (h) + " giờ " + m + " phút " + s + " giây";
    document.getElementById("display").innerHTML = string;
}

setInterval(calcul_date, 1000);

function shiba() {
    // let count = Math.floor(Math.random()*100)
    let url = "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false";

    const Http = new XMLHttpRequest();
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }
}
