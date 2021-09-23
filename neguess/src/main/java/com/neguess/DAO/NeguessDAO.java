package com.neguess.DAO;

import java.nio.charset.StandardCharsets;
import java.sql.*;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;

import com.neguess.Connection.DbConnection;

public class NeguessDAO {
	public Connection con = DbConnection.getConnection();;
	public PreparedStatement ps = null;
	
	public String gettype_id(String entity_type) {
		
		try{
			String entity_label = null;
			if(entity_type != null){
				ps=con.prepareStatement("Select \"TYPES\".\"TYPE_ID\" from neguess_db.\"TYPES\" where \"TYPES\".\"TYPE_LABEL\" = '"+entity_type+"'");
				ResultSet result = ps.executeQuery();
				while (result.next()) 
				{
					entity_label = result.getString("TYPE_ID");
				}
				if(entity_label != null)
				{
					return entity_label;
				}
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return "Something went wrong....!";
	}
	
	public String getentity_id(String type_id) {
		
		try{
			ArrayList<String> entity_id = new ArrayList<>();
			String entity = null;
			if(type_id != null){
				ps=con.prepareStatement("Select \"ENTITIES\".\"ENTITY_ID\" from neguess_db.\"ENTITIES\" where \"ENTITIES\".\"TYPE_ID\" = '"+type_id+"' order by \"ENTITIES\".\"ENTITY_POPULARITY\" limit 50");
				ResultSet result = ps.executeQuery();
				while (result.next()) 
				{
					entity = result.getString("ENTITY_ID");
					entity_id.add(entity);
				}
				int index = (int)(Math.random() * entity_id.size());
				entity = entity_id.get(index);
				if(entity != null)
				{
					return entity;
				}
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return "Something went wrong....!";
	}
	
	public String[] getpeer_id(String entity_id, String peer_function) {
		
		try{
			String [] peer_id = new String[2];
			ArrayList<String> peer_ids = new ArrayList<>();
			String peer = null;
			int index1,index2 = 0;
			if(entity_id != null){
				ps=con.prepareStatement("Select \"PEERS\".\"PEER_ID\" from neguess_db.\"PEERS\" where \"PEERS\".\"ENTITY_ID\" = '"+entity_id+"' and \"PEERS\".\"PEER_FUNCTION\" = '"+peer_function+"'");
				ResultSet result = ps.executeQuery();
				while (result.next()) 
				{
					peer = result.getString("PEER_ID");
					peer_ids.add(peer);
				}
				while(true) 
				{
					index1 = (int)(Math.random() * peer_ids.size());
					index2 = (int)(Math.random() * peer_ids.size());
					if(index1 != index2) 
					{
						break;
					}
				}
				peer_id[0] = peer_ids.get(index1);
				peer_id[1] = peer_ids.get(index2);
				if(peer_id != null)
				{
					return peer_id;
				}
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return null;
	}
	
	public String getentity_label(String entity_id) {
		
		try{
			String entity_label = null;
			if(entity_id != null)
			{
				ps=con.prepareStatement("Select Distinct(\"ENTITIES\".\"ENTITY_LABEL\") from neguess_db.\"ENTITIES\" where \"ENTITIES\".\"ENTITY_ID\" = '"+entity_id.toString()+"'");
				ResultSet result = ps.executeQuery();
				result.next(); 
				//s = result.getString("ENTITY_LABEL");
				byte[] data = result.getBytes("ENTITY_LABEL");
				entity_label = new String(data, StandardCharsets.UTF_8);
				if(entity_label != null)
				{
					return entity_label;
				}
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return "Something went wrong....!";
	}
	
	public String getpeer_label(String peer_id) {
		
		try{
			String peer_label = null;
			if(peer_id != null){
				ps=con.prepareStatement("Select \"PEERS\".\"PEER_LABEL\" from neguess_db.\"PEERS\" where \"PEERS\".\"PEER_ID\" = '"+peer_id.toString()+"'");
				ResultSet result = ps.executeQuery();
					//s = result.getString("ENTITY_LABEL");
				result.next();
				byte[] data = result.getBytes("PEER_LABEL");
				peer_label = new String(data, StandardCharsets.UTF_8);
				if(peer_label != null)
				{
					return peer_label;
				}
			}
		}
	catch(SQLException e){
		e.printStackTrace();
	}
	return "Something went wrong....!";
	}
		
	public ArrayList<String> getclues(String entity_id, String peer_function){
		
		try{
			ArrayList<String> clue_label = new ArrayList<>();
			String clues = null;
			if(entity_id != null){
				ps=con.prepareStatement("Select \"CLUES\".\"CLUE_LABEL\" from neguess_db.\"CLUES\" where \"CLUES\".\"ENTITY_ID\" = '"+entity_id+"' and \"CLUES\".\"PEER_FUNCTION\" = '"+peer_function+"'");
				ResultSet result = ps.executeQuery();
				while (result.next()) 
				{
					clues = result.getString("CLUE_LABEL");
					clue_label.add(clues);
				}
				if(clue_label != null)
				{
					return clue_label;
				}
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return null;
	}

	
	public String[] getlinks(String clues){
		
		try{
			String link = null;
			String[] links = new String[2];
			String link2 = null;
			if(clues != null){
				ps=con.prepareStatement("Select \"CLUES\".\"CLUE_ID\" from neguess_db.\"CLUES\" where \"CLUES\".\"CLUE_LABEL\" = '"+clues+"'");
				ResultSet result = ps.executeQuery();
				while (result.next()) 
				{
					link = result.getString("CLUE_ID");
				}
				String[] links_arr = link.split(";");
				String link1 = "https://www.wikidata.org/wiki/Property:" + links_arr[0].toString();
				if (!(links_arr[1].toString().equalsIgnoreCase("null")))
				{
					link2 = "https://www.wikidata.org/wiki/" + links_arr[1].toString();
				}
				else 
				{
					link2 = "none";
				}
				links[0] = link1;
//				System.out.println(links[0]);
				links[1] = link2;
//				System.out.println(links[1]);
				return links;
			}
		}
		catch(SQLException e){
			e.printStackTrace();
		}
		return null;
	}
//	public static void main(String args[])
//	{
//		String entity_type = "person";
//		String peerfunction = "facets";
//		String difficulty = "MEDIUM";
//		Inputobject objin = new Inputobject();
//		NeguessDAO d = new NeguessDAO();
//		NeguessController c = new NeguessController();
//		objin.setEntity_type(entity_type);
//		objin.setPeer_function(peerfunction);
//		objin.setDifficulty(difficulty);
//		Outputobject objout = c.getclues(objin);
//		System.out.println(objout.getClues());
//		System.out.println(d.getlinks(objout.getClues().get(0).get("Clue_1").toString())[1]);
//	}
	
}
