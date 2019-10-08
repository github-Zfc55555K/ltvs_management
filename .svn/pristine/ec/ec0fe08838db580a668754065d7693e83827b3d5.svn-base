/**
 * 定时任务
 */
// var websocket = new WebSocket("ws://"+document.location.host+"/ltvs_management/websocket");
// var websocket = new WebSocket("ws://"+document.location.host+"/websocket");
// window.onbeforeunload = function () { websocket.close(); }
var log = "";
var progress = 0;
var progress2 = 0;
var progress3 = 0;
var isUpdate = 0;
// websocket.onmessage = function (msg) {
//     var m = eval("(" + msg.data + ")");
//     if (m.msg != "" && m.msg != null) {
//         var mm = m.msg.replace(/\n/g, "<br>");
//         log = mm;
//     }
//     if (m.pro != "" && m.pro != null) {
//         progress = parseInt(m.pro);
        // if (progress == 100) {
        //     executeJob(4);
        //     websocket.close(); 
        // }
        // $("#progress1").width(progress + "%");
        // $("#progressText").html(progress + "%");

//     }
// };
$(document).ready(function () {
    init();
});
var layer = null;
layui.use('layer', function () {
    layer = layui.layer;
});
var OPEN_HEIGHT = window.screen.height;
var OPEN_WIDTH = window.screen.width;
function init() {
    $.ajax({
        url: "/ltvs_management/getAllInfo",
        success: function (result) {
            var res = eval('(' + result + ')');
            if (res.length > 0) {
                $("#jobName").html(res[0].qtname);
                $("#jobInfo").html(res[0].qtinfo);
                $("#cron").html(res[0].qttime);
                $("#cronname").val(res[0].qtcron);
                switch (res[0].qtstatus) {
                    case "1": $("#jobStatus").html('<span class="label label-warn label-mini" >运行'); $("#status").html(res[0].qtstatus);
                    case "2": $("#jobStatus").html('<span class="label label-success label-mini" >暂停'); $("#status").html(res[0].qtstatus);
                    case "3": $("#jobStatus").html('<span class="label label-success label-mini" >停止'); $("#status").html(res[0].qtstatus);
                }
            } else {
                return;
            }
        },
        error: function () {
            console.log("初始化信息错误");
        }
    });
    $.ajax({
        url: "/ltvs_management/getDbById",
        data : {
            "dbxId" : "pdx002"
        },
        success: function (result) {
            var res = eval('(' + result + ')');
            for(var i = 0; i < res.length;i++){
                if(res[i].dbbs == 'db226'){
                    if(res[i].xwdm != '1'){
                        isUpdate = 1;
                        return;
                    }
                }
            }
        },
        error: function () {
            console.log("初始化信息错误");
        }
    });
}

