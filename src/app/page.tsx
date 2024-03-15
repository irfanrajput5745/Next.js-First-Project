// import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="container">
        <div className="banner_bg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10">
                <div className="banner_content">
                  <h2>Grab Authentic Fragrances</h2>
                  <h1>at Unbeatable
                    <br /> <span> Prices</span></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptas. Mollitia, quibusdam excepturi voluptates incidunt modi neque voluptatum adipisci nihil sed qui, suscipit odio iure ducimus! Voluptate eaque iste fuga.!
                  </p>
                  <div className="theme-group">
                    <Link href="#" className="theme-btn">Shop Now</Link>
                  </div>
                  <div className="banner_discount_content">
                    <h3><span>50% Upto</span>OFF</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="main_top_categories pad-50">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 text-center">
              <div className="top_categories_heading" data-aos="fade-down" data-aos-delay="50"
                data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h1>Top <span>categories</span></h1>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card1.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Women's Perfume
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card2.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Unisex Fragrance
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card3.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Men's Cologne
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card4.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Testers
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card5.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Skin Care
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card1.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Women's Perfume
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card1.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Women's Perfume
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="main_categories_card">
                <div className="categories_card_img">
                  <img src="images/top-categories-card2.png" alt="" />
                  <Link href="#"><i className="ri-arrow-right-fill"></i></Link>
                </div>
                <div className="top_categories_card_content">
                  <h1>Unisex Fragrance
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="main_category_gender">
            <div className="row">
              <div className="col-12 col-lg-6 mt-5">
                <div className="category_women_bg">
                  <div className="category_gender_content">
                    <h6>Perfumes For Her</h6>
                    <h1>Alluring Collection of
                      <br />
                      Women’s Perfume
                    </h1>
                    <p>Choose from our original women's perfumes and fragrances collection. We offer a wide range of branded perfumes at a price that won’t cost you an arm and leg.</p>
                    <ul>
                      <li>$99.00</li>
                      <li><del> $99.00</del></li>
                    </ul>
                    <div className="theme-group">
                      <Link href="#" className="theme-btn btn-border">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 mt-5">
                <div className="category_man_bg">
                  <div className="category_gender_content">
                    <h6>Perfumes For Him</h6>
                    <h1>Fragnances with a
                      <br />
                      Perfect Masculine Touch
                    </h1>
                    <p>Discover our diverse palette of woody, spicy, and sensual notes that evoke confidence and charisma in your personality and you can’t help but smell divine!</p>
                    <ul>
                      <li>$99.00</li>
                      <li><del> $99.00</del></li>
                    </ul>
                    <div className="theme-group">
                      <Link href="#" className="theme-btn btn-border">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_featured_product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-12 text-center">
              <div className="featured_products_heading" data-aos="fade-down" data-aos-delay="50"
                data-aos-duration="1000">
                <h1>Featured <span>Products</span></h1>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card6.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card5.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card4.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card3.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card2.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card1.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card1.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card2.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card3.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card4.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card5.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-2 mt-4">
              <div className="featured_product_card">
                <div className="featured_product_img">
                  <img src="images/featured-products-card6.png" alt="" />
                </div>
                <div className="featured_product_card_content">
                  <div className="d-flex justify-content-between align-items-center">
                    <h3>Your Product Name
                      <br />
                      Goes Here
                    </h3>
                    <i className="fa fa-heart-o"></i>
                  </div>
                  <div className="featured_star">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked-white"></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <h5>from $88.00</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-12">
            <div className="featured_categories_vie_more_btn" data-aos="zoom-in" data-aos-delay="50"
              data-aos-duration="1000" data-aos-easing="ease-in-out">
              <div className="theme-group">
                <Link href="#" className="theme-btn">View More Products</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_mens_colongne ">
        <div className="container">
          <div className="men_cologne_bg">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="men_cologne_content">
                    <h1>Men's Fragrance Handbook</h1>

                    <p>Let us help you select notes to get yourself the right scent; we have the best colognes for men for every occasion.
                    </p>
                    <div className="theme-group">
                      <Link href="#" className="theme-btn">Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-7 my-5">
              <div className="men_cologne_card1_bg">
                <div className="men_cologne_content category_gender_content">

                  <h1>A Blend of Fruity &
                    <br />
                    Floral for This Summer
                  </h1>
                  <p>From lush florals to tempting fruity, sweet, and exotic oriental scents – our collection has it all. Our fruity floral mists can be worn in daytime, evening wear and casual and special occasions.
                  </p>
                  <div className="theme-group">
                    <Link href="#" className="theme-btn btn-border">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 mt-5">
              <div className="men_cologne_card1_bg men_cologne_card2_bg">
                <div className="men_cologne_content category_gender_content">

                  <h1>Perfumes are a
                    <br />
                    Reflection of the Personality
                  </h1>
                  <p>The fragrance you wear communicates the personality you leave in your wake and is called your signature scent.
                  </p>
                  <div className="theme-group">
                    <Link href="#" className="theme-btn btn-border">Shop Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_new_products">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12 text-center">
              <div className="new_products_heading" data-aos="fade-down" data-aos-delay="50"
                data-aos-duration="1000" data-aos-easing="ease-in-out">
                <h1>new <span>Products</span></h1>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="new_products_card">
                <div className="new_products_card_img">
                  <img src="images/new-products-card1.png" alt="" />
                </div>
                <div className="new_products_card_content">
                  <ul>
                    <li><del> $99.00</del></li>
                    <li>$99.00</li>
                  </ul>
                  <h2>lorem Ipsum Dolor</h2>
                  <ul>
                    <li className="new_products_rewies"><span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked-lite"></span>
                      <span className="fa fa-star checked-lite"></span>
                    </li>
                    <li className="new_products_rewies"><span>(05 Review)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="new_products_card">
                <div className="new_products_card_img">
                  <img src="images/new-products-card2.png" alt="" />
                </div>
                <div className="new_products_card_content">
                  <ul>
                    <li><del> $99.00</del></li>
                    <li>$99.00</li>
                  </ul>
                  <h2>lorem Ipsum Dolor</h2>
                  <ul>
                    <li className="new_products_rewies"><span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked-lite"></span>
                      <span className="fa fa-star checked-lite"></span>
                    </li>
                    <li className="new_products_rewies"><span>(05 Review)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="new_products_card">
                <div className="new_products_card_img">
                  <img src="images/new-products-card3.png" alt="" />
                </div>
                <div className="new_products_card_content">
                  <ul>
                    <li><del> $99.00</del></li>
                    <li>$99.00</li>
                  </ul>
                  <h2>lorem Ipsum Dolor</h2>
                  <ul>
                    <li className="new_products_rewies"><span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked-lite"></span>
                      <span className="fa fa-star checked-lite"></span>
                    </li>
                    <li className="new_products_rewies"><span>(05 Review)</span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
              data-aos-easing="ease-in-out">
              <div className="new_products_card">
                <div className="new_products_card_img">
                  <img src="images/new-products-card4.png" alt="" />
                </div>
                <div className="new_products_card_content">
                  <ul>
                    <li><del> $99.00</del></li>
                    <li>$99.00</li>
                  </ul>
                  <h2>lorem Ipsum Dolor</h2>
                  <ul>
                    <li className="new_products_rewies"><span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked1"></span>
                      <span className="fa fa-star checked-lite"></span>
                      <span className="fa fa-star checked-lite"></span>
                    </li>
                    <li className="new_products_rewies"><span>(05 Review)</span></li>
                  </ul>
                </div>
              </div>
            </div>
        

          </div>
        </div>
      </div>
      <div className="main_blogs pad-50">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="blogs_heading" data-aos="fade-down" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <h1>Recent <span>Blogs Post</span></h1>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="blogs_card">
                            <div className="blogs_card_img">
                                <img src="images/blogs_card1.png" alt=""/>
                            </div>
                            <div className="blogs_card_content">
                                <ul>
                                    <li><span>The Fascinating History of Perfumes</span></li>
                                    <li>/ Sep 14,2023 </li>
                                    <li>/ lorem ipsum</li>
                                </ul>
                                <p>This blog takes you on a captivating odyssey from ancient civilizations to modern perfumery, revealing how fragrances have evolved and their cultural significance over time</p>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="blogs_card">
                            <div className="blogs_card_img">
                                <img src="images/blogs_card2.png" alt=""/>
                            </div>
                            <div className="blogs_card_content">
                                <ul>
                                    <li><span> How Perfumes are Made? </span></li>
                                    <li>/ Sep 14,2023 </li>
                                    <li>/ lorem ipsum</li>
                                </ul>
                                <p>
                                    Ever wondered how those alluring fragrances are crafted? Delve into the science behind perfume production. This blog unveils the intricate process of perfume creation, from selecting ingredients to blending and aging.
                                    </p>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
                        data-aos-easing="ease-in-out">
                        <div className="blogs_card">
                            <div className="blogs_card_img">
                                <img src="images/blogs_card3.png" alt=""/>
                            </div>
                            <div className="blogs_card_content">
                                <ul>
                                    <li><span>The Secrets of Layering Fragrances</span></li>
                                    <li>/ Sep 14,2023 </li>
                                    <li>/ lorem ipsum</li>
                                </ul>
                                <p>
                                    In this blog, we'll guide you through the art of combining perfumes, colognes, and scented products to make a memorable olfactory statement. Whether you're looking for subtlety or a bold signature scent, learn how to master the art of fragrance layering.
                                    
                                    </p>
                                <Link href="#">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

