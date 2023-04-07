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

interface IProps {}

const TestPage: React.FunctionComponent<IProps> = (props) => {
  const [user, setUser] = React.useState<FirebaseUser | null>(null);
  const [project, setProject] = React.useState<FirebaseBundle | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

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
    getSpecificProject('1676120027435', setProject)
    getCurrentUserFunction(auth.currentUser?.uid, setUser, setLoading)
  }, [auth])

    return (
      <div className='w-100 text-center'>

        <Button
        onClick={generatePDF}
        appearance='primary'
        className='r-btn r-main-btn'
        >
          Download contract
        </Button>
        {loading ? (<RedrumProLoader/>) : user !== null ? (
          <div className='hide-this'>
            <ContractComponent user={user!} project={project!} investAmount={250}/>
          </div>
          ) : null}
      </div>
    )
}

export default TestPage;
