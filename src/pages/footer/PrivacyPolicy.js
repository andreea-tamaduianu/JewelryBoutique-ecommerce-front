import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const PrivacyPolicy = ()=>{

    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            <div>
                <br/>
                <h1>Politica de confidențialitate</h1>
                <p>JewelryBoutique a creat această Politica de confidențialitate, în scopul de a comunica politicile și practicile sale referitoare la utilizarea și divulgarea informațiilor despre dvs. obținute de website <a href="https://www.JewelryBoutique.ro/">JewelryBoutique.ro</a>.</p>
                <p>Vă rugăm să citiți cu atenție această politică de confidențialitate. JewelryBoutique își rezervă dreptul de a modifica sau actualiza această politică de confidențialitate periodic. Puteți vizualiza cea mai recentă versiune a Politicii de confidențialitate în orice moment, făcând clic pe hyperlink-ul "Politica de confidențialitate", situat în partea de jos a website-ului <a href="https://www.JewelryBoutique.ro/">JewelryBoutique.ro</a>.</p>
                <p>JewelryBoutique vă prelucrează datele personale în conformitate cu cerințele din Regulamentul (UE) 2016/679 - Regulamentul general privind protecția datelor (GDPR), EU-U.S. Privacy Shield, precum și legislația internă privind protecția datelor.</p>
                <h2>Categorii de Date Personale pe care JewelryBoutique le procesează</h2>
                <ul>
                <li>Informațiile dvs. de contact - nume, adresă poștală, număr de telefon mobil sau de telefon, adresa de e-mail</li>
                <li>Adresa dvs. IP</li>
                <li>Detaliile achiziției, inclusiv metoda de plată și numărul tranzacției</li>
                <li>Istoria comenzii dvs.</li>
                <li>Serviciul de informații pentru clienți - toate tipurile de comunicare și corespondență dintre dvs. și serviciul nostru pentru clienți.</li>
                <li>În circumstanțe excepționale, vi se poate solicita să ne furnizați detalii suplimentare cu privire la cartea dvs. de identitate, pentru a vă certifica identitatea.</li>
                <li>Într-un număr limitat de cazuri, vă putem invita să ne furnizați fotografiile, videoclipurile sau altele în cazul în care vă declarați dorința de a participa la unul dintre tombolale, campaniile sau alte evenimente.</li>
                <li>JewelryBoutique își rezervă dreptul de a trimite tuturor clienților săi o invitație de a participa la sondaje de satisfacție. Participarea este întotdeauna opțională.</li>
                <li>JewelryBoutique nu procesează și nu stochează datele de pe cardurile dvs. bancare sau alte informații financiare</li>
                </ul>
                <p><strong>Legea procesării</strong></p>
                <ul>
                <li>JewelryBoutique vă prelucrează datele personale numai după primirea consimțământului dvs. pentru procesare.</li>
                <li>JewelryBoutique vă prelucrează datele personale necesare pentru îndeplinirea contractului dmv.</li>
                <li>JewelryBoutique vă prelucrează datele personale necesare pentru a respecta cerințele legislației fiscale, financiare sau de altă natură.</li>
                </ul>
                <p><strong>Noi procesam datele dvs. personale în următoarele scopuri:</strong></p>
                <ul>
                <li>În scopul executării corecte a livrării comenzii dumneavoastră</li>
                <li>În scopul comunicării clare și exacte cu dvs. despre starea ordinului.</li>
                <li>În scopul garanției în perioada de garanție a produselor</li>
                <li>În scopul satisfacerii clienților și a programului de loialitate.</li>
                <li>În scopul cerințelor legislației fiscale și contabile - de a declara și de a calcula vînzările noastre.</li>
                <li>În situații excepționale, JewelryBoutique poate procesa informații suplimentare de identificare ale dvs. pentru a evita fraudarea financiară sau furtul de identitate.</li>
                <li>Ca o excepție, JewelryBoutique poate procesa date suplimentare, cum ar fi fotografii, videoclipuri și alte materiale media, în scopuri de diverse campanii sau loterii, numai în cazurile în care clienții participă la aceste evenimente.</li>
                <li>Pentru a putea trimite buletinul informativ și materialele noastre promoționale, numai în cazul în care clienții își dau consimțământul la acesta.</li>
                </ul>
                <p><strong>Perioada de timp pentru care datele dvs. personale vor fi stocate:</strong></p>
                <p>JewelryBoutique vă stochează datele personale pe care le-ați trimis în timpul înregistrării contului dvs. pe site-ul nostru, atâta timp cit contul dvs. rămâne activ</p>
                <p>În cazul în care avem nevoie de date suplimentare pentru a vă verifica identitatea, vom stoca aceste date pînă cînd nu mai există cerința legală de păstrarea acestor date.</p>
                <p>În cazul colectării datelor cu caracter personal în scopul unei campanii speciale, a loteriilor și a oricăror alte promoții, perioada de prelucrare va fi specificată în fiecare caz, iar participanții vor fi informați despre aceasta.</p>
                <p><strong>Beneficieri potențiale a datelor dvs. personale:</strong></p>
                <p>JewelryBoutique nu vă furnizează datele dvs. personale ,persoanelor străine cu excepția cazului în care acest lucru este necesar din punct de vedere legal sau cu excepția necesităților operaționale enumerate mai jos:</p>
                <p>JewelryBoutique vă furnizează numele, adresa și numărul de telefon companiei de curierat care vă livrează produsul.</p>
                <p>În situații excepționale, JewelryBoutique vă poate verifica datele personale de către prestatorii de servicii de plată pentru a preveni frauda financiară sau furtul de identitate</p>
                <p>JewelryBoutique transferă datele personale necesare furnizorilor de servicii de contabilitate, precum și agențiilor fiscale și altor instituții guvernamentale, acolo unde acest lucru este impus de legislația specifică.</p>
                <p>Drepturile dumneavoastră ca persoană vizată în orice moment aveți dreptul:</p>
                <ul>
                <li>Accesați datele personale pe care JewelryBoutique le procesează, de asemenea, pentru a primi o copie a acestora.</li>
                <li>Solicitarea de a șterge datele personale a dvs. (dreptul de a fi uitat) dacă considerați că nu mai este necesar pentru scopurile care au fost colectate sau procesate. Rețineți că acest drept nu poate fi realizat dacă legea specială prevede în mod expres păstrarea unei perioade fixe</li>
                <li>Pentru a cere rectificarea unor date personale inexacte, în cazurile în care acestea nu corespund adevărului.</li>
                <li>Pentru a exersa unul dintre drepturile de mai sus, trimiteți-ne un mesaj de poștă electronică cu cererea dvs. pe pagina de contact sau printr-un e-mail la <a href="mailto:service@JewelryBoutique.ro">service@JewelryBoutique.ro</a>. Vă vom răspunde în cel mai scurt timp.</li>
                <li>În orice moment în care sunteți îngrijorat că drepturile dvs. sunt încălcate, aveți dreptul să depuneți o plîngere la un autorizat de supraveghere, care este menționat mai jos.</li>
                </ul>
                <p><strong>Recomandările noastre referitoare la protecția datelor dvs. personale:</strong></p>
                <ul>
                <li>Păstrați-vă parola în siguranță și nu o transmite-ți altora.</li>
                <li>Dacă utilizați un computer public, asigurați-vă întotdeauna că vă deconectați de la cont înainte de a opri calculatorul.</li>
                <li>GLAMİRA garantează că nu contactăm alte persoane decît cele menționate în această politică de confidențialitate cu privire la comanda dvs.</li>
                <li>JewelryBoutique garantează că nu am solicitat clienților noștri să-și dezvăluie parola pentru utilizarea site-ului. JewelryBoutique nu solicită clienților noștri să dezvăluie date din conturile lor bancare sau alte instrumente financiare. Orice solicitare făcută prin telefon, prin chat sau prin e-mail va fi ignorată.</li>
                </ul>
                <p>Dacă cineva v-a adresat o astfel de cerere, vă rugăm să contactați și să informați imediat JewelryBoutique.</p>
                <p><strong>Cum protejăm datele personale?</strong></p>
                <p>JewelryBoutique garantează că vom lua toate măsurile administrative, tehnice și fizice pentru a vă proteja datele personale împotriva distrugerii, pierderii, accesului, dezvăluirii sau utilizării accidentale, ilegale sau neautorizate</p>
                <p>JewelryBoutique și-a adoptat propriile reguli de etică internă pentru prelucrarea datelor cu caracter personal, iar angajații noștri au trecut printr-o pregătire specială pe principiile GDPR.</p>
                <p>Securizăm site-ul web și alte sisteme prin utilizarea unor măsuri tehnice și organizatorice împotriva pierderii, distrugerii, accesării, modificării sau distribuției datelor dvs. de către persoane neautorizate. În ciuda verificărilor periodice, protecția completă împotriva tuturor amenințărilor este imposibilă.</p>
                <p><strong>Cine este responsabil pentru prelucrarea datelor dvs. personale?</strong></p>
                <p>Toate societățile din grupul JewelryBoutique funcționează în calitate de administratori în comun în sensul GDPR - (EU) 2016/679 - Art. 26.</p>
                <p>Toate companiile din grupul JewelryBoutique procesează datele personale ale clienților noștri în conformitate cu un acord semnat special între noi. Colectăm aceleași categorii de date cu caracter personal ale clienților noștri, le continuăm doar în scopurile menționate în Politica de confidențialitate JewelryBoutique asigură că toate companiile din grup au luat aceleași măsuri tehnice și organizatorice pentru a vă proteja datele personale.</p>
            </div>
            <br/>
        </Content>
        </div>
       
    )
}

export default PrivacyPolicy;