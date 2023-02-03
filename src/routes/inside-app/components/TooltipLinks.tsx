import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'rsuite';
import NavItem from 'rsuite/esm/Nav/NavItem';

export interface ITooltipLinksProps { ACCOUNTNAV: Array<{}> }

const TooltipLinks: React.FunctionComponent<ITooltipLinksProps> = (props) => {
    const { ACCOUNTNAV } = props
    return (
        <div className='d-flex mt-2 mr-5' style={{ justifyContent: 'space-between' }}>
            <Nav vertical>
                {ACCOUNTNAV.map((i: any) => {
                    return (
                        i.index <= 2 ? (
                            <NavItem as={Link} to={i.to} key={i.index} className='txt-1 txt-dark'>
                                {i.icon} {i.title}
                            </NavItem>
                        ) : null
                    )
                })}
            </Nav>
            <Nav vertical>
                {ACCOUNTNAV.map((i: any) => (
                    i.index > 2 ? (
                        <NavItem as={Link} to={i.to} key={i.index} className='txt-1 txt-dark'>
                            {i.icon} {i.title}
                        </NavItem>
                    ) : null
                ))}
            </Nav>
        </div>
    );
}

export default TooltipLinks;
