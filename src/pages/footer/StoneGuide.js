import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, List, Avatar  } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;


const data = [
    {
      title: 'Diamantul',
      image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-diamond.png', 
      description: 'Frumusețea pură și nevinovăția diamantului vă vor absorbi respirația. O frumusețe splendid spectaculoasă și atemporală a fost podoaba femeilor de secole. Frumusețea simplă și inocentă a diamantelor va face ca bijuteria dvs. sa fie una speciala.'
      
    },
    {
        title: 'Diamantul Negru',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-black-diamond.png', 
        description: 'Atractiv și extraordinar... Aspectul solid și dorința puternică a unei nuanțe negre simbolizează stabilitatea. Dacă aveți un stil avangardist, diamantul negru vă va face să vă bucurați cu aspectul său misterios. Dacă aveți un aspect contemporan sau sofisticat, această culoare la modă va adăuga încredere și stil personalității dvs.'
        
      },
      {
        title: 'Smaraldul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-emerald.png', 
        description: 'Apelăm toți iubitorii de primăvară aici! Verdele unic și profund este simbolul iubirii și al renașterii. Chemăm toți artiștii și oamenii creativi aici, deoarece ibijuteria cu smarald va fi favorita lor! Smaraldul este, de asemenea simbolul unei căsnicii fericite și de succes.'
        
      },
      {
        title: 'Safirul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-sapphire.png', 
        description: 'Tonul albastru foarte saturat este sensul loialității și al încrederii. Uimitorul albastru profund creează un farmec final și oferă un sentiment calm, o culoare albastră ca și oceanul. Dacă aveți încredere și putere, aceasta este piatra voastră.'
        
      },

      {
        title: 'Rubinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-ruby.png', 
        description: 'Sentimente puternice și cele mai frumoase furtuni ale dragostei ... Rubinul adaugă pasiune și loialitate bijuteriei tale. Vibrația roșie pătrunzătoare, creează bogăție și o frumusețe esențială. Dacă ai o personalitate ambițioasă, rubinul este cu siguranță pentru tine. Este simbolul iubirii necondiționate și al pasiunii adevărate.'
        
      },
      {
        title: 'Safirul Alb',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-diamond-sapphire.png', 
        description: 'Dacă nobilul, clasicul și misteriosul te descriu, această eleganță incoloră și atemporală este a ta. Dacă aveți o armonie interioară și o răspândiți în fiecare loc în care mergeți, safirul alb este o alegere perfectă.'
        
      },
      {
        title: 'Ametistul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-amethyst.png', 
        description: 'Aspectul purpuriu mitic are o energie foarte mare și creează o mare combinație cu aurul alb, paladiu sau platină. Dacă vă place un aspect puternic și contemporan, puteți verifica colecția noastră de ametist.'
        
      },
      {
        title: 'Citrinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-citrine.png', 
        description: 'Dacă aveți o mare energie, strălucirea citrinului trebuie să fie alegerea dumneavoastră. Nuanța acestuia este cadoul soarelui și acesta face declarația dvs. îndrăzneață și puternică. Dacă aveți un caracter optimist și social, această piatră grațioasă vă va ridica personalitatea.'
        
      },
      {
        title: 'Topazul Albastru',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-topaz-blue.png', 
        description: 'Dacă vă plac nuanțele luminoase și puternice de albastru, topazul albastru va adăuga o atenție deosebită bijuteriei dvs. Scânteia unică va atrage toate privirile asupra dvs. și strălucirea albastră seducătoare va fi simbolul loialității.'
        
      },
      {
        title: 'Granatul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-garnet.png', 
        description: 'Cea mai elegantă nuanță de roșu, ce creează o declarație foarte intensă și puternică. Este culoarea vieții și a vitalității, iar dacă aveți o energie de viață debordantă și o susțineți cu iubirea voastră veșnică, granatul este piatra dvs. Granatul este povestea de dragoste pe tot parcursul vieții pentru iubirea adevărată.'
        
      },
      {
        title: 'Peridotul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-peridot.png', 
        description: 'O putere de basm și reflecția luminii vă va surprinde dacă doriți tonuri de culoare galben-verde. Tonurile pământului vă va aminti de natură și de frumusețea ei fără cuvinte. De asemenea, are un mesaj secret între dvs. și persoana iubită, care este " "Am încredere și te iubesc".'
        
      },
      {
        title: 'Aquamarinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-aquamarine.png', 
        description: 'Culoarea uimitoare și strălucirea nuanțelor profunde de albastru, creează o potrivire perfectă cu orice culoare metalică. Noul aspect uimitor vă va duce într-un moment plin de frumusețe și elegantă. Albastrul oceanului tropical este expresia iubirii voastre.'
        
      },

      {
        title: 'Opalul de Foc',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-fire-opal.png', 
        description: 'Portocaliul profund are o vibrație puternică de nuanțe și ne amintește de momentul romantică a unui apus de soare în apropierea mării. Energia sa înaltă și dă sufletelor noastre o atmosferă pozitivă. Este, de asemenea simbolul fericirii persistenței și se potrivește visătorilor creativi. Dacă vă urmați visele și sunteți pozitivi permanent, indiferent unde vă aflați, o bijuterie cu opal de foc, va fi cea mai mare susținătoare a ta.'
        
      },
      {
        title: 'Ametistul verde',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-green-amethyst.png', 
        description: 'Umbra verde deschisă este simbolul reînnoirii și, dacă vă place un aspect uimitor dar foarte rar, ametistul verde este o opțiune foarte bună pentru dvs. Poate însemna noul capitol al vieții dvs., un nou început. Dacă personalitatea dvs. întotdeauna salută noile provocări, ametistul verde vi se potrivește foarte bine, cu tonurile sale de culoare foarte frumoase și mai ales pentru semnificația pe care o poartă.'
        
      },
      {
        title: 'Turmalina verde',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-greentourmaline.png', 
        description: 'Dacă aveți un spirit plin de bucurie și dacă sunteți o persoană echilibrată, nuanța verde a turmalinei verzi vă va completa caracterul. Sărbătoriți cel mai mare moment al vieții dvs. cu o bijuterie cu turmalină verde.'
        
      },
      {
        title: 'Turmalina roz',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-pink-tourmaline.png', 
        description: 'Vibrația romantică, dar luminată de roz vă va surprinde la prima vedere. Este culoarea iubirii pure și a celui mai dulce ton roz pe care îl puteți găsi vreodată. Dacă aveți un stil fantezist și drăguț, bijuteria cu turmalină roz oferă multe! Este, de asemenea, o amintire constantă a iubirii voastre profunde.'
        
      },
      {
        title: 'Cuarț roz',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-rose-quartz.png', 
        description: 'Culoarea netedă și liniștită de roz va crea o privire romantică asupra dvs. Nu trebuie prea multă atenție, pentru a fi ușor de recunoscut! Energia calmă a cuarțului roz este ca un sentiment pe care întotdeauna doriți să îl protejați, la fel ca relația voastră. Dacă sunteți o persoană cu adevărat romantică, păstrați acest moment frumos în bijuterie cu un cuarț roz.'
        
      },
      {
        title: 'Safirul galben',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-yellow-sapphire.png', 
        description: 'Focul de galben strălucitor vă va trezi toate simțurile cu strălucirea sa. Este timpul să vă arătați energia creativă și intelectuală. Dacă aveți o personalitate puternică și curajoasă, nuanța galbenă bogată vă va aminti toate emoțiile'
        
      },
      {
        title: 'Cuarț cenușiu',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-smoke-quartz.png', 
        description: 'Misterul culorii acestei pietre va oferi un aspect unic bijuteriei. Oferă proprietarului o senzație naturală cu tonul său cald de culoarea cafelei. Are un aspect natural, astfel încât toți iubitorii de natură să poarte această piatră și să onoreze mama Natura. Nu prea orbitor, pentru că este timpul să coborâm cu picioarele pe pământ!'
        
      },
      {
        title: 'Tanzanitul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/stone-tanzanite.png', 
        description: 'Această piatră prețioasă atât de specială, este foarte unică și dacă vă plac piesele rare, frumoase și atrăgătoare, tanzanitul trebuie să fie alegerea dvs. Culoarea profundă și bogată creează o mare diferență pentru bijuteria dvs. Unicitatea sa este adorabilă, iar nuanța uluitoare de culoare este uimitoare. Dacă vă place extraordinar, tanzanitul vă va uimi pe voi și pe iubitul vostru.'
        
      },


  ];

const StoneGuide = ()=>{
    return (
      <div>
        <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
            <Content style={{ padding: '0 50px' }}>
          <br></br>
          <div>
                <h2>Ce piatră ar trebui să aleg?</h2>
                <p>Culoarea pietrei joacă un rol important în preferințele dvs. personale și este foarte important să selectați piatra potrivită. Explorați semnificația secretă a pietrelor prețioase pentru a vă alege o bijuterie speciala.</p>
                <div>

                <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={item.title}
                    description={item.description}
                    />
                </List.Item>
                )}
                />
          
            </div>
        </div>
        <br></br>


        </Content>
      </div>
       
    )
}

export default StoneGuide;