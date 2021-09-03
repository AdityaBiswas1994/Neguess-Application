import React  from 'react'
import {Card, Container} from 'react-bootstrap'


export default function Rules() {

    return (
        <div>
            <Container className="d-flex justify-content-top" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "600px"}, {padding: "40px"}}>
            <Card>
            <h2>Brief Description</h2>
            Storing and presenting *noteworthy* negative RDF triples would be
            important to overcome current limitations in various use cases. In this
            demo, we introduce <i>Neguess,</i> which implements a peer-based ranking
            method for inferring interesting negative clues in KBs.
            <br/>
            <br/>
            <h2>Publications</h2>
            
            <p><b>Wikinegata: a Knowledge Base with Interesting Negative
            Statements.</b><i> - VLDB 2021 </i>
            [<a href="./pdfs/VLDB_demo.pdf"><small>PDF</small></a>]</p>
            
            <p><b>Negative Knowledge for Open-world Wikidata.</b><i> - WWW Companion 2021 </i>
            [<a href="https://wikiworkshop.org/2021/papers/Wiki_Workshop_2021_paper_3.pdf"><small>PDF</small></a>]</p>
            
            
            <p><b>Negative Statements Considered Useful.</b><i> - arXiv 2020 </i>
            [<a href="https://arxiv.org/abs/2001.04425"><small>LINK</small></a>]</p>

            <p><b>Enriching KBs with Interesting Negative Statements.</b><i> - AKBC 2020 (People Choice Award)</i>
            [<a href="https://www.akbc.ws/2020/assets/pdfs/pSLmyZKaS.pdf"><small>PDF</small></a>]
            [<a href="https://www.youtube.com/watch?v=Q-C2MbzGXjc"><small>VIDEO</small></a>]
            [<a href="https://www.akbc.ws/2020/virtual/static/slides/pSLmyZKaS-slides.pdf"><small>SLIDES</small></a>]</p>
            </Card>
            </div>

      </Container>
        </div>
    )
}
