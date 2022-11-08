import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './about.css';
import js from '../../assets/js.png'
import re from '../../assets/react.png'
import up from '../../assets/up.png'
import fi from '../../assets/git.png'



function About() {
  return (
    <>
    <section className='about pt-5' id='about'>
      <Container>
        <Row>
          <Col md={3}>
            <div className='about-div'>
             <Row>
                <Col sm={3} className='text-end'>
                    <img src={js} className='img-fluid' alt='js'></img>
                </Col>
                <Col sm={9}>
                    <h3>JavaScript</h3>
                    <h5>2+ Years Experience</h5>
                </Col>
             </Row>
            </div>
            
          </Col>
          <Col md={3}>
            <div className='about-div'>
             <Row>
                <Col sm={3} className='text-end'>
                    <img src={re} className='img-fluid' alt='js'></img>
                </Col>
                <Col sm={9}>
                    <h3>React Js</h3>
                    <h5>1+ Years Experience</h5>
                </Col>
             </Row>
            </div>
            
          </Col>
          <Col md={3}>
            <div className='about-div'>
             <Row>
                <Col sm={3} className='text-end'>
                    <img src={up} className='img-fluid' alt='js'></img>
                </Col>
                <Col sm={9}>
                    <h3>Cloud Computing</h3>
                    <h5>3+ Months Experience</h5>
                </Col>
             </Row>
            </div>
            
          </Col>
          <Col md={3}>
            <div className='about-div'>
             <Row>
                <Col sm={3} className='text-end'>
                    <img src={fi} className='img-fluid' alt='js'></img>
                </Col>
                <Col sm={9}>
                    <h3>Git</h3>
                    <h5>8+ Years Experience</h5>
                </Col>
             </Row>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
    
        <Container className='bg-pur mb-5'>
            <Row>
                <Col sm={12}>
                    <div className='text-center pt-5'>
                        <h2 className='mt-4'>Want to work together and create <br></br> amazing products with me?</h2>
                    </div>
                    <div className='about-form pt-5 text-center'>
                        <input type='mail' placeholder='Your Message' className='mail-form'></input>
                        <button >submit</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}

export default About;