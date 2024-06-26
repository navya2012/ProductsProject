import React from 'react'
import '../../CSSModules/Styles.css'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSearch } from "react-icons/fa";
import { useSearchData } from './searchData/SearchProvider';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const { searchInput, handleSubmit } = useSearchData()

    const cartNumber = useSelector((state) => state.cartList.cartData)
    // console.log(cartNumber)
    return (
        <>
            <nav className='navbar navbar-expand-lg '>
            <div className="container-fluid">
                 <Link className="logo nav-link navbar-brand" to="/" style={{color:'wheat', fontSize:'20px'}}>Shopping  Zone</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler"><GiHamburgerMenu size={35} style={{ color: 'white', }} /></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className=' navbar-nav me-auto mb-2 mb-lg-0 ' >
                        <li className='nav-item' >
                            <Link className='nav-link' to='/' style={{color:'wheat', fontSize:'20px'}}>Home</Link>
                        </li>
                        <li className='nav-item search-input'>
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1" ><FaSearch /></span>
                                <input value={searchInput}
                                    onChange={handleSubmit} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </div>
                        </li>
                    </ul>

                    <ul className='navbar-nav mb-2 mb-lg-0 d-flex gap-5 py-2'>
                        <li className='nav-item'>
                            <Link to='/cart' className='position-relative' style={{color:'wheat', fontSize:'20px'}}>
                                <BsCartPlus color='action' style={{ fontSize: '28px' }} />
                                <Badge pill bg='success' className='position-absolute top-0 start-100 translate-middle'>
                                    { cartNumber && cartNumber.length }
                                    <span className='visually-hidden'>unread messages</span>
                                </Badge>
                            </Link>
                        </li>
                        <li className='nav-item' >
                            <Link className='nav-link' to='/contact-us' style={{color:'wheat', fontSize:'20px'}}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar