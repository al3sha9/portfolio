import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Card from 'react-bootstrap/Card';
import bgcom from '../../assets/bg11.png';
import bgcom1 from '../../assets/bg12.png'
import bgcom2 from '../../assets/bg13.png'

import './work.css';


function Work() {
  return (
    <>
    <section className='work pt-5 pb-5 text-center' id='work'>
      <Container>
        <Row>
            <Col sm={12}>
                <h2 className='pb-5'>What I'm Working on</h2>
            </Col>
        </Row>
        <Row>
          
          <Col sm={12}>
            <OwlCarousel className='owl-theme' loop margin={10}>
                <div class='item'>
                <Card>
                    <Card.Img variant="top" src={bgcom} />
                    <Card.Body className='py-4'>
                        <Card.Title className='pt-4'>Portfolio Sites</Card.Title>
                        <Card.Text>I have deep understanding of making<br></br> personal websites.</Card.Text>
                        <button className='btn-custom'>Checkout</button>
                    </Card.Body>
                    </Card>
                </div>
                <div class='item'>
                <Card>
                    <Card.Img variant="top" src={bgcom1} />
                    <Card.Body className='py-4'>
                        <Card.Title className='pt-4'>Minting Sites</Card.Title>
                        <Card.Text>I have deep understanding of making<br></br> Minting websites.
                        </Card.Text>
                        <button className='btn-custom'>Checkout</button>
                    </Card.Body>
                    </Card>
                </div>
                <div class='item'>
                <Card>
                    <Card.Img variant="top" src={bgcom2} />
                    <Card.Body className='py-4'>
                        <Card.Title className='pt-4'>NFT Marketplace</Card.Title>
                        <Card.Text>I have deep understanding of making<br></br> NFT Marketplaces.</Card.Text>
                        <button className='btn-custom'>Checkout</button>
                    </Card.Body>
                    </Card>
                </div>
                
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </section>
    
    </>
  );
}

export default Work;