package com.ltvs.quartz.job;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;

import com.ltvs.quartz.service.QuartzService;
import com.ltvs.util.ReadXls;
import com.ltvs.util.algorithmic.KnnMain;
import com.ltvs.util.websocket.WebSocket;

public class QuartzJob implements Job{

	public volatile static Integer progress = 0; 
	
	@Override
	public void execute(JobExecutionContext arg0) throws JobExecutionException {
		double[][] data = null;
		try {
			data = ReadXls.readXls(this.getClass().getClassLoader().getResource("/").getPath()+"原始数据.xls", 11, 20, 4, 10);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		WebSocket.msgToWeb.append(sdf.format(date)+"开始执行算法\n");
		WebSocket.msgToWeb.append(sdf.format(date)+"输出差异\n");
		KnnMain.linjin(data);
		WebSocket.msgToWeb.append(sdf.format(date)+"结束算法\n");
		QuartzJob.progress += 10;
		
		System.out.println(progress);

	}

}
