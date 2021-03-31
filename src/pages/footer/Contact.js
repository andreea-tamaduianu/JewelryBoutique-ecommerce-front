import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const Contact = ()=>{
    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
                <div>
                    <br></br>
                    <h3>CONTACT</h3>
                    
                    
                    <p>Pentru mulțumiri, cereri si plângeri vă rugăm să ne scrieți la adresa: <a href="mailto:contact@jewelryboutique.ro">contact@jewelryboutique.ro</a></p>
                    <p>Program de lucru: de Luni până Vineri între orele: 08:00 și 17:00</p>
                
                    <h3>OPORTUNITĂȚI DE SERVICIU: </h3>
                    <p><span>Pentru oportunități de serviciu , puteți urmării posturile vacante de pe <a href="http://www.ejobs.ro"><span>www.ejobs.ro</span></a>.</span></p>
                    <p>Sau ne puteți trimite CV-ul dumneavoastră la adresa de mail <a href="mailto:recrutare@jewelryboutique.tr">recrutare@jewelryboutique.ro</a>.</p>
                </div>
                <br></br>
            </Content>
        </div>
        
    )
}

export default Contact;