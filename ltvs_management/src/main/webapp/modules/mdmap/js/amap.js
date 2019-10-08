/**
 * 使用高德地图
 */

var _AMAP = null; // 高德地图全局变量

$(document).ready(function () {
  $('#openEdit').on('click', openEdit);
  $('#closeEdit').on('click', closeEdit);
  init();
});

var layer = null;
layui.use('layer', function () {
  layer = layui.layer;
});

var init = function () {
  var tq = sessionStorage.getItem("tq");
  var _zoom = 12;
  if (tq != null || tq != "") {
    _zoom = 16;
    console.log(_zoom);
  }
  //----------------------------------------------注册地图、插件、信息窗体 ↓ -----------------------------------------
  //初始化地图
  _AMAP = new AMap.Map("container", {
    resizeEnable: true,
    pitchEnable: true,
    zoom: 16,
    pitch: 20,
    rotation: 0,
    viewMode: '2D',
    expandZoomRange: true,
    zooms: [3, 20],
    showIndoorMap: false,
    center: [114.365369, 30.542135],
    mapStyle: 'amap://styles/fresh'

  });
  //加载地图 插件
  _AMAP.plugin(['AMap.ControlBar', 'AMap.Scale', 'AMap.PolyEditor'], function () {//增加插件
    var controlBar = new AMap.ControlBar();
    var scale = new AMap.Scale({
      visible: true,
      bottom: 100
    });
    _AMAP.addControl(controlBar);
    _AMAP.addControl(scale);
  });

  //地图工具类
  var mapUtil = new MapUtil();
  //加载地图时查询数据
  var list = mapUtil.queryNode('/ltvs_management/getTransformerInfo', {});
  //信息窗体
  var infoWindow = new AMap.InfoWindow({ offset: new AMap.Pixel(0, -30) });
  //点击事件函数
  var markerClick = function markerClick(e) {
    infoWindow.setContent(e.target.content);
    infoWindow.open(_AMAP, e.target.getPosition());
  }
  //------------------------------------------------- 注册地图 ↑ -----------------------------------------------
  //---------------------------------------------初始化地图上加载点 ↓ -------------------------------------------
  if (list.length > 0) {
    for (var i = 0, marker; i < list.length; i++) {
      if (isNaN(parseFloat(list[i].gpsjd)) || isNaN(parseFloat(list[i].gpswd))) {
        continue;
      }
      var marker = new AMap.Marker({
        position: [parseFloat(list[i].gpsjd), parseFloat(list[i].gpswd)],
        map: _AMAP,
        icon: mapUtil.getMarkImg(1)
      });
      marker.content = list[i].bdzbh + ' ' + list[i].bdzmc;
      marker.on('click', markerClick);
      // marker.emit('click', { target: marker });
    }
  }
  //加载变压器 暂时写在第一层下面
  var byqlist = mapUtil.queryNode('/ltvs_management/getByq');
  if (byqlist.length > 0) {
    for (var i = 0, marker; i < byqlist.length; i++) {
      if (isNaN(parseFloat(byqlist[i].gpsjd)) || isNaN(parseFloat(byqlist[i].gpswd))) {
        continue;
      }
      var marker = new AMap.Marker({
        position: [parseFloat(byqlist[i].gpsjd), parseFloat(byqlist[i].gpswd)],
        map: _AMAP,
        icon: mapUtil.getMarkImg(7)
      });
      marker.content = byqlist[i].yxbyqbs + ' ' + byqlist[i].byqmc;
      //marker.content = '<a href="javascript:openWindow(' + JSON.``stringify(xqlist[i]).replace(/\"/g, "'") + ');">' + xqlist[i].xqbs + ' ' + xqlist[i].xqmc + '</a>';
      marker.on('click', markerClick);
    }
  }
  //加载台区 暂时写在第一层下面
  var tqlist = mapUtil.queryNode('/ltvs_management/gettqinfo');
  if (tqlist.length > 0) {
    for (var i = 0, marker; i < tqlist.length; i++) {
      if (isNaN(parseFloat(tqlist[i].gpsjd)) || isNaN(parseFloat(tqlist[i].gpswd))) {
        continue;
      }
      if (tqlist[i].tqbh.indexOf("pdf") > -1) {
        var marker = new AMap.Marker({
          position: [parseFloat(tqlist[i].gpsjd), parseFloat(tqlist[i].gpswd)],
          map: _AMAP,
          icon: mapUtil.getMarkImg(2)
        });
        marker.setLabel({
          offset: new AMap.Pixel(-50, 35),
          content: tqlist[i].tqmc
        });
        marker.content = '<a href="javascript:openWindow(' + JSON.stringify(tqlist[i]).replace(/\"/g, "'") + ');">' + tqlist[i].bdzbh + '</a>';
        marker.on('click', markerClick);
      } else {
        var marker = new AMap.Marker({
          position: [parseFloat(tqlist[i].gpsjd), parseFloat(tqlist[i].gpswd)],
          map: _AMAP,
          icon: mapUtil.getMarkImg(1)
        });
        marker.setLabel({
          offset: new AMap.Pixel(-50, 35),
          content: tqlist[i].tqmc
        });
        marker.content = '<a href="javascript:openWindow(' + JSON.stringify(tqlist[i]).replace(/\"/g, "'") + ');">' + tqlist[i].bdzbh + '</a>';
        marker.on('click', markerClick);
      }

    }
  }

  var fjxlist = mapUtil.queryNode('/ltvs_management/getjboxinfo');
  if (fjxlist.length > 0) {
    for (var i = 0, marker; i < fjxlist.length; i++) {
      if (isNaN(parseFloat(fjxlist[i].gpsjd)) || isNaN(parseFloat(fjxlist[i].gpswd))) {
        continue;
      }
      var marker = new AMap.Marker({
        position: [parseFloat(fjxlist[i].gpsjd), parseFloat(fjxlist[i].gpswd)],
        map: _AMAP,
        icon: mapUtil.getMarkImg(1)
      });
      marker.content = fjxlist[i].fjxbs + ' ' + fjxlist[i].fjxmc;
      //marker.content = '<a href="javascript:openWindow(' + JSON.``stringify(xqlist[i]).replace(/\"/g, "'") + ');">' + xqlist[i].xqbs + ' ' + xqlist[i].xqmc + '</a>';
      marker.on('click', markerClick);
    }
  }
  //查询第一层的折线
  var lineList = mapUtil.queryNode('/ltvs_management/getLineByLev', { lev: 1 });
  if (lineList.length > 0) {
    //400V线路
    for (var i = 0; i < lineList.length; i++) {
      if(i < 3){
        var p = mapUtil.splitPath(lineList[i].linepath);
        var polyline = new AMap.Polyline({
          path: p,
          isOutline: true,
          outlineColor: '#ccc',
          borderWeight: 3,
          strokeColor: "#13227A",
          strokeOpacity: 1,
          strokeWeight: 2,
          strokeStyle: "solid",
          strokeDasharray: [10, 5],
          lineJoin: 'round',
          lineCap: 'round',
          zIndex: 50,
        });
        polyline.setMap(_AMAP);
      }else{
        //10KV线路
        var p = mapUtil.splitPath(lineList[i].linepath);
      var polyline = new AMap.Polyline({
        path: p,
        isOutline: true,
        outlineColor: '#ccc',
        borderWeight: 3,
        strokeColor: "#000",
        strokeOpacity: 1,
        strokeWeight: 6,
        strokeStyle: "solid",
        strokeDasharray: [10, 5],
        lineJoin: 'round',
        lineCap: 'round',
        zIndex: 50,
      });
      polyline.setMap(_AMAP);
      }
      
    }
  }

  //根据点的分布 自适应
  // _AMAP.setFitView();
  //---------------------------------------------------初始化 加载 地图 ↑-------------------------------
  // ------------------------------------------------- 根据地图放大倍数 加载 点、折线 ↓-----------------------
  var flag = 1;//已经显示的层级标志 防止重复加载数据
  // (function () {
  //   _AMAP.on('zoomchange', function () {
  //     var _zoom = _AMAP.getZoom();
  //     if (_zoom >= 14 && _zoom < 18) {
  //       if (flag < 2) {
  //         console.log('当前地图缩放倍数:' + _AMAP.getZoom() + '开始加载第二层数据');
  //         //查询台区
  //         var tqlist = mapUtil.queryNode('/ltvs_management/gettqinfo');
  //         if (tqlist.length > 0) {
  //           for (var i = 0, marker; i < tqlist.length; i++) {
  //             if (isNaN(parseFloat(tqlist[i].gpsjd)) || isNaN(parseFloat(tqlist[i].gpswd))) {
  //               continue;
  //             }
  //             var marker = new AMap.Marker({
  //               position: [parseFloat(tqlist[i].gpsjd), parseFloat(tqlist[i].gpswd)],
  //               map: _AMAP,
  //               icon: mapUtil.getMarkImg(tqlist[i].hierarchy)
  //             });
  //             marker.content = '<a href="javascript:openWindow(' + JSON.stringify(tqlist[i]).replace(/\"/g, "'") + ');">' + tqlist[i].tqbh + ' ' + tqlist[i].tqmc + '</a>';
  //             marker.on('click', markerClick);
  //           }
  //         }
  //         //查询第二层的折线
  //         var lineList = mapUtil.queryNode('/ltvs_management/getLineByLev', { lev: 2 });
  //         if (lineList.length > 0) {
  //           for (var i = 0; i < lineList.length; i++) {
  //             var p = mapUtil.splitPath(lineList[i].linepath);
  //             var polyline = new AMap.Polyline({
  //               path: p,
  //               isOutline: true,
  //               outlineColor: '#ccc',
  //               borderWeight: 3,
  //               strokeColor: "#13227A",
  //               strokeOpacity: 1,
  //               strokeWeight: 2,
  //               strokeStyle: "solid",
  //               strokeDasharray: [10, 5],
  //               lineJoin: 'round',
  //               lineCap: 'round',
  //               zIndex: 50,
  //             });
  //             polyline.setMap(_AMAP);
  //           }
  //         }
  //         flag++;
  //       }
  //     } else if (_zoom >= 18) {
  //       if (flag < 3) {
  //         console.log('当前地图缩放倍数:' + _AMAP.getZoom() + '开始加载第三层数据');
  //         var xqlist = mapUtil.queryNode('/ltvs_management/getxqinfo');

  //         if (xqlist.length > 0) {
  //           for (var i = 0, marker; i < xqlist.length; i++) {
  //             if (isNaN(parseFloat(xqlist[i].gpsjd)) || isNaN(parseFloat(xqlist[i].gpswd))) {
  //               continue;
  //             }
  //             var marker = new AMap.Marker({
  //               position: [parseFloat(xqlist[i].gpsjd), parseFloat(xqlist[i].gpswd)],
  //               map: _AMAP,
  //               icon: mapUtil.getMarkImg(xqlist[i].hierarchy)
  //             });
  //             marker.content = xqlist[i].xqbs + ' ' + xqlist[i].xqmc;
  //             //marker.content = '<a href="javascript:openWindow(' + JSON.``stringify(xqlist[i]).replace(/\"/g, "'") + ');">' + xqlist[i].xqbs + ' ' + xqlist[i].xqmc + '</a>';
  //             marker.on('click', markerClick);
  //           }
  //         }

  //         var lineList = mapUtil.queryNode('/ltvs_management/getLineByLev', { lev: 3 });
  //         if (lineList.length > 0) {
  //           for (var i = 0; i < lineList.length; i++) {
  //             var p = mapUtil.splitPath(lineList[i].linepath);
  //             var polyline = new AMap.Polyline({
  //               path: p,
  //               isOutline: true,
  //               outlineColor: '#ccc',
  //               borderWeight: 3,
  //               strokeColor: "#13227A",
  //               strokeOpacity: 1,
  //               strokeWeight: 2,
  //               strokeStyle: "solid",
  //               strokeDasharray: [10, 5],
  //               lineJoin: 'round',
  //               lineCap: 'round',
  //               zIndex: 50,
  //             });
  //             polyline.setMap(_AMAP);
  //           }
  //         }
  //         flag++;
  //       }
  //     }
  //   });
  // })();

  //在控制台上显示点击的位置
  _AMAP.on('click', findJW);
}
// -------------- 根据地图放大倍数 加载 点、折线 ↑---------------------------------------------------

