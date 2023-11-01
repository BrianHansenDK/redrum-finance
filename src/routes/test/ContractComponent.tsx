import React from 'react'
import { FirebaseBundle, FirebaseUser } from '../../database/Objects'
import './contract-component.scss'
import { formatDate } from '../../misc/custom-hooks';
import { RedrumCompany } from '../../database/CompanyInfo';

interface IProps {
  user: FirebaseUser,
  project: FirebaseBundle,
  investAmount: number,
  bonus: number,
  day: string,
}
const ContractComponent = (props: IProps) => {
  const {day, user, project, investAmount, bonus} = props;
  const date = new Date(day);
  return (
    <div id="english-document">
    <div className="WordSection1 break-page">

<h1 >Basic agreement</h1> <br/>

<p className="MsoNormal" >between</p> <br/>

<p className="MsoNormal" >{RedrumCompany.name}</p>

<p className="MsoNormal" ><span lang="DE">{RedrumCompany.street}</span></p>

<p className="MsoNormal" ><span lang="DE">{RedrumCompany.city}</span></p>

<p className="MsoNormal" ><span lang="DE">E-mail: producer@redrumpro.com</span></p>

<p className="MsoNormal" >Managing
Director: Rabih Merhi </p>

<p className="MsoNormal" >Commercial
register of the district court Charlottenburg under HRB 209180 B</p>

<p className="MsoNormal" >Sales tax
ID: DE328784557</p>

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
<div className="WordSection2">
<br/>
<h1 ><a ></a><a ></a><a >Preliminary note</a></h1>
<br/>
<p className="MsoNormal"  >1.</p>

<p className="MsoNormal" >All
services, offers and deliveries of Redrum Films &amp; Entertainment GmbH
(hereinafter "Redrum Films") in the areas of film, radio play, audio book,
book as well as other physical and digital Entertainment Projects (hereinafter
"Entertainment Projects") to clients (hereinafter "Producer")
are based exclusively on the framework agreement of Redrum Films &amp;
Entertainment GmbH.</p>



<p className="MsoNormal" ><span >There is a separate agreement for the trading function
that </span>the Producer can view and enter into once it is published along
with the secondary market via the RedrumPro website/app.</p>



<p className="MsoNormal" >Redrum
Films is a company that produces Entertainment Projects and sells shares in
these projects. Producers have the opportunity to purchase shares in these
projects, which are subsequently traded in good faith on the international film
market. However, it is important to note that Redrum Films does not provide
financial services such as investment advice or asset management. There is no
obligation to publish a prospectus.</p>



<p className="MsoNormal" >Redrum
Films' offerings are not corporate investments such as the purchase of shares
in a closed-end fund. Clients act independently directly in relation to the Entertainment
Projects offered and pursue individual strategies without common goals. The
purchase of shares in the Entertainment Projects involves risks and it is
recommended that producers consider the risks before making a purchase. The
maximum risk is the total loss of the invested money.</p>



<p className="MsoNormal" >Statements
about future actions and performance objectives of Redrum Films contained in
these terms or other statements made by Redrum Films are subject to
uncertainties and may prove to be inaccurate in hindsight. There is no warranty
or guarantee with respect to forward-looking statements.</p>





<p className="MsoNormal" >Customers
are advised to consult their legal and tax advisors to obtain a reasonable
estimate of the benefits, burdens and other effects of the acquisition.</p>



<p className="MsoNormal" >Definition
of fractional ownership: Redrum Films considers fractional ownership to be the smallest
possible share of an Entertainment Project that can be acquired. The share
entitles the producer to a percentage share of the profit distribution
depending on the number of shares purchased in relation to the total number of
shares. The acquired shares do not confer any decision-making and/or
co-determination rights of any kind. Redrum Films is the sole decision maker.</p>



<p className="MsoNormal break-page" >Example: A
film project with a budget of 100,000€ results equally in 100,000 shares with a
nominal value of 1€ per share.</p>

<br/>

<p className="MsoNormal"  >2.</p>

<h2 >REDRUM FILM VALUE (REDRUM
FILM VALUE)</h2>

<p >The Parties agree that the
term "Redrum Film Value" describes the monetary value at which Redrum
Films &amp; Entertainment GmbH is willing to sell shares of its film project
via the RedrumPro Web App. The Redrum Film Value is determined based on a
valuation of the project by Redrum Films &amp; Entertainment GmbH and may vary
depending on market conditions and demand.</p>

<p >The evaluation and
resulting Redrum Film Value of a film project is based on the following
factors, among others:</p>


<p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Cultural value: The cultural value of a film refers to its
significance and influence on society and culture. A film may be considered
culturally significant if, for example, it addresses historical events or
social issues or establishes new cultural trends and styles. The cultural value
of a film may also be determined by awards and recognition at festivals or
other events.</p>

<p >&nbsp;</p>

<p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Creative value: The creative value of a film refers to its
artistic quality and originality. A film may be considered creatively valuable
if it uses innovative cinematic techniques or narrative structures or produces
unique visual or sound effects. A film's creative value may also be determined
by its recognition by film critics or other industry experts.</p>

<p >&nbsp;</p>

<p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Commercial value: The commercial value of a film refers to its
ability to generate revenues and turn a profit. A film can be considered
commercially valuable if it appeals to a broad audience and generates high box
office takings, or if it generates additional revenue through merchandising or
other marketing strategies. The commercial value of a film can also be
determined by its repeat viewing time on television, sales figures on DVD or Blu-Ray,
or streaming platforms.</p>

<p >&nbsp;</p>

<p ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Production or Manufacturing value: The production or
manufacturing value of a film project refers to the total costs required to
produce the film, including employee compensation, equipment costs, props,
locations, script, post-production and other related costs. It is the amount that
must be expended to produce the film from concept to final completion. The
production value can vary greatly depending on the type and scope of the film. </p>

<p >&nbsp;</p>

<p >Overall, the Redrum Film
Value is a complex and multi-layered assessment of a film's value, which is not
limited to its production costs, but also takes into account its cultural,
creative and commercial value, among other factors.</p>

<p >&nbsp;</p>

<p >Redrum Films &amp;
Entertainment GmbH reserves the right to change or adjust the Redrum Film Value
at any time as circumstances change or new information becomes available.
However, the parties agree that changes in the Redrum Film Value due to factors
beyond the control of Redrum Films &amp; Entertainment GmbH shall not
constitute a breach of this agreement.</p>

<p >&nbsp;</p>

<p >The parties agree that Redrum
Film Value is an important factor in the valuation of the shares in the Film project
and that such term is used in this agreement in accordance with such
definition.</p>



<p className="MsoNormal break-page" ><span >Having said this, the parties agree as follows:</span></p>



<b><span ><br/>
</span></b>

<h1 ><a ></a><a >&nbsp;</a></h1>

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

<p className="MsoNormal" >The
remaining fractional ownership of the Entertainment Project is held either by
other RedrumPro producers or directly by Redrum Films. The client's fractional
ownership is subject to restrictions as a direct result of these general
conditions and the law. Reference is made to §§ 741 ff. BGB and §§ 1008 to 1011
BGB. </p>

<p className="MsoNormal" ><span >&nbsp;</span></p>

<p className="MsoNormal" ><span >Redrum Films and the Producer agree that RedrumPro will transmit
ownership of the share for the client. </span></p>



<p className="MsoNormal"  >3.</p>

<h2 ><a ></a><a >Purchase price</a></h2>

<p className="MsoNormal" >The price
for the purchase of the shares is calculated on the basis of the price per
share and the number of shares purchased. A detailed list of the prices
included in the total price can be found on the product page and in the order
summary on the RedrumPro website/app.</p>



<p className="MsoNormal"  >4.</p>

<h2 ><a ></a><a >Transfer of ownership of the object of purchase</a></h2>

<p className="MsoNormal break-page" >Ownership
of the purchased share of the Entertainment Project is transferred to the
client. However, this agreement is contingent upon the total purchase price
being paid in full to and received by Redrum Films.</p>

<br/>

<p className="MsoNormal"  >5.</p>

<h2 ><a ></a><a >Warranty for the object of purchase</a></h2>

<p className="MsoNormal" >Redrum
Films' obligation is limited solely to the transfer of the interest in the Entertainment
Project as described in (II.) Object of Purchase.</p>
<br/>
<p className="MsoNormal"  >6.</p>

<h2 ><a ></a><a >No consultation, risk disclosure</a></h2>

<p className="MsoNormal" >Redrum
Films is not obligated to advise the client regarding the purchase of shares in
the Entertainment Project. The client is solely responsible for its purchasing
decisions. Redrum Films cannot and does not provide any binding information regarding
future price trends, tradability, market trends or similar economic projections
with respect to the Entertainment Project shares. The price trends indicated on
the RedrumPro website are general comparative values and do not relate to the
specific shares of the Entertainment Project. They are non-binding indications.</p>




<p className="MsoNormal" >Shares in Entertainment
Projects may be subject to significant price fluctuations, which may be based
on various unforeseeable developments. There is a risk that the shares can only
be resold at a loss and that the money invested is lost. Redrum Films does not
guarantee any future positive market price developments of the Entertainment
Project and is not liable for any losses of the customer.</p>



<p className="MsoNormal"  >7.</p>

<h2 ><a ></a><a >Other</a></h2>

<p className="MsoNormal" >All
subcontracts are subject to the General Conditions.</p>



<p className="MsoNormal"  >8.</p>

<h2 ><a ></a><a >Silent partnership</a></h2>

<p className="MsoNormal" >The Producer
has only the right to the profit generated from the proceeds of the content,
but no right of co-determination or decision-making. Likewise, he has no right
to the physical or digital content itself or shares therein. The storage media
of the content remain the property of Redrum Films. The investor will not
receive any further information about the development, creation or storage of
the projects outside of the insights provided by Redrum Films.</p>



<p className="MsoNormal"  >9.</p>

<h2 ><a ></a><a >Transfer &amp; consolidation of investments of different
projects</a></h2>

<p className="MsoNormal" ><span >If target amounts are not reached, Redrum Films may
transfer all deposited funds to other or similar projects in good faith without
asking the client.</span></p>

<p className="MsoNormal" ><span >&nbsp;</span></p>

<p className="MsoNormal"  >10.</p>

<h2 ><a ></a><a >Exit</a></h2>

<p className="MsoNormal" ><span >Definition:</span><a > The exit refers
to the entire Entertainment Project (including all existing shares, regardless
of how many shares the Producer owns) being sold to a potential buyer at a
certain price. Producer approval is not required, as Redrum Films has sole
decision-making authority. After deducting the 10% commission, the sale amount
is distributed to the producers according to the number of shares.</a></p>






<p className="MsoNormal"  >11.</p>

<h2 ><a ></a><a >Payment</a></h2>

<p className="MsoNormal" >The
producer receives a fixed return on the monetary value of the acquired shares latest
after 12-18 months from the project-related investment closing date.</p>



<p className="MsoNormal" >In
addition, for the latest 12-18 months after the project-related investment
closing date, the Producer has the following options:</p>



<p className="MsoNormal" >A: The
Producer retains its acquired shares and can thus participate in the annual
profit distributions and trade the shares on the integrated secondary market.</p>



<p className="MsoNormal" >B:
RedrumPro offers the Producer a one-time opportunity to transfer the acquired
shares in the Entertainment Project back to RedrumPro upon project release and
receives the corresponding initial capital of the shares in exchange. As a
result, the Producer is no longer a shareholder and cannot participate in
potential profit distributions.</p>



<p className="MsoNormal break-page" >The options
are presented to the Producer via the RedrumPro website/app when the project is
published (for the latest of 12-18 months after the investment deadline), and
the Producer makes a binding decision via the RedrumPro website/app. </p>


<br/>
<p className="MsoNormal"  >12.</p>

<h2 ><a ></a><a >Right of custody and ownership</a></h2>

<p className="MsoNormal" >Redrum
Films agrees to <span >hold </span>the Entertainment
Project in accordance with the following provisions.</p>

<br/>

<p className="MsoNormal"  >13.</p>

<h2 ><a ></a><a ></a><a >Custody of the Entertainment
Project</a></h2>

<p className="MsoNormal" >The Producer
commissions Redrum Films to store the Entertainment Project securely in
physical and digital form. The Producer has access to the (fractional)
ownership of the Entertainment Project and all information about it via the RedrumPro
App.</p>



<p className="MsoNormal"  ><a >14.</a></p>

<h2 >Custody costs</h2>

<p className="MsoNormal" >Redrum
Films does not currently charge storage fees, but reserves the right to do so
in the future.</p>



<p className="MsoNormal"  ><a >15.</a></p>

<h2 ><a ></a><a >Delegation of duties</a></h2>

<p className="MsoNormal" >Redrum
Films has the right to delegate certain tasks related to the storage and
maintenance of the Entertainment Project to third parties. This may involve
making arrangements with professional storage and security companies to ensure
that the Entertainment Project is properly stored and protected. However,
Redrum Films remains responsible for the proper storage and care of the Entertainment
Project and must ensure that the third parties it engages properly perform
their duties.</p>



<p className="MsoNormal"  >16.</p>

<h2 ><a ></a><a ></a><a >Insurance</a></h2>

<p className="MsoNormal" >It is
Redrum Films' responsibility to insure physical forms of the Entertainment
Project, such as DVDs, Blu-Rays, USB and other storage media, and any other
physical forms in the appropriate storage facility against potential risks such
as fire, water damage, lightning, explosion, burglary and robbery, and to
maintain such insurance during custody. Further, Redrum Films shall adequately
insure any digital forms of the Entertainment Project against data loss,
unauthorized access, hacking, malware infection and other similar threats and
maintain such protection during custody.<a ></a></p>



<p className="MsoNormal"  >17.</p>

<h2 ><a ></a><a >Liquidation, dissolution or <span>insolvency</span></a></h2>

<p className="MsoNormal" >The Entertainment
Project is outside the assets of Redrum Films and will not be affected by any
possible liquidation, dissolution or insolvency of the company as custodian of
the projects. However, if Redrum Films were to be liquidated, dissolved or
become insolvent, it would be entitled and obliged to appoint a successor to
take over the management and custody of the Entertainment Projects under the
same conditions.</p>





<p className="MsoNormal" ><span >If Redrum Films were also to be a part owner of the Entertainment
Project, the fractional ownership would not be part of the insolvency
proceedings. In this case, however, the liquidation of the project would have
to follow the insolvency law provisions of the community of part owners, and
the division of the community or other liquidations would take place outside
the insolvency proceedings. Sections 84 of the </span>Insolvency Code and
Sections 752 et seq. and 747 of the Civil Code apply here. In the event of
insolvency, the producer, <span >unless he himself is
affected by the insolvency, has a right to segregation for his share of the
co-ownership. The producer's right to segregation may be directed either to the
establishment of co-ownership, the granting of co-ownership or to the
settlement.</span></p>

<p className="MsoNormal" ><a >&nbsp;</a></p>

<p className="MsoNormal"  >18.</p>

<h2 >Revenue</h2>

<p className="MsoNormal" >Generally,
fractional ownership of a Entertainment Project is acquired for the purpose of
either:</p>



<p className="MsoNormal" ><span >A: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; To be profitably licensed by Redrum Films.</span></p>

<p className="MsoNormal" ><span >B: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the event of
an exit opportunity, sell all shares as a whole project and allocate the
proceeds according to the number of shares per owner. </span></p>

<p className="MsoNormal" ><span >C: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and/or the
Producer trades its shares independently and at its own responsibility and
discretion on the secondary market provided by RedrumPro. </span></p>

<p className="MsoNormal break-page" ><span >&nbsp;</span></p>

<br/>

<p className="MsoNormal" ><span >The following terms and conditions of the sales order are
agreed between the parties, provided that the Customer has accepted the
separate General Terms and Conditions of RedrumPro.</span></p>
<br/>
<p className="MsoNormal"  ><a >19.</a></p>

<h2 ><a ></a><a >Sales processing</a></h2>

<p className="MsoNormal" ><span >In the event that the Producer sells its fractional ownership
of the Entertainment Project through the secondary market provided by
RedrumPro, Redrum Films will be given the authority to transfer the fractional
ownership to the buyer once the purchase price has been paid in full. The buyer
will pay the purchase price to the Producer through Redrum Films.</span></p>





<p className="MsoNormal"  ><a>20.</a></p>

<h2 ><a ></a><a>Commission</a> and handling costs</h2>

<p className="MsoListParagraph" ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>For the sale on the secondary market, the Producer will incur a
standard market brokerage fee for RedrumPro.</p>

<p className="MsoListParagraph" ><span >·<span >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span>Redrum Films is entitled to retain handling fees on all revenues
generated through all means of exploitation (sale, distribution, license, etc.)
in the amount of 10% of the revenues. <a></a></p>



<p className="MsoNormal">21.</p>

<h2 ><a ></a><a >Tax treatment of the <span >sale</span></a></h2>

<p className="MsoNormal" >Redrum
Films draws the Producer's attention to the fact that the tax treatment of the
sale of the Entertainment Project is the responsibility of the purchaser. It is
at the Producer's own discretion to determine whether the sale of the
fractional ownership triggers a tax transaction and whether the Producer is obliged
to declare this to the tax authorities and pay taxes. Redrum Films cannot
provide tax advice and therefore recommends consulting a tax advisor.</p>

<p className="MsoNormal" ><a>&nbsp;</a></p>

<p className="MsoNormal" >22.</p>

<h2 ><a></a><a><span >Trading</span></a>
function</h2>

<p className="MsoNormal" ><span >There is a separate agreement for the trading function
that </span>the Producer can view and enter into once it is published along
with the secondary market via the RedrumPro website/app.<a ></a></p>



<p className="MsoNormal"  >23.</p>

<h2 >General conditions for all
<span >subcontracts</span></h2>

<p className="MsoNormal" ><span >The following General <span >Terms
and Conditions </span>apply to all contracts in this Master Agreement.</span></p>

<p className="MsoNormal" ><span >&nbsp;</span></p>







<p className="MsoNormal"  >24.</p>

<h2 ><a ></a><a >Identification of producers and termination of business
relationship due to money laundering related reasons: </a></h2>

<p className="MsoNormal" ><span >Pursuant to the Money Laundering Act (MLA), Redrum Films
has an obligation to carry out identification measures in relation to its
Producers. It is also the client's obligation to cooperate in complying with
money laundering regulations. If Redrum Films is not able to obtain the
required information, it cannot enter into or continue the business
relationship with the Producer due to the MLA. In this case, no transaction may
be carried out and the business relationship must be terminated immediately.</span></p>



<p className="MsoNormal"  ><a >25.</a></p>

<h2 ><a ></a><a >Payment modalities</a></h2>

<p className="MsoNormal" >During the
order process, the customer can choose between the payment methods available on
the market, such as credit card, instant bank transfer, etc. Payment of the
fees shall become due upon conclusion of the framework agreement.</p>

<p className="MsoNormal" >When paying
by credit card, the credit card account will be charged on the day of the
conclusion of the contract.</p>

<p className="MsoNormal" >Invoices
can be provided to the Producer in electronic form on his account.</p>



<p className="MsoNormal"  ><a >26.</a></p>

<h2 ><a ></a><a >Cancellation</a></h2>

<p className="MsoNormal break-page" ><span >It is not possible to terminate the purchase agreement.
Ordinary termination of the framework agreement, with the exception of the
purchase agreement or individual subcontracts, is also not possible. However,
extraordinary termination of the framework agreement, with the exception of the
purchase agreement, remains possible. Notice of termination must be given in
writing.</span></p>

<p className="MsoNormal " ><a >&nbsp;</a></p>

<p className="MsoNormal"  >27.</p>

<h2 ><a ></a><a >Liability</a></h2>

<p className="MsoNormal" >Irrespective
of the statutory requirements for claims, the following exclusions and
limitations of liability apply to claims for damages against Redrum Films:
Redrum Films is liable without limitation for intent or gross negligence.
However, Redrum Films is only liable for the foreseeable, contract-typical
damage for the slightly negligent breach of essential obligations that
jeopardize the achievement of the purpose of the contract, or for the breach of
obligations that make the proper execution of the contract possible in the
first place and on whose compliance the customer regularly relies. Redrum Films
is not liable for the slightly negligent breach of obligations other than those
mentioned above. These limitations of liability do not apply in case of injury
to life, body and health, in case of a defect for which Redrum Films has given
a warranty and in case of fraudulently concealed defects. Liability under the product
liability act remains unaffected. If the liability of Redrum Films is excluded
or limited, this also applies to the personal liability of employees,
representatives and vicarious agents.</p>

<p className="MsoNormal" ><a ><span >&nbsp;</span></a></p>

<p className="MsoNormal"  >28.</p>

<h2 ><a ></a><a >Right of withdrawal</a></h2>

<p className="MsoNormal" ><span >If the customer is a consumer, he has the statutory right
to revoke the framework agreement as a whole. The following cancellation policy
applies to this statutory right of cancellation:</span></p>















<p className="MsoNormal"  >29.</p>

<p className="MsoNormal"  ><b><span >Cancellation policy</span></b></p>

<p className="MsoNormal" >You have
the right to cancel this contract within fourteen days without giving any
reason. The withdrawal period is fourteen days from the day on which you or a
third party named by you, who is not the carrier, has or has taken possession
of the goods.</p>

<p className="MsoNormal" >To exercise
your right of withdrawal, you must send us </p>



<p className="MsoNormal" ><span lang="DE">Redrum Films &amp; Entertainment GmbH</span></p>

<p className="MsoNormal" ><span lang="DE">Hauptstr. 26</span></p>

<p className="MsoNormal" ><span lang="DE">10827 Berlin</span></p>

<p className="MsoNormal" ><span lang="DE">E-mail: kuendigung@redrumpro.com </span></p>

<p className="MsoNormal" ><span lang="DE">&nbsp;</span></p>

<p className="MsoNormal" >by means of
a clear statement (eg a letter sent by mail or e-mail) about your decision to
revoke this contract. You can use the attached model withdrawal form, which is
not mandatory.</p>



<p className="MsoNormal" >In order to
comply with the withdrawal period, it is sufficient that you send the
notification of the exercise of the right of withdrawal before the expiry of
the withdrawal period.</p>



<p className="MsoNormal" >Consequences
of the revocation</p>

<p className="MsoNormal" >If you
revoke this contract, we must return to you all payments that we have received
from you immediately and at the latest within fourteen days from the day on
which we received the notification of your revocation of this contract. For
this repayment, we will use the same means of payment that you used for the
original transaction, unless expressly agreed otherwise with you; in no case
will you be charged for this repayment. </p>

<p className="MsoNormal" ><a >&nbsp;</a></p>





<p className="MsoNormal"  >30.</p>

<h2 ><a ></a><a >Privacy policy</a></h2>

<p className="MsoNormal break-page" ><span >The collection, storage and use of Producer personal data
is for the fulfillment of the Producer's own business purposes to the extent
necessary in connection with the acquisition, sale or management of Entertainment
Projects by or for Producers. For more information about privacy, please see
the privacy policy on the Redrum Films app <span >or
</span><span >website.</span></span></p>

<p className="MsoNormal" ><a >&nbsp;</a></p>

<p className="MsoNormal"  >31.</p>

<h2 ><a ></a><a >Final </a><span >provisions</span></h2>

<p className="MsoNormal" >The terms
of the Master Agreement shall remain in effect after the death of the Producer.
If there are multiple heirs or executors, Redrum Films is only required to
correspond with one joint agent or executor. However, if one of the heirs or
executors revokes the assignment, the agreement will terminate for all heirs.
The revoking party must prove his or her identity by a certificate of
inheritance or executor's certificate, but in exceptional cases Redrum Films
may accept other proof. If any provision of the terms is invalid or
unenforceable in whole or in part, the remaining provisions shall remain in
full force and effect and the relevant statutory provision shall apply in place
of the invalid provision. The laws of the Federal Republic of Germany shall
apply, and the Terms and Conditions and the General Terms and Conditions for
the Use of RedrumPro of Redrum Films GmbH shall contain all agreements made
between Redrum Films and the Producer. Changes or additions to the contract
must be made in writing.<a ></a></p>



<p className="MsoNormal"  >32.</p>

<h2 ><a ></a><a >Risk description</a></h2>

<p className="MsoNormal" ><span >Acquisition of (fractional) ownership of Entertainment
Projects, transfer and resale of the Entertainment Project is associated with
specific risks. Therefore, it is necessary to <span >pay
attention to the </span>following<span >:</span></span></p>

<p className="MsoNormal" >The customer
should carefully <span >read </span>the framework
agreement together with this risk description.</p>







<p className="MsoNormal" >Risks that Redrum
Films considers specific and material to an informed decision are described in
more detail in this appendix. Redrum Films does not guarantee that the risks
presented below are comprehensive or complete and that no additional or
different risks may arise. It is expressly noted that additional individual
risks may arise in individual cases. Furthermore, risks may occur not only
individually, but also cumulatively.</p>

<p className="MsoNormal" >Reading and
understanding the risk factors below should not be considered sufficient
information in the sense that professional advice on the acquisition of
(fractional) ownership of Entertainment Projects is no longer necessary for an
individual acquirer. A purchase decision should not be made solely on the basis
of the risk factors set forth below, as the information contained herein is not
a substitute for advice and education tailored to the needs, objectives,
experience and/or knowledge and circumstances of an individual acquirer. It is
recommended that, if necessary, evaluations by professionally qualified
advisors be obtained.</p>



<p className="MsoNormal"  ><a >33.</a></p>

<h2 ><a ></a><a >Risks associated with Redrum Films</a></h2>

<p className="MsoNormal" ><span >There is a risk that expertise may no longer be available
if key personnel cease to work for Redrum Films. The comprehensive development,
implementation and ongoing further development of <span >Redrum Films' business operations could be delayed or no longer possible
as a result.</span></span></p>



<p className="MsoNormal"  >34.</p>

<h2 ><a >Risk
of changes in regulatory <span >requirements</span></a></h2>

<p className="MsoNormal break-page" ><span >It is to be expected <span >that
</span>services of any kind, especially financial services, will be much more
heavily regulated in the future. This could require Redrum Films to adapt its
business model accordingly. As a result, it cannot be ruled out that Redrum
Films will no longer be able to provide certain services. Additional costs may
also be incurred due to the need to adjust Redrum Films' business model and
operations. It cannot be ruled out that Redrum Films may require regulatory
licenses for the implementation or continued operation of its business model.
This may delay or jeopardize the implementation of the business model, may
require extensive adjustments or may even make it impossible for Redrum Films
to continue to <span >pursue </span>its business
model.</span></p>

<p className="MsoNormal" ><a >&nbsp;</a></p>


<p className="MsoNormal"  >35.</p>

<h2 ><a ></a><a >Partnership risks</a></h2>

<p className="MsoNormal" ><span >In order to fully implement its business model, Redrum
Films relies on stable partnerships and collaboration with third parties (such as
payment service providers). There is a risk that Redrum Films may not be able
to establish or maintain such partnerships and business relationships or retain
other relevant business partners. This may result in Redrum Films being unable
to acquire, hold and sell Entertainment Projects, which could result in the
liquidation of Redrum Films.</span></p>



<p className="MsoNormal"  ><a >36.</a></p>

<h2 >Risks in connection with <span >Entertainment Projects</span></h2>

<p className="MsoNormal" ><span >Acquiring (fractional) ownership of Entertainment Projects
may involve, among other things, the following risks for the Producer:</span></p>



<p className="MsoNormal"  ><a >37.</a></p>

<h2 ><a ></a><a >Maximum risk</a></h2>

<p className="MsoNormal" ><span >The maximum risk is a complete loss of value of the Entertainment
Project and thus of the <span >purchase price </span>paid.</span></p>



<p className="MsoNormal"  ><a >38.</a></p>

<h2 ><a ></a><a >General </a>market price risk</h2>

<p className="MsoNormal" ><span >The client bears the risk that the market price of the Entertainment
Project falls as a result of the general development of the market. Redrum
Films is mandated to sell the Entertainment Projects for all co-owners when the
Entertainment Project reaches a certain value. However, for some Entertainment
Projects, there may be a risk that an increase in value will not occur. This
may be because the Entertainment Project loses value or simply does not evolve.
This market price risk is difficult to assess in advance. Redrum Films endeavors
to estimate the value as close to the market price as possible at the time of
acquisition. However, it does not bear the risk that in retrospect the value
turns out to be lower than initially estimated. Every client bears this risk.
The customer suffers a loss if he sells his Entertainment Projects below the
acquisition price.</span></p>







<p className="MsoNormal"  ><a >39.</a></p>

<h2 ><a ></a><a>Storage risk/insurance risk</a></h2>

<p className="MsoNormal" ><span >The Entertainment Project is stored in a storage
facility. An insurance policy has been taken out, according to which insurance
coverage exists to the extent specified in the insurance conditions for the Entertainment
Projects stored in the relevant storage facilities. Nevertheless, there is a
risk that the Entertainment Projects may be stolen in the course of a burglary
or that, due to force majeure, the storage facilities and thus the Entertainment
Projects may become inaccessible, destroyed or damaged. It cannot be ruled out
that these loss events are not covered by the insurance, that claims against
the insurance cannot be enforced or that the insurance does not fulfill its
obligations. This could mean the partial or complete loss of value of the Entertainment
Projects.</span></p>



<p className="MsoNormal"  ><span lang="DE" >***************</span></p>

<p className="MsoNormal" ><span lang="DE">&nbsp;</span></p>

</div>
</div>
  )
}

export default ContractComponent
