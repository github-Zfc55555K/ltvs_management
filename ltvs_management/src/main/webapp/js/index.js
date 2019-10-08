
//加载登录用户
window.onload = function () {
    // console.log(localStorage.getItem('username'));
    document.getElementById('userName').innerHTML = localStorage.getItem('username') + '<span class="caret"></span></a>';
}
function loadHtml(obj) {
    var _this = obj;
    var url = $(_this).attr("target");
    $('#content').html('<object type="text/html" data="' + url + '" width="100%" height="100%"></object>');
}
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return encodeURI(r[2]); 
    return null; 
} 
$(function () {
    function run() {
        var time = new Date();//获取系统当前时间
        var year = time.getFullYear();
        var month = time.getMonth() + 1;
        var date = time.getDate();//系统时间月份中的日
        var day = time.getDay();//系统时间中的星期值
        var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var week = weeks[day];//显示为星期几
        var hour = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();
        if (month < 10) {
            month = "0" + month;
        }
        if (date < 10) {
            date = "0" + date;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        $("#w").html(week);
        $("#ymd").html('<span>'+year+'</span>年'+month+'月'+date+'日');
        $('#hm').html(hour+':'+minutes+':'+seconds);
    }
    run();
    setInterval(run, 1000);
    
    /*左侧导航栏显示隐藏功能*/
    $(".subNav").click(function () {
        /*显示*/
        if ($(this).find("span:first-child").attr('class') == "title-icon glyphicon glyphicon-chevron-down") {
            $(this).find("span:first-child").removeClass("glyphicon-chevron-down");
            $(this).find("span:first-child").addClass("glyphicon-chevron-up");
            $(this).removeClass("sublist-down");
            $(this).addClass("sublist-up");
        }
        /*隐藏*/
        else {
            $(this).find("span:first-child").removeClass("glyphicon-chevron-up");
            $(this).find("span:first-child").addClass("glyphicon-chevron-down");
            $(this).removeClass("sublist-up");
            $(this).addClass("sublist-down");
        }
        // 修改数字控制速度， slideUp(500)控制卷起速度
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
    })
    /*左侧导航栏缩进功能*/
    $(".left-main .sidebar-fold").click(function () {

        if ($(this).parent().attr('class') == "left-main left-full") {
            $(this).parent().removeClass("left-full");
            $(this).parent().addClass("left-off");

            $(this).parent().parent().find(".right-product").removeClass("right-full");
            $(this).parent().parent().find(".right-product").addClass("right-off");

        }
        else {
            $(this).parent().removeClass("left-off");
            $(this).parent().addClass("left-full");

            $(this).parent().parent().find(".right-product").removeClass("right-off");
            $(this).parent().parent().find(".right-product").addClass("right-full");

        }
    })

    /*左侧鼠标移入提示功能*/
    $(".sBox ul li").mouseenter(function () {
        if ($(this).find("span:last-child").css("display") == "none") { $(this).find("div").show(); }
    }).mouseleave(function () { $(this).find("div").hide(); })

    var li = document.querySelectorAll('.navContent li');
    for (var i = 0; i < li.length; i++)
        li[i].onclick = function () {
            for (var i = 0; i < li.length; i++) li[i].className = '';
            this.className='active'
        }

    var lis = document.querySelectorAll(".aa");
   for(var i = 0;i < lis.length;i++){
       (function(i){
        lis[i].onclick = () =>{
            $("#area").html();
            var dz = lis[i].innerHTML;
            sessionStorage.setItem("dz",dz);
            $("#area").html(sessionStorage.getItem("dz")+'<span class="caret"></span>');
        }
       })(i); 
   }
   var litq = document.querySelectorAll(".sub-title");
   for(var i = 0;i < litq.length;i++){
       (function(i){
        litq[i].onclick = () =>{
            var tq = litq[i].innerHTML;
            var url = "modules/mdmap/ltvsMap.html";
            sessionStorage.setItem("tq",tq);
            $('#content').html('<object type="text/html" data="' + url + '" width="100%" height="100%"></object>');
        }
       })(i); 
   }

})

    
