package com.ltvs.pojo;

/**
 * 配电室信息
 * 
 * @Description
 * @author LIU
 * @date 2019年4月10日 下午5:01:36
 */
public class CommunityInfo {
    // 配电室标识
    private String xqbs;

    // 配电室名称
    private String xqmc;

    // 所属台区
    private String sstq;

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

    public String getXqbs() {
        return xqbs;
    }

    public void setXqbs(String xqbs) {
        this.xqbs = xqbs == null ? null : xqbs.trim();
    }

    public String getXqmc() {
        return xqmc;
    }

    public void setXqmc(String xqmc) {
        this.xqmc = xqmc == null ? null : xqmc.trim();
    }

    public String getSstq() {
        return sstq;
    }

    public void setSstq(String sstq) {
        this.sstq = sstq == null ? null : sstq.trim();
    }

    public Integer getHasChild() {
        return hasChild;
    }

    public void setHasChild(Integer hasChild) {
        this.hasChild = hasChild;
    }

}