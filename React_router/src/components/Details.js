import React  from 'react'
import { Grid, Segment, Card } from 'semantic-ui-react'


export default function Details(props) {

  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  

    if(props.datatoChild==='')
    {
        return(
            <div></div>
        )
    }
    else{
    let list = props.datatoChild.split('%--')

    const handleClick = (value) => {
      props.callback && props.callback(value);
      
    }

    //let ansList = [list[0], list[1], list[2]];
    const entity_link = [
      { key: list[0], value: list[9] },
      { key: list[1], value: list[10] },
      { key: list[2], value: list[11] }
    ];
    let shuffleList = shuffle(entity_link);

    return(
        
        <div>
            <Segment>
            <Grid columns='equal'>

            <Grid.Row>
      <Grid.Column>
        Select One
      </Grid.Column>
      
    </Grid.Row>


            <Grid.Row columns={2} stretched>

              <Grid.Column>
                <Card  fluid color='blue' header='Clue 1' >

                </Card>
              </Grid.Column>

              <Grid.Column >
                <p display="inline-block">
                <a href={list[6].split(',')[0]} target="_blank">{list[3].split(';')[0]} ; </a>
                <a href={list[6].split(',')[1]} target="_blank">{list[3].split(';')[1]}</a>
                </p>
              </Grid.Column>

            </Grid.Row>
        
      
      

        <Grid.Row columns={2} stretched>

<Grid.Column>
    <Card fluid color='blue' header='Clue 2' >
    
    </Card>
    </Grid.Column>

    <Grid.Column>
      
    <p display="inline-block">
      <a href={list[7].split(',')[0]} target="_blank">{list[4].split(';')[0]} ;</a>

      <a href={list[7].split(',')[1]} target="_blank">{list[4].split(';')[1]}</a> 
    </p>
      </Grid.Column>

    </Grid.Row>
      
    
   
    <Grid.Row columns={2} stretched>

    <Grid.Column>
        <Card fluid color='blue' header='Clue 3' >
        
        </Card>
        </Grid.Column>

      <Grid.Column>
   
      <p display="inline-block">
        <a href={list[8].split(',')[0]} target="_blank">{list[5].split(';')[0]} ;</a>
 
         <a href={list[8].split(',')[1]} target="_blank">{list[5].split(';')[1]}</a> 
      </p>
        </Grid.Column>

        </Grid.Row>



    <Grid.Row stretched>
      <Grid.Column>
        <button className="mybutton" onClick={() => handleClick(shuffleList[0].key)}>
            {shuffleList[0].key}
        </button>  
        <a href={"https://www.wikidata.org/wiki/"+shuffleList[0].value.split('/')[0]} target="_blank">Click to know more.</a>   
      </Grid.Column>

      <Grid.Column>
      <button  className="mybutton" onClick={() => handleClick(shuffleList[1].key)}>
            {shuffleList[1].key}
        </button>   
        <a href={"https://www.wikidata.org/wiki/"+shuffleList[1].value.split('/')[0]} target="_blank">Click to know more.</a>    
      </Grid.Column>
      <Grid.Column>
      <button  className="mybutton" onClick={() => handleClick(shuffleList[2].key)}>
            {shuffleList[2].key}
        </button>      
        <a href={"https://www.wikidata.org/wiki/"+shuffleList[2].value.split('/')[0]} target="_blank">Click to know more.</a> 
      </Grid.Column>
      
    </Grid.Row>
   
    
  </Grid>
        </Segment>
        </div>
    )
    }
}