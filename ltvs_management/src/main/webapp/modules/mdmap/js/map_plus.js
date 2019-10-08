/*
 * 离线地图扩展功能函数
 */
var map = null;// 百度地图全局变量


$(document).ready(function () {
	initMap();
});

/**
 *初始化地图
 */
function initMap() {
	map = new BMap.Map("container");
	var point = new BMap.Point(113.283359, 23.162234);  // 创建点坐标  
	map.centerAndZoom(point, 11);                 // 初始化地图，设置中心点坐标和地图级别  
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes: [
			BMAP_HYBRID_MAP
		]
	}));

	map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	map.setMapType(BMAP_HYBRID_MAP);    //设置默认为混合模式

	var pointArray = [];

	var markers = initData();

	/**
	 * 给地图上的点 添加弹窗 给弹窗中的文字添加点击事件
	 */

	for (var i = 0; i < markers.length; i++) {
		var marker = new BMap.Marker(new BMap.Point(markers[i].j, markers[i].w));
		map.addOverlay(marker);
		pointArray[i] = new BMap.Point(markers[i].j, markers[i].w);
		marker.addEventListener('click', getNodeInfo(markers[i]));
	}

	map.setViewport(pointArray);

}
/**
 * 初始化 地图数据
 */
function initData() {
	var mapData = [];
	$.ajax({
		url: "/ltvs_management/getAllInfo",
		async: false,
		success: function (result) {
			var res = eval('(' + result + ')');
			for (var i = 0; i < res.length; i++) {
				var node = new MapNode(res[i].bdzbs, res[i].gpsjd, res[i].gpswd, res[i].bdzmc, res[i].hasChild);
				mapData[i] = node;
			}
		},
		error: function () {
			console.log("获取地图点信息出错");
		}
	});
	return mapData;
}

function getNodeInfo(node) {
	return function (evt) {
		var opt = {
			width: 250,
			height: 80,
			title: "节点信息",
			enableMessage: true
		};
		// var p = e.target;
		// alert("marker的位置是" + p.getPosition().lng + "," + p.getPosition().lat);  
		var text = '<a href="javascript:openWindow(' + JSON.stringify(node).replace(/\"/g, "'") + ');">' + node.getMsg() + '</a>';
		var infoWindow = new BMap.InfoWindow(text, opt);
		// var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var point = new BMap.Point(node.j, node.w);
		map.openInfoWindow(infoWindow, point);
	}
}

function openWindow(node) {
	if (node.hasChild > 0) {
		//是否有子集 判断是否跳转
		self.location.href = "/ltvs_management/modules/mdlev/show.html?id=" + node.id;
	}

}

