import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const ReturnPolicy = ()=>{
    return (
        <div>
             <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
            <div>
                <br/>
                <h1>POLITICA DE RETURNARE ȘI GARANȚIE</h1>

                <p>Ne angajăm să satisfacem 100% clienții și să livrăm produse de înaltă calitate clienților noștri de la JewelryBoutique. Dacă, din orice motiv, sunteți nemulțumit de achiziția dvs., vă puteți returna articolul, în termen de 60 de zile de la livrarea comenzii, cu condiția ca produsul dvs. să îndeplinească condițiile de returnare.</p>
                <p>Rambursarea produselor gravate este disponibilă numai pentru articolele achiziționate începând cu 21 august 2020. Vă rugăm să selectatiți secțiunea Retragere (rambursare) de mai jos pentru detalii suplimentare</p>
                <p>Vă rugăm citiți cu atenție această pagină, înainte de a vă returna produsul.</p>
                <h3>GARANȚIE</h3>
                <p>Bijuteriile JewelryBoutique sunt produse cu grijă și cu materiale de calitate, motiv pentru care stăm cu încredere în spatele produselor noastre, cu politici generoase de returnare și garanție.</p>
                <p>Toate produsele JewelryBoutique sunt livrate cu o garanție gratuită a producătorului pe întreaga durată de viață. În cazul defecțiunilor de fabricație, JewelryBoutique vă va repara cu grijă și gratuit produsul, atâta timp cât produsul dvs. respectă termenii și condițiile garanției pe viață.</p>
                <p>Toate solicitările de reparații sunt supuse inspecției de către echipa noastră de Asigurare a Calității, înainte ca cererea să fie procesată. În cazul în care echipa noastră de Asigurare a Calității determină că daunele nu au fost cauzate de un defect de fabricație, vă vom informa despre aceasta și vă vom anunța, dacă oricare dintre serviciile de reparații efectuate de JewelryBoutique sunt disponibile cu costuri sau altfel.</p>
                <p>Garanția gratuită pe viață este disponibilă numai pentru produsele achiziționate începând cu 1 iunie 2017. Pentru produsele achiziționate înainte de această dată, garanția pe o perioadă de 2 ani rămâne în vigoare, începând de la data achiziționării produsului.</p>
                <p><strong>Termenii și condițiile pentru garanția pe viață și reparație</strong></p>
                <p>1. Garanția este eligibilă numai pentru defecțiunile producătorului și nu acoperă deformările și pagubele cauzate accidental, întrebuințare greșită, abuz, neglijență, servicii neautorizate sau uzură și rupere.</p>
                <p>2. Garanția este nulă și neavenită, în cazul în care produsul a fost modificat în orice mod, inclusiv gravarea, redimensionarea sau repararea de către o terță parte, cum ar fi un alt bijutier sau altă persoană decât JewelryBoutique.</p>
                <p>3. Dacă o parte din bijuterie (inclusiv, dar nu se limitează doar la pietre, lanțuri, cleme etc.) cade, ar trebui să fie returnată împreună cu piesele sale, înainte de orice încercare de a fi reparată. JewelryBoutique nu își asumă responsabilitatea pentru piese sau pietre lipsă.</p>
                <p>4. Garanția pe viață nu poate fi transferată unei terțe părți.</p>
                <p>Garanția producătorului nu acoperă următoarele:</p>
                <ul>
                <li>Decolorare cauzata de expunerii la substanțe chimice, machiaj, piscine, băi fierbinți (jacuzzi) sau baie.</li>
                <li>Zgârieturi, scobituri sau spargere cauzate de uzura generală sau de folosirea incorectă.</li>
                <li>Îndoit, prins sau uzat în zona ghearelor, ce permite pietrei să cadă sau să fie pierdută din cauza neglijenței sau altor daune.</li>
                <li>Pietre pierdute sau furate.</li>
                <li>Articolele care au fost abuzate sau uzate, pe neașteptat din purtarea normală, zilnică.</li>
                </ul>
                <p>Rețineți că următoarele aspecte sunt caracterele produsului și nu pot fi considerate defecte:</p>
                <ul>
                <li>Unele nereguli și variații ale meșteșugului.</li>
                <li>Caracteristicile naturale ale metalului sau a pietrelor prețioase (cum ar fi culoarea, incluziunile interne. .etc.)</li>
                </ul>
                <h3>RETURNĂRI</h3>
                <p>Pentru un proces de returnare rapid și ușor, asigurați-vă că selectați tipul de retur corect și completați toate câmpurile obligatorii din formular în timpul completării. Cererea dvs. de returnare nu va fi procesată fără informațiile solicitate.</p>
                <p>Un e-mail de confirmare, inclusiv adresa de returnare și o copie a formularului pe care l-ați completat, vor fi trimise pe adresa dvs. de e-mail după ce trimiteți formularul de returnare. Vă rugăm să tipăriți și să atașați acest formular în coletul de retur. Rețineți că cererea dvs. de returnare va fi procesată pe baza informațiilor trimise online. Orice note scrise de mână pe copia imprimată a formularului de returnare nu vor fi luate în considerare.</p>
                <p>Împachetați-vă produsul(ele) în siguranță înainte de expediere. Vă sugerăm să trimiteți produsul dvs. printr-o metodă de expediere asigurată și trasabilă. JewelryBoutique nu își asumă responsabilitatea pentru pierderea sau deteriorarea obiectelor în tranzit.</p>
                <p>Costul returnării transportului nu este acoperit de JewelryBoutique și rămâne responsabilitatea clientului.</p>


                <p>Odată ce primim coletul dvs., poate dura până la 2-4 zile lucrătoare pentru ca noi să procesăm cererea dvs. de returnare. Vă rugăm să rețineți că toate returnările sunt supuse unei inspecții de către echipa noastră de Asigurare a Calității înainte de procesarea unei cereri de returnare și pot apărea costuri suplimentare în funcție de instrucțiunile de returnare. Odată ce articolul este inspectat, în cazul în care se aplică taxe, veți fi anunțat înainte de orice lucrare care se face pentru a procesa cererea dumneavoastră.</p>
                <p>Dacă aveți întrebări, nu ezitați să contactați echipa de servicii pentru clienți prin e-mail la <a href="mailto:service@JewelryBoutique.ro">service@JewelryBoutique.ro</a> sau la telefon: 40 376 300 182 Vor fi bucuroși să vă ajute.</p>
                <p>Citiți cu atenție informațiile de mai jos înainte de a vă returna produsul pentru retragere, redimensionare sau reparație.</p>
                <h3>RETRAGERE (RAMBURSARE)</h3>
                <p>Returul dvs. trebuie să îndeplinească toate condițiile de mai jos pentru a putea beneficia de o retragere completă:</p>
                <ul>
                <li>Produsul nu a fost purtat și nu prezintă semne de utilizare incluzând, dar fără a se limita la zgârieturi, lovituri, pete sau alte defecte.</li>
                <li>Sigiliul original al produsului este intact și nu a fost îndepărtat. (Toate produsele gravate și negravate sunt trimise cu o etichetă agățată, un șnur negru atașat acestora. Asigurați-vă că nu a fost îndepărtat.)</li>
                <li>Coletul pentru returnare include toate articolele complementare, cum ar fi cutia cadou originală, certificate și alte articole promoționale.</li>
                <li>Produsul nu a fost redimensionat sau modificat anterior.</li>
                <li>Produsul nu este o comandă specială care a fost proiectată și / sau produsă conform specificațiilor clientului.</li>
                <li>Produsul nu include diamantele achiziționate ca parte a certificării GIA.</li>
                <li>Produsul a fost returnat către JewelryBoutique, în termen de 60 de zile de la data achiziționării.</li>
                </ul>
                <p>Vom credita metoda dvs. de plată inițială, cu excepția taxelor de livrare. Rețineți că poate dura până la 10 zile lucrătoare, pentru ca fondurile să apară în contul dvs., în funcție de emitentul bancar sau de cardul dvs.</p>
                <p>Elementele achiziționate prin utilizarea creditului magazinului pot fi returnate numai pentru creditul magazinului și nu pot fi procesate pentru restituirea monetară. Magazinul de credit nu poate fi convertit în numerar, transferat peste altcineva sau utilizat pentru servicii cum ar fi expedierea expres sau taxa de redimensionare.</p>
                <br/>
            </div>
        </Content>
        </div>
        
    )
}

export default ReturnPolicy;