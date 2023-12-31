import React from 'react';
// import {Link} from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = () => {

    return(

        <div className="Header_root">
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-10">
                            <div className="logo">
                                <h2><AnchorLink to='/home'><span><i className="fa fa-heart" aria-hidden="true"></i></span>Mos casem!</AnchorLink></h2>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="header-menu d-lg-block d-none">
                                <ul className="mobail-menu d-flex">
                                    {/* <li><Link to='#home'>Inici</Link></li> */}
                                    <li><AnchorLink href='#home'>Inici</AnchorLink></li>
                                    {/* <li><AnchorLink href='#couple'>Couple</AnchorLink></li> */}
                                    <li><AnchorLink href='#story'>Nosaltres</AnchorLink></li>
                                    {/* <li><AnchorLink href='#people'>People</AnchorLink></li> */}
                                    <li><AnchorLink href='#event'>Cerimònia</AnchorLink></li>
                                    {/* <li><AnchorLink href='#gallery'>Gallery</AnchorLink></li> */}
                                    <li><AnchorLink href='#rsvp'>Assistència</AnchorLink></li>
                                    {/* <li><Link to='#'>Blog +</Link>
                                        <ul className="submenu submenu2">
                                            <li><Link to='/blog'>Blog</Link></li>
                                            <li><Link to='/Blog-details'>Blog Details</Link></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <MobileMenu/>
                        </div>
                    </div>
                </div>
             </div>
      </div>
        
    )
}

export default Header;
