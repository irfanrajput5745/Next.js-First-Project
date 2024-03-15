import Link from "next/link";

export default function blogs() {
    return (
        <>
            <div className="banner_bg inner_banner_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="about_banner_content">
                                <h1>Blog</h1>
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
                        <div className="col-12 col-lg-4  mt-4" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card1.png" alt="" />
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
                        <div className="col-12 col-lg-4 mt-4" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card2.png" alt="" />
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
                        <div className="col-12 col-lg-4 mt-4" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card3.png" alt="" />
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
                        <div className="col-12 col-lg-4 mt-4" data-aos="fade-left" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card3.png" alt="" />
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
                        <div className="col-12 col-lg-4 mt-4" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card2.png" alt="" />
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
                        <div className="col-12 col-lg-4  mt-4" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
                            data-aos-easing="ease-in-out">
                            <div className="blogs_card">
                                <div className="blogs_card_img">
                                    <img src="images/blogs_card1.png" alt="" />
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
                    </div>
                </div>
            </div>
        </>
    )
}