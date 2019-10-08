package com.ltvs.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.ltvs.pojo.LtvsUser;

public class LoginInterceptor implements HandlerInterceptor {

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {

	}

	@Override
	public void postHandle(HttpServletRequest req, HttpServletResponse resp, Object arg2, ModelAndView arg3)
			throws Exception {

	}

	@Override
	public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object arg2) throws Exception {
//		String basePath = req.getScheme() + "://" + req.getServerName() + ":"  + req.getServerPort()+req.getContextPath();
//		HttpSession session = req.getSession();
//		LtvsUser lu = (LtvsUser) session.getAttribute("LOGIN_USER");
//		if (lu != null) {
//			return true;
//		} else {
//			return false;
//		}
		return true;
	}
}