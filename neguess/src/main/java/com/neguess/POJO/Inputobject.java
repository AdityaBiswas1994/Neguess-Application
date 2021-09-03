package com.neguess.POJO;

public class Inputobject {

	String entity_type;
	String difficulty;
	String peer_function;
	
	public String getEntity_type() {
		return entity_type;
	}
	public void setEntity_type(String entity_type) {
		this.entity_type = entity_type;
	}
	public String getDifficulty() {
		return difficulty;
	}
	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}
	public String getPeer_function() {
		return peer_function;
	}
	public void setPeer_function(String peer_function) {
		this.peer_function = peer_function;
	}

}

/*
   	{
		"entity_type" : value,
		"difficulty" : value,
		"peer_function" : value
	}

*/
  