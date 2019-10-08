package com.ltvs.quartz.service;

import org.quartz.CronScheduleBuilder;
import org.quartz.CronTrigger;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.JobKey;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.TriggerBuilder;
import org.quartz.TriggerKey;
import org.quartz.impl.StdSchedulerFactory;
import org.springframework.stereotype.Service;

import com.ltvs.quartz.job.QuartzJob;
import com.ltvs.util.websocket.WebSocket;

@Service
public class QuartzService {

	/**
	 * 工厂模式获得调度器
	 * @return
	 */
	public StdSchedulerFactory getSchedulerFactory() {
		StdSchedulerFactory factory = new StdSchedulerFactory();
		return factory;
	}

	/**
	 * 开始任务前执行添加任务
	 * 
	 * @param jobIdentity
	 *            任务名称标识
	 * @param cronIdentity
	 *            任务时间标识
	 * @param crom
	 *            时间
	 * @throws SchedulerException
	 */
	public void addJob(String jobIdentity, String cronIdentity, String cron) throws SchedulerException {
		Scheduler scheduler = getSchedulerFactory().getScheduler();
		JobDetail jobDetail = JobBuilder.newJob(com.ltvs.quartz.job.QuartzJob.class).withIdentity(jobIdentity).build();
		CronTrigger crTrigger = TriggerBuilder.newTrigger().withIdentity(cronIdentity)
				.withSchedule(CronScheduleBuilder.cronSchedule(cron)).build();
		scheduler.scheduleJob(jobDetail, crTrigger);
	}

	/**
	 * 根据任务表示暂停任务
	 * 
	 * @param jobIdentity
	 * @throws SchedulerException
	 */
	public void pauseJob(String jobIdentity) throws SchedulerException {
		Scheduler scheduler = getSchedulerFactory().getScheduler();
		scheduler.pauseJob(JobKey.jobKey(jobIdentity));
	}

	/**
	 * 开始任务
	 * 
	 * @throws SchedulerException
	 */
	public void startScheduler() throws SchedulerException {
		System.out.println("开始任务");
		QuartzJob.progress = 0;
		Scheduler scheduler = getSchedulerFactory().getScheduler();
		scheduler.start();
	}

	/**
	 * 恢复任务
	 * 
	 * @param jobName
	 *            任务标识
	 * @throws SchedulerException
	 */
	public void resumeJob(String jobName) throws SchedulerException {
		Scheduler scheduler = getSchedulerFactory().getScheduler();
		scheduler.resumeJob(JobKey.jobKey(jobName));
	}

	/**
	 * 关闭定时任务
	 */
	public void shutdownJobs() {
		System.out.println("关闭任务");
		try { 
			Scheduler sched = getSchedulerFactory().getScheduler();
			if (!sched.isShutdown()) {
				sched.shutdown();
			}
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

	/**
	 * 移除任务
	 * 
	 * @param jobName
	 * @param jobGroupName
	 * @param triggerName
	 * @param triggerGroupName
	 */
	public void removeJob(String jobName, String triggerName) {
		System.out.println("停止任务");
		try {
			Scheduler sched = getSchedulerFactory().getScheduler();
			// 停止触发器
			sched.pauseTrigger(TriggerKey.triggerKey(triggerName));
			// 移除触发器
			sched.unscheduleJob(TriggerKey.triggerKey(triggerName));
			// 删除任务
			sched.deleteJob(JobKey.jobKey(jobName));
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
