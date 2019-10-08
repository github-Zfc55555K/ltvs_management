package com.ltvs.service;

import java.util.List;

import com.ltvs.pojo.LtvsQuartz;
import com.ltvs.pojo.LtvsUser;

/**
 * 系统设置
 * 
 * @Description
 * @author LIU
 * @date 2019年4月3日 上午10:44:56
 */
public interface ISystemService {

	// 添加用戶
	void addUser(LtvsUser lu);

	// 删除用户(可批量)
	void delUser(List<String> userIds);

	// 获取所有定时任务
	List<LtvsQuartz> getAllQuartzInfo();

	int setStatusByJobName(String status, String jobName);

}
