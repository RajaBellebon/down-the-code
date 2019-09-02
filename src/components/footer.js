import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <Container>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <a href="https://www.linkedin.com/in/raja-bellebon-47725436/">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://github.com/RajaBellebon/">
                <FontAwesomeIcon icon={faGithub} size="lg" />
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
