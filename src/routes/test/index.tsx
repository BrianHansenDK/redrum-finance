import React from 'react'
import Empty from '../../assets/empty_img.png'
import PaypalCheckoutBtn from '../../components/PaypalCheckoutBtn'
import { Button, IconButton, Radio, RadioGroup } from 'rsuite'
import GoogleIcon from '../../assets/svgs/GoogleSvg';
import { auth, getCurrentUserFunction, getSpecificProject } from '../../firebase';
import ContractComponent from './ContractComponent';
import { FirebaseBundle, FirebaseUser } from '../../database/Objects';
import RedrumProLoader from '../inside-app/components/RedrumProLoader';
import jsPDF from 'jspdf'
import InvoiceEn from './InvoiceEn';
import InvoiceDe from './InvoiceDe';

interface IProps {}

const TestPage: React.FunctionComponent<IProps> = (props) => {
  const [user, setUser] = React.useState<FirebaseUser | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const invoice = {
    bundle_id: 1676120027435,
    created_at:"2023-05-08T08:42:06.641Z",
    id: 1,
    investment_id: 1683535323868,
    investor_email: "purexfigure@gmail.com",
    project_ids: [1676119736906],
    user_id:"ApMUvF3upNQ5QoTM7jWi8xejIQr2"
  }
  const project = {
    banner:"https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2FPro_Action_Bundle%2Fbanner?alt=media&token=c24c2e72-d2b2-4f77-ad00-cce2c005b479",
    currentlyInvested: 11210,
    description: "Des erste Projekt! 😁",
    endDate:"Thu Jun 15 2023",
    goal: 110000,
    guaranteedReturn: 7,
    id: 1676120027435,
    intro: "Redrum Pro Action Bundle 🚀",
    movies: [1676119736906],
    name: "The Basement Games",
    overviewImage: "https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2FPro_Action_Bundle%2Foverview?alt=media&token=0cb934bc-fbed-4a26-b4a9-fa6fd0f0e5db",
    presentationImage: "https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2FPro_Action_Bundle%2Fpresentation?alt=media&token=6c4352fc-ced6-4a50-9f20-0db1de40244d",
    publication: "max. 12",
    smallImage: "https://firebasestorage.googleapis.com/v0/b/redrum-finance.appspot.com/o/images%2Fprojects%2FPro_Action_Bundle%2Favatar?alt=media&token=90b8ed24-7021-42f0-a24c-447079004e83",
    startDate: "Fri Mar 10 2023",
    value: 130000
  }
  const investment = {
    amount:5,
    bonus: 0,
    created_at: "2023-05-08T08:42:03.868Z",
    gain :5.3500000000000005,
    id :1683535323868,
    invoice_number :2,
    movies: [1676119736906],
    paid :5,
    project : 1676120027435,
    user_id :"ApMUvF3upNQ5QoTM7jWi8xejIQr2",
  }


  const generatePDF = () => {
    var doc = new jsPDF("p", "pt", "a4");
    // @ts-ignore
    doc.html(document.querySelector("#english-document"), {
      // @ts-check
      callback: function(pdf){
        pdf.save("contract.pdf");
      }
    })
  }
  React.useEffect(() => {
    getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
  }, [])
  React.useEffect(() => {
    if (user === null) {
      getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
    }
  }, [loading])

    return (
      <>
      {loading ? (<RedrumProLoader/>) : user === null ? null : (
        <div>
        <InvoiceEn user={user} invoice={invoice} investment={investment} project={project}/>
        <div style={{padding: '50px 0'}}></div>
        <InvoiceDe user={user} invoice={invoice} investment={investment} project={project}/>
        </div>
      )}
      </>
    )
}

export default TestPage;
