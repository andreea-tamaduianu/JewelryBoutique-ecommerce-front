import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';

import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const WhyChooseUs = ()=>{
    return (
        <div>
              <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>

            <Content style={{ padding: '0 50px' }}>
            <div >
                <br></br>
                <h1>DE CE SĂ ALEGI JewelryBoutique? </h1>
                <h2>Opțiuni nelimitate pentru pietre prețioase</h2>
                <p>Aici, la JewelryBoutique, puteți alege dintr-o asemenea uimitoare majoritate de bijuterii cu pietre diferite și variații ale culorilor lor.</p>
                <p>Încercăm să oferim tuturor gusturilor și stilurilor diferite, astfel încât clienții noștri să aibă o mulțime de opțiuni a alegere. De la diamantul alb tradițional până la cele mai noi categorii de diamante colorate sau în nuanțe mai rare de pietre prețioase, cum ar fi Topaz albastru London, veți găsi ceva perfect pentru dvs. </p>
                <h2>Stiluri Diferite </h2>
                <p>Design-erii JewelryBoutique se străduiesc întotdeauna să ofere cât mai multe posibilități clienților noștri.  De aceea, pe site-ul nostru, puteți găsi o cantitate copleșitoare de stiluri diferite de bijuterii, răspunzând la orice gust posibil. </p>
                <h2>Ani de experiență</h2>
                <p>Datorită multor ani de experiență profesională și străduindu-ne să ne îmbunătățim în mod constant activitatea, JewelryBoutique sa răspândit prin multe țări și are departamente în întreaga lume.
                Comandarea de la noi asigură a unei bijuterii care arată dăruire noastră și anii de experiență.</p>
                <h2>Evaluarea calității de către profesioniști</h2>
                <p>JewelryBoutique vă asigură că toate bijuteriile noastre sunt de cea mai bună calitate. Fiecare element trece un control foarte strict al echipei noastre de profesioniști. Fiecare detaliu al bijuteriilor noastre este creat și produs cu cea mai delicată grijă și atenție, în timp ce profită de anii de experiență și de cunoștințe profunde în domeniu.</p>
                <h2>Diferitele metode de plată  </h2>
                <p>JewelryBoutique încearcă să facă procesul de comandă cât mai lină și mai confortabilă. Oferim metode de plată diferite, astfel încât să puteți alege cea mai potrivită pentru dvs.</p>
                <h2>Livrare gratuită și rapidă</h2>
                <p>JewelryBoutique vă oferă o livrare asigurată, rapidă și gratuită la adresa dvs. Lucrăm cu companii de distribuție sigure, care vă asigură comanda dvs. vă va ajunge în siguranță și în cel mai scurt timp posibil.</p>
                <h2>Certificare </h2>
                <p>În timp ce comandați de la JewelryBoutique, puteți fi siguri că nu vă asumați niciun risc. Oferim clienților noștri posibilitatea de returnare în decurs de 60 de zile, astfel încât să aveți încredere în achiziționarea bijuteriilor care nu vă dau bătăi de cap. Nu trebuie să vă faceți griji cu privire la un inel măsurat incorect, deoarece aveți opțiunea de a redimensiona inelul gratuit o singură dată în decurs de 60 de zile. În plus, garanția pe viață pe care o oferim este o dovadă solidă a încrederii pe care o acordăm în calitatea și serviciile noastre.</p>
                <br></br>
            </div>
        </Content>

        </div>
       
    )
}

export default WhyChooseUs;