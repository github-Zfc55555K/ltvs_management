package com.ltvs.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ltvs.mapping.ISystemMapper;
import com.ltvs.mapping.LtvsUserMapper;
import com.ltvs.pojo.LtvsQuartz;
import com.ltvs.pojo.LtvsUser;
import com.ltvs.service.ISystemService;
/**
 * 系统设置
 * @Description 
 * @author LIU
 * @date 2019年4月3日 上午10:46:31
 */
@Service
public class SystemServiceImpl implements ISystemService {

    @Autowired
    private ISystemMapper systeMapper;
    
    @Autowired
    private LtvsUserMapper ltvsUserMapper;
    
    // 添加用户
    @Override
    public void addUser(LtvsUser lu) {
        ltvsUserMapper.insert(lu);
    }

    // 删除用户(可批量)
    @Override
    public void delUser(List<String> userIds) {
        ltvsUserMapper.delUser(userIds);
    }

    //获得所有定时任务
	@Override
	public List<LtvsQuartz> getAllQuartzInfo() {
		return systeMapper.getAllQuartzInfo();
	}

	//修改任务状态
	@Override
	public int setStatusByJobName(String status, String jobName) {
		return systeMapper.setStatusByJobName(status, jobName);
	}

}
