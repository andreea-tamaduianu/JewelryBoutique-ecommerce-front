import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;

const WeddingRingGuide = ()=>{
    return (
        <div>
            <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>

            <Content style={{ padding: '0 50px' }}>
            <div>
                <br></br>
                <h1>Ghid pentru Verighete</h1>

                <h5>Cum să aleg metalul?</h5>
                <br></br>
                <div>
                <div ><img alt="Ghid pentru Verighete" src="https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/wedding-ring-guide_03.jpg"/></div>

                <br></br>
                <p>Metalele vin în diferite culori, aspecte, durabilitate, rezistență și preț.</p>

                <p><span><b>Aurul:</b></span> Aurul a fost întotdeauna o alegere clasică și atemporală pentru verighetele de nuntă.
                Aspectul natural cald și strălucirea frumoasă, fac verigheta din aur mai romantică și de asemenea, un metal mult dorit. Aurul este un metal măsurabil în carate și are 24 de piese.
                Aurul pur este măsurat ca aur de 24 ct și este prea moale pentru se produce o bijuterie, așa că trebuie amestecat cu alte metale pentru a forma inelul. Aurul de 18 karate conține aur pur 75%, aurul de 14 karate conține aur pur 58,5% și aurul de 9 karate conține aur pur 37,5%. Duritatea și durabilitatea aurului variază în funcție de karat, așa că, în funcție de preferințele dvs., puteți alege caratul pe care îl doriți.</p>

                <p><span><b>Platina:</b></span> Cel mai prestigios metal pentru verighete este cu siguranta Platina. Platina are o durabilitate foarte mare, astfel încât se simte mai grea decât alte metale. Este de 30 de ori mai rar decât aurul și 40% mai greu decât aurul de 14K. Densitatea, puritatea și raritatea fac inelul din platină, extrem de valabil și un protector, pentru că un inel de platină rezistă ani de zile. În plus, luciul din satin de o nuanță frumoasă alb, are un aspect natural și uimitor.</p>
                <p><span><b>Argintul:</b></span> Griul argintiu-alb, strălucitor este ca și reflecția lunii în mare. Lumina acestui metal frumos se potrivește perfect cu orice piatră prețioasă.
                Argintul este de asemenea, foarte moale pentru a fi artizanat, astfel încât este aliat cu alte metale pentru a crește durabilitatea. 925 argint conține argint pur de 92,5%, ceea ce oferă o strălucire frumoasă și naturală inelului. Argintul strălucitorul, foarte lucios este extrem de atractiv datorita aspectului contemporan.</p>
                </div>

                <div>
                <h5>Cum să aleg culoarea?</h5>

                <div >Culoarea este un atribut care poate fi legat de stil. Este important să atrageți atenția, iar dacă persoana care va purta bijuteriile are deja și alte piese, trebuie să țineți cont de culorile ce ar putea fi cele mai potrivite împreună. Pe de altă parte, culorile diversificate simbolizează impresii diferite. </div>

                <div>
                <p><span ><b>Aurul Galben:</b></span> Aspectul cald al aurului galben te întâmpină ca și strălucirea soarelui.  Este un stil clasic, dar totuși la modă, iar efectul său luminos rămâne adevărat în timp. Culoarea naturală, frumoasă, galbenă și strălucitoare, se potrivește perfect oricărui stil și este perfectă pentru iubitorii clasici, deoarece nu va ieși niciodată din tendințe. Aspectul constant de strălucire rămâne pentru o viață, la fel ca și căsnicia dvs. Calitatea nesfârșită va fi pe degetul dvs. pentru totdeauna.</p>
                </div>

                <div >
                <p><span><b>Aurul Alb</b>:</span> Șarmul aurului alb adaugă un aspect contemporan și unic. Durabilitatea sa este mai puternică și este o alternativă excelentă dacă bugetul este limitat. Aurul alb oferă o strălucire revigorantă și sofisticată, iar popularitatea sa continuă de ani de zile. Aspectul reflectorizant al suprafeței, oferă un lux original și elegant. Design-ul futurist, modern și spectaculos vă exprimă încrederea personală.</p>
                </div>

                <div>
                <p><span ><b>Aurul Roz:</b></span> Tonurile și eleganța aurului roz, sunt foarte populare, mai ales prin aspectul său ce oferă o eleganță de lux.  Aliajul său de cupru, conferă metalului o nuanță roz frumoasă, iar tendința sa crește zilnic. Aurul de roz, reprezintă iubire și atracție romantică, oferind un aspect feminin, iar cuprul adaugă durabilitatea necesară metalului. Verighetele în stil vintage arată grozav, deoarece frumusețea încântătoare oferă cu adevărat un apel uimitor pentru fiecare stil de inel.</p>
                </div>

                </div>

            </div>

            <br></br>
        </Content>

        </div>
        
    )
}

export default WeddingRingGuide;