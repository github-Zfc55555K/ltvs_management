package com.ltvs.pojo;

import java.util.Date;

/**
 * 运行变压器
 * 
 * @Description
 * @author LIU
 * @date 2019年4月10日 下午5:03:43
 */
public class OperatingTransformer {
    // 运行变压器标识
    private String yxbyqbs;

    // 变压器名称
    private String byqmc;

    // 用户编号
    private String yhbh;

    // 台区标识
    private String tqbs;

    // 供电单位编码
    private String gddwbm;

    // 设备类型代码:6000公变台区；6100专变；6200主变；6201站用变；6202接地变......
    private Long sblxdm;

    // 设备型号代码:001 S1；002 S2；003 S3；004 S4；005 S5......
    private Long sbxhdm;

    // 额定容量
    private Long edrl;

    // 运行状态代码:01运行；02停用；03拆除
    private String yxztdm;

    // 公变专变标志:1公变；2专变；3专变合用；4专变公用
    private String gbzbbz;

    // GIS系统标识
    private String gisid;

    // GPS纬度
    private String gpswd;

    // GPS经度
    private String gpsjd;

    // 创建时间
    private String cjsj;

    // 操作时间
    private Date czsj;

    // 厂家名称
    private String cjmc;

    // 厂家编号
    private String ccbh;

    // 电源组号
    private String dyzh;

    // 冷却方式代码:01 自然冷却;02 风冷;03 油浸自冷;04 油浸水冷;05 强迫油循环水冷;06 氢冷;99其它机械
    private Integer lqfsdm;

    // 高压额定电压:01交流110V;02交流220V;03交流380V;04交流660V;05交流1000V......
    private Integer gyeddy;

    // 中压额定电流:01交流110V;02交流220V;03交流380V;04交流660V;05交流1000V......
    private Integer zyeddl;

    // 低压额定电压:01交流110V;02交流220V;03交流380V;04交流660V;05交流1000V......
    private Integer dyeddy;

    // 电气主接线方式
    private Integer dqzjxfs;

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

    public String getYxbyqbs() {
        return yxbyqbs;
    }

    public void setYxbyqbs(String yxbyqbs) {
        this.yxbyqbs = yxbyqbs == null ? null : yxbyqbs.trim();
    }

    public String getByqmc() {
        return byqmc;
    }

    public void setByqmc(String byqmc) {
        this.byqmc = byqmc == null ? null : byqmc.trim();
    }

    public String getYhbh() {
        return yhbh;
    }

    public void setYhbh(String yhbh) {
        this.yhbh = yhbh == null ? null : yhbh.trim();
    }

    public String getTqbs() {
        return tqbs;
    }

    public void setTqbs(String tqbs) {
        this.tqbs = tqbs == null ? null : tqbs.trim();
    }

    public String getGddwbm() {
        return gddwbm;
    }

    public void setGddwbm(String gddwbm) {
        this.gddwbm = gddwbm == null ? null : gddwbm.trim();
    }

    public Long getSblxdm() {
        return sblxdm;
    }

    public void setSblxdm(Long sblxdm) {
        this.sblxdm = sblxdm;
    }

    public Long getSbxhdm() {
        return sbxhdm;
    }

    public void setSbxhdm(Long sbxhdm) {
        this.sbxhdm = sbxhdm;
    }

    public Long getEdrl() {
        return edrl;
    }

    public void setEdrl(Long edrl) {
        this.edrl = edrl;
    }

    public String getYxztdm() {
        return yxztdm;
    }

    public void setYxztdm(String yxztdm) {
        this.yxztdm = yxztdm == null ? null : yxztdm.trim();
    }

    public String getGbzbbz() {
        return gbzbbz;
    }

    public void setGbzbbz(String gbzbbz) {
        this.gbzbbz = gbzbbz == null ? null : gbzbbz.trim();
    }

    public String getGisid() {
        return gisid;
    }

    public void setGisid(String gisid) {
        this.gisid = gisid == null ? null : gisid.trim();
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


    public String getCjsj() {
		return cjsj;
	}

	public void setCjsj(String cjsj) {
		this.cjsj = cjsj;
	}

	public Date getCzsj() {
        return czsj;
    }

    public void setCzsj(Date czsj) {
        this.czsj = czsj;
    }

    public String getCjmc() {
        return cjmc;
    }

    public void setCjmc(String cjmc) {
        this.cjmc = cjmc == null ? null : cjmc.trim();
    }

    public String getCcbh() {
        return ccbh;
    }

    public void setCcbh(String ccbh) {
        this.ccbh = ccbh == null ? null : ccbh.trim();
    }

    public String getDyzh() {
        return dyzh;
    }

    public void setDyzh(String dyzh) {
        this.dyzh = dyzh == null ? null : dyzh.trim();
    }

    public Integer getLqfsdm() {
        return lqfsdm;
    }

    public void setLqfsdm(Integer lqfsdm) {
        this.lqfsdm = lqfsdm;
    }

    public Integer getGyeddy() {
        return gyeddy;
    }

    public void setGyeddy(Integer gyeddy) {
        this.gyeddy = gyeddy;
    }

    public Integer getZyeddl() {
        return zyeddl;
    }

    public void setZyeddl(Integer zyeddl) {
        this.zyeddl = zyeddl;
    }

    public Integer getDyeddy() {
        return dyeddy;
    }

    public void setDyeddy(Integer dyeddy) {
        this.dyeddy = dyeddy;
    }

    public Integer getDqzjxfs() {
        return dqzjxfs;
    }

    public void setDqzjxfs(Integer dqzjxfs) {
        this.dqzjxfs = dqzjxfs;
    }
}