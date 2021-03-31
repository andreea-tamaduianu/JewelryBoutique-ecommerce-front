import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const OurStory = ()=>{
    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            <div>         
                  <br></br>    
                <div className="text-center"><h1><strong>Cine suntem?</strong></h1>

                    <p>Am inceput in anul 2015 cu doi angajati, confectionarea bijuteriilor realizandu-se intr-o garsoniera.</p>

                    <p>In decurs de trei ani, timp in care ne-am documentat foarte mult despre fiecare cristal, vanzarea produselor s-a realizat exclusiv in cadrul targurilor si expozitiilor. Am acumulat experienta avand contact direct cu clientul si intelegand nevoile lui.</p>

                    <p>La inceputul anului 2019 ne-am marit echipa, am facut primul import de cristale si am deschis magazinul online. Lansarea website-ului a fost un succes, avand mare impact asupra iubitorilor de cristale. Doua luni mai tarziu am deschis primul showroom JewelryBoutique in Bucuresti.</p>

                    <p>In 2021, JewelryBoutique este unul dintre cele mai mari magazine de bijuterii confectionate exclusiv cu pietre semipretioase si cristale naturale neprelucrate din Romania. </p>

                    <p>&nbsp;</p>

                    <h2 ><strong>Cum facem lucrurile?</strong></h2>
                   
                        <p>Clientul este centrul. Oferim experiente personale!</p>
                        <p>"Calatorim impreuna" si avem curajul sa incercam orice, ne folosim potentialul la maxim.</p>
                        <p>Iubim ceea ce facem si ne miscam repede pentru ca vrem sa fim cu un pas inainte.</p>
                        <p>Cunoastem foarte bine industria in care lucram si tintim cat mai sus.</p>
                        <p>Cand gresim, facem un pas in spate si regandim fiecare proces.</p>
                    
                    

                    <p>&nbsp;</p>

                </div>
            </div>
                       
        </Content>
        </div>
        
    )
}

export default OurStory;