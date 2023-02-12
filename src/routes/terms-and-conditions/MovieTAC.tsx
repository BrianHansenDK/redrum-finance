import React from 'react'
import MovieDocViewerDE from '../../components/documentviewer/MovieDocViewerDE'
import { mainP } from '../inside-app/themes/textStyles'
import './styles/tac.scss'

const MovieTAC = () => {
  return (
    <div style={{textAlign: 'justify'}}>
      <p style={styles.para} className='mt-2'>
        Diese AGB gelten für alle Geschäfte, die mit der Redrum Pro zu
        <span className='bold'> Medien</span>finanzierungszwecken abgeschlossen werden.
      </p>
      <p style={styles.para}>
        Medien sind oder können sein: E-Books, Bücher, Games, Spiele oder Filmwerke
        sowie weitere als Medien anerkannte Produkte.
      </p>
      <p style={styles.para}>
        Der Investierende in solche Mediengeschäfte wird im Folgenden Producer genannt.
      </p>
      <p style={styles.para} className='bold mb-2'>
        Es wird ausdrücklich darauf hingewiesen, dass ein Investment in Filmwerke das
        Risiko beinhaltet, das Investment auch komplett zu verlieren.
      </p>
      <h2 style={{textAlign: 'start'}}>
      BESONDERE BESTIMMUNGEN UND HINWEISE FÜR INVESTMENTS IN
      FILMWERK-PROJEKTE
      </h2>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
            Ein Filmwerk (im Folgenden Projekt genannt) wird nach bestem Wissen
            und Gewissen kalkuliert und ein Budget festgelegt. Trotzdem handelt es
            sich dabei um eine Prognose. Eine Überschreitungsreserve von jeweils 10
            % ist einkalkuliert. Trotzdem ist eine Prognose nie eine Garantie, dass der
            Film auch zu diesen Kosten hergestellt werden kann. Überschreitungen
            sind möglich und unter Umständen notwendig. Die Kosten der
            Überschreitung sind vorab abzugsfähig, bevor ein Investment
            zurückgezahlt wird. Das Überschreitungsrisiko wird NICHT versichert (sog.
            completion bond).
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Schauspieler und Regie mit einem bestimmten Namen werden nicht
            garantiert.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Es werden die handelsüblichen Versicherungen für das Filmprojekt
            abgeschlossen, trotzdem ist nicht jedes Risiko versichert.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Ein Totalabbruch eines gestarteten Projekts ist möglich, aber nicht üblich.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            In der Verwertung kann oder muss auf Verwertungsunternehmen
            zurückgegriffen werden, die dafür eine Provision beanspruchen und ihre
            Ausgaben vorab erstattet haben wollen. Diese sollen handelsüblich sein.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Erstattungen und Gewinne auf die Investition in ein Filmprojekt (im
            Folgenden Investition genannt) erfolgen erst, wenn das Geld bei Redrum
            Pro eingetroffen ist.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        1. Voraussetzungen des Vertragsabschlusses
      </h3>
      <p style={styles.para} className='mt-1'>
      Redrum Pro stellt in der App und auf der Webseite Filmprojekte zur Investition zur
      Verfügung gegen Beteiligung an den Auswertungserlösen. Dieses sind eigene
      Filmprojekte, die Redrum Pro als Filmhersteller (Produzent) verwirklicht oder Fremd-
      Projekte. Letztere sind als solche ausdrücklich gekennzeichnet. <span className='bold'>Ist ein Fremdprojekt
      zur Investition vorgestellt, erfolgt der Vertragsabschluss mit dem Filmhersteller, der
      zu dem Projekt benannt wird und nicht mit der Redrum Pro. Redrum Pro haftet für
      den Dritt-Hersteller nicht. </span>
      </p>
      <p style={styles.para}>
        Eine Investition erfordert, was folgt:
      </p>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
            Das Investment in ein Filmwerk kann über die Webseite oder die App der Redrum
            Pro geschlossen werden. Voraussetzung ist die Registrierung des Producers auf einer
            der beiden Applikationen, die sodann auch für die andere gilt. Die Anmeldung ist
            kostenlos. Sie ist nur geschäftsfähigen Personen erlaubt.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Die bei der Anmeldung zu machenden Angaben sind vollständig und korrekt
            anzugeben. Ändern sich diese nach Anmeldung (z. B. Wechsel des Wohnsitzes), so
            sind die Angaben unverzüglich zu ändern.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Der Producer ist dafür verantwortlich, dass nur er oder sie sein / ihr Konto allein
            nutzen kann. Das Passwort ist strikt vertraulich zu handhaben. Die Nutzung des Kontos
            mit dem Passwort indiziert die Nutzung durch den Producer.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Ein Konto ist nicht übertragbar. Mehrfachregistrierungen sind nicht gestattet. Im
            Erbfall wird ein eventuelles Guthaben nur an den im Erbschein Benannten ausgekehrt.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Redrum Pro hat das Recht unvollständige Konten sowie solche, die nach geraumer
            Zeit nicht genutzt wurden, zu löschen.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Der Producer kann mit über die angebotenen Filmprojekte diskutieren. Redrum
            Pro ist ein freundlicher, sachlicher und fairer Umgangston wichtig. Redrum Pro behält
            sich deshalb vor Beiträge zu löschen, die gegen diese Grundlagen verstoßen.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        2. Investition in Filmprojekte
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Eine Investition wird getätigt, wenn das Zahlungsabwicklungsformular auf der
          Webseite oder in der App ausgefüllt wird und der Button „jetzt zahlungspflichtig
          bestellen“ angeklickt wird.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Die Investition muss von Redrum Pro angenommen werden. Dies erfolgt durch
          eine Bestätigungs-Email. Es erfolgt kein weiterer Schriftverkehr. Es existiert kein
          Anspruch auf die Durchführung der Investition ohne die Annahme durch Redrum Pro.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Die Möglichkeit der Investition in ein Filmprojekt ist zeitlich begrenzt. Die
          Zeitspanne steht allein im Ermessen von Redrum Pro. Sie kann von Redrum Pro auch
          verlängert werden.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Getätigte Investitionen können auf ein anderes Projekt umgeleitet werden, wenn
          a: der Producer seine Zustimmung gibt, oder b: er auf unbestimmte Projekte investiert
          hat.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        3. Zahlungsabwicklung
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Die Zahlungsabwicklung erfolgt ausschließlich von Zahlungsdienstleistern mit der
          Erlaubnis zum Betreiben von Finanztransfergeschäften.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Für SEPA-Lastschriften in diesem Zusammenhang gilt: Ist das Konto des Producers
          nicht ausreichend gedeckt, können die dafür anfallenden Gebühren ihm allein
          belastet werden.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        4. Provisionen, Agios und Gebühren
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Redrum Pro ist berechtigt von Investments eine Provision vom Investment-
          Empfänger zu erhalten. Diese erhöht den Beitrag des Producers NICHT.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Producer dürfen gegen Provisionen mit Forderungen aus noch nicht erteilten
          Gutschriften und mit fälligen und/oder zukünftigen Forderungen nur dann
          aufrechnen, wenn diese Forderungen rechtskräftig festgestellt oder unbestritten sind.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        5. Status der von Redrum Pro erbrachten Online Dienste
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Redrum Pro ist zur Erbringung der kostenlosen Dienste nicht verpflichtet.
          Funktionen oder Features können addiert, ergänzt, gestrichen oder ersetzt werden.
          Getätigte Investments sind davon nicht betroffen.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Umfang und Funktionalitäten der App und der Webseite können von Redrum Pro
          geändert oder eingestellt werden.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        6. Datenschutz
      </h3>
      <p style={styles.uTPara}>
        Redrum Pro hält sich strikt an die DSGVO.
      </p>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
            Soweit Daten bei Redrum Pro hinterlegt werden oder entstehen, ist Redrum Pro
            berechtigt, diese nach den gesetzlichen Maßgaben z. B. an die Steuerbehörden
            weiterzugeben. Der Producer kann der Herausgabe seiner Daten durch das
            Bundeszentralamt für Steuern widersprechen. Hierfür muss der Producer gegenüber
            dem Bundeszentralamt für Steuern einen Sperrvermerk erteilen. Ein einmal erteilter
            Sperrvermerk bleibt bis auf einen schriftlichen Widerruf bestehen.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Soweit der Producer auf der App oder der Redrum Pro-Webseite Daten in seinem
            Profil hinterlegt oder Redrum Pro von den Finanzbehörden Daten übermittelt
            bekommt, ist Redrum Pro berechtigt, diese Daten zu verwenden und denjenigen
            Filmprojekten, an denen sich der Producer beteiligt hat, sowie deren Dienstleistern
            zur Verfügung zu stellen, damit Auszahlungen aus den Beteiligungen (z.B. Zinsen oder
            Darlehensrückzahlungen) an die Producer erfolgen können und die entsprechenden
            Anmeldungen, insbesondere Kapitalertragsteuer, Solidaritätszuschlag und ggf.
            Kirchensteuer von Redrum Pro oder den Filmprojekten oder von deren Dienstleistern
            bei den hierfür zuständigen Stellen vorgenommen werden können. Dies betrifft
            insbesondere, jedoch nicht ausschließlich, den Vor- und Nachnamen des Producers,
            das Geschlecht, die Adressdaten, die Beteiligungshöhe, die Bankverbindung,
            Informationen zu Freistellungsaufträgen und die Steueridentifikationsnummer des
            Producers.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
      7. Haftungsbeschränkung
      </h3>
      <p style={styles.uTPara}>
      Für eine Haftung von Redrum Pro auf Schadensersatz gelten unbeschadet der
      sonstigen gesetzlichen Anspruchsvoraussetzungen die folgenden
      Haftungsausschlüsse und -begrenzungen:
      </p>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
            Redrum Pro haftet, sofern Redrum Pro Vorsatz oder grobe Fahrlässigkeit zur Last
            fallen. Für einfache Fahrlässigkeit haftet Redrum Pro nur bei Verletzung einer Pflicht,
            deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst
            ermöglicht und auf deren Einhaltung der Vertragspartner regelmäßig vertrauen darf
            (sog. Kardinalpflicht). Im Übrigen ist eine Schadensersatzhaftung für Schäden aller Art,
            gleich aufgrund welcher Anspruchsgrundlage, einschließlich der Haftung für
            Verschulden bei Vertragsschluss, ausgeschlossen.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Sofern Redrum Pro gemäß Ziffer 1. für einfache Fahrlässigkeit haftet, ist Redrum
          Pros Haftung auf den Schaden begrenzt, mit dessen Entstehen Redrum Pro nach den
          bei Vertragsschluss bekannten Umständen typischerweise rechnen musste. Ist ein
          Beteiligungserwerb oder ein hiermit zusammenhängender Vertrag unwirksam,
          beschränken sich hieraus etwa ergebende Ansprüche des Producers gegen Redrum
          Pro auf die Erstattung des für den Beteiligungserwerb gezahlten Entgeltes.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Vorstehende Haftungsausschlüsse und -beschränkungen gelten weder, wenn
            Redrum Pro eine Garantie für die Beschaffenheit der Ware übernommen hat, noch für
            Schäden, die nach dem Produkthaftungsgesetz zu ersetzen sind, noch für Schäden an
            Leben, Körper oder Gesundheit.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Vorstehende Haftungsausschlüsse und -beschränkungen gelten auch zugunsten
            der Mitarbeiter von Redrum Pro, Erfüllungsgehilfen und sonstiger Dritter, derer
            Redrum Pro sich zur Vertragserfüllung bedient.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        8. Beendigung des Nutzungsverhältnisses
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Der Nutzungsvertrag für die Redrum Pro-App und Webseite wird auf unbestimmte
          Zeit geschlossen und kann von Redrum Pro und dem Producer jederzeit mit sofortiger
          Wirkung beendet werden. Für die Beendigung des Nutzungsvertrags muss der
          Producer eine E-Mail an service@Redrumpro.de schreiben.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Redrum Pro ist berechtigt, Producer ohne Angabe von Gründen jederzeit von der
          und neuen Investitionsmöglichkeiten auf Redrum Pro sowie jedem anderen von
          Redrum Pro angebotenem Bereich, Dienstleistung oder System auszuschließen oder
          den Zugang teilweise oder in Gänze, zeitweise oder dauerhaft, zu beschränken.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Redrum Pro gewährt auch in den Fällen der Beendigung des
          Nutzungsverhältnisses durch Redrum Pro und im Falle der Beschränkung des Zugangs
          des Producers denjenigen Producern, die Beteiligungen auf Redrum Pro halten, die
          Möglichkeit, ihre Beteiligungen auf Redrum Pro zu verwalten (Einsicht in die
          Beteiligungsübersicht, Einsicht von Updates, Hinterlegung der notwendigen
          Auszahlungs- und Steuerinformationen, Aktualisierung von Stammdaten,
          Stimmabgabe bei Poolingabstimmungen). Dies beinhaltet jedoch nicht die Nutzung
          anderer nicht zwingend für die Wahrnehmung der Rechte aus den Beteiligungen
          erforderlichen Redrum Pro-Dienste.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Das Recht zur Kündigung aus wichtigem Grund bleibt unberührt.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
            Gesetzliche Kündigungsrechte bleiben unberührt.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        9. Risikohinweise
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Filminvestitionen bieten Chancen, sind jedoch Risikoinvestments. Im
          schlechtesten Fall besteht die Gefahr des Verlustes der gesamten Investition.
          Filminvestitionen sind daher nicht zur Altersvorsorge geeignet. Eine
          Nachschusspflicht besteht jedoch nicht. Das Risiko kann minimiert werden, indem
          man als Producer seinen Investmentbetrag auf mehrere Filminvestitionen verteilt und
          nicht alles in eine Medieninvestitionen investiert, sodass das Risiko auf mehrere
          Investments gestreut wird. So können erfolgreiche Investments andere, weniger
          erfolgreiche Investments ausgleichen.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Durch Redrum Pro erfolgt keinerlei Anlageberatung oder sonstige Beratung. Ein
          Auskunfts- oder Beratungsvertrag kommt nicht zustande. Redrum Pro ist nicht
          verpflichtet, über laufende Entwicklungen des Filmprojektes zu unterrichten.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Bei den Beteiligungen der Producer handelt es sich zumeist um partiarische
          Nachrangdarlehen. Dies sind unternehmerische Beteiligungen mit
          eigenkapitalähnlichen Eigenschaften. Im Falle einer Insolvenz des Unternehmens
          werden die Producer erst nach allen anderen Fremdgläubigern aus der
          Insolvenzmasse bedient.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Die Informationen über die Filminvestmentprojekte - <span className='bold'>die nicht von Redrum Pro
          selbst hergestellt werden -</span> auf der Redrum Pro - App/Webseite werden
          ausschließlich von den Fremdinvestmentprojekten zur Verfügung gestellt. Eine
          Prüfung der Wirtschaftlichkeit des Fremdinvestmentprojektes durch Redrum Pro
          findet nicht statt.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Die Informationen über die Medien zur Investition auf der Redrum Pro-Website
          werden auch von anderen Unternehmen zur Verfügung gestellt. Die von diesen
          Unternehmen gemachten Prognosen sind keine Garantie für die zukünftige
          Entwicklung der Medieninvestition. Crowdinvestings sind daher nur für Producer
          geeignet, die das Risiko eines Totalausfalls des investierten Kapitals verkraften
          können. Die Entscheidung für ein Investment trifft jeder Producer unabhängig und
          eigenverantwortlich.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Es besteht nur ein eingeschränkter Markt für Beteiligungen an Medienprojekten.
          Die Veräußerung von Beteiligungen an Medienprojekten ist in Ermangelung eines
          entsprechenden Marktes nur eingeschränkt möglich.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Es obliegt allein dem Producer, zu entscheiden, ob er unter Nutzung der Redrum
          Pro-App/Webseite in Filmprojekte investiert und in welches Medienprojekt er
          investiert. Die auf der Redrum Pro-App/Webseite verfügbaren Informationen stellen
          keine Beratungsleistung von Redrum Pro dar und ersetzen keine fachkundige
          Beratung. Redrum Pro empfiehlt daher, sich vor der Investition in ein Medienprojekt
          und auch während der Laufzeit der Beteiligung gegebenenfalls über die rechtlichen,
          wirtschaftlichen und steuerlichen Folgen einer Beteiligung zu informieren. Jede
          Beteiligung kann einen Totalverlust der Investitionssumme zur Folge haben. Der
          Producer sollte daher nur Gelder investieren, deren eventuellen Verlust er sich leisten
          kann.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        10. Vertragsübernahme
      </h3>
      <p style={{marginTop: 25, fontSize: 20}}>
        Im Falle der (I) Insolvenz-Anmeldung von Redrum Pro oder (II) wenn über das
        Vermögen von Redrum Pro das Insolvenzverfahren rechtskräftig eröffnet wird oder (III)
        die Eröffnung eines solchen Verfahrens mangels Masse abgelehnt wird oder (IV)
        Redrum Pro liquidiert wird oder (V) Redrum Pro den Geschäftsbetrieb einstellt, sind
        die Insolvenzverwalter berechtigt, den Vertrag nach ihrer Maßgabe zu übernehmen.
      </p>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        11. Auszahlungen, Rückzahlungen auf die Investition
      </h3>
      <ol style={styles.list}>
        <li style={styles.listItem}>
          <p>
          Die Investition wird mit Gewinnanteil nach der Verwertung in regelmäßigen
          Tranchen allein aus den bei Redrum Pro eingegangenen Einkünften ausbezahlt. Ist
          keine Kontoverbindung bekannt oder die bekannte nicht mehr existent, verwahrt
          Redrum Pro das Geld für den Producer bis zu drei (3) Jahre.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Auszahlungen während der Investitionsphase sind nicht möglich. Es besteht ein
          gewisser Sekundärmarkt für Investitionen, der von Redrum Pro betrieben wird und in
          dem Investments von einem Teilnehmer auf einen anderen Teilnehmer durch Verkauf
          übergehen können.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Das Investment ist keine gesellschaftsrechtliche Beteiligung. Es berechtigt nicht
          zur Einsicht in handelsrechtliche Bücher und Abrechnungen oder sonstige
          gesellschaftsrechtliche Stellungen.
          </p>
        </li>
      </ol>
      <h3 className='mt-3' style={{textAlign: 'start'}}>
        12. Schlussbestimmungen
      </h3>
      <ol style={styles.list} className='mb-5'>
        <li style={styles.listItem}>
          <p>
          Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand
          für sämtliche Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist, soweit
          gesetzlich zulässig, Berlin.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Sollte es Widersprüche zwischen diesen AGB und anderen Regelungen geben,
          die der Producer bestätigt, haben die anderen Regelungen Vorrang. Dies gilt
          insbesondere für die Verträge zum Beteiligungserwerb.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise nichtig oder
          unwirksam sein oder werden, so wird dadurch die Wirksamkeit der übrigen
          Bestimmungen nicht berührt. An die Stelle von nicht einbezogenen oder unwirksamen
          Allgemeinen Geschäftsbedingungen tritt das Gesetzesrecht (§ 306 Abs. 2 BGB). Im
          Übrigen werden die Parteien anstelle der nichtigen oder unwirksamen Bestimmung
          eine wirksame Regelung treffen, die ihr wirtschaftlich möglichst nahe kommt, soweit
          keine ergänzende Vertragsauslegung vorrangig oder möglich ist.
          </p>
        </li>
        <li style={styles.listItem}>
          <p>
          Redrum Pro behält sich vor, diese AGB jederzeit und ohne Nennung von Gründen
          zu ändern. Die geänderten Bedingungen werden den Producern per E-Mail
          spätestens zwei Wochen vor ihrem Inkrafttreten zugesendet. Widerspricht ein
          Producer der Geltung der neuen AGB nicht innerhalb von vier Wochen nach Empfang
          der E-Mail schriftlich oder in Textform gegenüber Redrum Pro, gelten die geänderten
          AGB als angenommen. Redrum Pro wird die Producer in der E-Mail, die die
          geänderten Bedingungen enthält, auf die Bedeutung dieser Zwei-Wochen-Frist
          gesondert hinweisen. Die jeweils aktuellen AGB können unter der App abgerufen
          werden. Wenn ein Producer mit den geänderten Bedingungen nicht einverstanden
          ist, muss er die Nutzung der Dienste von Redrum Pro einstellen.
          </p>
        </li>
      </ol>
    </div>
  )
}

const styles = {
  para: {
    fontSize: 17.5,
  },
  uTPara: {
    fontSize: 17.5,
    marginTop: 25,
  },
  list: {
    fontSize: 17.5,
  },
  listItem: {
    marginTop: 25,
  }
}

export default MovieTAC
