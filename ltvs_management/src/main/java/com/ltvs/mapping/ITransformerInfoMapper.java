package com.ltvs.mapping;

import java.util.List;

import com.ltvs.pojo.Ammeter;
import com.ltvs.pojo.CommunityInfo;
import com.ltvs.pojo.ElectricityConsumer;
import com.ltvs.pojo.JunctionBox;
import com.ltvs.pojo.LineSegment;
import com.ltvs.pojo.LtvsTransformerInfo;
import com.ltvs.pojo.OperatingTransformer;
import com.ltvs.pojo.Pole;
import com.ltvs.pojo.PowerBox;
import com.ltvs.pojo.PowerRoom;
import com.ltvs.pojo.TaiwanInfo;

public interface ITransformerInfoMapper {

	/**
	 * 获得所有的地图电厂的点 Description
	 * 
	 * @return
	 * @see com.ltvs.service.ITransformerInfoService#getAllTransformer()
	 */
	List<LtvsTransformerInfo> getAllTransformer();

	/**
	 * 根据小区名称查找台区下的小区 Description
	 * 
	 * @param name
	 * @return
	 * @see com.ltvs.service.ITransformerInfoService#myDemo(java.lang.String)
	 */
	List<CommunityInfo> findCommunityInfo(String name);

	/**
	 * 根据台区id查找名称 Description
	 * 
	 * @param name
	 * @return
	 * @see com.ltvs.service.ITransformerInfoService#findElectricityConsumer(java.lang.String)
	 */
	String findNameByIdTq(String id);

	/**
	 * 根据配电室和表箱查找用电客户 Description
	 * 
	 * @param name
	 * @return
	 * @see com.ltvs.service.ITransformerInfoService#findElectricityConsumer(java.lang.String)
	 */
	List<ElectricityConsumer> findElectricityConsumer(String id, String name);

	/**
	 * 根据小区id查找所有的客户楼栋信息去重 Description
	 * 
	 * @param id
	 * @return
	 * @see com.ltvs.service.ITransformerInfoService#findAllElectricityConsumerByXqId(java.lang.String)
	 */
	List<CommunityInfo> findAllCommunityInfoByTqId(String id);

	/**
	 * 查找所有分接箱
	 * 
	 * @return
	 */
	List<JunctionBox> getAllJunctionBox();

	/**
	 * 地图插入折线时 验证折线编号否存在
	 * 
	 * @return
	 */
	Integer validateLine(String bh);

	/**
	 * 存储线路 信息
	 * 
	 * @param xlbh
	 * @param lev
	 * @param path
	 * @return
	 */
	Integer saveLine(String xlbh, Integer lev, String path);

	/**
	 * 根据层级获得 线路信息
	 * 
	 * @param lev
	 * @return
	 */
	List<LineSegment> getLineByLev(Integer lev);

	/**
	 * 获取台区信息
	 * 
	 * @return
	 */
	List<TaiwanInfo> getAllTqInfo();

	/**
	 * 获取小区信息
	 * 
	 * @return
	 */
	List<CommunityInfo> getAllXqInfo();

	/**
	 * 获取杆塔信息
	 * 
	 * @return
	 */
	List<Pole> getAllPole();

	/**
	 * 获得所有变压器
	 * 
	 * @return
	 */
	List<OperatingTransformer> getAllByq();
	/*
	 * 根据台区id 查询该台区下的变压器
	 */
	List<OperatingTransformer> getByqByTqId(String tqid);
	/*
	 * 根据台区 id 查询台区下的配电房信息
	 */
	List<PowerRoom> getPdfByTqId(String tqid);
	/*
	 * 根据配电房 id 查询下属配电箱
	 */
	List<PowerBox> getPdxByPdfId(String pdfId);
	
	/*
	 * 根据电表箱 id 查询下属电表
	 */
	List<Ammeter> getDbByDbxId(String dbxId);
	
	/*
	 * 修复电表
	 */
	Integer setCommunitybyCal();
}
