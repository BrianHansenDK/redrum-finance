import IMG1 from '../../assets/redrumpro_invoice_files/image001.png'
import './invoice.scss'
import { FirebaseBundle, FirebaseInvestment, FirebaseInvoice, FirebaseUser } from '../../database/Objects'
import { formatDate, getCity, getUserHousenumber, getUserStreet, getZipCode, numberWithCommas } from '../../misc/custom-hooks'

interface IProps {
  user: FirebaseUser,
  invoice: FirebaseInvoice,
  investment: FirebaseInvestment,
  project: FirebaseBundle,
}

const InvoiceDe = (props: IProps) => {
  const {user, invoice, investment, project} = props;

  const investmentDate = new Date(investment.created_at)

  return (
    <div lang="EN-US" className="redrum-invoice" id={`invoice_${invoice.id}_document_de`}>

<div >

<p className="invoice-img" ><span ><img src={IMG1} width="200" height="60"/></span></p>

</div>

<span ><br/>
</span>

<div className="invoice-content">

<div className="intro">
  <div className="box1">
<p className="MsoBodyText" ><u>Redrum Films &amp; Entertainment GmbH. Hauptstr. 26. 10827 Berlin</u></p>
{ user.company_account ? (
  <p className="MsoListParagraph"> {user.company_name}</p>
) : null }


<p className="MsoListParagraph"> {user.full_name}</p>

<p className="MsoListParagraph"> {getUserStreet(user)} {getUserHousenumber(user)}</p>
{ user.address.split(', ').length > 2 ? (
  <p className="MsoListParagraph"> {user.address.split(', ').length > 2 ? user.address.split(', ')[1] : ''}{user.address.split(', ').length > 3 ? `, ${user.address.split(', ')[2]}` : ''}</p>
) : null}

<p className="MsoListParagraph" > {getZipCode(user)}, {getCity(user)}</p>

<p className="MsoListParagraph"> {user.country}</p>

</div>

<div className="box2">


<p className="MsoNormal"  ><span >Redrum</span><span > </span><span >Films</span><span > </span><span >&amp;</span><span > </span><span >Entertainment</span><span > </span><span >GmbH</span></p>

<p className="MsoNormal"  ><span >Hauptstr.</span><span > </span><span >26</span></p>

<p className="MsoNormal"  ><span >10827</span><span > </span><span >Berlin</span></p>

<p className="MsoBodyText" ><span >&nbsp;</span></p>

<p className="MsoListParagraph" >&nbsp;&nbsp;Investoren id: {user.id}</p>

<p className="MsoListParagraph" >&nbsp;&nbsp;Investitionsdatum: {formatDate(investmentDate)}</p>

<p className="MsoNormal" >&nbsp;&nbsp;Rechnungsnummer: {invoice.id}</p>

<p className="MsoBodyText"><span >&nbsp;</span></p>
</div>
</div>
<p className="MsoBodyText"><span >&nbsp;</span></p>

<div className="doc-info">

<h1 className='small-title'>Dein Investment</h1>
<h1 className='small-title'>Seite 1</h1>
</div>

</div>

<div className="project-information">
  <table className="project-information-table">
    <thead>
      <tr>
        <td>
          Projekt id
        </td>
        <td>
          Projekt name
        </td>
        <td>
          Anteile
        </td>
        <td>
          Preis je Anteil
        </td>
        <td>
          Gesamt
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{project.id}</td>
        <td>{project.name}</td>
        <td className='text-center'>{numberWithCommas(investment.amount - investment.bonus)}</td>
        <td className='text-center'>1 EUR</td>
        <td className='text-center'>{numberWithCommas(investment.paid)} €</td>
      </tr>
    </tbody>
  </table>

<div className="investment-info">
  <p className="inf">
    <span className='lab'> Anteile: </span>
    <span className='val'>{numberWithCommas(investment.amount - investment.bonus)}</span>
  </p>
  <p className="inf">
    <span className='lab'> Bonus Anteile: </span>
    <span className='val'>{investment.bonus}</span>
  </p>
  <p className="inf">
    <span className='lab'> Service Gebühr: </span>
    <span className='val'>0 EUR</span>
  </p>
  <p className="inf">
    <span className='lab'> Management Gebühr: </span>
    <span className='val'>0 EUR</span>
  </p>
  <strong><p className="inf">
    <span className='lab'> Gesamtanteile: </span>
    <span className='val'>{numberWithCommas(investment.amount)}</span>
  </p></strong>
  <strong><p className="inf">
    <span className='lab'> Gesamtsumme: </span>
    <span className='val'>{numberWithCommas(investment.paid)} EUR</span>
  </p></strong>
</div>

</div>


<div className="doc-footer">

  <div className="footer-box first">

<p className="MsoBodyText" >Redrum <span >F</span>ilms <span >&amp;</span><span > </span>Entertainment
GmbH </p> <p> Hauptstr.<span > </span>26</p>

<p className="MsoBodyText" >10827<span > </span><span >Berlin</span></p>

<p className="MsoBodyText" ><span >CEO</span><span > </span><span >Sevilay</span><span > </span><span >Akbayir</span></p>
</div>

<div className="footer-box">
<p className="MsoBodyText" ><span >Berliner</span><span >
</span> Volksbank </p>
<p><span >IBAN</span></p>

<p className="MsoBodyText" ><span >DE28</span><span > </span><span >1009</span><span > </span><span >0000</span><span > </span><span >2785</span><span > </span><span >9180</span><span > </span><span >05 </span></p>
<p>BIC<span > </span>BEVODEBB</p>

</div>

<div className="footer-box">
<p className="MsoBodyText" >Steuernummer:<span > </span>27/486/50377</p><p> USt.-ID:<span > </span>DE328784557</p>

<p className="MsoBodyText" ><span >Registergericht: </span></p><p>Amtsgericht Charlottenburg</p><p> <span >Registernummer:</span></p>

<p className="MsoBodyText" ><span >HRB</span><span > </span><span >209180</span><span > </span><span >B</span></p>
</div>

<div className="footer-box last">
<p className="MsoBodyText" ><a href="http://www.redrumpro.de/"><span >www.redrumpro.de</span></a><span > </span><a href="mailto:info@redrumpro.de"><span >info@redrumpro.de</span></a></p>
</div>
</div>




</div>
  )
}

export default InvoiceDe
