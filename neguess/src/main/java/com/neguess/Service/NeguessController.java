package com.neguess.Service;

import java.util.*;
import com.neguess.DAO.NeguessDAO;
import com.neguess.POJO.Inputobject;
import com.neguess.POJO.Outputobject;

public class NeguessController {
	
	public Outputobject getclues(Inputobject objin)
	{
		
		NeguessDAO d = new NeguessDAO();
		Outputobject objout = new Outputobject();
		String type_id = d.gettype_id(objin.getEntity_type());
		String entity_id = d.getentity_id(type_id);
		String [] peer_id = new String[2]; 
		peer_id = d.getpeer_id(entity_id, objin.getPeer_function());

		objout.setRight_entity(entity_id);
		objout.setWrong1_entity(peer_id[0]);
		objout.setWrong2_entity(peer_id[1]);

		ArrayList<String> right = d.getclues(entity_id, objin.getPeer_function());
		ArrayList<String> wrong1 = d.getclues(peer_id[0], objin.getPeer_function());
		ArrayList<String> wrong2 = d.getclues(peer_id[1], objin.getPeer_function());
		
//		while(right == null || wrong1 == null || wrong2 == null)
//		{
//			entity_id = d.getentity_id(type_id);
//			peer_id = d.getpeer_id(entity_id, objin.getPeer_function());
//			right = d.getclues(entity_id, objin.getPeer_function());
//			wrong1 = d.getclues(peer_id[0], objin.getPeer_function());
//			wrong2 = d.getclues(peer_id[1], objin.getPeer_function());
//		}
//		System.out.println(entity_id + " " + peer_id[0] +  " " + peer_id[1]);

		objout.setRight(d.getentity_label(entity_id));
		objout.setWrong1(d.getpeer_label(peer_id[0]));
		objout.setWrong2(d.getpeer_label(peer_id[1]));
		
		List<LinkedHashMap<String, String>> clues = new ArrayList<LinkedHashMap<String,String>>(); 
		String[] label = {"Clue_1", "Clue_2", "Clue_3"};
		LinkedHashMap<String, String> map = new LinkedHashMap<String, String>();
		int l = 0;
		switch (objin.getDifficulty()) {
			case "EASY":
				l = 0;
				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 0 && flag2 == 0) {
						map.put(label[l], i);
//					System.out.println(map);
						l++;
					}
					if (l == 3)
						break;
				}
				clues.add(map);
				objout.setClues(clues);
				break;

			case "MEDIUM":
				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 0 && flag2 == 0) {
						map.put(label[0], i);
//					System.out.println(map);
						break;
					}
				}
				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 0 && flag2 == 1) {
						map.put(label[1], i);
//					System.out.println(map);
						break;
					} else if (flag1 == 1 && flag2 == 0) {
						map.put(label[1], i);
//					System.out.println(map);
						break;
					}
				}
				if (!(map.containsKey("Clue_2"))) {
					int index = (int) (Math.random() * right.size());
					map.put(label[1], right.get(index));
				}
				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 0 && flag2 == 0 && !(map.get("Clue_1").equalsIgnoreCase(i)) && !(map.get("Clue_2").equalsIgnoreCase(i))) {
						map.put(label[2], i);
//					System.out.println(map);
						break;
					}
				}
				clues.add(map);
				objout.setClues(clues);
				break;

			case "HARD":
				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 0 && flag2 == 0) {
						map.put(label[0], i);
//					System.out.println(map);
						break;
					}
				}
				for (String i : wrong1) {
					int flag1 = 0;
					for (String j : wrong2) {
						if (i.equalsIgnoreCase(j)) {
							flag1 = 1;
						}
					}
					if (flag1 == 1) {
						map.put(label[1], i);
//					System.out.println("Match between wrong1 and wrong2");
						break;
					}
				}
				if (!(map.containsKey("Clue_2"))) {
					int index = (int) (Math.random() * right.size());
					map.put(label[1], right.get(index));
				}

				for (String i : right) {
					int flag1 = 0, flag2 = 0;
					for (String j : wrong1) {
						if (i.equalsIgnoreCase(j))
							flag1 = 1;
					}
					for (String k : wrong2) {
						if (i.equalsIgnoreCase(k))
							flag2 = 1;
					}
					if (flag1 == 1 && flag2 == 1 && !(map.get("Clue_2").equalsIgnoreCase(i))) {
						map.put(label[2], i);
//					System.out.println(map);
						break;
					}
				}
				if (!(map.containsKey("Clue_3"))) {
					int index = (int) (Math.random() * right.size());
					map.put(label[2], right.get(index));
				}

				clues.add(map);
				objout.setClues(clues);
				break;

			default:
				break;

		}
		return objout;
	}
	
	public LinkedHashMap<String, String[]> getlinks(List<LinkedHashMap<String, String>> clues)
	{
		NeguessDAO d = new NeguessDAO();
		LinkedHashMap<String, String[]> link = new LinkedHashMap<String, String[]>();
		String[] label = {"Clue_1_link", "Clue_2_link", "Clue_3_link"};
		String clue1 = clues.get(0).get("Clue_1");
		String clue2 = clues.get(0).get("Clue_2");
		String clue3 = clues.get(0).get("Clue_3");
		String[] link1 = d.getlinks(clue1);
		String[] link2 = d.getlinks(clue2);
		String[] link3 = d.getlinks(clue3);
		link.put(label[0], link1);
		link.put(label[1], link2);
		link.put(label[2], link3);
		return link;
	}
	

}
