import React from 'react';
import { Col, Row } from '../../components/Grid';
import Jumbotron from '../../components/Jumbotron';
import { Container, Logo } from '../../components/Styled/Styled.js';
import Nav from '../../components/Nav';

const NoMatch = () => (
  <Container fluid>
    <Row>
      <a href="/queue">
        <Logo src={require('../../assets/SVG/Asset 1.svg')} alt="logo" />
      </a>
      <Nav />
    </Row>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>404 Page Not Found</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              🙄
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default NoMatch;
