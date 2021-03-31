import React, { useState, useEffect } from "react";
import { Layout, Menu, Breadcrumb, List, Avatar  } from 'antd';
import FooterNav from '../../components/nav/FooterNav'
const { Header, Content, Footer, Sider } = Layout;



const data = [
    {
      title: 'Piatra celor născuți în ianuarie - Granatul',
      image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/garnet_aaa.png', 
      description: 'Asemănătoare culorii semințelor de rodii, această piatră prețioasă își primește numele din cuvântul englez din secolul al XVII-lea, "gernet", care înseamnă roșu închis. Aceste pietre frumoase vin în mai multe variante de culori, cele mai frecvente rămân cele de culoare roșu închis, până la violet-roșu. Pietre prețioase deosebite, găsite în întreaga lume, inclusiv Wyoming, Republica Cehă, Grecia, Rusia, Tanzania, Madagascar, Sri Lanka și India. Granatul simbolizează adevărul și credința, aceste pietre prețioase oferă  siguranță în timpul călătoriilor, accidentelor la drum lung pentru cel ce le poartă și având abilitățile de a-și proteja proprietarii de coșmaruri. Granatul simbolizează, de asemenea prietenii profunde și durabile. Dăruiți Granatul unei persoane a cărei prietenie o prețuiți profund. Granatul a fost chiar lăudat pentru puterile sale vindecătoare și se spune că are proprietăți de vindecare pentru cei cu probleme ale inimii și plămânilor. Navigați prin colecția noastră de bijuterii cu granat și alegeți cadoul perfect pentru cei care împărtășesc ziua de naștere a lunii ianuarie, trimițându-i urări pentru îndeplinirea dorințelor, fericire și sănătate.'
      
    },
    {
        title: 'Piatra celor născuți în  februarie - Ametistul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/amethyst_aaa.png', 
        description: 'Specii minerale ale cuarțului, ametistul variază în culori purpurii de la purpuriul roșiatic până la purpuriul violet. Cuvântul "ametistos" provine din limba greacă, adică "nu bea" și pe măsură ce culoarea purpurie seamănă cu vinul, nu este o coincidență faptul că "methy" este cuvântul atribuit vinului. Ametistul se găsește pe o scară largă în întreaga lume, inclusiv în SUA, Mexic, Brazilia, Canada, Africa, Italia, Germania și Rusia. Ametistul, demonstrează drama și emoția culorii sale excepțională, fiind o piatră ușor de recunoscut. În vechime se credea că ar putea să protejeze de beție și intoxicație. În prezent, aceste pietre izbitor de frumoase, sunt asociate cu stabilitatea, pacea, echilibrul, sinceritatea și o dispoziție calmă. De asemenea, a fost folosit ca medicament în Evul Mediu, pentru a risipi somnul și a ascuți intelectul, fiind încă reputate pentru a fi eficiente în vindecarea simptomelor de sevraj sau de orice altfel de dependență, dureri de cap, insomnie și alte vindecări generale. Verificați colecția noastră de bijuterii cu ametist, nu numai pentru cei care sunt născuți în luna februarie, ci și pentru un cadou ce oferă căldură, putere și curaj.'
        
      },
      {
        title: 'Piatra celor născuți în martie - Aquamarinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/aquamarine_aaa.png', 
        description: 'Pietre prețioase recunoscute prin culorile lor calde, liniștite, sunt ca și cum ați purta un val al oceanului ca și sensul numelui în sine. Se credea chiar că Aquamarinul provine din cutiile de bijuterii ale sirenelor, ce au fost aduse la țărm. Aceste pietre strălucitoare, colorate pot fi găsite în Brazilia, China, Columbia, Rusia, India și Statele Unite. Datorită asocierii lor cu marea, Aquamarinele au fost mereu pietre sacre pentru marinari, promițându-le o călătorie sigură. Datorită culorii lor liniștitoare, se crede că aduc calm și pace purtătorului. Romanii credeau că bijuteriile Aquamarin, ar putea ajuta la reconcilierea cu dușmanii, unii credeau că aceste pietre sunt capabile să re-trezească dragostea dintre oameni. Aquamarinele, datorită efectului lor calmant sunt încă considerate a fi de ajutor pentru sănătatea mintală și pentru a cultiva liniștea interioară. În antichitate, aceste pietre prețioase au fost utilizate pentru a vindeca orice infecție și au fost considerate puternice pentru vindecarea afecțiunilor oculare. Bijuteriile cu Aquamarin vor fi un dar drăguț nu numai pentru cei născuți în luna martie, ci și pentru a folosi Aquamarinul ca dar pentru mireasă, deoarece simbolizează unitatea și iubirea de lungă durată.'
        
      },
      {
        title: 'Piatra celor născuți în aprilie - Diamantul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/diamond-brillant_aaa.png', 
        description: 'Cei norocoși născuți în aprilie, pot numi cea mai apreciată piatră prețioasă - diamantul, piatra lor de naștere. Din cuvântul grecesc "adamas", adică invincibil, diamantul merită cu adevărat acest titlu. Piatra cea mai grea și cea mai durabilă, în consecință, este un simbol al iubirii veșnice. Aceste pietre prețioase sunt, de asemenea speciale pentru gama lor largă de culori, de la cel mai cunoscut alb de cristal până la cele foarte negre întunecate. În prezent, diamantele sunt minate în principal în Africa de Sud, India, Brazilia, Canada și Australia. Diamantele au fost apreciate încă din antichitate, chiar înainte cu 400 Î.H. Textele sanscrite menționează deja admirația și mirarea față de aceste cristale. Multe legende au fost asociate cu aceste pietre prețioase, se credea că diamantele au fost create de fulgerul care lovea Pământul, grecii credeau că diamantele erau lacrimile zeilor sau fragmente din stele. Datorită tuturor legendelor despre diamante, focul și strălucirea lor orbitoare, se crede că au puteri magice. Piatra reprezintă credință, loialitate, onestitate, puritate și iubire. Acesta este motivul pentru care diamantele sunt alese pe scară largă și pentru inelele de logodnă. Aceste pietre prețioase au fost considerate a avea puteri extraordinare de vindecare, vindecând boli legate de creier și datorită purității asociate cu ele au fost capabile să scoată orice otravă din corp. Oferind forță magnifică, diamantului este simbolul dragostei veșnice nu doar față de cei care nu s-au născut în aprilie, ci și față de cei dragi lor.'
        
      },

      {
        title: 'Piatra celor născuți în mai - Smaraldul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/emerald_aaaa.png', 
        description: 'Culoarea verde luminoasă, a smaraldului ar putea fi numită simbolul primăverii și astfel, nu este surprinzător faptul că este piatra de naștere a celor pentru născuți în luna mai, cu verdele naturii. Cu cât culoarea acestuia este mai intensă, cu atât devine mai valoros Smaraldul, uneori prezentând chiar și o nuanță albăstruie. Numele Smaraldului a venit indirect din cuvântul grecesc "smaragdos", care era numele dat mai multor tipuri de pietre verzi. Aceste pietre se găsesc în Columbia, Brazilia, Pakistan, Rusia, Australia, Africa de Sud, India, Norvegia și Statele Unite. Smaraldele cu nuanțele lor adânci de verde, simbolizează reînnoirea vieții și posedă trăsături pentru a împărtăși în viața dvs., cum ar fi credință, loialitate și prietenie. Există multe mituri despre Smarald. Romanii au asociat Smaralde cu zeița Venus, care a reprezentat fertilitatea, bunătatea și frumusețea. Pentru puterile lor vindecătoare, se credea că împiedică epilepsia, oprește sângerarea și calmează febra. Dați cadou culorile strălucitoare ale primăverii celor dragi care s-au născut în luna mai, cu pietrele strălucitoare de culoare verde smarald.'
        
      },
      {
        title: 'Piatra celor născuți în iunie - Perla',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/white_pearl.png', 
        description: 'Singurele pietre prețioase create de creaturi vii, -sisteme și scoici. Perlele îi fac pe cei născuți în luna iunie, norocoși să aibă o piatră de naștere excepțională. De la cele mai răspândite alburi până la cele mai rare, culori  de negrul, perlele sunt daruri minunate ale oceanelor. Denumirea perlelor provine dintr-un cuvânt latin "perna", ceea ce înseamnă "picior" din cauza asemănării cochilii deschise a moluștei cu piciorul de oaie. În prezent, perlele provin în principal din Japonia, China, Australia, Filipine și Indonezia. Perlele au fost foarte apreciate din vremea Egiptului Antic. De atunci, legendele și miturile au început, numind aceste pietre lacrimile Lunii, capabile să aducă caritate, nevinovăție și credință. Se crede că au puteri vindecătoare, pentru multe boli diferite și chiar bolile psihice. Perlă, up to this day are used as Medicină in Asia. Perlele, simbolurile purității, pot fi cea mai bună alegere pentru inelele de logodnă, demonstrând cele mai pure sentimente pe care le aveți față de persoana iubită.'
        
      },
      {
        title: 'Piatra celor născuți in iulie - Rubinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/ruby_aaaa.png', 
        description: 'Odată numită "piatra strălucitoare" din povestirile din Asia antică, rubinele nu aparțin în mod accidental celor care s-au născut în luna iulie, de parcă ar aduce căldură vară. Denumirea rubinelor a venit din cuvântul latin "ruber", adică roșu. Fiind una dintre cele patru pietre prețioase, rubinele au valoarea datorită culorii, printre altele. Cu cât mai strălucitoare, sunt nuanțele "mai sângerii" ale rubinului, cu atât mai mult va crește valoarea pietrei prețioasă. Culoarea lor extraordinară și duritatea, care cedează numai diamantului, fac din rubine una dintre cele mai dorite pietre prețioase din întreaga lume. Rubinele pot fi obținute în Birmania, Sri Lanka, Statele Unite, India, Australia, Pakistan, Nepal, Afganistan, Brazilia, Myanmar și Thailanda. Datorită culorii lor roșii, au devenit simboluri ale pasiunii, sporind curajul, energia și protejând purtătorii de dispute și gânduri dăunătoare.  Ele sunt asociate cu vitalitatea, curajul și forța vieții, aducând succes în dragoste. Dintre toate aceste motive, rubinele sunt perfecte pentru inelele de logodnă pentru a afișa puterea strălucitoare a iubirii pasionale.'
        
      },
      {
        title: 'Piatra celor născuți în august - Peridotul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/peridot_aaaa.png', 
        description: 'Printre cele mai vechi pietre prețioase cunoscute de oameni, peridotul este piatra pentru cei născuți în luna august. Simbolul soarelui, peridot, aduce culoarea verde luminoasă, în ultima lună de vară. Peridoturile sunt una dintre pietrele care nu vin în culori diferite, dar variază în strălucirea lor de verde, de la verdele măsliniu, la nuanțe mai închise, maron. Peridotul se găsește în Brazilia, Birmania, Australia, Kenya, Mexic și Sri Lanka. Originea numelui pentru peridot nu este complet clară, dar se crede că derivă din cuvântul grecesc "peridona", adică "dând o mulțime". Piatra prețioasă poartă acest sens până în prezent, deoarece se crede că peridotul aduce prosperitate și noroc. Datorită simbolismului menționat al soarelui, se spune că peridotul ajută la depresie, reduce cantitatea de stres și emoțiile negative, te scapă de toxinele din organism și chiar ajută la păr, piele și unghii. Peridotul, nu este numai darul perfect pentru cei născuți în august, pentru a le aduce prosperitate și strălucire varii, dar este și perfect pentru inelul de logodnă, deoarece se spune că face ca toate relațiile umane și viața matrimonială să fie mai armonizată.'
        
      },
      {
        title: 'Piatra celor născuți în septembrie - Safirul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/sapphire_aaaa.png', 
        description: 'Populare încă din Evul Mediu, safirele sunt pietrele prețioase pentru cei născuți în septembrie. Aceste pietre prețioase vin în câteva culori diferite, dar sunt cele mai renumite pentru a fi bogate în albastrul strălucitor. Chiar și numele lor vine din mai multe limbi străvechi, dar una dintre explicațiile principale este latina "sapphirus", adică "albastru". Safirele se găsesc în India, Myanmar, Thailanda, Vietnam, Sri Lanka, China, Australia, Brazilia, Africa și America de Nord. Datorită puterilor liniștitoare ale culorii lor albastre, se crede că safirele vă aduc pace, armonie și ajuta să vă concentrați mintea. Încă din Evul Mediu, se crede că ele întăresc înțelepciunea. Acestea simbolizează sinceritatea, credința și loialitatea, iar din acest motiv, bijuteriile cu safire nu vor fi doar cadouri perfecte pentru cei născuți în septembrie, ci pot fi oferite ca un inel de logodnă perfect, capabil să demonstreze cât de excepțională este dragostea ce o purtați. Safirul a fost chiar piatra prețioasă folosită pentru inelul de logodnă al prințesei Diana, ceea ce dovedește redevența pe care această piatră o poartă!'
        
      },
      {
        title: 'Piatra celor născuți în octombrie - Opalul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/opal.png', 
        description: 'Opal este cunoscut ca piatră-talisman pentru cei nascuti ın luna octombrie. Reprezintă iubire, inocență și speranță. Opalul are nuante diverse,de ace-ea pare multicolor. Oglinzile strălucitoare din el îi conferă un aspect perfect și, prin urmare, au un loc foarte valoros în lumea bijuteriilor. Opalul este o formă de cuarț care se formează ca urmare a mișcării apelor subterane și închiderii golurilor dintre roci. Această piatră miraculoasă din subteran are multe avantaje. Se crede că este bun pentru suflet și are un efect calmant. De asemenea, elimină energia negativă și dă energie pozitivă. Se poate spune că este o piatră mistică datorită influenței sale asupra unor probleme precum dezvoltarea conștiinței cosmice.'
        
      },
      {
        title: 'Piatra celor născuți în noiembrie- Citrinul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/citrine_aaaa.png', 
        description: 'Ca și cum aduce lumină și căldură în această lună rece, Citrinul, cu culorile sale strălucitoare, a devenit piatra pentru luna noiembrie. Numele pietrei este destul de auto-explicativ, deoarece Citrinul amintește de un prețios citrus. Aceste pietre pot fi obținute în Brazilia, Bolivia, Africa și Rusia. Legendele spun că piatra citrin, este capabilă să vă deschidă mintea și astfel, chiar să vă intensificați puterile psihice. Încă se crede că au puteri de vindecare și liniștitoare, pentru a ușura anxietatea, nervozitatea și a face viața de zi cu zi mai puțin stresantă. Probabil pentru culoarea acestei pietre strălucitoare, citrinul este asociat cu veselie și bucurie, oferind purtătorilor mai multă speranță și putere în situații dificile. Citrinul va fi cea mai bună alegere pentru un cadou nu numai pentru cei născuți în noiembrie. Dăruiți această piatră veselă și aduceți zâmbete pe fețele celor iubiți!'
        
      },
      {
        title: 'Piatra celor născuți în decembrie - Tanzanitul',
        image: 'https://res.cloudinary.com/glamira/image/upload/c_limit,c_fill,dpr_1.0,f_auto,fl_lossy,q_auto/media/wysiwyg/new-content-page/tanzanite_aaa.png', 
        description: 'Persoanele născute în decembrie au o piatră excepțională dedicată lor. Tanzanitul este una dintre cele mai recent descoperite pietre. Cu o istorie relativ modernă, tanzanitul a caștigat deja fascinația și admirația pentru culoarea închisă de albastru. Aceste pietre prețioase sunt destul de rare și unul dintre puținele locuri care ar putea fi numite norocoase să le aibă este o zonă din Tanzania.Din moment ce tanzanitul este destul de nou în istorie, legendele și miturile nu le înconjoară încă. Cu toate acestea, Tanzanitele au fost observate de Tiffany & Co, care a dat numele pietrei datorită locului său de origine și l-au popularizat pe plan mondial, făcând tanzanitul una dintre cele mai râvnite pietre din zilele noastre. Bijuteriile cu Tanzanit ar fi cele mai bune, dar nu numai pentru cei născuți în decembrie, ci pentru toți cei pe care îi prețuiți. Oferiți o piatră prețioasă care va crea cu siguranță și va schimba istoria bijuteriilor!'
        
      },

  ];


const BirthstoneGuide = ()=>{

    return (
        <div>
        <Sider className="site-layout-background" width={200}>
                <FooterNav/>
            </Sider>
        <Content style={{ padding: '0 50px' }}>
                    
                    <div >
                                    
                        <br></br>
                        <h1>Ghidul pietrei lunii în care v-ați născut</h1>
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
                <br></br>
                </Content>
        </div>
        
    )
}

export default BirthstoneGuide;