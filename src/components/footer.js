import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return (
      <footer class="footer">
        <Container>
          <iframe
            title="footer"
            class="github-btn"
            src="https://ghbtns.com/github-btn.html?user=RajaBellebon&repo=tulec&type=watch&count=true"
            frameborder="0"
            scrolling="0"
            width="109px"
            height="20px"
          />
          <a href="https://www.linkedin.com/in/raja-bellebon-47725436/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/RajaBellebon/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
