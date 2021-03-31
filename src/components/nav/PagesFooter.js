import React, { useState, useEffect } from "react";
import { Layout, Menu, Row, Col, Divider  } from 'antd';
import { Link } from "react-router-dom";

const { Footer } = Layout;

const PagesFooter = () => {
    return (
        <Footer  className="dark">
          <div className="footer-wrap">
            <Row>
              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h5>Legal</h5>
                  <div>
                    <Link to='/terms-and-conditions' title="Termeni si conditii">Termeni si conditii</Link>
                   </div> 
                   <div>
                    <Link to='/privacy-policy' title="Politica de confidentialitate">Politica de confidentialitate</Link>
                    </div>
                    <div>
                    <Link to='/cookie-policy' title="Politica cookie">Politica Cookie</Link>
                   </div>
                 
                  
                </div>
              </Col>

              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h5>Despre noi</h5>
                  <div>
                    <Link to='/our-story' title="Povestea noastra">Povestea noastra</Link>
                    </div>
                    <div>
                    <Link to='/why-choose-us' title="De ce sa alegi JewelryBoutique?">De ce sa alegi JewelryBoutique?</Link>
                    </div>
                    <div>
                    <Link to='/production-facilities' title="Facilitatile noastre de productie">Facilitatile noastre de productie</Link>
                  </div>
                  
                </div>
              </Col>

              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h5>HELP & FAQ</h5>
                  <div>
                    <Link to='/contact' title="Contact">Contact</Link>
                    </div>
                    <div>
                    <Link to='/faq' title="Intrebari frecvente">Intrebari frecvente</Link>
                    </div>
                    <div>
                    <Link to='/return-policy' title="Politica de returnare">Politica de returnare</Link>
                   </div>
                                     
                </div>
              </Col>

              <Col md={6} sm={24} xs={24}>
                <div className="footer-center">
                  <h5>Ghiduri</h5>
                  <div>
                    <Link to='/stone-guide' title="Ghid alegere piatra pretioasa">Ghid alegere piatra pretioasa</Link>
                    </div>
                    <div>
                    <Link to='/wedding-ring-guide' title="Ghid alegere verighete">Ghid alegere verighete</Link>
                    </div>
                    <div>
                    <Link to='/birthstone-guide' title="Ghidul pietrei lunii in care v-ati nascut">Ghidul pietrei lunii in care v-ati nascut</Link>
                   </div>
                                     
                </div>
              </Col>
              
            </Row>
            <Divider />
            <Row >
              <div className="text-center">
                ©JewelryBoutique 2021. Toate Drepturile Rezervate. 
              </div>
                
            </Row>
          </div>
         
        </Footer>
      );
}

export default PagesFooter;
  
