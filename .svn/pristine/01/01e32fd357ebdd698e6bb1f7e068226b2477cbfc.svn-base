package com.ltvs.neo4j;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Neo4jDemo {

	public static void main(String[] args) {
		 try {
			Connection conn = DriverManager.getConnection("jdbc:neo4j:bolt://192.168.1.110:7687/","neo4j","1234");
			Statement statement = conn.createStatement();
	        ResultSet resultSet = statement.executeQuery("MATCH (n) RETURN n");
	        while (resultSet.next()){
	            System.out.println(resultSet.getString(1));
	        }
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
