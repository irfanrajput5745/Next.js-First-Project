import Link from "next/link";
import Image from "next/image";


export default function footer() {
    return (
        <>
            <footer>
                <div className="main_footer">
                    <div className="main_header footer">
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
                                <div className="col-12 col-lg-12">
                                    <div className="footer_line"></div>
                                </div>
                                <div className="col-12 col-lg-2" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <div className="footer_links">
                                        <h5>Quick Links</h5>
                                        <ul>
                                            <li><Link href="#">Lorem, ipsum.</Link></li>
                                            <li><Link href="#">Lorem, ipsum.</Link></li>
                                            <li><Link href="#">Lorem, ipsum.</Link></li>
                                            <li><Link href="#">Lorem, ipsum.</Link></li>
                                            <li><Link href="#">Lorem, ipsum.</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-2" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <div className="footer_links">
                                        <h5>Navigation </h5>
                                        <ul>
                                            <li><Link href="/">home</Link></li>
                                            <li><Link href="./about-us.html">about us</Link></li>
                                            <li><Link href="./products.html">products</Link></li>
                                            <li><Link href="./blogs.html">blogs</Link></li>
                                            <li><Link href="./contact-us.html">Contact us </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-2" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <div className="footer_links">
                                        <h5>Categories
                                        </h5>
                                        <ul>
                                            <li><Link href="#"> Brands
                                            </Link></li>
                                            <li><Link href="#">Women's Perfume
                                            </Link></li>
                                            <li><Link href="#">Men's</Link></li>
                                            <li><Link href="#">Unisex Fragrance
                                            </Link></li>
                                            <li><Link href="#">Testers
                                            </Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-2" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <div className="footer_links travel">
                                        <ul>
                                            <li><Link href="#">Trial / Travel Size
                                            </Link></li>
                                            <li><Link href="#">Skin Care</Link>
                                            </li>
                                            <li><Link href="#">Gifts</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <div className="payment_method">
                                        <h5>Payment Options</h5>
                                        <p>We offer various flexible payment methods to ensure that you can shop with ease and convenience.
                                        </p>
                                        <img src="images/footer-icon.png" alt="" />
                                        <h6>Subscribe to our newsletter</h6>
                                        <div className="footer_input">
                                            <input type="email" placeholder="your Email Address" />
                                            <button type="submit">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}