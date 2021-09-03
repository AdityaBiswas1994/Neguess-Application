const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());


app.get('/http://localhost:8080/quizOutput?entity_type=person&difficulty=HARD&peer_function=facets', (req, res) => res.send('ho!'))

app.listen(8080)