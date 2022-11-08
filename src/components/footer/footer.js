import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './footer.css';
import logo1 from '../../assets/1.png'


function Footer() {
  return (
    <>
    <section className='footer pt-5 pb-5' id='foter'>
        <Container>
            <Row>
                <Col md={3}>
                    <h3 className='text-center mt-'><span>&#169;2022</span> AliShanKhan</h3>
                </Col>
                <Col m={6}>
                    <div className='text-center'>
                    <img src={logo1} width='250px'></img>
                    </div>
                </Col>
                <Col md={3}>
                    <div className='socials'>
                    <Row>
                        <Col sm={3}>
                            <a href='#'><i className='fa fa-facebook'></i></a>
                        </Col>
                        <Col sm={3}>
                            <a href='#'><i className='fa fa-instagram'></i></a>
                        </Col>
                        <Col sm={3}>
                            <a href='#'><i className='fa fa-github'></i></a>
                        </Col>
                        <Col sm={3}>
                            <a href='#'><i className='fa fa-linkedin'></i></a>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  );
}

export default Footer;