package com.neguess.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.neguess.POJO.Inputobject;
import com.neguess.POJO.Outputobject;
import com.neguess.Service.NeguessController;

@Controller
public class QuizController 
{
	NeguessController c = new NeguessController();
	String[] type = {"literary work", "business", "organization", "sovereign state"};
	String[] peer = {"facets", "embeddings", "graph-measures"};
	public String type_set;
	//@GetMapping(value = "/quizOutput", produces = MediaType.APPLICATION_JSON_VALUE)
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/quizOutput", method = RequestMethod.GET)
	public ResponseEntity<Outputobject> quizOutput(Inputobject objin)
	{
		if(objin.getPeer_function().equalsIgnoreCase("any"))
		{
			int index2 = (int)(Math.random() * peer.length);
			objin.setPeer_function(peer[index2]);
			//objin.setPeer_function("facets");
		}
		if(objin.getPeer_function().equalsIgnoreCase("facets") && objin.getEntity_type().equalsIgnoreCase("any"))
		{
			objin.setEntity_type("person");
		}
		if(objin.getPeer_function().equalsIgnoreCase("embeddings") && objin.getEntity_type().equalsIgnoreCase("any"))
		{
			objin.setEntity_type("sovereign state");
		}
		if(objin.getPeer_function().equalsIgnoreCase("graph-measures") && objin.getEntity_type().equalsIgnoreCase("any"))
		{
			objin.setEntity_type("organization");
		}
		if(objin.getEntity_type().equalsIgnoreCase("any"))
		{
			int index1 = (int)(Math.random() * type.length);
			objin.setEntity_type(type[index1]);
		}

		//System.out.println(objin.getEntity_type() +" "+ objin.getPeer_function());
		Outputobject objout = c.getclues(objin);
		objout.setLinks(c.getlinks(objout.getClues()));
		return new ResponseEntity(objout, HttpStatus.OK);
	}
}
