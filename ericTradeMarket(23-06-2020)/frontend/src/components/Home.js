import React, { Component } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          {/* ======= Hero Section ======= */}
          <section id="hero">
            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              />
              <div className="carousel-inner" role="listbox">
                {/* Slide 1 */}
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage: "url(assets/img/slide/slide-1.jpg)",
                  }}
                >
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">
                        Welcome to <span>Multi</span>
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati
                        alias dolorem mollitia ut. Similique ea voluptatem. Esse
                        doloremque accusamus repellendus deleniti vel. Minus et
                        tempore modi architecto.
                      </p>
                      <a
                        href="#about"
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slide 2 */}
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url(assets/img/slide/slide-2.jpg)",
                  }}
                >
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">
                        Lorem Ipsum Dolor
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati
                        alias dolorem mollitia ut. Similique ea voluptatem. Esse
                        doloremque accusamus repellendus deleniti vel. Minus et
                        tempore modi architecto.
                      </p>
                      <a
                        href="#about"
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                {/* Slide 3 */}
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url(assets/img/slide/slide-3.jpg)",
                  }}
                >
                  <div className="carousel-container">
                    <div className="container">
                      <h2 className="animate__animated animate__fadeInDown">
                        Sequi ea ut et est quaerat
                      </h2>
                      <p className="animate__animated animate__fadeInUp">
                        Ut velit est quam dolor ad a aliquid qui aliquid. Sequi
                        ea ut et est quaerat sequi nihil ut aliquam. Occaecati
                        alias dolorem mollitia ut. Similique ea voluptatem. Esse
                        doloremque accusamus repellendus deleniti vel. Minus et
                        tempore modi architecto.
                      </p>
                      <a
                        href="#about"
                        className="btn-get-started animate__animated animate__fadeInUp scrollto"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#heroCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon icofont-simple-left"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#heroCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon icofont-simple-right"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
          {/* End Hero */}
          <main id="main">
            {/* ======= About Section ======= */}
            <section id="about" className="about">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>About</h2>
                  <p>About Us</p>
                </div>
                <div className="row content">
                  <div className="col-lg-6">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="ri-check-double-line" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat
                      </li>
                      <li>
                        <i className="ri-check-double-line" /> Duis aute irure
                        dolor in reprehenderit in voluptate velit
                      </li>
                      <li>
                        <i className="ri-check-double-line" /> Ullamco laboris
                        nisi ut aliquip ex ea commodo consequat
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="btn-learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </section>
            {/* End About Section */}
            {/* ======= Counts Section ======= */}
            <section id="counts" className="counts">
              <div className="container" data-aos="fade-up">
                <div className="row no-gutters">
                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="icofont-simple-smile" />
                      <span data-toggle="counter-up">232</span>
                      <p>
                        <strong>Happy Clients</strong> consequuntur quae qui
                        deca rode
                      </p>
                      <a href="#">Find out more »</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="icofont-document-folder" />
                      <span data-toggle="counter-up">521</span>
                      <p>
                        <strong>Projects</strong> adipisci atque cum quia aut
                        numquam delectus
                      </p>
                      <a href="#">Find out more »</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="icofont-live-support" />
                      <span data-toggle="counter-up">1,463</span>
                      <p>
                        <strong>Hours Of Support</strong> aut commodi quaerat.
                        Aliquam ratione
                      </p>
                      <a href="#">Find out more »</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                    <div className="count-box">
                      <i className="icofont-users-alt-5" />
                      <span data-toggle="counter-up">15</span>
                      <p>
                        <strong>Hard Workers</strong> rerum asperiores dolor
                        molestiae doloribu
                      </p>
                      <a href="#">Find out more »</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Counts Section */}
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us section-bg">
              <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                  <div
                    className="col-lg-5 align-items-stretch video-box"
                    style={{ backgroundImage: 'url("assets/img/why-us.jpg")' }}
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <a
                      href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                      className="venobox play-btn mb-4"
                      data-vbtype="video"
                      data-autoplay="true"
                    />
                  </div>
                  <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">
                    <div className="content">
                      <h3>
                        Eum ipsam laborum deleniti{" "}
                        <strong>velit pariatur architecto</strong>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Duis aute irure dolor in reprehenderit
                      </p>
                    </div>
                    <div className="accordion-list">
                      <ul>
                        <li>
                          <a
                            data-toggle="collapse"
                            className="collapse"
                            href="#accordion-list-1"
                          >
                            <span>01</span> Non consectetur a erat nam at lectus
                            urna duis?{" "}
                            <i className="bx bx-chevron-down icon-show" />
                            <i className="bx bx-chevron-up icon-close" />
                          </a>
                          <div
                            id="accordion-list-1"
                            className="collapse show"
                            data-parent=".accordion-list"
                          >
                            <p>
                              Feugiat pretium nibh ipsum consequat. Tempus
                              iaculis urna id volutpat lacus laoreet non
                              curabitur gravida. Venenatis lectus magna
                              fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                          </div>
                        </li>
                        <li>
                          <a
                            data-toggle="collapse"
                            href="#accordion-list-2"
                            className="collapsed"
                          >
                            <span>02</span> Feugiat scelerisque varius morbi
                            enim nunc?{" "}
                            <i className="bx bx-chevron-down icon-show" />
                            <i className="bx bx-chevron-up icon-close" />
                          </a>
                          <div
                            id="accordion-list-2"
                            className="collapse"
                            data-parent=".accordion-list"
                          >
                            <p>
                              Dolor sit amet consectetur adipiscing elit
                              pellentesque habitant morbi. Id interdum velit
                              laoreet id donec ultrices. Fringilla phasellus
                              faucibus scelerisque eleifend donec pretium. Est
                              pellentesque elit ullamcorper dignissim. Mauris
                              ultrices eros in cursus turpis massa tincidunt
                              dui.
                            </p>
                          </div>
                        </li>
                        <li>
                          <a
                            data-toggle="collapse"
                            href="#accordion-list-3"
                            className="collapsed"
                          >
                            <span>03</span> Dolor sit amet consectetur
                            adipiscing elit?{" "}
                            <i className="bx bx-chevron-down icon-show" />
                            <i className="bx bx-chevron-up icon-close" />
                          </a>
                          <div
                            id="accordion-list-3"
                            className="collapse"
                            data-parent=".accordion-list"
                          >
                            <p>
                              Eleifend mi in nulla posuere sollicitudin aliquam
                              ultrices sagittis orci. Faucibus pulvinar
                              elementum integer enim. Sem nulla pharetra diam
                              sit amet nisl suscipit. Rutrum tellus pellentesque
                              eu tincidunt. Lectus urna duis convallis convallis
                              tellus. Urna molestie at elementum eu facilisis
                              sed odio morbi quis
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Why Us Section */}
            {/* ======= Services Section ======= */}
            <section id="services" className="services">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Services</h2>
                  <p>Check our Services</p>
                </div>
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bxl-dribbble" />
                      </div>
                      <h4>
                        <a href>Lorem Ipsum</a>
                      </h4>
                      <p>
                        Voluptatum deleniti atque corrupti quos dolores et quas
                        molestias excepturi
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-file" />
                      </div>
                      <h4>
                        <a href>Sed ut perspiciatis</a>
                      </h4>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-tachometer" />
                      </div>
                      <h4>
                        <a href>Magni Dolores</a>
                      </h4>
                      <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-world" />
                      </div>
                      <h4>
                        <a href>Nemo Enim</a>
                      </h4>
                      <p>
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-slideshow" />
                      </div>
                      <h4>
                        <a href>Dele cardo</a>
                      </h4>
                      <p>
                        Quis consequatur saepe eligendi voluptatem consequatur
                        dolor consequuntur
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <div className="icon-box">
                      <div className="icon">
                        <i className="bx bx-arch" />
                      </div>
                      <h4>
                        <a href>Divera don</a>
                      </h4>
                      <p>
                        Modi nostrum vel laborum. Porro fugit error sit minus
                        sapiente sit aspernatur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Services Section */}
            {/* ======= Testimonials Section ======= */}
            <section id="testimonials" className="testimonials section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Testimonials</h2>
                  <p>Testimonials</p>
                </div>
                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Testimonials Section */}
            {/* ======= Cta Section ======= */}
            <section id="cta" className="cta">
              <div className="container" data-aos="zoom-in">
                <div className="text-center">
                  <h3>Call To Action</h3>
                  <p>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <a className="cta-btn" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </section>
            {/* End Cta Section */}
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Portfolio</h2>
                  <p>Check our Portfolio</p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">
                        All
                      </li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>
                <div
                  className="row portfolio-container"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-1.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-2.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-3.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-4.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-5.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img
                      src="assets/img/portfolio/portfolio-6.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-7.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img
                      src="assets/img/portfolio/portfolio-8.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img
                      src="assets/img/portfolio/portfolio-9.jpg"
                      className="img-fluid"
                      alt
                    />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a
                        href="portfolio-details.html"
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Portfolio Section */}
            {/* ======= Team Section ======= */}
            <section id="team" className="team section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Team</h2>
                  <p>Check our Team</p>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div
                      className="member"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    >
                      <img
                        src="assets/img/team/team-1.jpg"
                        className="img-fluid"
                        alt
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Walter White</h4>
                          <span>Chief Executive Officer</span>
                        </div>
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.1s"
                  >
                    <div
                      className="member"
                      data-aos="zoom-in"
                      data-aos-delay={200}
                    >
                      <img
                        src="assets/img/team/team-2.jpg"
                        className="img-fluid"
                        alt
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Sarah Jhonson</h4>
                          <span>Product Manager</span>
                        </div>
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.2s"
                  >
                    <div
                      className="member"
                      data-aos="zoom-in"
                      data-aos-delay={300}
                    >
                      <img
                        src="assets/img/team/team-3.jpg"
                        className="img-fluid"
                        alt
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>William Anderson</h4>
                          <span>CTO</span>
                        </div>
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-xl-3 col-lg-4 col-md-6"
                    data-wow-delay="0.3s"
                  >
                    <div
                      className="member"
                      data-aos="zoom-in"
                      data-aos-delay={400}
                    >
                      <img
                        src="assets/img/team/team-4.jpg"
                        className="img-fluid"
                        alt
                      />
                      <div className="member-info">
                        <div className="member-info-content">
                          <h4>Amanda Jepson</h4>
                          <span>Accountant</span>
                        </div>
                        <div className="social">
                          <a href>
                            <i className="icofont-twitter" />
                          </a>
                          <a href>
                            <i className="icofont-facebook" />
                          </a>
                          <a href>
                            <i className="icofont-instagram" />
                          </a>
                          <a href>
                            <i className="icofont-linkedin" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Team Section */}
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Pricing</h2>
                  <p>Our Competing Prices</p>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div
                      className="box"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    >
                      <h3>Free</h3>
                      <h4>
                        $0<span>per month</span>
                      </h4>
                      <ul>
                        <li>
                          <i className="bx bx-check" /> Quam adipiscing vitae
                          proin
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nec feugiat nisl pretium
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nulla at volutpat diam
                          uteera
                        </li>
                        <li className="na">
                          <i className="bx bx-x" />{" "}
                          <span>Pharetra massa massa ultricies</span>
                        </li>
                        <li className="na">
                          <i className="bx bx-x" />{" "}
                          <span>Massa ultricies mi quis hendrerit</span>
                        </li>
                      </ul>
                      <a href="#" className="get-started-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="box featured"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    >
                      <h3>Business</h3>
                      <h4>
                        $29<span>per month</span>
                      </h4>
                      <ul>
                        <li>
                          <i className="bx bx-check" /> Quam adipiscing vitae
                          proin
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nec feugiat nisl pretium
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nulla at volutpat diam
                          uteera
                        </li>
                        <li>
                          <i className="bx bx-check" /> Pharetra massa massa
                          ultricies
                        </li>
                        <li>
                          <i className="bx bx-check" /> Massa ultricies mi quis
                          hendrerit
                        </li>
                      </ul>
                      <a href="#" className="get-started-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="box"
                      data-aos="zoom-in"
                      data-aos-delay={100}
                    >
                      <h3>Developer</h3>
                      <h4>
                        $49<span>per month</span>
                      </h4>
                      <ul>
                        <li>
                          <i className="bx bx-check" /> Quam adipiscing vitae
                          proin
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nec feugiat nisl pretium
                        </li>
                        <li>
                          <i className="bx bx-check" /> Nulla at volutpat diam
                          uteera
                        </li>
                        <li>
                          <i className="bx bx-check" /> Pharetra massa massa
                          ultricies
                        </li>
                        <li>
                          <i className="bx bx-check" /> Massa ultricies mi quis
                          hendrerit
                        </li>
                      </ul>
                      <a href="#" className="get-started-btn">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* End Pricing Section */}
            {/* ======= Frequently Asked Questions Section ======= */}
            <section id="faq" className="faq">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>F.A.Q</h2>
                  <p>Frequently Asked Questions</p>
                </div>
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle" />
                    <h4>Non consectetur a erat nam at lectus urna duis?</h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </div>
                {/* End F.A.Q Item*/}
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle" />
                    <h4>
                      Feugiat scelerisque varius morbi enim nunc faucibus a
                      pellentesque?
                    </h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim.
                    </p>
                  </div>
                </div>
                {/* End F.A.Q Item*/}
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle" />
                    <h4>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi?
                    </h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus.
                    </p>
                  </div>
                </div>
                {/* End F.A.Q Item*/}
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle" />
                    <h4>
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Aperiam itaque sit optio et deleniti eos nihil quidem
                      cumque. Voluptas dolorum accusantium sunt sit enim.
                      Provident consequuntur quam aut reiciendis qui rerum
                      dolorem sit odio. Repellat assumenda soluta sunt pariatur
                      error doloribus fuga.
                    </p>
                  </div>
                </div>
                {/* End F.A.Q Item*/}
                <div
                  className="row faq-item d-flex align-items-stretch"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <div className="col-lg-5">
                    <i className="bx bx-help-circle" />
                    <h4>
                      Tempus quam pellentesque nec nam aliquam sem et tortor
                      consequat?
                    </h4>
                  </div>
                  <div className="col-lg-7">
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in
                    </p>
                  </div>
                </div>
                {/* End F.A.Q Item*/}
              </div>
            </section>
            {/* End Frequently Asked Questions Section */}
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact section-bg">
              <div className="container" data-aos="fade-up">
                <div className="section-title">
                  <h2>Contact</h2>
                  <p>Contact Us</p>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="info-box">
                          <i className="bx bx-map" />
                          <h3>Our Address</h3>
                          <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-box mt-4">
                          <i className="bx bx-envelope" />
                          <h3>Email Us</h3>
                          <p>
                            info@example.com
                            <br />
                            contact@example.com
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-box mt-4">
                          <i className="bx bx-phone-call" />
                          <h3>Call Us</h3>
                          <p>
                            +1 5589 55488 55
                            <br />
                            +1 6678 254445 41
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <form
                      action="forms/contact.php"
                      method="post"
                      role="form"
                      className="php-email-form"
                    >
                      <div className="form-row">
                        <div className="col form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars"
                          />
                          <div className="validate" />
                        </div>
                        <div className="col form-group">
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            data-rule="email"
                            data-msg="Please enter a valid email"
                          />
                          <div className="validate" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          data-rule="minlen:4"
                          data-msg="Please enter at least 8 chars of subject"
                        />
                        <div className="validate" />
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows={5}
                          data-rule="required"
                          data-msg="Please write something for us"
                          placeholder="Message"
                          defaultValue={""}
                        />
                        <div className="validate" />
                      </div>
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">
                          Your message has been sent. Thank you!
                        </div>
                      </div>
                      <div className="text-center">
                        <button type="submit">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* End Contact Section */}
          </main>
          {/* End #main */}
        </div>
        <Footer />
      </div>
    );
  }
}

// const Home = () => {

//   return (

//   );
// };
//export default Home;
