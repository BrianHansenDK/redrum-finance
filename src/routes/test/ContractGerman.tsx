import React from 'react'
import { FirebaseBundle, FirebaseUser } from '../../database/Objects'
import { formatDate } from '../../misc/custom-hooks';
import { RedrumCompany } from '../../database/CompanyInfo';

interface IProps {
  user: FirebaseUser,
  project: FirebaseBundle,
  investAmount: number,
  bonus: number,
  day: string,
}
const ContractGerman = (props: IProps) => {
  const {day, user, project, investAmount, bonus} = props;
  const date = new Date(day)
  return (
    <div id="german-document">
      <div className="WordSection1 break-page">

<h1 ><a ></a><a ><span >Rahmenvertrag</span></a></h1> <br/>

<p className="MsoNormal"  ><span >zwischen</span></p>
<br/>




<p className="MsoNormal" ><span >{RedrumCompany.name}</span></p>

<p className="MsoNormal" ><span >{RedrumCompany.street}</span></p>

<p className="MsoNormal" ><span >{RedrumCompany.city}</span></p>

<p className="MsoNormal" ><span >E-Mail: producer@Redrumpro.com</span></p>



<p className="MsoNormal" ><span >Geschäftsführer: Rabih
Merhi </span></p>

<p className="MsoNormal" ><span >
  Handelsregister<span > </span>des<span > </span>Amtsgericht<span >
    </span>Charlottenburg<span > </span>unter HRB 209180 B</span></p>

<p className="MsoNormal" ><span >Umsatzsteuer-ID:<span > </span>DE328784557</span></p>



<p className="MsoNormal" ><span >Im Folgenden „Redrum
Films“ genannt –</span></p>


<br/>


<p className="MsoNormal" ><span  >Und</span></p>
<br/>


<p className="MsoNormal" >{user.full_name}</p>
<p className="MsoNormal">{user.address.split(', ')[0]}</p>
<p className="MsoNormal">{user.address.split(', ')[1]}</p>
<p className="MsoNormal">E-mail: {user.email}</p>





<p className="MsoNormal" ><span >– (im Folgenden<span > </span>„Producer/Kunde“<span > </span>genannt) –</span></p>

</div>
<div className="WordSection2">
<br/><br/>
<h1 ><a ></a><a ></a><a ><span >Vorbemerkung</span></a></h1>
<br/>
<p className="MsoNormal"  ><span >1.</span></p>

<p className="MsoNormal" ><span >Alle
Dienstleistungen, Angebote und Lieferungen der Redrum Films &amp; Entertainment
GmbH (im Folgenden "Redrum Films") in den Bereichen Film, Hörspiel,
Hörbuch, Buch sowie weiteren physischen und digitalen Unterhaltungsprojekten
(im Folgenden "Unterhaltungsprojekte") gegenüber Kunden (im Folgenden
"Producer") basieren ausschließlich auf dem Rahmenvertrag der Redrum
Films &amp; Entertainment GmbH.</span></p>



<p className="MsoNormal" ><span  >Für
die Trading-Funktion besteht eine separate Vereinbarung, </span><span >die
der Produzent einsehen und abschließen kann, sobald diese gemeinsam mit dem
Sekundärmarkt über die RedrumPro Website/App veröffentlicht wird.</span></p>



<p className="MsoNormal" ><span >Redrum Films ist
ein Unternehmen, das Unterhaltungsprojekte produziert und Anteile an diesen
Projekten verkauft. Producer haben die Möglichkeit, Anteile an diesen Projekten
zu erwerben, die anschließend nach bestem Wissen und Gewissen auf dem
internationalen Filmmarkt gehandelt werden. Es ist jedoch wichtig zu beachten,
dass Redrum Films keine Finanzdienstleistungen wie Anlageberatung oder
Vermögensverwaltung anbietet. Eine Prospektpflicht besteht nicht.</span></p>



<p className="MsoNormal" ><span >Die Angebote von
Redrum Films sind keine Unternehmensbeteiligungen wie beispielsweise der Erwerb
von Anteilen an einem geschlossenen Fonds. Die Kunden handeln unabhängig
voneinander direkt in Bezug auf die angebotenen Unterhaltungsprojekte und
verfolgen individuelle Strategien ohne gemeinsame Ziele. Der Kauf von Anteilen
an den Unterhaltungsprojekten ist mit Risiken verbunden und es wird empfohlen,
dass Producer sich vor einem Kauf mit den Risiken auseinandersetzen. Das
maximale Risiko besteht im Totalverlust des eingesetzten Geldes.</span></p>



<p className="MsoNormal" ><span >Aussagen über
zukünftige Handlungen und Leistungsziele von Redrum Films, die in diesen
Bedingungen oder anderen Aussagen von Redrum Films enthalten sind, sind mit
Unsicherheiten verbunden und können sich im Nachhinein als unzutreffend
herausstellen. Es gibt keine Garantie oder Gewährleistung für
zukunftsgerichtete Aussagen.</span></p>



<p className="MsoNormal" ><span >Den Kunden wird
empfohlen, ihre Rechts- und Steuerberater zurate zu ziehen, um eine angemessene
Einschätzung der Vorteile, Lasten und sonstigen Auswirkungen des Erwerbs zu
erhalten.</span></p>



<p className="MsoNormal" ><span >Definition
Bruchteilseigentum: Als Bruchteilseigentum betrachtet die Redrum Films den kleinsten
möglichen zu erwerbenden Anteil eines Unterhaltungsprojektes. Der Anteil
verbrieft dem Producer das Recht auf prozentuale Beteiligung der
Gewinnausschüttung je nach Anzahl der erworbenen Anteile im Verhältnis zur
Gesamtanzahl der Anteile. Die erworbenen Anteile verbriefen keine
Entscheidungs- und/oder Mitspracherechte jeglicher Art. Redrum Films ist
alleiniger Entscheidungsträger.</span></p>



<p className="MsoNormal break-page" ><span >Beispiel: Ein
Filmprojekt mit einem Budget von 100.000€ ergibt gleichermaßen 100.000 Anteile
mit einem Nominalwert von 1€ je Anteil.</span></p>


<br/>
<p className="MsoNormal"  ><span >2.</span></p>

<h2 ><span >REDRUM FILM VALUE (REDRUM
FILMWERT)</span></h2>

<p ><span >Die Parteien sind sich einig, dass
der Begriff „Redrum Filmwert“ den monetären Wert beschreibt, zu dem die Redrum
Films &amp; Entertainment GmbH bereit ist, Anteile ihres Filmprojekts über die
RedrumPro Web-App zu veräußern. Der Redrum Filmwert wird auf der Grundlage
einer Bewertung des Projekts durch die Redrum Films &amp; Entertainment GmbH
ermittelt und kann je nach Marktbedingungen und Nachfrage variieren.</span></p>

<p ><span >Die Bewertung und der daraus resultierende
Redrum Filmwert eines Filmprojektes basiert dabei unter anderem auf folgenden
Faktoren:</span></p>

<p ><span  >·<span >
</span></span><span >Kultureller Wert: Der kulturelle Wert eines Films
bezieht sich auf seine Bedeutung und seinen Einfluss auf die Gesellschaft und
die Kultur. Ein Film kann als kulturell bedeutsam angesehen werden, wenn er
beispielsweise historische Ereignisse oder gesellschaftliche Probleme
thematisiert oder neue kulturelle Trends und Stile etabliert. Der kulturelle
Wert eines Films kann auch durch Auszeichnungen und Anerkennungen bei Festivals
oder anderen Veranstaltungen bestimmt werden.<br/>
<br/>
</span></p>






<p ><span  >·<span >
</span></span><span >Kreativer Wert: Der kreative Wert eines Films
bezieht sich auf seine künstlerische Qualität und Originalität. Ein Film kann
als kreativ wertvoll angesehen werden, wenn er innovative filmische Techniken
oder Erzählstrukturen verwendet oder einzigartige visuelle oder akustische
Effekte erzeugt. Der kreative Wert eines Films kann auch durch die Anerkennung
von Filmkritikern oder anderen Branchenexperten bestimmt werden.<br/>
<br/>
</span></p>

<p ><span  >·<span >
</span></span><span >Kommerzieller Wert: Der kommerzielle Wert eines
Films bezieht sich auf seine Fähigkeit, Einnahmen zu generieren und Gewinne zu
erzielen. Ein Film kann als kommerziell wertvoll angesehen werden, wenn er ein
breites Publikum anspricht und hohe Einspielergebnisse erzielt oder wenn er
durch Merchandising oder andere Vermarktungsstrategien zusätzliche Einnahmen
generiert. Der kommerzielle Wert eines Films kann auch durch seine
Wiederholungsdauer im Fernsehen, Verkaufszahlen auf DVD oder Blu-Ray oder
Streaming-Plattformen bestimmt werden.<br/>
<br/>
</span></p>

<p ><span  >·<span >
</span></span><span >Produktions- oder Herstellungswert: Der
Produktions- oder Herstellungswert eines Filmprojekts bezieht sich auf die
Gesamtkosten, die zur Produktion des Films erforderlich sind, einschließlich
der Entschädigung für die Mitarbeiter, der Kosten für Ausrüstung, Requisiten,
Standorte, Drehbuch, Postproduktion und anderer damit verbundener Kosten. Es
handelt sich um den Betrag, der aufgewendet werden muss, um den Film vom
Konzept bis zur endgültigen Fertigstellung zu produzieren. Der Produktionswert
kann je nach Art und Umfang des Films sehr unterschiedlich sein. </span></p>

<p ><span >Insgesamt ist der Redrum Filmwert
eine komplexe und vielschichtige Bewertung des Werts eines Films, die nicht nur
auf seine Produktionskosten beschränkt ist, sondern unter anderem auch den
kulturellen, kreativen und kommerziellen Wert berücksichtigt.</span></p>

<p ><span >Die Redrum Films &amp;
Entertainment GmbH behält sich das Recht vor, den Redrum Filmwert jederzeit zu
ändern oder anzupassen, wenn sich die Umstände ändern oder neue Informationen
vorliegen. Die Parteien sind sich jedoch einig, dass Änderungen des Redrum
Filmwerts, die aufgrund von Faktoren außerhalb der Kontrolle der Redrum Films
&amp; Entertainment GmbH erfolgen, keine Verletzung dieser Vereinbarung
darstellen.</span></p>

<p ><span >Die Parteien stimmen zu, dass der
Redrum Filmwert ein wichtiger Faktor bei der Bewertung der Anteile am
Filmprojekt ist und dass dieser Begriff in diesem Vertrag in Übereinstimmung
mit dieser Definition verwendet wird.</span></p>

<p className="MsoNormal break-page" ><span >Dies
vorausgeschickt, stimmen die Parteien wie folgt überein:<a ></a><a ><br/>
</a></span></p>


<br/> <br/>
<h1 ><u><span >KAUFVERTRAG</span></u></h1>

<p ><span  >Investitionen in
Medienprodukte beinhalten die Gefahr des Verlusts des gesamten Investments. Sofern
und soweit die Prospekthaftung gilt, ist dieses hier der Prospekt.</span></p>

<h1 ><span >&nbsp;</span></h1>

<p className="MsoNormal"  ><a ></a><a ><span >1.</span></a></p>

<h2 ><a ></a><a ><span >Vereinbarung der Vertragspartner</span></a></h2>

<p className="MsoNormal" ><span >Redrum Films
verpflichtet sich dazu, dem Kunden den Anteil an dem Unterhaltungsprojekt gemäß
der Beschreibung im Abschnitt (II.) der Bedingungen zu verkaufen und zwar unter
Berücksichtigung der nachfolgenden Bedingungen.</span></p>



<p className="MsoNormal"  ><span >2.</span></p>

<h2 ><a ></a><a ><span >Kaufgegenstand</span></a></h2>

<p className="MsoNormal" ><span >Durch den Kauf über
die RedrumPro-Webseite/App, erwirbt der Kunde Anteile an einem oder mehreren
Unterhaltungsprojekt/en zu dem dort angegebenen Preis. </span></p>










<p className="MsoNormal" ><span >Das
Unterhaltungsprojekt wird dabei spezifiziert als:</span></p>

<br/>


<p className="MsoNormal">
  <span className='contract-project-fact'>Project:</span> <span>{project.name}</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Vertragslaufzeit:</span> <span>Indefinite</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Investitionsstart:</span> <span>15.04.2023</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Investitionsschluss:</span> <span>15.07.2023</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Redrum Filmwert:</span> <span>250.000,00 EUR</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Gesamtanteile:</span> <span>{investAmount}</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Bonusanteile:</span> <span>{bonus}</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Preis pro Anteil:</span> <span>1,00 EUR</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Transaktionsdatum:</span> <span>Individuelles {formatDate(date)}</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Fixe Rendite:</span> <span>{project.guaranteedReturn}%</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Erworbene Anteile:</span> <span>Stückzahl {investAmount + bonus}</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Preis für Anteile:</span> <span>{investAmount} EUR</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Service Pauschale:</span> <span>0,00 EUR</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Management-Gebühr:</span> <span>0,00 EUR</span>
</p>

<p className="MsoNormal">
  <span className='contract-project-fact'>Gesamtbetrag:</span> <span>{investAmount} EUR</span>
</p>


<p className="MsoNormal" ><span  >&nbsp;&nbsp; </span></p>



<p className="MsoNormal" ><span >Das restliche
Bruchteilseigentum am Unterhaltungsprojekt wird entweder von anderen Producern
der RedrumPro oder direkt von Redrum Films gehalten. Das Bruchteilseigentum des
Kunden ist aufgrund dieser Rahmenbedingungen und des Gesetzes mit
Einschränkungen verbunden, die sich direkt daraus ergeben. Es wird auf die §§
741 ff. BGB und §§ 1008 bis 1011 BGB hingewiesen. </span></p>



<p className="MsoNormal" ><span  >Redrum
Films und der Producer sind sich darüber einig, dass RedrumPro für den Kunden
den Besitz am Anteil mittelt. </span></p>





<p className="MsoNormal"  ><span >3.</span></p>

<h2 ><a></a><a><span >Kaufpreis</span></a></h2>

<p className="MsoNormal" ><span >Der Preis für den
Erwerb der Anteile wird anhand des Preises pro Anteil und der Anzahl der
erworbenen Anteile berechnet. Eine genaue Auflistung der im Gesamtpreis
enthaltenen Preise kann auf der Produktseite und in der Bestellübersicht auf
der Webseite/App von RedrumPro eingesehen werden.</span></p>



<p className="MsoNormal"  ><span >4.</span></p>

<h2 ><a></a><a><span >Übertragung des Eigentums am Kaufgegenstand</span></a></h2>

<p className="MsoNormal break-page" ><span >Das Eigentum an dem
erworbenen Anteil am Unterhaltungsprojekt wird auf den Kunden übertragen. Diese
Übereinkunft setzt jedoch voraus, dass der Gesamtpreis für den Kauf vollständig
an Redrum Films gezahlt wurde und bei Redrum Films eingegangen ist.</span></p>

<br/>

<p className="MsoNormal"  ><span >5.</span></p>

<h2 ><a></a><a><span >Gewährleistung für den Kaufgegenstand</span></a></h2>

<p className="MsoNormal" ><span >Die Verpflichtung
von Redrum Films beschränkt sich ausschließlich auf die Übertragung des Anteils
am Unterhaltungsprojekt gemäß der Beschreibung in (II.) Kaufgegenstand.</span></p>
<br/>
<p className="MsoNormal"  ><span >6.</span></p>

<h2 ><a></a><a><span >Keine Beratung, Risikoaufklärung</span></a></h2>

<p className="MsoNormal" ><span >Redrum Films ist
nicht verpflichtet, den Kunden hinsichtlich des Erwerbs von Anteilen am
Unterhaltungsprojekt zu beraten. Der Kunde trägt die alleinige Verantwortung
für seine Kaufentscheidungen. Redrum Films kann und wird keine verbindlichen
Informationen über zukünftige Preisentwicklungen, Handelbarkeit, Markttrends
oder ähnliche wirtschaftliche Prognosen bezüglich der Anteile des
Unterhaltungsprojekts geben. Die auf der RedrumPro-Website angegebenen
Preisentwicklungen sind allgemeine Vergleichswerte und beziehen sich nicht auf
die konkreten Anteile des Unterhaltungsprojekts. Es handelt sich um
unverbindliche Indikationen.</span></p>



<p className="MsoNormal" ><span >Anteile von
Unterhaltungsprojekten können erheblichen Preisschwankungen unterliegen, die
auf verschiedenen nicht vorhersehbaren Entwicklungen beruhen können. Es besteht
das Risiko, dass die Anteile nur mit Verlust wieder verkauft werden können und
dass das eingesetzte Geld verloren geht. Redrum Films übernimmt keinerlei
Gewährleistung für zukünftige positive Marktpreisentwicklungen des
Unterhaltungsprojekts und haftet nicht für Verluste des Kunden.</span></p>



<p className="MsoNormal"  ><span >7.</span></p>

<h2 ><a></a><a><span >Sonstiges</span></a></h2>

<p className="MsoNormal" ><span >Alle Teilverträge
sind den Allgemeinen Bedingungen unterworfen.</span></p>



<p className="MsoNormal"  ><span >8.</span></p>

<h2 ><a></a><a><span >Stille Beteiligung</span></a></h2>

<p className="MsoNormal" ><span >Der Producer hat
lediglich das Recht auf den Gewinn, der aus den Erlösen der Inhalte entsteht,
jedoch kein Mitsprache- oder Entscheidungsrecht. Ebenso hat er kein Recht auf
die physischen oder digitalen Inhalte selbst oder Beteiligungen daran. Die
Speichermedien der Inhalte bleiben Eigentum von Redrum Films. Der Investor
erhält keine weiteren Informationen über die Entwicklung, Entstehung oder
Lagerung der Projekte außerhalb der von Redrum Films bereitgestellten
Einblicke.</span></p>



<p className="MsoNormal"  ><span >9.</span></p>

<h2 ><a></a><a><span >Übertragung &amp; Zusammenlegung der
Investitionen unterschiedlicher Projekte</span></a></h2>

<p className="MsoNormal" ><span  >Bei
nicht erreichten Zielsummen kann die Redrum Films alle eingezahlten Gelder nach
bestem Wissen und Gewissen auf andere oder ähnliche Projekte übertragen, ohne
den Kunden zu fragen.</span></p>



<p className="MsoNormal"  ><span >10.</span></p>

<h2 ><a></a><a><span >Exit</span></a></h2>

<p className="MsoNormal" ><span  >Definition:&nbsp;
</span><a><span >Der Exit bezieht sich darauf, dass
das gesamte Unterhaltungsprojekt (einschließlich aller vorhandenen Anteile,
unabhängig davon, wie viele Anteile der Producer besitzt) zu einem bestimmten
Preis an einen möglichen Käufer verkauft wird. Die Zustimmung der Produzenten
ist nicht erforderlich, da Redrum Films die alleinige Entscheidungsgewalt hat.
Nach Abzug der 10% Provision wird die Verkaufssumme entsprechend der Anzahl der
Anteile an die Produzenten ausgeschüttet.</span></a></p>



<p className="MsoNormal"  ><span >11.</span></p>

<h2 ><a></a><a><span >Auszahlung</span></a></h2>

<p className="MsoNormal" ><span >Der Producer erhält
spätestens nach 12-18 Monaten nach dem projektbezogenen Investitionsschluss
eine fixe Rendite auf den Geldwert der erworbenen Anteile.</span></p>



<p className="MsoNormal" ><span >Darüber hinaus
verfügt der Producer spätestens 12-18 Monate nach dem projektbezogenen
Investitionsschluss über folgende Möglichkeiten:</span></p>



<p className="MsoNormal" ><span >A: Der Producer
behält seine erworbenen Anteile und kann somit an den jährlichen
Gewinnausschüttungen teilnehmen und die Anteile am integrierten Sekundärmarkt
handeln.</span></p>



<p className="MsoNormal break-page" ><span >B: RedrumPro bietet
dem Producer bei Projektveröffentlichung einmalig die Möglichkeit, die
erworbenen Anteile an dem Unterhaltungsprojekt wieder an RedrumPro zu übergeben
und erhält im Austausch das entsprechende Ausgangskapital der Anteile. Dadurch
ist der Producer kein Anteilseigner mehr und kann nicht an den potenziellen
Gewinnausschüttungen teilhaben.</span></p>

<br/>

<p className="MsoNormal" ><span >Die Optionen werden
dem Producer bei Veröffentlichung des Projektes (spätestens 12-18 Monate nach
Investitionsschluss) über die RedrumPro Website/App dargestellt, und er trifft
die Entscheidung verbindlich über die RedrumPro Website/App. </span></p>

<br/>

<p className="MsoNormal"  ><span >12.</span></p>

<h2 ><a></a><a><span >Verwahrungs- und Eigentumsrecht</span></a></h2>

<p className="MsoNormal" ><span >Redrum Films
verpflichtet sich, das Unterhaltungsprojekt nach Maßgabe der nachfolgenden
Regelungen zu <span >verwahren.</span></span></p>



<p className="MsoNormal"  ><span >13.</span></p>

<h2 ><a></a><a></a><a><span >Verwahrung<span > </span>des<span > </span>Unterhaltungsprojekts</span></a></h2>

<p className="MsoNormal" ><span >Der Kunde
beauftragt Redrum Films damit, das Unterhaltungsprojekt sicher in physischer
und digitaler Form aufzubewahren. Der Producer hat über die RedrumPro App
Zugriff auf das (Bruchteils)- Eigentum am Unterhaltungsprojekt sowie alle
Informationen dazu.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >14.</span></a></p>

<h2 ><span >Verwahrungskosten</span></h2>

<p className="MsoNormal" ><span >Redrum Films erhebt
derzeit keine Lagerungskosten, jedoch behält sich das Unternehmen vor, diese in
Zukunft zu erheben.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>



<p className="MsoNormal"  ><a><span >15.</span></a></p>

<h2 ><a></a><a><span >Delegation<span >
</span>von<span > </span>Pflichten</span></a></h2>

<p className="MsoNormal" ><span >Redrum Films hat
das Recht, bestimmte Aufgaben im Zusammenhang mit der Lagerung und Pflege des
Unterhaltungsprojekts an Dritte zu delegieren. Dazu kann es notwendig sein,
Vereinbarungen mit professionellen Lagerungs- und Sicherheitsunternehmen zu
treffen, um sicherzustellen, dass das Unterhaltungsprojekt ordnungsgemäß
aufbewahrt und geschützt wird. Redrum Films bleibt jedoch verantwortlich für
die ordnungsgemäße Lagerung und Pflege des Unterhaltungsprojekts und muss
sicherstellen, dass die von ihr beauftragten Dritten ihre Aufgaben
ordnungsgemäß erfüllen.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><span >16.</span></p>

<h2 ><a></a><a></a><a><span >Versicherung</span></a></h2>

<p className="MsoNormal" ><span >Es ist die
Verantwortung von Redrum Films, physische Formen des Unterhaltungsprojektes,
wie DVDs, Blu-Rays, USB und andere Speichermedien sowie jegliche weiteren
physischen Formen in der entsprechenden Lagerstätte gegen potenzielle Risiken
wie Brand, Wasserschäden, Blitzschlag, Explosion, Einbruchdiebstahl und Raub zu
versichern und diese Versicherung während der Verwahrung aufrechtzuerhalten.
Des Weiteren ist Redrum Films verpflichtet, sämtliche digitalen Formen des
Unterhaltungsprojektes auf angemessene Weise gegen Datenverlust, unbefugten
Zugriff, Hackerangriffe, Malware-Infektionen und andere ähnliche Bedrohungen zu
versichern und den Schutz während der Aufbewahrung aufrechtzuerhalten.<a></a></span></p>



<p className="MsoNormal"  ><span >17.</span></p>

<h2 ><a></a><a><span >Liquidation,<span > </span>Auflösung<span > </span>oder<span > </span><span >Insolvenz</span></span></a></h2>

<p className="MsoNormal" ><span >Das Unterhaltungsprojekt
liegt außerhalb des Vermögens von Redrum Films und wird nicht von einer
möglichen Liquidation, Auflösung oder Insolvenz der Firma als Verwahrerin der
Projekte beeinflusst werden. Sollte Redrum Films jedoch liquidiert, aufgelöst
oder insolvent werden, wäre sie dazu berechtigt und verpflichtet, einen
Nachfolger zu ernennen, der die Verwaltung und Verwahrung der
Unterhaltungsprojekte unter denselben Bedingungen übernimmt.</span></p>



<p className="MsoNormal break-page" ><span  >Falls
Redrum Films auch Teilinhaber des Unterhaltungsprojekts sein sollte, würde das
Bruchteilseigentum nicht Teil des Insolvenzverfahrens sein. In diesem Fall
müsste die Verwertung des Projekts jedoch den insolvenzrechtlichen Vorschriften
der Gemeinschaft der Teilinhaber folgen, und die Aufteilung der Gemeinschaft
oder andere Abwicklungen würden außerhalb des Insolvenzverfahrens stattfinden.
Die §§ 84 der </span><span >Insolvenzordnung sowie §§ 752 ff. und 747
des Bürgerlichen Gesetzbuchs gelten hier. Im Falle einer Insolvenz hat der
Produzent, <span >sofern er nicht selbst von der Insolvenz
betroffen ist, ein Aussonderungsrecht für seinen Anteil am Miteigentum. Der
Aussonderungsanspruch des Produzenten kann entweder auf die Feststellung des
Miteigentums, die Gewährung des Mitbesitzes oder die Auseinandersetzung
ausgerichtet sein.</span></span></p>

<p className="MsoNormal"><a ><span >&nbsp;</span></a></p>

<p className="MsoNormal"  ><span >18.</span></p>

<h2 ><span >Einnahmen</span></h2>

<p className="MsoNormal" ><span >Im Allgemeinen wird
Bruchteilseigentum an einem Unterhaltungsprojekt mit dem Ziel erworben, um
diese entweder:</span></p>



<p className="MsoNormal" ><span  >A:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; durch Redrum Films gewinnbringend zu lizenzieren.</span></p>

<p className="MsoNormal" ><span  >B: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; im Falle einer Exitmöglichkeit alle
Anteile als Gesamtprojekt zu veräußern und die Einnahmen entsprechend der
Anzahl der Anteile je Eigentümer zu allozieren. </span></p>

<p className="MsoNormal" ><span  >C: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; und/oder der Producer tradet seine
Anteile eigenständig und nach eigener Verantwortung und Ermessen auf dem durch
die RedrumPro zur Verfügung gestellten Sekundärmarkt. </span></p>



<p className="MsoNormal" ><span  >Die
folgenden Bedingungen des Verkaufsauftrags werden zwischen den Parteien
vereinbart, vorausgesetzt, der Kunde hat die separaten Allgemeinen
Geschäftsbedingungen der RedrumPro akzeptiert.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >19.</span></a></p>

<h2 ><a></a><a><span >Verkaufsabwicklung</span></a></h2>

<p className="MsoNormal" ><span  >Falls
der Produzent sein Bruchteilseigentum am Unterhaltungsprojekt über dem von
RedrumPro bereitgestellten Sekundärmarkt verkauft, erhält Redrum Films die
Vollmacht, das Bruchteilseigentum an den Käufer zu übertragen, sobald der
Kaufpreis vollständig gezahlt wurde. Der Käufer zahlt den Kaufpreis über Redrum
Films an den Producer.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>





<p className="MsoNormal"  ><a><span >20.</span></a></p>

<h2 ><span >Provision und Handlungskosten</span></h2>

<p className="MsoListParagraph" ><span  >·<span >
</span></span><span >Für<span > </span>die<span > </span>Veräußerung<span > auf dem Sekundärmarkt </span>fällt<span >
</span>für<span > </span>den<span > </span>Producer<span > </span>eine
marktübliche Gebühr für die Vermittlung von RedrumPro an.</span></p>

<p className="MsoListParagraph" ><span  >·<span >
</span></span><span >Redrum Films ist berechtigt, auf alle erzielten
Einnahmen über alle Verwertungsmöglichkeiten (Verkauf, Verleih, Lizenz usw.)
Handlungskosten in Höhe von 10% der Einnahmen einzubehalten. <a></a></span></p>



<p className="MsoNormal"  ><span >21.</span></p>

<h2 ><a></a><a><span >Steuerliche<span >
</span>Behandlung<span > </span>des<span > </span><span >Verkaufs</span></span></a></h2>

<p className="MsoNormal" ><span >Redrum Films macht
den Producer darauf aufmerksam, dass die steuerliche Behandlung des Verkaufs
des Unterhaltungsprojekts in die Verantwortung des Käufers fällt. Es liegt im
eigenen Ermessen des Producers, zu klären, ob der Verkauf des
Bruchteilseigentums einen steuerlichen Vorgang auslöst und ob er verpflichtet
ist, dies gegenüber den Finanzbehörden zu erklären und Steuern zu zahlen.
Redrum Films kann keine Steuerberatung anbieten und empfiehlt daher die
Konsultation eines Steuerberaters.</span></p>

<p className="MsoNormal" ><a ><span >&nbsp;</span></a></p>

<p className="MsoNormal"  ><span >22.</span></p>

<h2 ><a></a><a><span >Trading-<span >Funktion</span></span></a></h2>

<p className="MsoNormal" ><span  >Für
die Trading-Funktion besteht eine separate Vereinbarung, </span><span >die
der Produzent einsehen und abschließen kann, sobald diese gemeinsam mit dem
Sekundärmarkt über die RedrumPro Website/App veröffentlicht wird.<a></a></span></p>



<p className="MsoNormal"  ><span >23.</span></p>

<h2 ><span >Allgemeine<span > </span>Bedingungen<span > </span>für<span > </span>alle<span > </span><span >Teilverträge</span></span></h2>

<p className="MsoNormal" ><span  >Für<span > </span>alle<span > </span>Verträge<span > </span>in<span > </span>diesem<span > </span>Rahmenvertrag<span > </span>gelten<span > </span>die<span > </span>folgenden<span > </span>Allgemeinen<span > </span><span >Bedingungen.</span></span></p>







<p className="MsoNormal"  ><span >24.</span></p>

<h2 ><a></a><a><span >Identifikation von Produzenten und
Beendigung der Geschäftsbeziehung aufgrund von geldwäschebezogenen Gründen:</span></a><span > </span></h2>

<p className="MsoNormal break-page" ><span  >Gemäß
dem Geldwäschegesetz (GwG) hat Redrum Films die Verpflichtung,
Identifizierungsmaßnahmen in Bezug auf ihre Producer durchzuführen. Es ist auch
die Pflicht des Kunden, bei der Erfüllung der geldwäscherechtlichen
Bestimmungen mitzuwirken. Sollte Redrum Films nicht in der Lage sein, die
erforderlichen Informationen zu erlangen, kann das Unternehmen aufgrund des GwG
die Geschäftsbeziehung mit dem Producer nicht eingehen oder fortsetzen. In
diesem Fall darf keine Transaktion durchgeführt werden und das
Geschäftsverhältnis muss unverzüglich beendet werden.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >25.</span></a></p>

<h2 ><a></a><a><span >Zahlungsmodalitäten</span></a></h2>

<p className="MsoNormal" ><span >Während des
Bestellvorgangs kann der Kunde zwischen den marktüblichen verfügbaren
Zahlungsarten wie Kreditkarte, Sofortüberweisung usw. wählen. Die Zahlung der
Entgelte wird mit dem Abschluss des Rahmenvertrages fällig.</span></p>

<p className="MsoNormal" ><span >Bei der Zahlung per
Kreditkarte wird das Kreditkartenkonto am Tag des Vertragsschlusses belastet.</span></p>

<p className="MsoNormal" ><span >Rechnungen können
dem Producer in elektronischer Form auf seinem Account zur Verfügung gestellt
werden.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >26.</span></a></p>

<h2 ><a></a><a><span >Kündigung</span></a></h2>

<p className="MsoNormal" ><span  >Es
ist nicht möglich, den Kaufvertrag zu kündigen. Eine ordentliche Kündigung des
Rahmenvertrags, mit Ausnahme des Kaufvertrags oder einzelner Teilverträge, ist
ebenfalls nicht möglich. Eine außerordentliche Kündigung des Rahmenvertrags,
mit Ausnahme des Kaufvertrags, bleibt jedoch möglich. Eine Kündigung muss in
schriftlicher Form erfolgen.</span></p>

<p className="MsoNormal" ><a><span >&nbsp;</span></a></p>





<p className="MsoNormal"  ><span >27.</span></p>

<h2 ><a></a><a><span >Haftung</span></a></h2>

<p className="MsoNormal" ><span >Unabhängig von den
gesetzlichen Anspruchsvoraussetzungen gelten folgende Haftungsausschlüsse und
-begrenzungen für Schadensersatzansprüche gegen Redrum Films: Redrum Films
haftet uneingeschränkt bei Vorsatz oder grober Fahrlässigkeit. Für die leicht
fahrlässige Verletzung wesentlicher Pflichten, die die Erreichung des
Vertragszwecks gefährden, oder für die Verletzung von Pflichten, die die
ordnungsgemäße Durchführung des Vertrages überhaupt erst ermöglichen und auf
deren Einhaltung der Kunde regelmäßig vertraut, haftet Redrum Films jedoch nur
für den vorhersehbaren, vertragstypischen Schaden. Redrum Films haftet nicht
für die leicht fahrlässige Verletzung anderer als der oben genannten Pflichten.
Diese Haftungsbeschränkungen gelten nicht im Falle von Verletzungen von Leben,
Körper und Gesundheit, bei einem Mangel, für den Redrum Films eine Garantie
übernommen hat, und bei arglistig verschwiegenen Mängeln. Die Haftung nach dem
Produkthaftungsgesetz bleibt unberührt. Wenn die Haftung von Redrum Films
ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung
von Mitarbeitern, Vertretern und Erfüllungsgehilfen.</span></p>

<p className="MsoNormal" ><a><span  >&nbsp;</span></a></p>

<p className="MsoNormal"  ><span >28.</span></p>

<h2 ><a></a><a><span >Widerrufsrecht</span></a></h2>

<p className="MsoNormal break-page" ><span  >Ist
der Kunde ein Verbraucher, steht ihm das gesetzliche Recht zu, den
Rahmenvertrag als Ganzes zu widerrufen. Für dieses gesetzliche Widerrufsrecht
gilt folgende Widerrufsbelehrung:</span></p>




<br/>




<p className="MsoNormal"  ><span >29.</span></p>

<h2 ><a></a><a><span >Widerrufs</span></a><span >belehrung</span></h2>

<p className="MsoNormal" ><span >Sie haben das
Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von
Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz
genommen haben oder hat.</span></p>

<p className="MsoNormal" ><span >Um Ihr
Widerrufsrecht auszuüben, müssen Sie uns </span></p>



<p className="MsoNormal" ><span >Redrum Films &amp;
Entertainment GmbH</span></p>

<p className="MsoNormal" ><span >Hauptstraße 26</span></p>

<p className="MsoNormal" ><span >10827 Berlin</span></p>

<p className="MsoNormal" ><span >E-Mail:
kuendigung@redrumpro.com </span></p>



<p className="MsoNormal" ><span >mittels einer
eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail)
über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können
dafür das beigefügte Muster- Widerrufsformular verwenden, das jedoch nicht
vorgeschrieben ist.</span></p>



<p className="MsoNormal" ><span >Zur Wahrung der
Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des
Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</span></p>



<p className="MsoNormal" ><span >Folgen des
Widerrufs</span></p>

<p className="MsoNormal" ><span >Wenn Sie diesen
Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten
haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag
zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei
uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe
Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es
sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall
werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. </span></p>

<p className="MsoNormal" ><a ><span >&nbsp;</span></a></p>


<p className="MsoNormal"  ><span >30.</span></p>

<h2 ><a ></a><a ><span >Datenschutzerklärung</span></a></h2>

<p className="MsoNormal" ><span  >Die
Erhebung, Speicherung und Nutzung personenbezogener Daten des Producers erfolgt
für die Erfüllung eigener Geschäftszwecke soweit dies im Zusammenhang mit dem
Erwerb, der Veräußerung oder der Verwaltung von Unterhaltungsprojekten durch
bzw. für Producer erforderlich ist. Nähere<span > </span>Informationen<span > </span>zum<span > </span>Datenschutz<span > </span>finden<span >
</span>Sie<span > </span>in<span > </span>der<span > </span>Datenschutzerklärung<span > </span>auf<span > </span>der<span > </span>Redrum Films-App<span > </span><span >oder</span></span><span > <span >-Webseite.</span></span></p>

<p className="MsoNormal" ><a ><span >&nbsp;</span></a></p>

<p className="MsoNormal"  ><span >31.</span></p>

<h2 ><a ></a><a ><span >Abschließende</span><span  > </span><span  >Bestimmungen</span></a></h2>

<p className="MsoNormal break-page" ><span >Die Bedingungen des
Rahmenvertrags bleiben auch nach dem Tod des Producers in Kraft. Wenn mehrere
Erben oder Testamentsvollstrecker vorhanden sind, muss Redrum Films nur mit
einem gemeinsam Bevollmächtigten oder einem Testamentsvollstrecker
korrespondieren. Wenn jedoch einer der Erben oder Testamentsvollstrecker den
Auftrag widerruft, endet der Vertrag für alle Erben. Der Widerrufende muss sich
durch einen Erbschein oder ein Testamentsvollstreckerzeugnis ausweisen, aber in
Ausnahmefällen kann Redrum Films einen anderen Nachweis akzeptieren. Wenn eine
Bestimmung der Bedingungen ganz oder teilweise unwirksam oder undurchführbar
ist, bleiben die übrigen Bestimmungen in Kraft und anstelle der unwirksamen
Bestimmung gilt die entsprechende gesetzliche Regelung. Das Recht der
Bundesrepublik Deutschland gilt, und die Rahmenbedingungen sowie die
Allgemeinen Geschäftsbedingungen für die Nutzung von RedrumPro und der Redrum
Films GmbH enthalten alle getroffenen Vereinbarungen zwischen Redrum Films und
dem Producer. Änderungen oder Ergänzungen des Vertrags müssen schriftlich
erfolgen.<a></a></span></p>

<br/>

<p className="MsoNormal"  ><span >32.</span></p>

<h2 ><a></a><a><span >Risikobeschreibung</span></a></h2>

<p className="MsoNormal" ><span  >Der<span > </span>Erwerb<span > </span>des<span > </span>(Bruchteils-)Eigentums<span > </span>an<span > </span>Unterhaltungsprojekten,<span > </span>die<span > </span>Übertragung<span > </span>und<span > </span>der
Weiterverkauf des Unterhaltungsprojekts ist mit spezifischen Risiken verbunden.
Daher gilt es, auf Folgendes zu <span >achten:</span></span></p>

<p className="MsoNormal" ><span >Der<span > </span>Kunde<span > </span>sollte<span > </span>den<span > </span>Rahmenvertrag<span > </span>samt<span > </span>dieser<span > </span>Risikenbeschreibung<span > </span>sorgfältig<span > </span><span >lesen.</span></span></p>





<p className="MsoNormal" ><span >Risiken, die Redrum
Films als spezifisch erachtet und die für eine fundierte Entscheidung
wesentlich sind, werden in diesem Anhang ausführlicher beschrieben. Redrum
Films garantiert nicht, dass<span > </span>die<span > </span>im Folgenden dargestellten Risiken<span > </span>umfassend und<span > </span>vollständig<span > </span>sind<span > </span>und dass<span >
</span>keine weiteren<span > </span>oder<span > </span>anderen<span >
</span>Risiken<span > </span>auftreten<span > </span>können.<span >
</span>Es<span > </span>wird<span > </span>ausdrücklich<span > </span>darauf<span > </span>hingewiesen,<span > </span>dass<span > </span>in Einzelfällen
weitere individuelle Risiken auftreten können. Darüber hinaus können Risiken
nicht nur einzeln, sondern auch kumulativ auftreten.</span></p>

<p className="MsoNormal" ><span >Die nachstehenden
Risikofaktoren zu lesen und zu verstehen, darf nicht als ausreichende
Information in dem Sinne angesehen werden, dass für einen einzelnen Erwerber
keine professionelle Beratung über den Erwerb von (Bruchteils-)Eigentum an Unterhaltungsprojekten
mehr notwendig<span > </span>ist.<span > </span>Eine<span > </span>Kaufentscheidung<span > </span>sollte<span >
</span>nicht<span > </span>allein<span > </span>auf<span > </span>der<span > </span>Grundlage<span >
</span>der<span > </span>unten<span > </span>aufgeführten Risikofaktoren<span > </span>getroffen<span >
</span>werden,<span > </span>da<span > </span>die<span > </span>hierin<span > </span>enthaltenen<span> </span>Informationen<span > </span>eine<span > </span>auf<span > </span>die<span > </span>Bedürfnisse, Ziele, Erfahrungen und/oder
Kenntnisse und Umstände eines einzelnen Erwerbers zugeschnittene Beratung und
Aufklärung nicht ersetzen können. Es wird empfohlen, dass, falls erforderlich,
Bewertungen von professionell qualifizierten Beratern eingeholt werden.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >33.</span></a></p>

<h2 ><a></a><a><span >Risiken<span > </span>in<span > </span>Zusammenhang<span > </span>mit<span > </span>Redrum Films</span></a></h2>

<p className="MsoNormal" ><span  >Es
besteht das Risiko, dass das Fachwissen nicht mehr verfügbar ist, wenn
Schlüsselpersonal nicht mehr für<span > </span>Redrum
Films<span > </span>arbeitet.<span > </span>Die<span > </span>umfassende<span > </span>Entwicklung,<span > </span>Implementierung<span > </span>und<span > </span>laufende<span >
</span>Weiterentwicklung <span >des</span><span > </span><span >Geschäftsbetriebs</span><span > </span><span >von Redrum
Films</span><span > </span><span >könnte sich infolgedessen</span><span > </span><span >verzögern oder</span><span > </span><span >nicht</span><span > </span><span >mehr</span><span > </span><span >möglich
sein.</span></span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><span >34.</span></p>

<h2 ><a><span >Risiko<span > </span>von<span > </span>Änderungen<span > </span>der<span > </span>regulatorischen<span > </span><span >Anforderungen</span></span></a></h2>

<p className="MsoNormal" ><span  >Es<span > </span>ist<span > </span>zu<span > </span>erwarten,<span >
dass </span>Dienstleistungen jeglicher Art,<span > </span>insbesondere<span > </span>Finanzdienstleistungen, in Zukunft
wesentlich stärker reguliert werden. Dies könnte Redrum Films abverlangen, ihr
Geschäftsmodell<span > </span>entsprechend<span > </span>anzupassen.<span > </span>Als<span > </span>Folge<span > </span>davon<span > </span>kann<span > </span>nicht<span > </span>ausgeschlossen<span > </span>werden,<span >
</span>dass<span > </span>Redrum Films nicht mehr
in der Lage sein wird, bestimmte Dienstleistungen zu erbringen. Auch können
zusätzliche<span > </span>Kosten<span > </span>aufgrund<span >
</span>der<span > </span>Notwendigkeit<span > </span>entstehen,<span > </span>das<span > </span>Geschäftsmodell<span > </span>und<span > </span>die<span > </span>Geschäftstätigkeit von Redrum Films
anzupassen. Es kann nicht ausgeschlossen werden, dass Redrum Films
möglicherweise behördliche Lizenzen<span > </span>für
die Umsetzung<span > </span>oder den<span > </span>weiteren<span >
</span>Betrieb<span > </span>ihres
Geschäftsmodells benötigt.<span > </span>Dies kann
die Umsetzung des Geschäftsmodells verzögern oder gefährden, kann umfangreiche
Anpassungen erforderlich machen oder es Redrum Films sogar unmöglich machen,
ihr Geschäftsmodell weiter zu <span >verfolgen.</span></span></p>

<p className="MsoNormal" ><a ><span >&nbsp;</span></a></p>

<p className="MsoNormal"  ><span >35.</span></p>

<h2 ><a ></a><a ><span >Risiken<span > </span>der<span > </span>Partnerschaft</span></a></h2>

<p className="MsoNormal break-page" ><span  >Um<span > </span>das<span > </span>Geschäftsmodell<span > </span>vollständig<span > </span>umsetzen<span > </span>zu<span > </span>können,<span >
</span>ist<span > </span>Redrum Films<span > </span>auf<span > </span>stabile<span > </span>Partnerschaften<span > </span>und die Zusammenarbeit mit Dritten (wie z. B.
Zahlungsdienstleister) angewiesen. Es besteht das Risiko, dass Redrum Films
nicht in der Lage ist, solche Partnerschaften und Geschäftsbeziehungen
aufzubauen oder aufrechtzuerhalten oder andere relevante Geschäftspartner zu halten.
Dies kann dazu führen, dass Redrum Films nicht in der Lage ist, Unterhaltungsprojekte
zu erwerben, zu verwahren und zu verkaufen, was die Liquidation von Redrum
Films zur Folge haben könnte.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >36.</span></a></p>

<h2 ><span >Risiken<span > </span>in<span > </span>Zusammenhang<span > </span>mit<span > </span><span >Unterhaltungsprojekten</span></span></h2>

<p className="MsoNormal" ><span  >Der<span > </span>Erwerb<span >
</span>von<span > </span>(Bruchteils-)Eigentum<span > </span>an<span > </span>Unterhaltungsprojekten<span > </span>kann<span > </span>unter<span > </span>anderem<span >
</span>mit<span > </span>den<span > </span>folgenden<span > </span>Risiken
für den Producer verbunden sein:</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >37.</span></a></p>

<h2 ><a></a><a><span >Maximalrisiko</span></a></h2>

<p className="MsoNormal" ><span  >Das<span > </span>Maximalrisiko<span > </span>besteht<span > </span>in<span > </span>einem<span > </span>vollständigen<span > </span>Wertverlust<span > </span>des<span > </span>Unterhaltungsprojekts<span > </span>und<span > </span>damit<span > </span>des<span > </span>bezahlten
<span >Kaufpreises.</span></span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>






<p className="MsoNormal"  ><a><span >38.</span></a></p>

<h2 ><a></a><a><span >Allgemeines</span><span  > </span><span >Marktpreisrisiko</span></a></h2>

<p className="MsoNormal" ><span  >Der<span > </span>Kunde<span > </span>trägt<span > </span>das<span > </span>Risiko,<span > </span>dass<span > </span>der<span > </span>Marktpreis<span > </span>des<span > </span>Unterhaltungsprojekts<span > </span>als<span > </span>Folge<span > </span>der<span > </span>allgemeinen<span > </span>Entwicklung des Marktes fällt. Redrum
Films ist beauftragt, die Unterhaltungsprojekte für alle Miteigentümer zu
verkaufen, wenn das Unterhaltungsprojekt einen bestimmten Wert erreicht. Bei
manchen Unterhaltungsprojekten kann jedoch das Risiko<span > </span>bestehen,<span > </span>dass<span > </span>eine<span > </span>Wertsteigerung<span > </span>nicht<span > </span>erfolgt.<span > </span>Dies<span > </span>kann<span > </span>daran<span >
</span>liegen,<span > </span>dass<span > </span>das<span > </span>Unterhaltungsprojekt<span > </span>an Wert<span >
</span>verliert<span > </span>oder<span > </span>sich<span > </span>einfach<span > </span>nicht<span > </span>weiterentwickelt.<span > </span>Dieses<span >
</span>Marktpreisrisiko<span > </span>ist<span > </span>im<span > </span>Vorhinein<span > </span>nur<span > </span>schwer
einzuschätzen. Redrum Films ist bemüht, den Wert beim Erwerb möglichst marktnah
einzuschätzen. Sie trägt<span > </span>jedoch<span > </span>nicht<span > </span>das<span > </span>Risiko<span >
</span>dafür,<span > </span>dass<span > </span>sich<span > </span>im<span > </span>Nachhinein<span > </span>der<span > </span>Wert<span > </span>als<span > </span>niedriger<span > </span>als<span > </span>anfangs<span > </span>eingeschätzt herausstellt. Dieses Risiko
trägt jeder Kunde mit. Der Kunde erleidet einen Verlust, wenn er seine Unterhaltungsprojekte
unter dem Erwerbspreis veräußert.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><a><span >39.</span></a></p>

<h2 ><a></a><a><span >Lagerungsrisiko/Versicherungsrisiko</span></a></h2>

<p className="MsoNormal" ><span  >Das
Unterhaltungsprojekt<span > </span>lagert<span > </span>in<span > </span>einer
Lagerstätte.<span > </span>Es wurde eine
Versicherung<span > </span>abgeschlossen, wonach<span >
</span>in<span > </span>dem in den
Versicherungsbedingungen festgelegten Umfang eine Versicherungsdeckung für die
in den betreffenden Lagerstätten verwahrten Unterhaltungsprojekte besteht. Es
besteht dennoch das Risiko, dass im Rahmen<span > </span>eines<span > </span>Einbruchs<span >
</span>die<span > </span>Unterhaltungsprojekte<span > </span>entwendet<span >
</span>oder<span > </span>aufgrund<span > </span>von<span > </span>höherer<span > </span>Gewalt<span > </span>die<span > </span>Lagerstätten und<span > </span>damit<span > </span>die<span > </span>Unterhaltungsprojekte<span > </span>unzugänglich,<span > </span>zerstört<span > </span>oder<span > </span>beschädigt<span > </span>werden.<span > </span>Es<span > </span>kann<span > </span>nicht<span > </span>ausgeschlossen werden, dass diese
Schadensfälle nicht von der Versicherung gedeckt sind, Ansprüche gegen die
Versicherung nicht durchgesetzt werden können oder die Versicherung ihren
Verpflichtungen nicht nachkommt. Dies könnte den teilweisen oder vollständigen
Wertverlust der Unterhaltungsprojekte bedeuten.</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

<p className="MsoNormal"  ><span  >***************</span></p>

<p className="MsoNormal"><span >&nbsp;</span></p>

</div>
    </div>
  )
}

export default ContractGerman
