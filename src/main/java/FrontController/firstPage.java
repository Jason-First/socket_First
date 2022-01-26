package FrontController;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class firstPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		final String htmlDir = "/WEB-INF/view/";
		
		String getURI = request.getRequestURI();
		System.out.println("Main GetURI : " + getURI);
		
		String getJSP = "", getPage = "";
		for(String jsp :getURI.split("/")) { getJSP = jsp; } 
		System.out.println("Main getJSP : " + getJSP);

		getPage = getJSP.substring(0, getJSP.indexOf("."));
		System.out.println("Main getPage : " + getPage);
		
		if(getPage.equals("Welcome_FirstPage")) {
			getPage = "firstPage.jsp";
		}else if(getPage.equals("Socket")) { //회사소개-인사말
			getPage = "test.jsp";
		}
		
		request.setAttribute("page", getPage);
		request.getRequestDispatcher(htmlDir + getPage).forward(request, response);		
		
//		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/view/firstPage.jsp");
//		RequestDispatcher dispatcher = request.getRequestDispatcher("/WEB-INF/view/test.jsp");
//		dispatcher.forward(request, response);
	}

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doPost(request, response);
	}
	

}
	