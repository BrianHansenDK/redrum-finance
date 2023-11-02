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

const NewContractComponent = (props: IProps) => {
    const {day, user, project, investAmount, bonus} = props;
  const date = new Date(day);
  return (
    <div id="english-document">
        <div className="WordSection1 break-page">
        <br/> <br/> <br/> <br/>
            <h1 >Basic agreement</h1> <br/>

            <p className="MsoNormal" >between</p> <br/>

            <p className="MsoNormal" >{RedrumCompany.name}</p>

            <p className="MsoNormal" ><span lang="DE">{RedrumCompany.streetEnglish}</span></p>

            <p className="MsoNormal" ><span lang="DE">{RedrumCompany.city}</span></p>

            <p className="MsoNormal" ><span lang="DE">E-mail: producer@redrumpro.com</span></p>

            <p className="MsoNormal" >Managing
            Director: Rabih Merhi </p>

            <p className="MsoNormal" >{RedrumCompany.CRB}</p>

            <p className="MsoNormal" >Sales tax
            ID: {RedrumCompany.taxNumber}</p>

            <p className="MsoNormal" >Hereinafter
            referred to as "Redrum Films" -.</p>
            <br/>
            <p className="MsoNormal" ><span>and</span></p><br/>

            <p className="MsoNormal" >{user.full_name}</p>
            <p className="MsoNormal">{user.address.split(', ')[0]}</p>
            <p className="MsoNormal">{user.address.split(', ')[1]}</p>
            <p className="MsoNormal">E-mail: {user.email}</p>

            <p className="MsoNormal" >- (hereinafter
            referred to as "Producer/Customer") -.</p>
            
            <p className="MsoNormal" ><span >&nbsp;</span></p>
        
        </div>
        <br/> <br/> <br/> <br/>

        <h1 ><u><span >PURCHASE CONTRACT</span></u></h1>

        <p className="MsoNormal" ><span >Investing in media
        products involves the risk of losing the entire investment. If and to the
        extent that prospectus liability applies, this here is the prospectus.</span></p>

        <h1 ><span >&nbsp;</span></h1>

        <p className="MsoNormal"  ><a ></a><a >1.</a></p>

        <h2 ><a ></a><a >Agreement of the contracting parties</a></h2>

        <p className="MsoNormal" >Redrum
        Films undertakes to sell to the customer the share in the Entertainment Project
        as described in section (II.) of the conditions, subject to the following
        conditions.</p>
        
        <br/>


        <p className="MsoNormal"  >2.</p>

        <h2 ><a ></a><a >Object of purchase</a></h2>

        <p className="MsoNormal" >By
        purchasing through the RedrumPro website/app, the customer purchases shares in
        one or more Entertainment Project(s) at the price specified therein. </p>



        <p className="MsoNormal" >The Entertainment
        Project is thereby specified as:</p>

        <br/>

        <p className="MsoNormal"><span className='contract-project-fact'>Project:</span> <span>{project.name}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Contract term:</span> <span>Indefinite</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Investment start date:</span> <span>{formatDate(new Date(project.startDate!))}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Investment deadline:</span> <span>{formatDate(new Date(project.endDate!))}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Redrum film value:</span> <span>250.000,00 EUR</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Total shares:</span> <span>{investAmount}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Bonus shares:</span> <span>{bonus}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Price per share:</span> <span>1,00 EUR</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Transaction date:</span> <span>{formatDate(date)}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Fixed yield:</span> <span>{project.guaranteedReturn}%</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Acquired shares:</span> <span>{investAmount + bonus}</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Price for shares:</span> <span>{investAmount} EUR</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Service flat rate:</span> <span>0,00 EUR</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Management fee:</span> <span>0,00 EUR</span></p>

        <p className="MsoNormal"><span className='contract-project-fact'>Total amount:</span> <span>{investAmount} EUR</span></p>


        <p className="MsoNormal" ><span >&nbsp;&nbsp; </span></p>

        <p className="MsoNormal" ><span >&nbsp;</span></p>

        <p className="MsoNormal" >
            The remaining fractional ownership of the Entertainment Project is held either by
            other RedrumPro producers or directly by Redrum Films. The client's fractional
            ownership is subject to restrictions as a direct result of these general
            conditions and the law. Reference is made to §§ 741 ff. BGB and §§ 1008 to 1011
            BGB. 
        </p>

        <p className="MsoNormal" ><span >&nbsp;</span></p>

        <p className="MsoNormal" ><span >
            Redrum Films and the Producer agree that RedrumPro will transmit ownership of the share for the client. 
        </span></p>
    </div>
  )
}

export default NewContractComponent