// -------------------------- 编辑折线 ↓ --------------------------------------------------
//设置折线的起始点 并生成折线
var polyEditor = null; //折线编辑类
var polyline = null; // 折线
var editBool = true;//设置编辑状态标志 true 为结束编辑
var openEdit = function () {
  if (!editBool) {
    layer.msg('error 当前状态下不可重复编辑', {
      time: 1500
    });
    return;
  }
  //设置折线初始路径
  var path = [[_AMAP.getCenter().lng, _AMAP.getCenter().lat], [_AMAP.getCenter().lng, _AMAP.getCenter().lat]];
  polyline = new AMap.Polyline({
    path: path,
    isOutline: true,
    outlineColor: '#ffeeff',
    borderWeight: 2,
    strokeColor: "#3366FF",
    strokeOpacity: 1,
    strokeWeight: 2,
    strokeStyle: "dashed",
    strokeDasharray: [10, 5],
    lineJoin: 'round',
    lineCap: 'round',
    zIndex: 50,
  })
  polyline.setMap(_AMAP);
  polyEditor = new AMap.PolyEditor(_AMAP, polyline);
  editBool = false;
  polyEditor.open();
}

var closeEdit = function () {
  if (editBool) {
    layer.msg('erroer 请开始编辑', {
      time: 1500
    });
    return;
  }
  var path = [];
  var p = polyline.getPath();
  var zoom = _AMAP.getZoom();
  for (var i = 0; i < p.length; i++) {
    var pp = [];
    pp.push(p[i].lng);
    pp.push(p[i].lat);
    path.push(pp);
  }
  layer.open({
    type: 2,
    area: ['450px', '300px'],
    fixed: false, //不固定
    content: '/ltvs_management/modules/mdmap/lineForm.html?path=' + path.toString() + '&zoom=' + _AMAP.getZoom(),
    btn: ['提交', '取消'],
    yes: function (index) {
      // if (zoom < 16) {
      //   zoom = 1;
      // } else if (16 <= zoom && zoom < 18) {
      //   zoom = 2;
      // } else if (18 <= zoom) {
      //   zoom = 3;
      // }
      zoom = 1;
      var bh = window["layui-layer-iframe" + index].callbackdata();
      if (bh == null || bh == "") {
        layer.msg('编号不能为空', { shade: 0.3 });
        return;
      }
      //后台验证编号是否存在
      $.ajax({
        url: '/ltvs_management/validateLine',
        data: {
          bh: bh
        },
        success: function (result) {
          if (result.replace(/\"/g, "") == 'ok') {
            //不存在该编号
            $.ajax({
              url: '/ltvs_management/saveLine',
              data: {
                bh: bh,
                zoom, zoom,
                path: path.toString()
              },
              success: function (res) {
                if (res.replace(/\"/g, "") == 'ok') {
                  layer.msg('保存成功', { shade: 0.3 });
                  polyEditor.close();
                  editBool = true;
                  layer.close(index);
                } else {
                  parent.layer.msg('保存失败', { shade: 0.3 });
                  layer.close(index);
                }
              },
              error: function () {
                console.log('error 保存折线信息错误');
              }
            });

          } else {
            //存在 
            layer.msg('编号已存在', { shade: 0.3 });
            return;
          }
        },
        error: function () {
          console.log('error 保存折线信息错误');
        }
      });
    },
    cancel: function () {

    }
  });
}
// ---------------------------------------- 编辑折线 ↑ -------------------------------

//------------------------------------------实时数据 ↓------------------------------
var refreshData = function (chx) {
  var markers = [];
  if (chx.checked == true) {
    var _markers = _AMAP.getAllOverlays('marker');
    var j = 0;
    for (var i = 0; i < _markers.length; i++) {
      if (_markers[i].content.toString().indexOf("小区") != -1) {
        markers[j] = _markers[i];
        j++;
      }
    }
    for (var i = 0; i < markers.length; i++) {
      markers[i].setLabel({
        offset: new AMap.Pixel(15, 15),
        content: "当前电压： " + Math.floor(Math.random() * 11 + 220) + "  V"
      });
    }
    var num = 0;
    t = setInterval(() => {
      // markers[num].emit('click', { target: markers[num] });
      markers[num].setLabel({
        offset: new AMap.Pixel(15, 15),
        content: "当前电压： " + Math.floor(Math.random() * 11 + 220) + "  V"
      });
      num++;
      if (num == markers.length - 1) {
        num = 0;
      }
    }, 100);
  } else {
    clearInterval(t);
  }
}
//------------------------------------------实时数据 ↑---------------------------------------

var openWindow = function (node) {
  // self.location.href = "/ltvs_management/modules/mdlev/showXq.html?id=" + encodeURI(node.xqbs);
  var OPEN_HEIGHT = window.screen.height;
var OPEN_WIDTH = window.screen.width;
  if(node.tqbs == "tq001"){
    layer.open({
      title: "台区信息",
      type: 2,
      content: '/ltvs_management/modules/mdlev/logicViews.html',
      area: [OPEN_WIDTH*0.7+'px', OPEN_HEIGHT*0.8+'px'],
      maxmin: false
    });
  }
}
var findJW = function (e) {
  console.log('点击的坐标为:' + e.lnglat.getLng() + ',' + e.lnglat.getLat());
}
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
} 