var timer = null;
var time2 = null;
var time3 = null;
function executeJob2(status){
    if(status == 1){
        log += "开始辨识任务<br>范围：单个台区<br>";
        progress2 = 0;
        $("#log").html(log);
        timer2 = setInterval(() => {
            if (progress2 == 100) {
                if(isUpdate == 1){
                    log += "此次算法辨识无异常<br>";
                }else{
                    log += '<a href="javascript:getResult();" style="color: brown">武汉大学工学部四舍照明1-2楼低压配电柜</a>可能存在问题！<a href="javascript:setResult();" style="color: brown">点此修复异常</a><br>结束辨识任务！<br>';                
                }
                //log += '<a href="javascript:getResult();" style="color: brown">武汉大学工学部四舍照明1-2楼低压配电柜</a>可能存在问题！<a href="javascript:setResult();" style="color: brown">点此修复异常</a><br>结束辨识任务！<br>';
                $("#jobStatus2").html('<span class="label label-success label-mini" >停止');
                $("#log").html(log);
                clearInterval(timer2);
            }
            $("#progress2").width(progress2 + "%");
            $("#progressText2").html(progress2 + "%");
            progress2 += 25;
        },1000);
        $("#jobStatus2").html('<span class="label label-danger label-mini" >运行');
    }else if(status == 2){
        clearInterval(timer2);
        if(progress2 != 100){
            progress2 = 0;
            $("#progress2").width(progress2 + "%");
                $("#progressText2").html(progress2 + "%");
        }
        $("#jobStatus2").html('<span class="label label-success label-mini" >停止');
    }
}
function executeJob3(status){
    if(status == 1){
        log += "开始辨识任务,加入知识图谱分析<br>范围：单个台区<br>";
        progress3 = 0;
        $("#log").html(log);
        timer3 = setInterval(() => {
            if (progress3 == 100) {
                if(isUpdate == 1){
                    log += "此次算法辨识无异常<br>";
                }else{
                    log += '<a href="javascript:getResult();" style="color: brown">武汉大学工学部四舍照明1-2楼低压配电柜</a>可能存在问题！<a href="javascript:setResult();" style="color: brown">点此修复异常</a><br>结束辨识任务！<br>';                
                }$("#jobStatus3").html('<span class="label label-success label-mini" >停止');
                $("#log").html(log);
                clearInterval(timer3);
            }
            $("#progress3").width(progress3 + "%");
            $("#progressText3").html(progress3 + "%");
            progress3 += 25;
        },1000);
        $("#jobStatus3").html('<span class="label label-danger label-mini" >运行');
    }else if(status == 2){
        clearInterval(timer3);
        if(progress3 != 100){
            progress3 = 0;
            $("#progress3").width(progress3 + "%");
                $("#progressText3").html(progress3 + "%");
        }
        $("#jobStatus3").html('<span class="label label-success label-mini" >停止');
    }
}
var time4 = null;
function executeJob(status){
    if(status == 1){
        executeJob_(1);
        time4 = setInterval(() => {
            executeJob_(1);
        }, 8000);
    }else if(status == 2){
        executeJob_(2);
        clearInterval(time4);
    }
}
function executeJob_(status) {
    var jobName = $("#jobName").html();
    var cron = $("#cron").html();
    var cronname = $("#cronname").val();
    if(status == 1){
        log += "开始辨识任务<br>范围：所有台区<br>";
        progress = 0;
        $("#log").html(log);
        timer = setInterval(() => {
            if (progress == 100) {
                if(isUpdate == 1){
                    log += "此次算法辨识无异常<br>";
                }else{
                    log += '<a href="javascript:getResult();" style="color: brown">武汉大学工学部四舍照明1-2楼低压配电柜</a>可能存在问题！<br>结束辨识任务！<br>';                
                }$("#jobStatus").html('<span class="label label-success label-mini" >停止');
                $("#log").html(log);
                clearInterval(timer);
            }
            $("#progress1").width(progress + "%");
            $("#progressText").html(progress + "%");
            progress += 25;
        },1000);
        $("#jobStatus").html('<span class="label label-danger label-mini" >运行');
    }else if(status == 2){
        clearInterval(timer);
        if(progress != 100){
            progress = 0;
            $("#progress1").width(progress + "%");
                $("#progressText").html(progress + "%");
        }
        $("#jobStatus").html('<span class="label label-success label-mini" >停止');
    }
}
function getResult(){
    layer.open({
        title:'武汉大学工学部四舍照明1-2楼低压配电柜',
        type: 2,
        content: '/ltvs_management/modules/mdsysset/communityInfo.html?pdxbh=pdx002&pdxmc=武汉大学工学部四舍照明1-2楼低压配电柜"',
        area: [OPEN_WIDTH*0.6 + "px", OPEN_HEIGHT*0.7 + "px"],
        maxmin: false
    });
}
function setResult(){
    layer.confirm('您确定要对异常数据进行修正吗？', {
        btn: ['确定','取消'] //按钮
      }, function(index){
        $.ajax({
            url : "/ltvs_management/setData",
            success : (result) =>{
                console.log(result);
            }
        });
        isUpdate = 1;
        log += '修复完成，点击查看<a href="javascript:getResult();" style="color: brown">武汉大学工学部四舍照明1-2楼低压配电柜</a><br>';
        $("#log").html(log);
        layer.close(index);
      }, function(){
        return;
      });
}
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
    $("#ymd").html(
        '<span>' + year + '</span>年' + month + '月' + date + '日');
    $('#hm').html(hour + ':' + minutes + ':' + seconds);
}
run();
setInterval(run, 1000);