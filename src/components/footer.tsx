import {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <Row>
            <Col sm="12" style={{ textAlign: 'center' }}>
              <a href="https://www.linkedin.com/in/raja-bellebon-47725436/" style={{ marginRight: '1rem' }}>
                💼 LinkedIn
              </a>
              <a href="https://github.com/RajaBellebon/">
                🐙 GitHub
              </a>
              <script src="https://www.retainable.io/assets/retainable/rss-embed/retainable-rss-embed.js" />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
