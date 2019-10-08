
package com.ltvs.controller;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ltvs.pojo.LtvsUser;
import com.ltvs.service.ISystemService;
/**
 * 系统设置
 * @Description 
 * @author LIU
 * @date 2019年4月3日 上午10:45:34
 */
@Controller
public class SystemController {
    
    @Autowired
    private ISystemService systemService;
    
    @RequestMapping(value = "system/addUser", method = RequestMethod.POST)
    @ResponseBody
    public String addUser(HttpServletRequest hq, HttpServletResponse hr)
    {
        LtvsUser lu = new LtvsUser();
        // 获取注册信息
        String userName = (String)hq.getAttribute("userName");
        String password = (String)hq.getAttribute("password");
        lu.setUserName(userName);
        lu.setUserPassword(password);
        lu.setCreattime(new Date());
        try {
            systemService.addUser(lu);
        } catch (Exception e) {
            return "fail";
        }
        return "success";
    }
    
    // 删除用户
    @RequestMapping(value = "system/delUser", method = RequestMethod.POST)
    @ResponseBody
    public String delUser(HttpServletRequest hq, HttpServletResponse hr)
    {
        // 获取需要删除的id集合
        List<String> userIds = (List<String>)hq.getAttribute("userIds");
        try {
        systemService.delUser(userIds);
        } catch (Exception e) {
            return "fail";
        }
        return "success";
    }
}
