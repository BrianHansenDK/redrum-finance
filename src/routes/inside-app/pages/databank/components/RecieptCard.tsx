import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { auth, database, getCurrentUserFunction, getRelevantInvoice } from '../../../../../firebase'
import { formatDate, numberWithCommas } from '../../../../../misc/custom-hooks'
import { mainCard } from '../../../themes/cardStyles'
import { mainColors } from '../../../themes/colors'
import RecieptSharesInfo from './RecieptSharesInfo'
import '../styles/reciept.scss'
import { FirebaseBundle, FirebaseInvestment, FirebaseInvoice, FirebaseShare, FirebaseUser } from '../../../../../database/Objects'
import ContractComponent from '../../../../test/ContractComponent'
import ContractGerman from '../../../../test/ContractGerman'
import RedrumProLoader from '../../../components/RedrumProLoader'
import { Button, Message, useToaster } from 'rsuite'
import jsPDF from 'jspdf'
import html2pdf from 'html2pdf.js';
import InvoiceEn from '../../../../test/InvoiceEn'
import InvoiceDe from '../../../../test/InvoiceDe'
import { storage, storageRef } from '../../../../../firebaseStorage'
import { getDownloadURL } from 'firebase/storage'
import NewContractComponent from '../../../../test/NewContractComponent'
import NewContractGerman from '../../../../test/NewContractGerman'
import '../../../../test/contract-component.scss'

const RecieptCard = ({investment, en}: {investment: FirebaseInvestment, en: boolean}) => {
  const [project, setProject] = useState<FirebaseBundle | null>(null)
  const [shares, setShares] = useState<any>(null)
  const toaster = useToaster()

  // User
  const [user, setUser] = useState<FirebaseUser | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // Invoice
  const [invoice, setInvoice] = useState<FirebaseInvoice | null>(null)
  const [invLoading, setInvLoading] = useState<boolean>(false)
  // Reference Project and shares
  const projectRef = ref(database, 'projects/' + investment.project)
  const sharesRef = ref(database, 'shares/')
  const invoiceRef = ref(database, 'invoices/' + investment.invoice_number)
  useEffect(() => {
    // Get Project and shares
    onValue(projectRef, (snap) => {setProject(snap.val())})
    onValue(sharesRef, (snap) => {
      let data: any[] = []
        snap.forEach((share) => {
        share.val().investment == investment.id && data.push(share.val())
      })
      setShares(data)
      })
      getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
      onValue(invoiceRef, (snap) => {setInvoice(snap.val())})
  }, [])

  useEffect(() => {
    if (user === null) {
      getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
    }
  }, [loading])
  const createdDate = new Date(investment.created_at)
  const createdTime = new Date(investment.created_at).toLocaleTimeString()


  const generatePDF = async () => {
    if (project !== null) {
      const options = {
        margin: 0,
        filename: `redrum_pro_${project.name!.split(' ').join('_')}_${en ? 'framework_agreement' : 'rahmenvertrag'}.pdf`,
        jsPDF: {
          unit: 'pt',
          format: 'a4',
          orientation: 'portrait'
        },
        pagebreak: { after: '.break-page' },
        // Add the --zoom option here
        html2canvas: { scale: 1.3 },
      };
  
      const element = document.querySelector(en ? '#english-document' : '#german-document');
  
      try {
        // Generate and download the PDF using html2pdf
        await html2pdf()
          .set(options)
          .from(element)
          .save();

        // Get the download URL of the other PDF file from Firebase Storage
        const otherPDFPath = `documents/projects/${project.name?.replaceAll(' ', '_')}/${en ? 'framework_agreement' : 'rahmenvertrag'}.pdf`;
        const otherPDFRef = storageRef(storage, otherPDFPath); // Replace 'storage' with your Firebase storage reference
        const otherPDFDownloadURL = await getDownloadURL(otherPDFRef);
        window.open(otherPDFDownloadURL, '_blank');

        // Create an anchor element to trigger the download of the other PDF from Firebase Storage
        /*const a2 = document.createElement('a');
        a2.href = otherPDFDownloadURL;
        //a2.download = `redrum_pro_${project.name!.split(' ').join('_')}_${en ? 'framework_agreement' : 'rahmenvertrag'}.pdf`;
        a2.style.display = 'none';
        document.body.appendChild(a2);
        a2.click();
        document.body.removeChild(a2); */
      } catch (error) {
        toaster.push(
          <Message showIcon type='error' closable duration={8000}>
            {`Error generating PDF:, ${error}`}
          </Message>,{placement: 'topCenter'})
      }
    }
  };

  const generateInvoice = () => {
    if (invoice !== null) {
      var doc = new jsPDF("p", "pt", "a4");
      // @ts-ignore
      doc.html(document.querySelector(en ? `#invoice_${invoice.id}_document_en` : `#invoice_${invoice.id}_document_de`), {
        // @ts-check
        callback: function(pdf){
          pdf.save(`redrum_pro_${en ? 'invoice' : 'rechnung'}_${invoice!.id}.pdf`);
        }
      })
    }
  }
  return (
    <>
    {loading && invoice === null ? (<RedrumProLoader/>) : user === null ? null : (
    <div className='reciept-card'>
      {project?.name && (
        <h1 style={styles.projectTitle}>You invested in: {project?.name}</h1>
      )}
    <p>
      You have paid: {numberWithCommas(investment.paid)}€
    </p>
    <p>
      Date of investment: {formatDate(createdDate)}
    </p>
    {
      shares !== null && shares.map((share: any) => (
        <RecieptSharesInfo share={share} key={share.id} />
      ))
    }
    <Button className='mt-2' onClick={generatePDF}>
      {en ? 'Download agreement' : 'Vereinbarung herunterladen'}
    </Button>
    <Button className='mt-2' onClick={generateInvoice}>
      {en ? 'Download Invoice' : 'Rechnung herunterladen'}
    </Button>
    <div className='hide-this'>
        {
           en ? (
            <NewContractComponent day={investment.created_at} user={user} project={project!} investAmount={investment.amount} bonus={investment.bonus}/>
          ) : (
            <NewContractGerman day={investment.created_at} user={user} project={project!} investAmount={investment.amount} bonus={investment.bonus}/>
          )
        }
      </div>
      <div className='hide-this'>
        {
           invoice === null ? null : en ? (
            <InvoiceEn user={user} invoice={invoice!} investment={investment} project={project!}/>
          ) : (
            <InvoiceDe user={user} invoice={invoice!} investment={investment} project={project!}/>
          )
        }
      </div>
    </div>)}
    </>
  )
}

const styles = {
  projectTitle: {
    fontSize: 18.5,
    color: mainColors.dark,
  }
}

export default RecieptCard
