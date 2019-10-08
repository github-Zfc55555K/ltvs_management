package com.ltvs.mapping;

import java.util.List;

import com.ltvs.pojo.LtvsQuartz;

/**
 * 系统设置
 * 
 * @Description
 * @author LIU
 * @date 2019年4月3日 上午10:50:00
 */
public interface ISystemMapper {

	List<LtvsQuartz> getAllQuartzInfo();

	int setStatusByJobName(String status, String jobName);
}
