import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './header.css'
import 'animate.css';
import dp from '../../assets/dp.png'

function Header() {
  return (
    <header className='header pt-5' id='home'>
      <Container>
        <Row>
          <Col md={12}>
            <div className='main-heading'>
              <h1>I'm <span>Ali</span>. I can make a website that<br></br>can give value to your product</h1>
            </div>
            <div className='top-img text-center mt-5'>
              <img src={dp} className='img-fluid animate__animated  animate__zoomIn'  alt='alishan' width='350px'></img>
              <div className='top-1 animate__animated animate__lightSpeedInLeft'>
                <span>Web Dev</span><br></br>
                <span>3+ years</span>
              </div>
              <div className='top-2 animate__animated animate__lightSpeedInRight'>
                <span>React Dev</span><br></br>
                <span>1+ years</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;