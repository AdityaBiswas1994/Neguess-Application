import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'


export default function AboutUs() {



    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
                <div className="w-100" style={{ maxHeight: "200px", maxWidth: "700px", display:"flex" }}>
                    <Card style={{ width: '35rem', margin:"10px" }}>
                        <Card.Body>
                            <Card.Title>Aditya Bikram Biswas</Card.Title>
                            <Card.Text>
                            Master Student at the Max Planck Institute for Informatics in Saarbrücken, Germany.
                            </Card.Text>
                            <Button variant="primary"><a style={{color:"white", textDecoration:"none"}} href="https://www.linkedin.com/in/aditya-bikram-biswas-he-him-4ba166177/" target="_blank">Know More</a></Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '40rem', margin:"10px" }}>
                        <Card.Body>
                            <Card.Title>Hiba Arnaout</Card.Title>
                            <Card.Text>
                            PhD candidate at the Max Planck Institute for Informatics of the Department of Databases and Information Systems.
                            </Card.Text>
                            <Button variant="primary"><a style={{color:"white", textDecoration:"none"}} href="http://hibaarnaout.com/" target="_blank">Know More</a></Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '30rem', margin:"10px" }}>
                        <Card.Body>
                            <Card.Title>Simon Razniewski</Card.Title>
                            <Card.Text>
                            Senior Researcher at the Max Planck Institute for Informatics in Saarbrücken, Germany.
                            </Card.Text>
                            <Button variant="primary"><a style={{color:"white", textDecoration:"none"}} href="http://simonrazniewski.com/" target="_blank">Know More</a></Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>


    )
}
