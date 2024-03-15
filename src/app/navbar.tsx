import Link from "next/link";
import Image from "next/image";



export default function navBar() {
    return (
        <>
        <div className="top_header">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 d-flex align-items-center">
                        <div className="top_header_content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-end">
                        <div className="top_header_icons">
                            <ul>
                                <li><i className="fa fa-globe"></i>
                                    <p>Track Your Order</p>
                                </li>
                                <li>
                                    <select>
                                        <option>USD</option>
                                        <option>USD1</option>
                                        <option>USD1</option>
                                    </select>
                                </li>
                                <li>
                                    <select>
                                        <option>English</option>
                                        <option>English1</option>
                                        <option>English2</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <header>
            <div className="main_header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-2 d-flex align-items-center">
                            <div className="logo">
                               <h1>Logo Here</h1>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="header_categories">
                                <input type="text" placeholder="Search All products" />
                                <div className="dropdown header_categories_sec">
                                    <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        All Categories
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item" href="#">All</Link></li>
                                        <li><Link className="dropdown-item" href="#">lorem2</Link></li>
                                        <li><Link className="dropdown-item" href="#">lorem3</Link></li>
                                    </ul>
                                </div>
                                <div className="header_search_icon">
                                <i className="ri-search-line"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 d-flex align-items-center">
                            <div className="header_icons">
                                <ul>
                                    <li>
                                        <Link href="#">
                                        <i className="ri-phone-fill"></i>
                                            <p>Call Now
                                                <br/>
                                                <span>0000000</span>
                                            </p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                        <i className="ri-service-line"></i>
                                            <span className="header_heart_content">00</span>
                                        </Link>
                                    </li>
                                    <li><Link href="#">
                                    <i className="ri-shopping-cart-line"></i>
                                        
                                                                                    <span className="header_heart_content">00</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#"><i className="fa fa-user-o"></i>
                                            <p>Sign In
                                                <br/>
                                                <span>Account</span>
                                            </p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-2 ">
                            <div className="shop_by_category">
                                <button><i className="ri-list-check"></i>Shop By Category</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-2 d-flex align-items-center">
                            <div className="navigation">
                                <ul>
                                    <li><Link href={`./`}>Home </Link></li>
                                    <li><Link href={`./about`}>About Us</Link></li>
                                    <li><Link href={"./product"}>Products</Link></li>
                                    <li><Link href={"./blog"}>Blogs</Link></li>
                                    <li><Link href={"./contact"}>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}