package com.ltvs.pojo;
/**
 * 杆塔
 *
 */
public class Pole {
	// 杆塔id
    private String poleID;

    // 杆塔名
    private String poleName;

    // 线路id
    private String lineID;

    // 经度
    private String gpsjd;

    // 纬度
    private String gpswd;

    // 杆塔序号
    private int poleNum;

    // 档距
    private double lineLen;

	public String getPoleID() {
		return poleID;
	}

	public void setPoleID(String poleID) {
		this.poleID = poleID;
	}

	public String getPoleName() {
		return poleName;
	}

	public void setPoleName(String poleName) {
		this.poleName = poleName;
	}

	public String getLineID() {
		return lineID;
	}

	public void setLineID(String lineID) {
		this.lineID = lineID;
	}


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

	public int getPoleNum() {
		return poleNum;
	}

	public void setPoleNum(int poleNum) {
		this.poleNum = poleNum;
	}

	public double getLineLen() {
		return lineLen;
	}

	public void setLineLen(double lineLen) {
		this.lineLen = lineLen;
	}
    
}
