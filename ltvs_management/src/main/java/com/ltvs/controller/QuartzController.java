package com.ltvs.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.quartz.SchedulerException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ltvs.pojo.LtvsQuartz;
import com.ltvs.quartz.service.QuartzService;
import com.ltvs.service.ISystemService;
import com.ltvs.service.impl.SystemServiceImpl;

@Controller
public class QuartzController {

	@Autowired
	private QuartzService quartzService;

	@Autowired
	private ISystemService systemService;
	
	/**
	 * 根据用户操作处理任务
	 * @param executeStatus
	 */
	@ResponseBody
	@RequestMapping(value = "executeJob", method = RequestMethod.GET)
	public void startJob(String executeStatus,String jobName,String cron,String cronname) {
		try {
			if (executeStatus.equals("1")) {
				this.quartzService.addJob(jobName, cronname, cron);
				this.quartzService.startScheduler();
				this.systemService.setStatusByJobName("1", jobName);
			}else if(executeStatus.equals("2")){
				this.quartzService.pauseJob(jobName);
				this.systemService.setStatusByJobName("2", jobName);
			}else if(executeStatus.equals("3")){
				this.quartzService.resumeJob(jobName);
				this.systemService.setStatusByJobName("1", jobName);
			}else if(executeStatus.equals("4")){
				this.quartzService.removeJob(jobName, cronname);
			}
		} catch (SchedulerException e) {
			e.printStackTrace();
		}

	}
	
	/**
	 * 获得所有定时任务
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "getAllInfo",method = RequestMethod.GET)
	public List<LtvsQuartz> getAllQuartzInfo(){
		return this.systemService.getAllQuartzInfo();
	}
}
