package com.ltvs.mapping;

import java.util.List;

import com.ltvs.pojo.LtvsUser;

/**
 * 用户信息dao
 * @ClassName: LtvsUserMapper 
 * @Description: TODO(这里用一句话描述这个类的作用) 
 * @author wangxy 
 * @date 2019年4月2日 上午9:09:00 
 * @version 1.0
 */
public interface LtvsUserMapper {

    LtvsUser findUser(LtvsUser user);

    void delUser(List<String> userIds);

    void updateById(LtvsUser ltvsUser);

    void insert(LtvsUser lu);
}