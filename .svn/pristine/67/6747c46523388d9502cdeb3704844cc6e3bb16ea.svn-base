package com.ltvs.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.ltvs.pojo.LtvsUser;

/**
 * 登录过滤器，防止用户直接访问 首页
 * @author zfc
 */
public class HtmlFilter implements Filter {
	@Override
	public void destroy() {
	}

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest)request;
		HttpServletResponse resp = (HttpServletResponse) response;
		HttpSession session = req.getSession();
		LtvsUser lu = (LtvsUser) session.getAttribute("LOGIN_USER");
		if(lu == null){
			if(req.getRequestURI().indexOf("/login.html") > -1){
				chain.doFilter(request, response);
				return;
			}else{
				resp.sendRedirect("login.html");
			}
		}else{
			chain.doFilter(request, response);
		}
		chain.doFilter(request, response);
	}

}
