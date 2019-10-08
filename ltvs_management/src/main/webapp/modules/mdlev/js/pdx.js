/**
 * 逻辑图
 */
/**
 * 设置缩放
 */
window.onload = function () {
    $solway.zoom({
        ele: document.getElementById('container'),
        scale: 1,
        minScale: 0.1,
        rate: 0.1
    });
    $solway.drag({
        ele: document.getElementById('container')
    });
};
//弹窗控件
var layer = null;
layui.use('layer', function () {
    layer = layui.layer;
});
var getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}
var MAX_WIDTH = 1500;
var MAX_HEIGHT = 900;
var OPEN_HEIGHT = window.screen.height;
var OPEN_WIDTH = window.screen.width;
//svg 根元素
var _SVG = SVG('container').size(1000, 700);
//园
var circle = _SVG.defs().circle(10).attr({
    'fill-opacity': 0,
    'stroke': '#000',
    'stroke-width': 1.5
});
// 虚线框
var rect = _SVG.defs().rect(450, 130).attr({
    'fill-opacity': 0,
    'stroke': '#000',
    'stroke-width': 1.5,
    'stroke-dasharray': "5"
});

//基本元素
class Dsvg {
    constructor() { }
    //正方形
    drawRect(x, y, w, h) {
        _SVG.rect(w, h).attr({
            'fill-opacity': 0,
            'stroke': '#000',
            'stroke-width': 1.5
        }).move(x, y);
    }

    //直线段
    drawLine(start1, end1, start2, end2, fn) {
        var l = _SVG.line(start1, end1, start2, end2).attr({
            'fill-opacity': 0,
            'stroke': '#000',
            'stroke-width': 1.5
        }).style("cursor:pointer;");
        if (typeof (fn) == "function") {
            l.on('mouseover', fn);
        }
        return l.node.id;
    }
    // 带颜色线段
    drawLineWithColor(start1, end1, start2, end2, color, fn) {
        var l = _SVG.line(start1, end1, start2, end2).attr({
            'fill-opacity': 0,
            'stroke': color,
            'stroke-width': 1.5
        }).style("cursor:pointer;");
        if (typeof (fn) == "function") {
            l.on('mouseover', fn);
        }
        return l.node.id;;
    }
    //带底部文字的图片
    drawImg(path, x, y, text, fn, type) {
        var img = _SVG.image(path).loaded(function (loader) {
            this.size(loader.width, loader.height);
            (function () {
                _SVG.text(text).attr({
                    "font-weight": "normal",
                    "font-family": "Helvetica, Arial, sans-serif",
                    "font-size": 12
                }).move(x, y + loader.height);
            })();
        }).move(x, y).style("cursor:pointer;");
        if (type != null || type != undefined) {
            if (typeof (fn) == "function") {
                img.on(type, fn);
            }
        } else {
            if (typeof (fn) == "function") {
                img.on('mouseover', fn);
            }
        }

        return img.node.id;
    }
    //文字 默认大小为12
    drawText(x, y, text) {
        if (text.length > 11) {
            text = insert_flg(text, "\n", 11)
        }
        _SVG.text(text).attr({
            "font-weight": "normal",
            "font-family": "Helvetica, Arial, sans-serif",
            "font-size": 12
        }).move(x, y);
    }

