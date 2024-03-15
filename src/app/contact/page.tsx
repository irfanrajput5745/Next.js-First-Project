
export default function contacts() {
    return (
        <>
        <div className="banner_bg inner_banner_bg">
            <div className="container">
                <div className="row ">
                    <div className="col-12 col-lg-12">
                        <div className="about_banner_content">
                            <h1>Contact</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact_us">
            <div className="container">
                <div className="contact_text">
                    <h3>Get in touch</h3>
                </div>
                
                <div className="row d-flex justify-content-center">
                    <div className="col-8">
                        <form className="contact-us_form">
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Your Email</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Subject</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Message</label>
                                <textarea className="form-control"  rows={8}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}