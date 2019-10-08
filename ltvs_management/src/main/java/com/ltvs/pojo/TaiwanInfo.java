package com.ltvs.pojo;

import java.util.Date;

/**
 * 台区信息
 * 
 * @Description
 * @author LIU
 * @date 2019年4月10日 下午4:56:26
 */
public class TaiwanInfo {
    // 台区标识
    private String tqbs;

    // 台区编号
    private String tqbh;

    // 台区名称
    private String tqmc;

    // 台区类型:01公变台区;02专变台区;03专变合用台区
    private Integer tqlx;

    // 供电单位编码
    private String gddwbm;

    // 台区地址
    private String tqdz;

    // 地区特征代码:1市中心区；2市区；3城镇；4农村
    private Integer dqtzdm;

    // 运行状态代码:01运行；02停用；03拆除
    private Integer yxztdm;

    // 变电站编号
    private String bdzbh;

    // 创建时间
    private Date cjsj;

    // 操作时间
    private Date czsj;

    // 是否有子节点
    private Integer hasChild;

    // 层级
    private Integer hierarchy;
    
    private String gpsjd;
    
    private String gpswd;

    public String getGpsjd() {
		return gpsjd;
	}

	public void setGpsjd(String gpsjd) {
		this.gpsjd = gpsjd;
	}

	public String getGpswd() {
		return gpswd;
	}

	public void setGpswd(String gpswd) {
		this.gpswd = gpswd;
	}

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

    public String getTqbs() {
        return tqbs;
    }

    public void setTqbs(String tqbs) {
        this.tqbs = tqbs == null ? null : tqbs.trim();
    }

    public String getTqbh() {
        return tqbh;
    }

    public void setTqbh(String tqbh) {
        this.tqbh = tqbh == null ? null : tqbh.trim();
    }

    public String getTqmc() {
        return tqmc;
    }

    public void setTqmc(String tqmc) {
        this.tqmc = tqmc == null ? null : tqmc.trim();
    }

    public Integer getTqlx() {
        return tqlx;
    }

    public void setTqlx(Integer tqlx) {
        this.tqlx = tqlx;
    }

    public String getGddwbm() {
        return gddwbm;
    }

    public void setGddwbm(String gddwbm) {
        this.gddwbm = gddwbm == null ? null : gddwbm.trim();
    }

    public String getTqdz() {
        return tqdz;
    }

    public void setTqdz(String tqdz) {
        this.tqdz = tqdz == null ? null : tqdz.trim();
    }

    public Integer getDqtzdm() {
        return dqtzdm;
    }

    public void setDqtzdm(Integer dqtzdm) {
        this.dqtzdm = dqtzdm;
    }

    public Integer getYxztdm() {
        return yxztdm;
    }

    public void setYxztdm(Integer yxztdm) {
        this.yxztdm = yxztdm;
    }

    public String getBdzbh() {
        return bdzbh;
    }

    public void setBdzbh(String bdzbh) {
        this.bdzbh = bdzbh == null ? null : bdzbh.trim();
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