    drawText2(x, y, text) {
        _SVG.text(text).attr({
            "font-weight": "bold",
            "font-family": "Helvetica, Arial, sans-serif",
            "font-size": 12
        }).move(x, y);
    }

}
function insert_flg(str, flg, sn) {
    var newstr = "";
    for (var i = 0; i < str.length; i += sn) {
        var tmp = str.substring(i, i + sn);
        newstr += tmp + flg;
    }
    return newstr;
}
// 封装的元素
class Lgsvg {
    constructor() { }
    drawByq(x) {
        var dsvg = new Dsvg();
        var dataUtil = new DataUtil();
        var id = dataUtil.getTqInfo();
        //---------------第一层 (含变压器的 一层)-----------------
        //变压器
        dsvg.drawLine(125, 60, 125, 100);
        var byqList = dataUtil.queryData("/ltvs_management/getByqInfo", { "tqid": id });
        for (var i = 0; i < byqList.length; i++) {
            (function (i) {
                var byq = dsvg.drawImg("img/z_byq.svg", 100 * (i + 1), 100, "", () => {
                    var ctx = byqList[i].yxbyqbs + "<br>" + byqList[i].byqmc + "<br>" + byqList[i].cjsj;
                    layer.tips(ctx, "#" + byq, {
                        tips: [1, '#78BA32']
                    });
                });
            })(i);
        }
        //开关
        dsvg.drawLine(125, 150, 125, 190);
        dsvg.drawImg("img/z_kg.svg", 100, 190, "", null);
        //--------------互感器--------------------------------
        var hgq = dsvg.drawImg("img/z_hgq.svg", 100, 260, "", () => {
            layer.tips("互感器", "#" + hgq, {
                tips: [1, '#78BA32']
            });
        });
        dsvg.drawLine(125, 240, 125, 280);
        //------------------------接地线--------------------------
        dsvg.drawLine(125, 138, 180, 138);
        dsvg.drawImg("img/dx.svg", 165, 138, "", null);
        //检测计量终端
        dsvg.drawLine(150, 285, 190, 285);
        dsvg.drawImg("img/z_zd.svg", 166, 236, "", null);
        //电房用电
        dsvg.drawLine(125, 170, 75, 170);
        dsvg.drawImg("img/z_yd.svg", 51, 171, "", null);

    }
    //配电房
    drawPdf() {
        var dataUtil = new DataUtil();
        var dsvg = new Dsvg();
        var id = dataUtil.getTqInfo();
        var pdxList = dataUtil.queryData("/ltvs_management/getPdfById", { "tqid": id });
        for (var i = 0; i < pdxList.length; i++) {
            var x = i;
            //开关
            dsvg.drawLine(125 + 200 * x, 150, 125 + 200 * x, 190);
            dsvg.drawImg("img/z_kg.svg", 100 + 200 * x, 190, "", null);
            //--------------互感器--------------------------------
            (function (x) {
                var hgq = dsvg.drawImg("img/z_hgq.svg", 100 + 200 * x, 260, "", () => {
                    layer.tips("互感器", "#" + hgq, {
                        tips: [1, '#78BA32']
                    });
                });
            })(x);
            dsvg.drawLine(125 + 200 * x, 240, 125 + 200 * x, 280);
            //检测计量终端
            dsvg.drawLine(150 + 200 * x, 285, 190 + 200 * x, 285);
            dsvg.drawImg("img/z_zd.svg", 166 + 200 * x, 236, "", null);
            //-------------负载------------------------
            dsvg.drawLine(125 + 200 * x, 290, 125 + 200 * x, 320);
            console.log();
            (function (x) {
                dsvg.drawImg("img/z_fz.svg", 101 + 200 * x, 320, "", () => {
                    layer.open({
                        title: pdxList[x].pdfmc,
                        type: 2,
                        content: '/ltvs_management/modules/mdlev/pdxInfo.html?pdfmc=' + encodeURI(pdxList[x].pdfmc) + "&pdfbh=" + pdxList[x].pdfbh,
                        area: [OPEN_WIDTH * 0.8 + "px", OPEN_HEIGHT * 0.9 + "px"],
                        maxmin: true
                    });
                }, "click");
            })(x);
            dsvg.drawText(101 + 200 * x, 370, pdxList[i].pdfmc);
        }
    }
    //小区
    drawCommunity(x, length) {
        var dsvg = new Dsvg();
        var id = dsvg.drawImg("img/dianbiaoxiang.svg", 35 - 35 + x, 450, "电表箱", () => {
            layer.tips('电表箱', '#' + id, {
                tips: [4, '#78BA32']
            });
        });
        dsvg.drawLineWithColor(50 - 35 + x, 310, 50 - 35 + x, 445, "#8B0000");
        dsvg.drawLineWithColor(50 - 35 + x, 515, 50 - 35 + x, 750, "#8B0000");
        dsvg.drawLineWithColor(60 - 35 + x, 320, 60 - 35 + x, 445, "#DAA520");
        dsvg.drawLineWithColor(60 - 35 + x, 515, 60 - 35 + x, 750, "#DAA520");
        dsvg.drawLineWithColor(70 - 35 + x, 330, 70 - 35 + x, 445, "#3CB371");
        dsvg.drawLineWithColor(70 - 35 + x, 515, 70 - 35 + x, 750, "#3CB371");

        dsvg.drawLineWithColor(90 - 35 + x, 460, 140 - 35 + x, 460, "#8B0000");
        dsvg.drawLineWithColor(90 - 35 + x, 470, 140 - 35 + x, 470, "#DAA520");
        dsvg.drawLineWithColor(90 - 35 + x, 480, 140 - 35 + x, 480, "#3CB371");
        dsvg.drawLine(140 - 35 + x, 380, 140 - 35 + x, 720);

        for (var i = 0; i < length; i++) {
            var t = i - Math.floor(i / 10) * 10;
            dsvg.drawLine(140 + (t * 50) - 35 + x, 390 + Math.floor(i / 10) * 85, 190 + (t * 50) - 35 + x, 390 + Math.floor(i / 10) * 85);
            dsvg.drawLine(165 + (t * 50) - 35 + x, 390 + Math.floor(i / 10) * 85, 165 + (t * 50) - 35 + x, 415 + Math.floor(i / 10) * 85);
            (function (i) {
                var imgid = dsvg.drawImg("img/hu.svg", 150 + (t * 50) - 35 + x, 415 + Math.floor(i / 10) * 85, "XX户" + i, () => {
                    layer.tips('XX户' + i, '#' + imgid, {
                        tips: [1, '#78BA32']
                    });
                });
            })(i);
        }
    }
}
class DataUtil {
    constructor() { }
    //获得台区id
    getTqInfo() {
        //暂时写成已知的数据，后面要从gis图中跳转过来
        var id = "tq001";
        if (id == "" || id == null) {
            //警告 台区id 为空
            return;
        }
        return id;
    }
    queryData(url, parm) {
        var nodeList = null;
        $.ajax({
            url: url,
            data: parm,
            async: false,
            error: function () {
                console.log('查询信息失败');
            }
        }).done(function (res) {
            nodeList = eval('(' + res + ')');
        });
        return nodeList;
    }
}
//初始化
function init() {
    //标题
    var mc = getQueryString("pdfmc");
    _SVG.text(mc).attr({
        "font-weight": "bold",
        "font-family": "Helvetica, Arial, sans-serif",
        "font-size": 16
    }).move(20, 20);


}
$(document).ready(function () {
    // return;
    init();
    var dataUtil = new DataUtil();
    var dsvg = new Dsvg();
    var pdfId = getQueryString("pdfbh");
    //暂时深港苑用图片
    // if(pdfId == "pdf005"){
    //     $("#container").html('<img width="600" height="800" src="img/sgy4.jpg"/>');
    //     return;
    // }
    var pdxList = dataUtil.queryData("/ltvs_management/getPdxById", { "pdfId": pdfId });
    var lev2 = 0;
    var lev3 = 0;
    for (var i = 0; i < pdxList.length; i++) {

        // --------------在数据库中第2层级-----------------
        if (pdxList[i].lev == "2") {

            dsvg.drawText(150 + lev2 * 300, 160, pdxList[i].pdxmc);
            // 开关加互感器
            dsvg.drawLine(125 + lev2 * 300, 170, 125 + lev2 * 300, 200);
            dsvg.drawImg("img/z_kg2.svg", 101 + lev2 * 300, 200, "", null);
            dsvg.drawText2(101 + lev2 * 300 + 50, 200 +20,pdxList[i].pdxxh);
            dsvg.drawImg("img/z_hgq.svg", 101 + lev2 * 300, 250, "", null);
            dsvg.drawLine(125 + lev2 * 300, 248, 125 + lev2 * 300, 280);
            // 计量终端
            dsvg.drawLine(149 + lev2 * 300, 273, 189 + lev2 * 300, 273);
            dsvg.drawImg("img/z_jl.svg", 188 + lev2 * 300, 253, "计量终端", null);
            dsvg.drawLine(125 + lev2 * 300, 280, 125 + lev2 * 300, 330);
            lev2++;
        }

        //-----------------在数据库中第3层级---------------
        if (pdxList[i].lev == "3") {
            dsvg.drawLine(150 + lev3 * 160, 330, 150 + lev3 * 160, 360);
            dsvg.drawImg("img/z_kg2.svg", 126 + lev3 * 160, 360, "", null);
            dsvg.drawText2(126 + lev3 * 160 + 50, 360 +20,pdxList[i].pdxxh);
            dsvg.drawLine(150 + lev3 * 160, 400, 150 + lev3 * 160, 460);
            (function (i) {
                dsvg.drawImg("img/z_fz2.svg", 126 + lev3 * 160, 460, "", () => {
                    layer.open({
                        title: pdxList[i].pdxmc,
                        type: 2,
                        content: '/ltvs_management/modules/mdlev/communityInfo.html?pdxbh=' + pdxList[i].pdxbh + "&pdxmc=" + encodeURI(pdxList[i].pdxmc),
                        area: [OPEN_WIDTH*0.5 + "px", OPEN_HEIGHT*0.6 + "px"],
                        maxmin: false
                    });
                }, "click");
            })(i);
            dsvg.drawText(100 + lev3 * 160, 520, pdxList[i].pdxmc);
            lev3++;
        }
    }
            //-------------主线----------
            dsvg.drawLine(100, 330, 100 +lev3 * 160, 330);
});

