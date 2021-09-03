import React, {useState} from 'react'
import {Container, Modal} from 'react-bootstrap'
import { Grid, Button, Segment, Dropdown} from 'semantic-ui-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom"

import axios from 'axios';
import Details from './Details';


export default function Home() {

  const [entity, setEntity]= useState('sovereign state')
  const [diff, setDiff]=useState('EASY')
  const [peer, setPeer]=useState('embeddings')

  const [resJson, setRresJson] = useState({});
  const [currentAns, setCurrentAns] = useState(null);

  const [currentState, setCurrentState] = useState(0);
  const [question, setQuesState] = useState(1);
  const [textValue, setTextValue] = useState('');
  const [score, setScoreValue] = useState(0);
  const [flag, setFlagValue] = useState(true);
  const [counter, setCounterValue] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);

  }

  const reportButton = () => {
    const request = {
      'report': textValue,
      'data': resJson,
    }

    const headers= {
      'Content-Type': 'application/json',
    }

    axios.get(`http://localhost:8080/quizOutput?entity_type=person&difficulty=EASY&peer_function=facets`, request, {
      headers: headers

    }).finally(()=>{
      setTextValue("");
      setShow(true)
    })
  }
  const checkAnswer = (value) => {
    
    let returnVal = 'Incorrect';
    let val = '';
    Object.keys(resJson).forEach(key => {
      if(resJson[key] === value) {
        val = key;
      }
    });
    setAnswer(resJson['right']);
    if (val === 'right') 
    {
    returnVal = 'Correct';
    }
  
    if (flag !== false)
    {
    if (diff === 'EASY' && val === 'right'){
      setScoreValue(score + 2);
      setCounterValue(counter + 1);
    }
    else if (diff === 'MEDIUM' && val === 'right'){
      setScoreValue(score + 3);
      setCounterValue(counter + 1);
    }
    else if (diff === 'HARD' && val === 'right'){
      setScoreValue(score + 5);
      setCounterValue(counter + 1);
    }
    else{
      setCounterValue(counter + 1);
    }
    }
    if (currentState === 10){
      setFlagValue(false);
    }
    return returnVal;
  }

  const handleQuestionChange = (value) => {
    setCurrentAns(checkAnswer(value));
    if (question <= 10) {
      axios.get(`http://localhost:8080/quizOutput?entity_type=${entity}&difficulty=${diff}&peer_function=${peer}`)
          .then(res => {
              setRresJson(res.data);
              setFinal(res.data.right+
                '%--'+res.data.wrong1+
                '%--'+res.data.wrong2+
                '%--'+res.data.clues[0].Clue_1+
                '%--'+res.data.clues[0].Clue_2+
                '%--'+res.data.clues[0].Clue_3+
                '%--'+res.data.links.Clue_1_link+
                '%--'+res.data.links.Clue_2_link+
                '%--'+ res.data.links.Clue_3_link+
                '%--'+res.data.right_entity+
                '%--'+res.data.wrong1_entity+
                '%--'+res.data.wrong2_entity+'/')
              })
      setQuesState(question+1);
      setCurrentState(currentState+1);
      
    }
  }



  const [final, setFinal] = useState('')

  
    const entity_options = [
        { key: 1, text: 'any', value: 1 },
        { key: 2, text: 'person', value: 2 },
        { key: 3, text: 'literary work', value: 3 },
        { key: 4, text: 'business', value: 4 },
        { key: 5, text: 'organization', value: 5 },
        { key: 6, text: 'sovereign state', value: 6 },

      ]

    const peering_options = [
        { key: 1, text: 'any', value: 1 },
        { key: 2, text: 'facets', value: 2 },
        { key: 3, text: 'embeddings', value: 3 },
        { key: 4, text: 'graph-measures', value: 4 },

      ]

    const difficulty_options = [
        { key: 1, text: 'EASY', value: 1 },
        { key: 2, text: 'MEDIUM', value: 2 },
        { key: 3, text: 'HARD', value: 3 },

      ]

      const handleClick =(e)=>
      {
        axios.get(`http://localhost:8080/quizOutput?entity_type=${entity}&difficulty=${diff}&peer_function=${peer}`)
        .then(res => {
            setRresJson(res.data);
            setFinal(res.data.right+
              '%--'+res.data.wrong1+
              '%--'+res.data.wrong2+
              '%--'+res.data.clues[0].Clue_1+
              '%--'+res.data.clues[0].Clue_2+
              '%--'+res.data.clues[0].Clue_3+
              '%--'+res.data.links.Clue_1_link+
              '%--'+res.data.links.Clue_2_link+
              '%--'+res.data.links.Clue_3_link+
              '%--'+res.data.right_entity+
              '%--'+res.data.wrong1_entity+
              '%--'+res.data.wrong2_entity+'/')
  
        })
        setQuesState(question+1);
        setCurrentState(currentState+1);
      }

      const handleReset =()=>
      {
        window.location.reload();
      }

      const handleEntityChange =(e) =>
      {
        setEntity(e.target.innerHTML.replace('<span class="text">','').replace('</span>',''))
      }

      const handlePeerChange =(e) =>
      {
        setPeer(e.target.innerHTML.replace('<span class="text">','').replace('</span>',''))
      }

      const handleDiffChange =(e) =>
      {
        setDiff(e.target.innerHTML.replace('<span class="text">','').replace('</span>',''))
      }



    return (
        <div>
        <Modal style={{marginTop:"75px"}} show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Thank You 😃!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your report has been successfully submitted</Modal.Body>
          <Modal.Footer>
            <Button color="blue"  onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Container style={{ height: "50px" }, { width: "600px" }}>
          <div className="w-100" style={{maxWidth: "650px"}}>
            <Segment>
              Neguess, a Wikidata-entity <b>guess</b>ing game with challenging <b>neg</b>ative clues. The clues are retrieved using the &nbsp;
             <Link to="/Rules" target="_blank">peer-based negation inference method</Link>.
            </Segment>
            </div>
          </Container>
          <Container className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}, {padding: "40px"}}>
            <Grid container spacing={1}>
              <Grid item xs={8}>
              <div className="w-100" style={{maxWidth: "650px"}}>
                <Segment>
                <Grid columns='equal'>
                  <Grid.Row>
                  <Grid.Column>
                    <Dropdown clearable options={entity_options} selection placeholder='sovereign state' onChange={handleEntityChange}/>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown clearable options={peering_options} selection placeholder='embeddings' onChange={handlePeerChange}/>
                  </Grid.Column>
                  <Grid.Column>
                    <Dropdown clearable options={difficulty_options} selection placeholder='EASY' onChange={handleDiffChange}/>
                  </Grid.Column>
                </Grid.Row>
                {
                    currentState < 1 &&
                <Grid.Row>
                  <Grid.Column>
                    <Button fluid inverted color='blue' onClick={handleClick}>
                      Draw Card
                    </Button>
                  </Grid.Column>
                </Grid.Row>
                }
              </Grid>
              </Segment>
                
                <Details datatoChild={final} callback={handleQuestionChange}/>
             </div>
              </Grid>
              <Grid item xs={4}>
              <Card style={{marginTop: "-15px"}} >
                <CardContent>
                  <Typography  color="textSecondary" variant="h4" gutterBottom>
                  Welcome to Neguess!
                  </Typography>
                  {
                    currentState > 0 &&
                    <Typography variant="h5" component="h2">
                    {`Question: (${currentState}/10)`}
                    </Typography>
                  }
                  {
                    currentState === 0 &&
                    <Typography variant="h5" component="h2">
                      {`Draw a Card....!!! (${currentState}/10)`}
                    </Typography>
                  } 
                  {
                    counter >= 1 && counter < 10 && currentAns === 'Correct' &&
                  <Typography variant="body2" variant="h6" component="h2">
                    Your answer is {currentAns} 😃!!! 
                  </Typography>
                  }
                  {
                    counter >= 1 && counter < 10 && currentAns !== 'Correct' &&
                    <>
                      <Typography variant="body2" variant="h6" component="h2">
                        Your answer is {currentAns} 😥!!!
                      </Typography>
                      <Typography variant="body2" variant="h6" component="h2">
                        The correct answer is {answer}.
                      </Typography>
                    </>
                  
                  }
                  {
                    counter === 10 && 
                  <Typography variant="body2" variant="h6" component="h2">
                    Your Score is {score} !!!
                  </Typography>
                  }
                </CardContent>
                <CardActions>
                  <Button fluid inverted color='blue' size="mini" style={{width: '50%'}} onClick={handleReset}>Start Over</Button>
                </CardActions>
                <CardContent>
                  <TextField id="outlined-basic" fullWidth  style={{width: "150px"}, {paddingTop: '120px'}} placeholder="Comments" value={textValue} variant="outlined" required multiline onChange={(e) => handleTextChange(e)} />
                </CardContent>
                <CardActions>
                  <Button size="mini" color= "red" onClick={reportButton}>Submit Report</Button>
                </CardActions>
              </Card>
              </Grid>
            </Grid>
            
          </Container>
        </div>
    )
}