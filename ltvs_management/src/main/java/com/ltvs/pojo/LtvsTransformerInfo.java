package com.ltvs.pojo;

import java.util.Date;

/**
 * 变电站信息
 * 
 * @Description
 * @author LIU
 * @date 2019年4月10日 下午4:37:01
 */
public class LtvsTransformerInfo {
    // 变电站系统内部标识
    private String bdzbs;

    // 变电站编号
    private String bdzbh;

    // 变电站类型代码:1变电站；2电厂；3开闭所；4换流站；5环网柜
    private String bdzlxdm;

    // 变电站名称
    private String bdzmc;

    // 变电站地址
    private String bdzdz;

    // 电压等级代码:01交流110V;02交流220V;03交流380V;04交流660V;05交流1000V……
    private Integer dydjdm;

    // 变电站运行状态:01运行；02停用;03拆除;04规划;05建设
    private Integer bdzyxzt;

    // 产权归属代码:1产权属于供电局;2产权属于客户;4产权不明;3共用资产;5局属厂站资产
    private Integer cqgsdm;

    // GIS系统标识
    private String gisid;

    // 供电厂编码
    private String gddwbm;

    // GPS纬度
    private String gpswd;

    // GPS经度
    private String gpsjd;

    // 创建时间
    private Date cjsj;

    // 操作时间
    private Date czsj;

    // 是否有子节点
    private Integer hasChild;

    // 层级
    private Integer hierarchy;

    public Integer getHierarchy() {
        return hierarchy;
    }

    public void setHierarchy(Integer hierarchy) {
        this.hierarchy = hierarchy;
    }

    public Integer getHasChild() {
        return hasChild;
    }

    public void setHasChild(Integer hasChild) {
        this.hasChild = hasChild;
    }

    public String getBdzbs() {
        return bdzbs;
    }

    public void setBdzbs(String bdzbs) {
        this.bdzbs = bdzbs == null ? null : bdzbs.trim();
    }

    public String getBdzbh() {
        return bdzbh;
    }

    public void setBdzbh(String bdzbh) {
        this.bdzbh = bdzbh == null ? null : bdzbh.trim();
    }

    public String getBdzlxdm() {
        return bdzlxdm;
    }

    public void setBdzlxdm(String bdzlxdm) {
        this.bdzlxdm = bdzlxdm == null ? null : bdzlxdm.trim();
    }

    public String getBdzmc() {
        return bdzmc;
    }

    public void setBdzmc(String bdzmc) {
        this.bdzmc = bdzmc == null ? null : bdzmc.trim();
    }

    public String getBdzdz() {
        return bdzdz;
    }

    public void setBdzdz(String bdzdz) {
        this.bdzdz = bdzdz == null ? null : bdzdz.trim();
    }

    public Integer getDydjdm() {
        return dydjdm;
    }

    public void setDydjdm(Integer dydjdm) {
        this.dydjdm = dydjdm;
    }

    public Integer getBdzyxzt() {
        return bdzyxzt;
    }

    public void setBdzyxzt(Integer bdzyxzt) {
        this.bdzyxzt = bdzyxzt;
    }

    public Integer getCqgsdm() {
        return cqgsdm;
    }

    public void setCqgsdm(Integer cqgsdm) {
        this.cqgsdm = cqgsdm;
    }

    public String getGisid() {
        return gisid;
    }

    public void setGisid(String gisid) {
        this.gisid = gisid == null ? null : gisid.trim();
    }

    public String getGddwbm() {
        return gddwbm;
    }

    public void setGddwbm(String gddwbm) {
        this.gddwbm = gddwbm == null ? null : gddwbm.trim();
    }

    public String getGpswd() {
        return gpswd;
    }

    public void setGpswd(String gpswd) {
        this.gpswd = gpswd == null ? null : gpswd.trim();
    }

    public String getGpsjd() {
        return gpsjd;
    }

    public void setGpsjd(String gpsjd) {
        this.gpsjd = gpsjd == null ? null : gpsjd.trim();
    }

    public Date getCjsj() {
        return cjsj;
    }

    public void setCjsj(Date cjsj) {
        this.cjsj = cjsj;
    }

    public Date getCzsj() {
        return czsj;
    }

    public void setCzsj(Date czsj) {
        this.czsj = czsj;
    }
}