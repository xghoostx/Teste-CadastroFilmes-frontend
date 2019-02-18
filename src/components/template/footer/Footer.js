import React from 'react';
import './Footer.css';

import { Col, Row, Container } from 'reactstrap';


export default class Footer extends React.Component {
    render(){
        return (
          <footer className="footer">
            <Container>
               <Row>
                 <Col sm={12}>
                    Desenvolvido por XGHOOSTX
                 </Col>
               </Row>
               <Row>
                 <Col sm={12}>
                    Redes sociais
                 </Col>
               </Row>


            </Container>
          </footer>
        );
    }
}