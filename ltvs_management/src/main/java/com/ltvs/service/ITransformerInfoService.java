package com.ltvs.service;

import java.util.List;

import com.ltvs.pojo.Ammeter;
import com.ltvs.pojo.CommunityInfo;
import com.ltvs.pojo.ElectricityConsumer;
import com.ltvs.pojo.JunctionBox;
import com.ltvs.pojo.LineSegment;
import com.ltvs.pojo.LtvsTransformerInfo;
import com.ltvs.pojo.OperatingTransformer;
import com.ltvs.pojo.PowerBox;
import com.ltvs.pojo.PowerRoom;
import com.ltvs.pojo.TaiwanInfo;

public interface ITransformerInfoService {

    List<LtvsTransformerInfo> getAllTransformer();

    String findNameByIdTq(String id);

    List<ElectricityConsumer> findElectricityConsumer(String id,String name);

    List<JunctionBox> getAllJunctionBox();

    Integer validateLine(String bh);
    
    Integer saveLine(String xlbh,Integer lev,String path);
    
    List<LineSegment> getLineByLev(Integer lev);
    
    List<TaiwanInfo> getAllTqInfo();
    
    List<CommunityInfo> getAllXqInfo();

    List<CommunityInfo> findAllCommunityInfoByTqId(String id);
    
    List<OperatingTransformer> getAllByqInfo();
    
    List<OperatingTransformer> getByqByTqId(String id);
    
    List<PowerRoom> getPdfByTqId(String tqid);
    
    List<PowerBox> getPdxByPdfId(String pdfId);
    
    List<Ammeter> getDbByDbxId(String dbxId);

    Integer setCommunitybyCal();
}
