package com.neguess.POJO;

import java.util.*;

public class Outputobject {


	String right;
	String wrong1;
	String wrong2;
	List<LinkedHashMap<String, String>> clues;
	LinkedHashMap<String, String[]> links;
	String right_entity;
	String wrong1_entity;
	String wrong2_entity;
	
	
	public LinkedHashMap<String, String[]> getLinks() {
		return links;
	}
	public void setLinks(LinkedHashMap<String, String[]> links) {
		this.links = links;
	}
	public String getRight() {
		return right;
	}
	public void setRight(String right) {
		this.right = right;
	}
	public String getWrong1() {
		return wrong1;
	}
	public void setWrong1(String wrong1) {
		this.wrong1 = wrong1;
	}
	public String getWrong2() {
		return wrong2;
	}
	public void setWrong2(String wrong2) {
		this.wrong2 = wrong2;
	}
	public List<LinkedHashMap<String, String>> getClues() {
		return clues;
	}
	public void setClues(List<LinkedHashMap<String, String>> clues) {
		this.clues = clues;
	}
	public String getRight_entity() { return right_entity; }
	public void setRight_entity(String right_entity) { this.right_entity = right_entity; }
	public String getWrong1_entity() { return wrong1_entity; }
	public void setWrong1_entity(String wrong1_entity) { this.wrong1_entity = wrong1_entity; }
	public String getWrong2_entity() { return wrong2_entity; }
	public void setWrong2_entity(String wrong2_entity) { this.wrong2_entity = wrong2_entity; }
}
