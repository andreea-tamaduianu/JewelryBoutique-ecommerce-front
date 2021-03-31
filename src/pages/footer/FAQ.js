import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const TermsAndConditions = ()=>{
    return (
        <div>
             <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            <div >
                <br></br>
                <h3>CUM POT FACE COMANDA?</h3>
                <div >
                    Pentru a putea plasa comanda pe site-ul JewelryBoutique, trebuie sa fiți membru al site-ului nostru. După ce ați creat calitatea de membru, puteți accesa pagina produsului pe care doriți să-l cumpărați si apasați pe butonul "Adăugați în coș". Apoi, făcând clic pe "Coșul meu" situat în partea dreaptă - sus, a paginii noastre, puteți introduce detaliile dvs. de plată și de livrare si apoi plasa comanda.
                </div>
                <br></br>
                <h3>AM UITAT PAROLA</h3>
                <div >
                    Intrați în secțiunea "Contul meu" în colțul din dreapta sus al paginii și faceți clic pe linkul "Am uitat parola". În cel mai scurt timp veți primi un mail cu link-ul pentru schimbarea parolei.
                </div>
                <br></br>
                <h3>CÂND FAC COMANDA LA CE TREBUIE SĂ AM GRIJĂ ?</h3>
                <div >
                    Când deveniți membru, trebuie să acordați atenție informațiilor complete și formularului de membru pe care îl completați. Orice întrebare care poate apărea în urma comenzii dvs., vă rugăm să o comunicați Serviciului Relații Clienți.
                Comanda dvs. va fi trimisă la adresa dvs. de livrare. Pentru a evita orice probleme în timpul livrării mărfii, trebuie să vă scrieți adresa în detaliu.
                </div>
                <br></br>
                <h3>AM TRIMIS COMANDA , CE SE VA ÎNTÂMPLA DUPĂ ?</h3>
                <div >
                Produsele vor fi pregătite pentru a fi livrate cât mai curând posibil, fără probleme. Odată ce primim comanda dvs., va fi livrată în cea mai scurtă perioadă.
                </div>
                <br></br>
                <h3>CUM POT URMĂRII STATUSUL COMENZII?</h3>
                <div >
                    Puteți urmării în orice clipă statusul comenzii dvs. intrând în contul de client JewelryBoutique la secțiunea Istoric comenzi.
                </div>

                <br></br>
                <h3>CARE ESTE PERIOADA DE SCHIMB/RETUR?</h3>
                <div >
                    Perioada de schimbare/returnare a unui produs JewelryBoutique, este de 60 de zile de la primirea acestuia.
                </div>
                <br></br>
                

               
        </div>
        </Content>
        </div>
        
    )
}

export default TermsAndConditions;