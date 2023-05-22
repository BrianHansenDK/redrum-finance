import React from 'react'
import { Panel } from 'rsuite';

interface IProps {en: boolean}

const DetailedFaqSection = (props: IProps) => {
  const {en} = props;
  return (
    <div className="faq-section">
      <h2 className="title">
        {en ? 'Buying & Selling' : 'Kauf & Verkauf'}
      </h2>
      <div className="faq-elements-con">
      <Panel className='faq-box' collapsible shaded
        header={en ? 'Can I make money with RedrumPro?' : 'Kann ich mit RedrumPro Geld verdienen?'}>
          <div className="inner">
            <p>
            {en ?
            'If you have purchased shares in a project, there are several ways you can increase your money.' :
            'Wenn du Anteile an einem Projekt erworben hast, gibt es verschiedene Wege, wie du dein Geld vermehren kannst.'
            }
            <br/><br/>
            {en ?
            'Here is an example calculation for our first project, ' +
            'The Basement Games. However, please note that the conditions may vary depending on the project. ' +
            'Therefore, always read the respective project description thoroughly.'
            :
            'Im Folgenden findest du eine Beispielrechnung für unser erstes Projekt: ' +
            'The Basement Games. Beachte aber, dass je nach Projekt sich auch die Rahmenbedingungen variieren. ' +
            'Lese also stets gründlich die jeweilige Projektbeschreibung.'
            }
            <br/><br/>
            {en ?
            'Firstly, upon completion of the project, ' +
            'you will receive a guaranteed return of 7%. ' +
            'Additionally, you have the option to return your shares to RedrumPro ' +
            'and receive your initial investment back. In this case, you will receive:'
            :
            'Zum einen erhältst du beim Abschluss des Projektes eine zugesicherte Rendite ' +
            'in Höhe von 7%. Zusätzlich hast du einmalig die Option, ' +
            'deine Anteile wieder an RedrumPro zu übergeben und erhältst dafür deine Eingangsinvestition wieder zurück. ' +
            'In diesem Fall erhältst Du: '
            }
            <strong> {en ? 'your initial investment + 7% return' : 'deine Ausgangsinvestition + 7% Rendite'}</strong>
            <br/><br/>
            {en ?
            'If you choose to keep your shares, you will remain a shareholder in the project ' +
            'and potentially benefit from quarterly profit distributions of the project. ' +
            'The amount of the distribution is determined by the success of the project. ' +
            'In this case, you will receive:'
            :
            'Falls du deine Anteile behalten möchtest, ' +
            'bleibst du Anteilseigner am Projekt und kannst potenziell quartalsweise von den ' +
            'Gewinnausschüttungen des Projekts profitieren. ' +
            'Die Höhe der Ausschüttung ermisst sich an dem jeweiligen Erfolg des Projektes. ' +
            'In diesem Fall erhältst Du:'
            }
            <strong>
              {en ?
              ' a one-time 7% return on your initial investment + profit distributions'
              : ' einmalig 7% auf deine Ausgangsinvestition + Gewinnausschüttungen'
            }
              </strong>
            <br/><br/>
            {en ?
            'Additionally, once the integrated secondary market is unlocked in the coming months, '+
            'you can sell your shares profitably to other producers.'
            :
            'Zusätzlich kannst du, sobald in den kommenden Monaten der integrierte Sekundärmarkt freigeschaltet wird, ' +
            'deine Anteile gewinnbringend an andere Producer verkaufen.'
            }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'How can I buy shares?' : 'Wie kann ich Anteile kaufen?'}>
          <div className="inner">
            <p>
              {en ?
              'On RedrumPro, you can purchase exclusive shares in exciting entertainment ' +
              'projects and trade on the secondary market in the future. After we release a project ' +
              'within the RedrumPro web app, you can view the current projects in the investor ' +
              'dashboard after registering.'
              :
              'Auf RedrumPro kannst du exklusive Anteile an spannenden Unterhaltungsprojekte ' +
              'erwerben und zukünftig auf dem Sekundärmarkt handeln. ' +
              'Nachdem wir ein Projekt innerhalb der RedrumPro Web-App veröffentlichen, kannst ' +
              'du nach deiner Registrierung die aktuellen Projekte in dem Investoren-Dashboard einsehen.'
              }
            </p>
            <ol>
              <li>{en ? 'Register or log in.' : 'Registriere oder Melde dich an'}</li>
              <li>
                {en ?
                (
                <span>
                  Select a project in the investor dashboard and click <strong>Secure Share Now</strong>
                </span>)
                : (
                <span>
                  Wähle im Investoren-Dashboard ein Projekt aus und klicke auf <strong>Jetzt Anteile sichern</strong>.
                </span>)}
              </li>
              <li>
                {en ?
                (
                <span>
                  Enter the desired number of shares and click <strong>Continue</strong>
                </span>)
                : (
                <span>
                  Gib die gewünschte Anzahl an Anteilen ein und klicke auf <strong>weiter</strong>.
                </span>)}
              </li>
              <li>{en ? 'Purchase the shares with your preferred payment method.' : 'Kaufe die Anteile mit deiner gewünschten Zahlungsmethode.'}</li>
            </ol>
            <h3>
              {en ? 'Secondary Market' : 'Sekundärmarkt'}
            </h3>
            <p>
            {en ?
            'In the coming months, the secondary market will also be unlocked, '+
            'allowing you to purchase shares from other registered users or sell your own shares.'
            :
            'In den kommenden Monaten wird zusätzlich der Sekundärmarkt freigeschaltet, in ' +
            'dem du Anteile von anderen registrierten Nutzern kaufen kannst oder deine eigenen Anteile verkaufen.'
            }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'How do I receive my shares?' : 'Wie erhalte ich meine Anteile?'}>
          <div className="inner">
            <p>
              {en ?
              'Once you have completed the ordering process and RedrumPro can confirm receipt ' +
              'of payment, the shares will be automatically transferred to your internal RedrumPro ' +
              'portfolio.'
              :
              'Sobald du den Bestellprozess beendet hast und Redrum Pro den Zahlungseingang ' +
              'bestätigen kann, werden die Anteile automatisch auf dein internes Redrum Pro ' +
              'Portfolio transferiert.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'Until when can shares be purchased for a project?' : 'Bis wann kann man Anteile von einem Projekt erwerben?'}>
          <div className="inner">
            <p>
              {en ?
              'As long as the film value or investment deadline of a project has not been reached, it ' +
              'is possible to purchase shares of ongoing projects at any time.'
              :
              'Solange der Filmwertoder der Investitionsschluss eines Projektes noch nicht erreicht ' +
              'wurde, ist es zur jeder Zeit möglich Anteile von laufenden Projekten zu erwerben.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ?
        'When and where do I receive my profit distributions?' :
        'Wann und Wo erhalte ich meine Gewinnausschüttungen?'}>
          <div className="inner">
            <p>
              {en ?
              'When a project generates profits, ' +
              'your individual amount will be automatically transferred to your internal ' +
              'Redrum settlement account on a quarterly basis. ' +
              'You will be informed by email and then have the option to purchase additional ' +
              'shares in new projects or have the amount paid out to your preferred bank account.'
              :
              'Wenn ein Projekt Gewinne generiert, ' +
              'wird dein individueller Betrag automatisch auf dein internes Verrechnungskonto bei Redrum überwiesen. ' +
              'Du wirst dabei per Mail informiert und hast dann die Möglichkeit, ' +
              'entweder weitere Anteile an neuen Projekten zu erwerben oder den Betrag auf dein ' +
              'bevorzugtes Bankkonto auszahlen zu lassen.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ?
        'Do I need to pay taxes on my Redrum Pro earnings?' :
        'Muss ich die Einnahmen aus Redrum Pro versteuern?'}>
          <div className="inner">
            <p>
              {en ?
              'RedrumPro points out that participation and receipt ' +
              'of profit distributions may have tax consequences. ' +
              'However, we do not offer tax advice at RedrumPro and ' +
              'recommend that you consult your personal tax advisor for any tax-related questions and earnings.'
              :
              'Redrum Pro weist darauf hin, ' +
              'dass die Beteiligung und der Erhalt von Gewinnausschüttungen steuerrechtliche Folgen haben kann. ' +
              'Wir bei Redrum Pro bieten jedoch keine Steuerberatung an und empfehlen daher, ' +
              'sich bei steuerlichen Fragen und Einnahmen an ihren persönlichen Steuerberater zu wenden.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'Does buying or selling incur fees?' : 'Fallen beim Kauf oder Verkauf Gebühren an?'}>
          <div className="inner">
            <p>
              {en ?
              'At the current time, there are no service or management fees! ' +
              'However, Redrum Pro reserves the right to make changes in the future.'
              :
              'Zum aktuellen Zeitpunkt fallen weder Service- oder Managementgebühren an! ' +
              'Redrum Pro behält es sich jedoch vor zukünftig Änderungen diesbezüglich vorzunehmen.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'Is there a minimum investment amount?' : 'Gibt es einen Mindestinvestitionsbetrag?'}>
          <div className="inner">
            {en ?
            (<p>You can start building your film portfolio with an investment as low as <strong>1€</strong></p>) :
            (<p>
              Du kannst den Aufbau deines Filmportfolios bereits bei einer Investition von gerade mal <strong>1€</strong> beginnen.
            </p>)}
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'How long am I involved in a project?' : 'Wie lange bin ich an einem Projekt beteiligt?'}>
          <div className="inner">
            <p>
              {en ?
              'The participation period varies from project to project. ' +
              'For our first project, "The Basement Games", for example, ' +
              'you are involved in the project indefinitely, or on a lifetime basis.'
              :
              'Die Beteiligungslaufzeit variiert von Projekt zu Projekt. ' +
              'Bei unserem ersten Projekt „The Basement Games“ bist du beispielsweise unbefristet, ' +
              'also auf Lifetime-Basis am Projekt beteiligt.'
              }
            </p>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ? 'What does Redrum Film Value mean?' : 'Was bedeutet der Redrum Filmwert?'}>
          <div className="inner">
            <p>
              {en ?
              'The term "Redrum Film Value" refers to the monetary value at which ' +
              'Redrum Films & Entertainment GmbH is willing to sell shares of a project through the RedrumPro web app. ' +
              'The Redrum Film Value is determined based on an evaluation of the project by ' +
              'Redrum Films & Entertainment GmbH and can vary depending on market conditions and demand. ' +
              'The evaluation and resulting Redrum Film Value of a film project are based on factors including:'
              :
              'Der Begriff „Redrum Filmwert“ bezeichnet den monetären Wert, ' +
              'zu dem die Redrum Films & Entertainment GmbH bereit ist, ' +
              'Anteile eines Projektes über die RedrumPro Web-App zu veräußern. ' +
              'Der Redrum Filmwert wird auf der Grundlage einer Bewertung des Projekts durch die ' +
              'Redrum Films & Entertainment GmbH ermittelt und kann je nach den Marktbedingungen und der Nachfrage variieren. ' +
              'Die Bewertung und der daraus resultierende Redrum Filmwert eines ' +
              'Filmprojektes basiert unter anderem dabei auf folgenden Faktoren:'
              }
            </p>
            <ul>
              <li>
                {en ?
                'Cultural value: The cultural value of a film refers to its ' +
                'significance and influence on society and culture. ' +
                'A film can be considered culturally significant if it addresses ' +
                'historical events or societal issues, or establishes new cultural trends and styles. ' +
                'The cultural value of a film can also be determined by ' +
                'awards and recognition at festivals or other events. '
                :
                'Kultureller Wert: Der kulturelle Wert eines Films bezieht sich auf ' +
                'seine Bedeutung und seinen Einfluss auf die Gesellschaft und die Kultur. ' +
                'Ein Film kann als kulturell bedeutsam angesehen werden, ' +
                'wenn er beispielsweise historische Ereignisse oder gesellschaftliche Probleme ' +
                'thematisiert oder neue kulturelle Trends und Stile etabliert. ' +
                'Der kulturelle Wert eines Films kann auch durch Auszeichnungen und Anerkennungen bei ' +
                'Festivals oder anderen Veranstaltungen bestimmt werden.'
                }
              </li>
              <li>
                {en ?
                'Creative value: The creative value of a film refers to ' +
                'its artistic quality and originality. ' +
                'A film can be considered creatively valuable if it uses ' +
                'innovative cinematic techniques or narrative structures, ' +
                'or creates unique visual or auditory effects. ' +
                'The creative value of a film can also be determined by ' +
                'recognition from film critics or other industry experts.'
                :
                'Kreativer Wert: Der kreative Wert eines Films bezieht sich auf ' +
                'seine künstlerische Qualität und Originalität. ' +
                'Ein Film kann als kreativ wertvoll angesehen werden, ' +
                'wenn er innovative filmische Techniken oder Erzählstrukturen ' +
                'verwendet oder einzigartige visuelle oder akustische Effekte erzeugt. ' +
                'Der kreative Wert eines Films kann auch durch die Anerkennung von ' +
                'Filmkritikern oder anderen Branchenexperten bestimmt werden.'
                }
              </li>
              <li>
                {en ?
                'Commercial value: ' +
                'The commercial value of a film refers to its ability to generate revenue and profits. ' +
                'A film can be considered commercially valuable if it appeals to a ' +
                'broad audience and achieves high box office results, ' +
                'or if it generates additional revenue through merchandising ' +
                'or other marketing strategies. ' +
                'The commercial value of a film can also be determined by its ' +
                'repeat viewings on television, sales figures on DVD or Blu-ray, or streaming platforms.'
                :
                'Kommerzieller Wert: Der kommerzielle Wert eines Films bezieht sich auf seine Fähigkeit, ' +
                'Einnahmen zu generieren und Gewinne zu erzielen. ' +
                'Ein Film kann als kommerziell wertvoll angesehen werden, ' +
                'wenn er ein breites Publikum anspricht und hohe Einspielergebnisse ' +
                'erzielt oder wenn er durch Merchandising oder andere Vermarktungsstrategien ' +
                'zusätzliche Einnahmen generiert. ' +
                'Der kommerzielle Wert eines Films kann auch durch ' +
                'seine Wiederholungsdauer im Fernsehen, ' +
                'Verkaufszahlen auf DVD oder Blu-ray oder Streaming-Plattformen bestimmt werden.'
                }
              </li>
              <li>
                {en ?
                'Production value: ' +
                'The production value of a film project refers to the ' +
                'total costs required to produce the film, including compensation for employees, ' +
                'equipment costs, props, locations, script, post-production, and other related costs. ' +
                'It is the amount that must be spent to produce the film from concept to final completion. ' +
                'The production value can vary widely depending on the type and scope of the film. ' +
                'Overall, the Redrum Film Value is a complex and multifaceted evaluation of the value ' +
                'of a film that is not limited to its production costs but also considers cultural, ' +
                'creative, and commercial value, among other factors.'
                :
                'Produktions- oder Herstellungswert: ' +
                'Der Produktions- oder Herstellungswert eines Filmprojekts bezieht sich auf die Gesamtkosten, ' +
                'die zur Produktion des Films erforderlich sind, ' +
                'einschließlich der Entschädigung für die Mitarbeiter, der Kosten für Ausrüstung, ' +
                'Requisiten, Standorte, Drehbuch, Postproduktion und anderer damit verbundener Kosten. ' +
                'Es handelt sich um den Betrag, der aufgewendet werden muss, ' +
                'um den Film vom Konzept bis zur endgültigen Fertigstellung zu produzieren. ' +
                'Der Produktionswert kann je nach Art und Umfang des Films sehr unterschiedlich sein. ' +
                'Insgesamt ist der Redrum Filmwert eine komplexe und vielschichtige ' +
                'Bewertung des Werts eines Films, die nicht nur auf seine Produktionskosten beschränkt ist, ' +
                'sondern unter anderem auch den kulturellen, kreativen und kommerziellen Wert berücksichtigt.'
                }
              </li>
            </ul>
          </div>
      </Panel>
      <Panel className='faq-box' collapsible shaded
        header={en ?
          'What happens if the Redrum Film Value is not reached?'
        : 'Was passiert, wenn der Redrum Filmwert nicht erreicht wird?'}>
          <div className="inner">
            <p>
              {en ?
              'No problem! Since Redrum Pro is involved in every project, the realization of the ' +
              'projects is independent of the achievement of the Redrum Film Value.'
              :
              'Das ist gar kein Problem! Da Redrum Pro selbst an jedem Projekt beteiligt ist, ist die ' +
              'Realisierung der Projekte unabhängig von der Erreichung des Redrum Filmwertes'
              }
            </p>
          </div>
      </Panel>
      </div>
    </div>
  )
}

export default DetailedFaqSection
