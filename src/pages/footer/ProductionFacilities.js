import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import picture from '../../images/jewelry-making.jpg'
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const ProductionFacilities = ()=>{
    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            <div>
                <br/>
                <h1>FACILITĂȚILE NOASTRE DE PRODUCȚIE </h1>
                <div >
                    <p>Pentru a-și menține capacitatea de producție și competitivitatea ridicată, oferind în același timp cea mai mare calitate a produselor, GLAMIRA deține o echipă de producție mare, formată din profesioniști cu experiență specializată în domeniile lor.</p>

                    <p>Facilitatea de producție utilizează o combinație de mână, mașină și tehnologie avansată pentru a produce cele mai bune bijuterii din lume. Datorită integrării complete, fabricăm bijuterii cu puritate garantată și finisaj fin pentru a satisface nevoile specifice ale tuturor iubitorilor de bijuterii și pentru a satisface cererea pentru produse de înaltă calitate, timpi de livrare mai scurți și dezvoltarea rapidă a produselor.</p>
                </div>
                <div>
                    <img alt="" src={picture}/>

                </div>
            </div>
            <br/>

        </Content>
        </div>
       
    )
}

export default ProductionFacilities;