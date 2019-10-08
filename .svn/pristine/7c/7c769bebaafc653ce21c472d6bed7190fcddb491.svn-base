package com.ltvs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ltvs.mapping.LtvsUserMapper;
import com.ltvs.pojo.LtvsUser;
import com.ltvs.service.ILoginService;
import com.ltvs.util.datasource.DynamicDataSourceHolder;

/**
 * 登录service
 * @Description 
 * @author LIU
 * @date 2019年5月6日 下午2:44:51
 */
@Service
public class LoginServiceImpl implements ILoginService {

    @Autowired
    private LtvsUserMapper ltvsUserMapper;
    
    @Override
    public LtvsUser findUser(LtvsUser user) {
//    	DynamicDataSourceHolder.setDataSource("oracledataSource");
        return ltvsUserMapper.findUser(user);
    }

    @Override
    public void updateLoginTime(LtvsUser ltvsUser) {
        ltvsUserMapper.updateById(ltvsUser);
    }

}
