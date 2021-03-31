import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const CookiePolicy = ()=>{
    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            
            <div>
            <br/>
                <h1>POLITICA COOKIE</h1>
                <p>Continuând să vizitați site-ul nostru, sunteți de acord cu utilizarea cookie-urilor în conformitate cu această politică de cookie. Dacă nu sunteți de acord cu utilizarea acestor cookie-uri, vă rugăm să le dezactivați astfel încât cookie-urile de pe acest site să nu poată fi plasate pe dispozitiv.</p>
                <p>Cookie-urile nu conțin informații confidențiale, cum ar fi adresa dvs. de domiciliu, numărul de telefon sau detaliile cărții de credit.</p>
                <h2>Ce sunt cookie-urile?</h2>
                <p>Fișierele cookie sunt fișiere text mici stocate de browser atunci când vizitați un site Web. Cookie-urile permit unui site să-și amintească lucruri cum ar fi preferințele dvs., dacă sunteți conectat sau care este în geanta dvs. de cumpărături. Informațiile colectate de module cookie ne ajută să analizăm utilizarea site-ului dvs. și să vă oferim o experiență mai bună a utilizatorului.</p>
                <p>Rețineți că modulele cookie pe care le stocăm pe dispozitiv conțin numai date, nu cod. Astfel, acestea nu pot fi utilizate pentru a vă accesa dispozitivul, pentru a transmite viruși sau programe spion.</p>
                <h2>De ce folosim module cookie?</h2>
                <p>Utilizăm cookie-uri în scopuri funcționale și analitice, pentru a vă îmbunătăți experiența pe site-ul nostru. Cookie-urile ne permit să colectăm informații statistice despre vizitatorii site-ului nostru, inclusiv datele demografice.</p>
                <p>Scopul nostru este de a:</p>
                <ul >
                <li>Îmbunătățiți site-ul nostru în funcție de așteptările dvs.</li>
                <li>Recunoașteți dispozitivul atunci când vizitați site-ul nostru web</li>
                <li>Faceți sugestii despre produse în funcție de alegerea produselor dvs.</li>
                <li>Îți împiedică să te autentifici ori de câte ori vizitezi site-ul nostru</li>
                <li>Strângeți informații despre interacțiunea dvs. online pentru a vă afișa anunțuri relevante</li>
                </ul>
            </div>
            <br/>
        </Content>
        </div>
       
    )
}

export default CookiePolicy;