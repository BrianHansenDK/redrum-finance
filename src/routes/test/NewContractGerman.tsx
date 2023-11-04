import React from 'react'
import { FirebaseBundle, FirebaseUser } from '../../database/Objects'
import { RedrumCompany } from '../../database/CompanyInfo';
import { formatDate } from '../../misc/custom-hooks';

interface IProps {
    user: FirebaseUser,
    project: FirebaseBundle,
    investAmount: number,
    bonus: number,
    day: string,
  }

const NewContractGerman = (props: IProps) => {
    const {day, user, project, investAmount, bonus} = props;
  const date = new Date(day);
  return (
    <div id="german-document">
        <div className="WordSection1 break-page">
        <br/> <br/> <br/> <br/>
        <h1 ><a ></a><a ><span >Rahmenvertrag</span></a></h1> <br/>

<p className="MsoNormal"  ><span >zwischen</span></p>
<br/>




<p className="MsoNormal" ><span >{RedrumCompany.name}</span></p>

<p className="MsoNormal" ><span >{RedrumCompany.street}</span></p>

<p className="MsoNormal" ><span >{RedrumCompany.city}</span></p>

<p className="MsoNormal" ><span >E-Mail: producer@Redrumpro.com</span></p>



<p className="MsoNormal" ><span >Geschäftsführer: Rabih
Merhi </span></p>

<p className="MsoNormal" >{RedrumCompany.HRB}</p>

<p className="MsoNormal" ><span >Umsatzsteuer-ID:<span > </span>{RedrumCompany.taxNumber}</span></p>



<p className="MsoNormal" ><span >Im Folgenden „Redrum
Films“ genannt –</span></p>


<br/>


<p className="MsoNormal" ><span  >Und</span></p>
<br/>


<p className="MsoNormal" >{user.full_name}</p>
<p className="MsoNormal">{user.street} {user.house_number}{user.address_extra_1 !== "" ? `, ${user.address_extra_1}` : ''}{user.address_extra_2 !== "" ? `, ${user.address_extra_2}` : ''}</p>
<p className="MsoNormal">{user.zip_code} {user.city}</p>
<p className="MsoNormal">{user.country}</p>
<p className="MsoNormal">E-mail: {user.email}</p>





<p className="MsoNormal" ><span >– (im Folgenden<span > </span>„Producer/Kunde“<span > </span>genannt) –</span></p>
        
        </div>
        <h1 ><a ></a><a >&nbsp;</a></h1>

        <br/> <br/> <br/> <br/>
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

<br/>

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
    </div>
  )
}

export default NewContractGerman