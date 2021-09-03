package com.neguess.Connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class DbConnection {
	private static final String DRIVER="org.postgresql.Driver";
	private static final String URL="jdbc:postgresql://localhost:5432/Main_DB";
	private static final String USERNAME="postgres";
	private static final String PASSWORD="9090";
	
	
	public static Connection getConnection(){
		Connection con=null;
		
		try {
			Class.forName(DRIVER);
            con=DriverManager.getConnection(URL, USERNAME, PASSWORD);
		   //System.out.println("connection established"+con);
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				System.out.println(e);
			}catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println(e);
		}
		  return con;
		
	}
	
	
	public static void closeStatement(PreparedStatement pst){
		
		if(pst!=null){
			
			try {
				pst.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				System.out.println(e);
			}
		}
	}
	public static void closeConnection(Connection con){
		
		if(con!=null){
			
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				System.out.println(e);
			}
		}
	}
}
