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
            <br/>
                <h1>Termeni și Condiții pentru JewelryBoutique</h1>
                <h2><strong>Introducere</strong></h2>
                <p>Termeni și Condiții de retailer de e-commerce JewelryBoutique</p>
                <h2>1. <strong>Introducere</strong></h2>
                <p>(a) Vânzătorul este specializat in bijuterii și accesorii, care sunt oferite prin intermediul sistemului magazin on-line în JewelryBoutique. Acești termeni și condiții generale se aplică la toate achizițiile de produse și servicii de Client de la furnizor, dacă nu se specifică altfel în prezenta.</p>
                <p>(b) În cadrul acestor termeni și condiții, un client este definit ca o persoană privată, care intră într-o tranzacție cu vânzătorul doar în scopuri private și personale, și nu în alte activități comerciale sau independente în care ar putea fi implicat. Contractantul, în sensul acestor termeni și condiții, este orice persoană fizică, entitate juridică sau parteneriat cu persoane juridice care intră într-o tranzacție, ca parte a activității sale comerciale sau independente.</p>
                <p>(c) Orice abatere de la, contradicție, sau suplimentarea la oricare dintre termenii și condițiile următoare va face un contract invalid, cu excepția cazului de aranjamente de acord prealabil între cumpărător și vânzător.</p>
                <p>(d) Ne rezervăm dreptul de a revizui acești termeni în orice moment, prin modificarea acestei pagini. Termenii actualizați vor înlocui toate versiunile anterioare ale Termenilor.</p>
                <p>(e) Utilizarea site-ului (inclusiv accesarea, navigarea sau înregistrarea de a utiliza Site-ul) confirmă un acord necondiționat de a fi legat de acești Termeni și face obiectul unei mențineri a conformității cu acești Termeni.</p>
                <h2>2. <strong> Incheierea contractului</strong></h2>
                <p>(a) Oferta vânzătorului poate fi supusă modificării în orice moment, fără obligația unei notificări anterioare, la discreția exclusivă a furnizorului. În timp ce se fac eforturi pentru a se asigura proiectarea, colorarea și stilizarea produselor JewelryBoutique din fotografiile afisate pe site, aceasta fiind reprezentative pentru produsele originale, pot apărea diferențe din cauza restricțiilor tehnice de reproducere exactă a culorilor. În consecință, JewelryBoutique nu va fi responsabila pentru orice eroare sau inexactitate din fotografiile sau reprezentările grafice ale produselor afișate pe site. Dacă aveți întrebări despre produse, puteți contacta, desigur, Departamentul Servicii Clienți prin e-mail la service@JewelryBoutique</p>
                <p>(b) Confirmarea comenzii înseamnă acceptarea de către cumpărător a Termenilor și Condițiilor. Toate comenzile pot fi efectuate online pe site-ul JewelryBoutique. Tranzacția constituie un acord obligatoriu de încheiere a unui contract de cumpărare pentru produse. Făcând clic pe link-ul "Trimite comanda", în timpul procesului de comandă online pe site-ul JewelryBoutique, clientul plasează o comandă pentru toate produsele puse în coșul de cumpărături.Comanda nu poate fi anulată sau modificată decât în condiții speciale prevăzute în Termenii și condițiile noastre.</p>
                <p>(c) Clientul va fi informat prin e-mail de îndată ce comanda a fost primită. Vă rugăm să rețineți: la primirea acestui prim e-mail nu inseamnă că acordul a fost încheiat. Acordul este încheiat prin trimiterea confirmării comenzii sau prin expedierea produselor.</p>
                <p>(d) Eliberarea produselor comandate pentru expediere de către vânzător constituie, de asemenea acceptarea comenzii. Vânzătorul își rezervă dreptul de a respinge comenzile fără a invoca motive.</p>
                <p>(e) Concluzia comenzii va fi acceptată cu excepția cazului de livrare necorespunzătoare sau nereușită din partea vânzatorului de a furniza un produs sau o parte a livrării. Aceasta se aplică numai cu condiția ca furnizorul să fi încheiat o tranzacție de acoperire fermă și să nu fi fost furnizate de sub-furnizorul propriu din greșeala proprie. Vânzătorul va depune toate eforturile rezonabile pentru a procura produsele. În cazul în care produsele nu pot fi procurate, JewelryBoutique va rambursa prompt orice plată care a fost deja primită. În cazul în care produsele nu sunt disponibile sau disponibile numai în parte, clientul va fi informat imediat.</p>
                <p>(f) După ce contractul a fost încheiat - și în cazul în care produsele au fost comandate electronic - textul contractului, împreună cu termenii și condițiile din punct de vedere juridic, va fi trimis clientului prin e-mail. Datelor înregistrate de site vor stabili dovada tuturor tranzacțiilor operate între JewelryBoutique și clienții săi. În caz de litigiu între JewelryBoutique și unul dintre clienții săi cu privire la o tranzacție efectuată pe site, datele înregistrate de JewelryBoutique sunt considerate ca o dovadă incontestabilă a conținutului tranzacției.</p>
                <h2>3. <strong>Dreptul de retenție si retragere</strong></h2>
                <p>(a) În ceea ce privește <em>clienții: </em> Produsele comandate rămân proprietatea vânzătorului până ce se face plata integrală. În ceea ce privește <em> antreprenori</em>: Vânzătorul își păstrează titlul de la mărfuri până la soluționarea completă a tuturor creanțelor rezultate din relații de afaceri în curs de desfășurare.</p>
                <p>(b) În caz de încălcare a contractului din partea clientului (datorată, în special, obligațiilor de plată, falsificării de informații cu privire la identitate sau procedurilor de soluționare judiciare sau de deschidere a procedurii de insolvență împotriva proprietății clientului) vânzătorul are dreptul de a se retrage din contract și de a cere returnarea bunurilor în orice moment, dacă clientul nu a furnizat - sau nu a prestat doar în parte - plata pentru produsele comandate.</p>
                <p>(c) Contractorul are dreptul de a revinde produsele reținute în cursul corect al afacerii; dar el atribuie deja toate datoriile la furnizor; suma va fi valoarea finală a facturii, inclusiv toate costurile care au apărut la revânzarea produselor unui client sau unui terț. Vânzătorul acceptă transferul. După încheierea afacerii, contractorul are dreptul de a recupera cererea. Vânzătorul își rezervă dreptul de a apela la cerere în cazul în care contractantul se ocupă de datoriile sale incorect sau cu întârzieri cu plata.</p>
                <p>(d) La cererea clientului, vânzătorul este obligat să elibereze titluri de valoare, în măsura în care valoarea lor realizabilă depășește suma primită de noi de la cumpărător cu mai mult de 10%. Cu toate acestea, vânzătorul își rezervă dreptul de a alege titlurile de valoare care vor fi eliberate.</p>
                <h2>4. <strong> Prețuri și Plată</strong></h2>
                <p>(a) Prețurile se pot schimba. Calculul prețurilor se bazează pe lista de prețuri și reduceri valabile la data de livrare a produselor sau de servicii, plus taxa pe valoarea adăugată (TVA), astfel cum se prevede de către vânzător.</p>
                <p>(b) În cazul contractelor la distanță: taxe suplimentare de transport vor fi aplicate, așa cum este indicat în imaginea de ansamblu a costurilor de transport (a se vedea expedierea; Secțiunea 6 a acestor Termeni și condiții). Această sumă va fi plătită de către client în plus față de preț, inclusiv taxele produselor comandate.</p>
                <p>(c) Clientul va avea doar un drept de compensare în cazul reconventionalelor stabilite , și de recunoașterea pe care vânzătorul nu o neagă. Clientul își poate exercita doar dreptul de a refuza performanță în cazul în care cererea reconvențională rezultă din aceeași relație contractuală.</p>
                <p>(d) În eventualitatea unei erori de preț sau a informațiilor incorecte referitoare la produs, din cauza oricărei erori tipografice sau din sistem, JewelryBoutique își rezervă dreptul de a anula orice comandă plasată cu informații eronate, fără obligații suplimentare față de client, chiar și după primirea unei confirmări a comenzii sau a unei notificări de livrare.</p>
                <h2>5. <strong>Opțiuni de plată și costuri de livrare</strong></h2>
                <p>(a) Clientul poate efectua plăți cu toate cardurile de credit majore, inclusiv Visa, Mastercard și American Express. PayPal și plată în avans sunt de asemenea acceptate Vânzătorul își rezervă dreptul de a exclude metode specifice de plată.</p>
                <p>(b) Card de credit și plățile PayPal se plătesc în&nbsp;Leu românesc (RON)</p>
                <p>(c) În ceea ce privește plata prin PayPal: Clienții ar trebui să se înregistreze la paypal.co.uk. Prin alegerea PayPal ca metodă de plată, Clientul a fost de acord cu Termenii PayPal în absența oricărui alt acord, sau în cazul în care nu se prevede altfel în descrierea produsului, Produsele vor fi livrate imediat ce suma totală a fost complet creditată către vânzător.</p>
                <p>(d) Costurile de transport sunt calculate ca suma totală a taxelor de livrare din partea vânzătorului. Mai multe detalii pot fi găsite în costurile de transport.</p>
                <h2>6. <strong>Livrarea</strong></h2>
                <p>(a) Dacă nu se specifică altfel, toate prețurile includ TVA (unde este cazul) și exclud costurile de transport. Livrarea este gratuită. Vă rugăm să rețineți că taxele vamale internaționale ar trebui să fie luate în considerare, deoarece acestea pot provoca variația taxelor de transport. Mai mult decât atât, în cazul produselor returnate, vânzătorul își rezervă dreptul de a percepe clientului o taxă de 100RON pentru expediere, în cazul în care returnarea nu este conform cu cerințele prevăzute în Politica de returnare.</p>
                <p>(b) În caz de indisponibilitate a unui produs JewelryBoutique după comandă, vânzătorul va comanda produsele selectate cât mai repede posibil, va informa clientul, fără întârziere, și va indica data de livrare probabilă. Pentru a ajuta la accelerarea livrarii, aceste produse sunt marcate prin utilizarea unui sistem de semaforizare. Produsele marcate cu timp de livrare în verde înseamnă că sunt disponibile în stoc și / sau pot fi produse într-un timp scurt.</p>
                <p>(c) Vânzătorul își rezervă dreptul de - dacă circumstanțele impun - a livra loturile de produse în părți separate. În astfel de cazuri, cele mai bune interese ale clientului vor fi luate în considerare și nu vor fi adaugate costuri suplimentare.</p>
                <h2>7. <strong>Transfer de risc</strong></h2>
                <p>(a) În ceea ce privește clientul: Clientul este responsabil de a verifica produsul (e) imediat după livrare pentru a determina conformitatea cu comanda. Dacă există discrepanțe, clientul nu ar trebui să accepte pachetul și trebuie să descrie orice defecte (de exemplu urme de manipulare, produse deteriorate, produse lipsă sau articole, sau produse diferite de cele comandate și / sau indicată în documentul de transport) în scris direct pe baza declarației luată de transportator. Țineți minte că riscul de pierdere accidentală sau deteriorarea accidentală a obiectului cumpărat - inclusiv în timpul tranzacțiilor transmise - este transferată clientului în momentul în care obiectul este predat.</p>
                <p>(b) În ceea ce privește antreprenorii: Riscul de pierdere accidentală a, sau deteriorarea produselor este transferat către contractor la transfer, sau, în cazul tranzacțiilor transmise, în cazul în care produsele sunt predate transportatorului, transportului de marfă, sau oricarei alte părți responsabile de executarea transportului.</p>
                <p>Un refuz, fie al clientului, fie al antreprenorului de acceptarea a livrării va fi luat in considerare ca un transfer.</p>
                <p>(c) După ce procesul de plasare a comenzii, inclusiv pagina de detalii produs și pagina de verificare, prețul produsului indicat în confirmare e-mail pe care le va primi nu include "taxele vamale" (dacă este cazul) aplicate asupra exporturilor și importurilor în țara dumneavoastră. Plasarea unei comenzi confirmă un acord necondiționat la care clientul este responsabil pentru plata oricăror taxe suplimentare.</p>
                <h2>8. <strong>Dreptul consumatorului de retragere</strong></h2>
                <p><strong> (a) Politica de anulare</strong></p>
                <p>(i) În cazul în care vânzătorul nu poate îndeplini data de livrare preliminară, acesta informează clientul în timp util. În cazul întreruperii operațiunilor de afaceri ale vânzătorului, de care el nu este responsabil, sau întreruperilor cu subcontractanții, termenul de livrare se prelungește în conformitate cu lungimea întreruperii. Clientul are dreptul de a se retrage din contract, fără a da motive, de a returna produsele și de a depune Formularului de returnare la furnizor în termen de 60 de zile de la primirea produselor, dacă sunt îndeplinite condițiile din Politica de returnare. Cu toate acestea, excepțiile se aplică produselor care au fost produse în conformitate cu specificațiile clientului sau care au fost adaptate la cerințele specifice ale unui client.</p>
                <p>(ii) Perioada începe la primirea de către vânzător a instrucțiunilor scrise de client de a anula comanda (în cazul unei singure comenzi livrate într-un număr de părți separate, perioada nu începe până la primirea primei părți a livrării) și nu înainte ca furnizorul să îndeplinească responsabilitățile sale de informare și alte obligații legale. Pentru ca retragerea să fie efectuată fără întârziere, este suficient ca dvs. să trimiteți cererea și produsele în timpul util.</p>
                <p><strong> (b) Consecințele retragerii:</strong></p>
                <p>(i) Pentru a încheia o retragere cu succes, orice produse sau fonduri care au fost schimbate între cele două părți în cursul tranzacției trebuie să fie returnate, și orice beneficii acumulate (de exemplu, dobânda) vor fi predate. În cazul în care clientul este în imposibilitatea de a returna produsele, sau să fie în măsură să returneze doar o parte din ele, sau produsele returnate sa fie avariate, clientul va fi obligat să compenseze furnizorul cu valoarea de înlocuire completă a produselor, în cazul în care clientul a utilizat produsul contrar bunei-credințe, sau profitului personal într-un mod incompatibil și nu va afecta valabilitatea și eficacitatea dreptului de revocare compromisă. Nici o compensație nu se va cere pentru produsele care au fost folosite în scopul pentru care sunt destinate.</p>
                <p>(ii) Costul de expediere de retur trebuie să fie suportat de către client. Vânzătorul nu poate accepta transferul de retur în cazul în care pachetul este ștampilat sau insuficient ștampilat.</p>
                <p>Vânzătorul trebuie să înceapă procesarea returnării clientului în termen de 2 - 4 zile lucrătoare de la primirea produsului. Vânzătorul va asigura produsele care nu pot fi trimise prin poștă.</p>
                <p>Vânzătorul trebuie să își îndeplinească obligațiile de a rambursa plățile în termen de 30 de zile de la declarația de retragere trimisă, sau în termen de 30 de zile de la returnarea produselor. Vânzătorul are discreția de a stabili dacă produsele sunt în starea lor originală, atunci când s-au întors la JewelryBoutique. Vânzătorul nu va fi responsabil sau răspunzător dacă un produs pe care clientul dorește îl returneze este pierdut, direcționat greșit sau livrat cu întârziere. Prin urmare, clientul trebuie să suporte riscurile de transport alese.</p>
                <p>(iii) Dreptul de returnare nu se aplică următoarelor produse:</p>
                <p>Produse care au fost produse la specificațiile clientului sau adaptate la cerințele specifice.</p>
                <h2>9.<strong>Returnări</strong></h2>
                <p>(a) Dacă un client este o persoană fizică, care plasează o comandă privată fără intenții de afaceri comerciale sau care desfășoară activități independente, atunci el / ea este un consumator și, prin urmare, are dreptul la dreptul general de revocare si de returnare, după cum se specifică mai jos.</p>
                <p>În exercitarea dreptului de retragere, în conformitate cu secțiunea 8 din acești Termeni și condiții, clientul este obligat să returneze produsele în starea lor inițială și în starea lor de ambalare.</p>
                <p>(b) Retragerea este gratuită numai dacă produsele nu sunt gravate și nu includ nici o personalizare și / sau specificații.</p>
                <h2>10.<strong> Garanție</strong></h2>
                <p>(a) Produsele furnizate pot varia ușor față de produsele descrise pe internet, în măsura în care este rezonabil, și clientul acceptă verificarea informațiilor cu precizie a produselor în avans. înainte de confirmarea comenzii. (a se vedea secțiunea 2 din Termeni și condițiile).</p>
                <p>(b) Vânzătorul poate alege inițial între repararea sau înlocuirea produselor. Vânzătorul are dreptul de a refuza tipul ales, dacă acesta este doar realizabil, la un cost rezonabil și în cazul în care alt tip de realizare nu aduce dezavantaje considerabile pentru client.</p>
                <p>În cazul contractanților, vânzătorul va alege inițial un remediu sau înlocuitor pentru garanția noastră, în cazul defectărilor produselor.</p>
                <p>(c) În cazul în care executarea ulterioară eșuează, clientul poate cere, în general, fie o reducere a remunerației, fie anularea acordului (de retragere). În cazul unor defecte minore, clientul nu va avea drept de reziliere, luând în considerare interesele lor reciproce. În toate cazurile de cereri de despăgubire împotriva partenerului de contract, în loc de performanța de livrare sau servici, clientul va cere despăgubiri pentru cheltuielile pierdute, care sunt încheiate de către client bazându-se pe primirea și în cazul în care clientul are posibilitatea de a face. În cazul în care clienții depun o cerere pentru compensarea daunelor, limitarea răspunderii în secțiunea 11 / A din acești termeni și condiții se aplică.</p>
                <p>(d) Drepturile clientului în caz de defecte cer ca clientul să-și fi îndeplinit în mod corespunzător obligațiile de examinare și de notificare. Contractorii, în special, sunt necesari pentru a raporta defectele evidente din produsele furnizate cât mai curând posibil, în termen de două săptămâni de la primirea produselor; eșecul de a face aceasta duce la invalidarea garanției. Expedierea punctuală a produselor defecte sau notificarea promptă că produsele sunt defecte va fi acceptată ca o cerere valabilă atâta timp cât acest lucru este făcut înainte de termenul limită. Contractantul este responsabil de efectuarea tuturor notificărilor necesare și, în special, de notarea detaliilor defectelor și data la care acestea au avut loc, pentru raportarea prejudiciului în timp util.</p>
                <p>(e) În cazul în care cumpărătorul este un antreprenor, descrierea comercială a produsului trebuie să fie singurul criteriu pentru a stabili dacă calitatea produselor atinge standardele cerute. Nicio altă declarație publică, mărturie sau publicitate de către producător nu vor fi acceptate ca descrieri contractuale obligatorii ale produselor.</p>
                <p>(f) Perioada de garanție pentru client este de 2 ani de la livrarea produselor. Această perioadă de garanție de doi ani nu se aplică în cazul în care clientul este în mod intenționat neglijent la îngrijirea corespunzătoare a produselor. Restricțiile de răspundere de mai sus nu se aplică în cazul pierderilor care rezultă din fatalitate, vătămare fizică sau lipsă a sănătății.</p>
                <p>(g) Vânzătorul nu face nicio garanție obligatorie cu clientul, cu excepția cazului convenit altfel, în mod expres. Garanțiile producătorului rămân neafectate.</p>
                <h2>11.<strong> Limitarea răspunderii</strong></h2>
                <p>(a) În cazul unor încălcări din neglijență a obligației, răspunderea vânzătorului și răspunderea subcontractanților se limitează la contractul tipic, prejudiciul mediu previzibil, în ceea ce privește tipul de produs. Aceasta se aplică și în cazurile de încălcări minore ale obligațiilor de către reprezentanții sau agenții legali din partea vânzătorului. Vânzătorul nu este răspunzător de încălcarea neglijentă ale altor obligații contractuale. Vânzătorul este răspunzător de încălcarea pozițiilor contractuale legale ale clientului. Pozițiile contractelor juridice sunt cele în care contractul este obligatoriu să fie semnat, în scopul de a întregi scopul lui. Vânzătorul este, de asemenea, răspunzător de orice încălcare a acestor obligații care permit realizarea contractului în conformitate cu normele, în primul rând, și de a căror respectare utilizatorul are încredere în mod regulat.</p>
                <h2>12. <strong>Politica de Confidențialitate</strong></h2>
                <p>JewelryBoutique vă prelucrează datele personale în conformitate cu cerințele Regulamentului(EU) general privind protecția datelor. Privacy Shield, precum și legislația internă privind protecția datelor</p>
                <p><strong>Categorii de Date Personale pe care JewelryBoutique le procesează</strong></p>
                <ul>
                <li>Detaliile achiziției, inclusiv metoda de plată și numărul tranzacției</li>
                <li>Statusul comenzii dvs.</li>
                <li>Serviciul de informații pentru clienți - toate tipurile de comunicare și corespondență dintre dvs. și serviciul nostru pentru clienți.</li>
                <li>În circumstanțe excepționale, vi se poate solicita să ne furnizați detalii suplimentare cu privire la cardul dvs. de identitate, pentru a vă certifica identitatea</li>
                <li>Într-un număr limitat de cazuri, vă putem invita să ne furnizați fotografiile, video sau altele în cazul în care vă declarați dorința de a participa la unul dintre tombole, campaniile sau alte evenimente</li>
                <li>JewelryBoutique își asuma dreptul de a trimite tuturor clienților săi o invitație de a participa la sondaje de satisfacție. Participarea este întotdeauna opțională.</li>
                <li>JewelryBoutique nu procesează și nu stochează date din cardurile bancare sau alte instrumente financiare.</li>
                </ul>
                <p><strong>Legea procesării</strong></p>
                <ul>
                <li>JewelryBoutique vă procceseaza datele personale numai după primirea consimțământului dvs. pentru procesare</li>
                <li>JewelryBoutique vă procceseaza datele personale necesare pentru a respecta cerințele legislației fiscale, financiare sau de altele.</li>
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
                <li>Pentru a putea trimite buletinul informativ și materialele noastre promoționale, numai în cazul în care clienții își dau consimțămîntul la acesta.</li>
                </ul>
                <p><strong>Perioada de timp pentru care datele dvs. personale vor fi stocate:</strong></p>
                <p>JewelryBoutique vă stochează datele personale pe care le-ați trimis în timpul înregistrării contului dvs. pe site-ul nostru, atîta timp cit contul dvs. rămîne activ</p>
                <p>JewelryBoutique vă stochează datele personale în timpul producerii și livrării produselor, precum și perioada de timp specificată în secțiunea "Return Policy pentru eventuale returnări și garanție a produsului, dar nu mai mult de 2 ani sau mai mult decît timpul de garanție.</p>
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
                <li>Pentru a exersa unul dintre drepturile de mai sus, trimiteți-ne un mesaj de poștă electronică cu cererea dvs. pe pagina de contact sau printr-un e-mail la service@JewelryBoutique. Vă vom răspunde în cel mai scurt timp.</li>
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
                <p>Securizăm site-ul web și alte sisteme prin utilizarea unor măsuri tehnice și organizatorice împotriva pierderii, distrugerii, accesării, modificării sau distribuției datelor dvs. de către persoane neautorizate. În ciuda verificărilor periodice, protecția completă împotriva tuturor amenințărilor este imposibilă</p>
                <p><strong>Cine este responsabil pentru prelucrarea datelor dvs. personale?</strong></p>
                <p>Toate societățile din grupul JewelryBoutique funcționează în calitate de administratori în comun în sensul GDPR - (EU) 2016/679 - Art. 26.</p>
                <p>Toate companiile din grupul JewelryBoutique procesează datele personale ale clienților noștri în conformitate cu un acord semnat special între noi. Colectăm aceleași categorii de date cu caracter personal ale clienților noștri, le continuăm doar în scopurile menționate în Politica de confidențialitate JewelryBoutique asigură că toate companiile din grup au luat aceleași măsuri tehnice și organizatorice pentru a vă proteja datele personale.</p>
                <p><strong>Răspunzători pentru prelucrarea datelor dvs. personale ca client. </strong></p>

                <h2>13.<strong> Amendamentul la Termenii și Condițiile Generale</strong></h2>
                <p>(a) Vânzătorul își rezervă dreptul de a modifica acești Termeni și Condiții Generale în orice moment, oferind clienților un minim de 2 săptămâni înainte ca schimbările să intre în vigoare. Această notificare prealabilă va lua forma publicării modificate a Termenilor și Condițiilor Generale pe website-ul JewelryBoutique, precizându-se data la care modificările vor intra în vigoare.</p>
                <p>(b) În cazul în care clientul nu se conformează cu aceste modificări în termen de 2 săptămâni de la publicarea lor, termenii și condițiile modificate vor fi considerate acceptate. Vă rugăm să rețineți: Perioada de notificare de 2 săptămâni va fi respectată cu strictețe.</p>
                <h2>14.<strong> Dispozitii finale</strong></h2>
                <p>(a) Legea Republicii Federale Germania se aplică, cu excepția legii ONU de cumpărare. Pentru clienții care nu intră în contractul de scopuri profesionale sau comerciale, aceste legi se aplică numai în cazul în care protecția acordată de dispozițiile obligatorii ale legislației statului în care își are reședința obișnuită clientul nu este retrasă.</p>
                <p>(b) În cazul în care clientul este un om de afaceri, persoană juridică de drept public, locul exclusiv de jurisdicție în eventualitatea unei dispute contractuale este instanța competentă de pe teritoriul locului vânzătorului, cu excepția cazului în care competența alternativă este convenită. Vânzătorul își rezervă dreptul de a acționa în judecată contractantul la domiciliul sau la locul de desfășurare a activității sale.</p>
            </div>
            <br/>
        </Content>

        </div>
       
        
    )
}

export default TermsAndConditions;