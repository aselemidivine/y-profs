import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
// import Link from 'next/link'




// import './styles/global.css'

export default function Home() {

       
  return (
    <div className={styles.container}>
      <Head>
        {/* 
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
       < >
              <meta charSet="UTF-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=, initial-scale=1.0" />
              <title>Young Professionals</title>
              {/* Font Awesome */}
              <link
                rel="stylesheet"
                href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
              />
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                rel="stylesheet"
              />
              {/* <link rel="stylesheet" href="normalize.css"> */}
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossOrigin="anonymous"
              />
              <link rel="stylesheet" href="styles.css" />
              <link
                href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.css"
                rel="stylesheet"
              />
              {/* Google fonts */}
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
              />
            </>

      </Head>

      <main className={styles.main}>

  {/* Navbar */}
        <header>
  <nav
    className="navbar navbar-expand-lg navbar-light bg-warning fixed-top px-5 py-2 shadow-5-strong"
    style={{ zIndex: 5 }}
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img
          src="assets/yps-logo.png"
          style={{ height: 50, width: 70, marginTop: 0 }}
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
        <span />
        <span />
        <span />
      </button>
      {/* <div class="collapse navbar-collapse justify-content-between" id="navbarExample01"> */}
      <div
        className="collapse navbar-collapse justify-content-between ml-auto"
        id="navbarExample01"
      >
        <ul
          className="navbar-nav ms-auto mb-2 mb-lg-0"
          style={{ fontSize: 20, fontFamily: 'rooneysans', fontWeight: "bold" }}
        >
          <li className="nav-item active">
            <a className="nav-link" aria-current="page"  style={{ fontFamily: 'rooneysans', fontWeight: "bold" }} >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#vision" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              Vision
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              Gallery
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#blog" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* Navbar */}
  {/* Background image */}
  <div
    className="p-5 text-center bg-image img-fluid"
    style={{
      backgroundImage: 'url("assets/vision.jpg")',
      height: 800,
      marginTop: 20,
      paddingBottom: 20
    }}
  >
    <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-white ">
          <h1
            className="mb-3"
            style={{
              fontFamily: 'rooneysans',
              fontSize: 45,
              fontWeight: "bold"
            }}
          >
            WE ARE YOUNG <br /> PROFESSIONALS <br /> IN MISSIONS
          </h1>
          <h4
            className="mb-4"
            style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
          >
             A group of young professionals from different works of life across the globe who love
             God and are passionate about missions.
           
          </h4>
          <a
            className="btn-outline-warning btn-lg"
            style={{ fontSize: 20, fontFamily: 'rooneysans', fontWeight: "bold" }}
            href="#vision"
            role="button"
          >
            {" "}
            Read More{" "}
          </a>
        </div>
      </div>
    </div>
  </div>
</header>



  {/* Vision */}
  <>
  <section id="vision" className="vision text-center">
    <div className=" text-orange">
        <div
        className="p-5 text-center bg-image img-fluid"
        style={{
          backgroundImage: 'url("assets/yps-gallery.jpg")',
          // height: 800,
          marginTop: 15,
          paddingBottom: 15
        }}
      >
      <h1
        className="vision-category"
        style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
      >
        OUR VISION
      </h1>
      <blockquote
        className="lead"
        style={{
          fontFamily: 'rooneysans',
          fontWeight: "bold",
          lineHeight: "2em"
        }}
      >
        <i className="fas fa-quote-left" />
        To build a network of young professionals who consistently give to
        missions projects, go to mission fields and groan for missions work in
        the 10/40 window. <i className="fas fa-quote-right" />
      </blockquote>
    </div>
    </div>
  </section>
  </>


  {/* What we do */}
<>
  <section id="whatWeDo" className="mt-5 mb-5">
    <h1
      className="text-center mb-5 fw-500 mb-2"
      style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
    >
      What We Do
    </h1>
    <div className="container">
      <div className="row"
       style={{ fontFamily: 'rooneysans', fontSize: 15 }}>
        <div className="col-lg-4" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
          <img className="img-fluid" src="assets/christianImg.jpg" alt="" />
          <h1 
            className="d-flex justify-content-center" 
            style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}            
          >
            We Groan
          </h1>
          <p className="text-muted d-flex justify-content-center">
           Pray daily at 9am WAT for missionaries and unreached people groups around the world.  
           </p>
           <p className="d-flex justify-content-center">
            <a href="https://mixlr.com/ypsinmissions" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }} >
              JOIN PRAYERS HERE
            </a>
          </p>
          
        </div>
        <div className="col-lg-4" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
          <img className="img-fluid" src="assets/headerimg.jpg" alt="" />
          <h1 className="d-flex justify-content-center" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}> We Go</h1>
          <p className="text-muted">
            Engage in short term mission trips twice every year to engage.
          </p>
          <p className="d-flex justify-content-center">
            <a href="post/post1" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              READ MORE
            </a>
          </p>
        </div>
        <div className="col-lg-4" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
          <img className="img-fluid" src="assets/vision.jpg" alt="" />
          <h1 className="d-flex justify-content-center" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}> We Give</h1>
          <p className="text-muted d-flex justify-content-center">
            Partner with to church planting and other projects on the mission's fields. Click the button to give to the work we do here

          </p>
          <p className="d-flex justify-content-center">
            <a href="post/post1" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              GIVE TO OUR WORK
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>

  
</>


  {/* Photo Gallery */}
<>
  <section id="gallery" className="mt-5 ">
    <h1
      className="text-center mb-5 fs-900 mb-2"
      style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
    >
      Photo Gallery
    </h1>
    {/* Carousel wrapper */}
    <div
      id="carouselMultiItemExample"
      className="carousel slide carousel-dark text-center"
      data-mdb-ride="carousel"
    >
      {/* Controls */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className="carousel-control-prev position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next position-relative"
          type="button"
          data-mdb-target="#carouselMultiItemExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Inner */}
      <div className="carousel-inner py-4">
        {/* Single item */}
        <div className="carousel-item active">
          <div className="container"> 
            <div className="row">
              <div className="col-lg-4">
                <div className='thumbnail'>
                <img className="img-fluid" src="assets/headerimg.jpg" alt="" />

                </div>             
              </div>
              <div className="col-lg-4 d-none d-lg-block">
              <div className='thumbnail'>

              <img className="img-fluid" src="assets/headerimg.jpg" alt="" />

                  </div>
              </div>

              <div className="col-lg-4 d-none d-lg-block">
              <img className="img-fluid" src="assets/vision.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Single item */}
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
              <img className="img-fluid" src="assets/we-are-1.jpeg" alt="" /> 
              </div>

              <div className="col-lg-4 d-none d-lg-block">
              <img className="img-fluid" src="assets/christianImg.jpg" alt="" /> 
              </div>
              <div className="col-lg-4 d-none d-lg-block">
              <img className="img-fluid" src="assets/headerimg.jpg" alt="" /> 
              </div>
            </div>
          </div>
        </div>

        {/* Single item */}
        <div className="carousel-item">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
              <img className="img-fluid" src="assets/vision.jpg" alt="" />
              </div>

              <div className="col-lg-4 d-none d-lg-block">
                <img
                  className="img-fluid"
                  src="assets/BlogPost.jpeg"
                  alt="avatar"
                  style={{
                    height: 270,
                    width: 400,
                    // marginTop: 20,
                    paddingBottom: 20
                  }}
                />
               
              </div>
              <div className="col-lg-4 d-none d-lg-block">
              <img className="img-fluid" src="assets/vision.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


  {/* From Our Blog */}
<>
  <section id="blog" className="mt-5 mb-5">
    <div className="container">
      <h1
        className="text-center mb-5 fw-500 mb-2"
        style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
      >
        Read More About Our Work
      </h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="blog-img d-flex justify-content-center">
            <img
              className="img-fluid"
              src="assets/BlogPost.jpeg"
              alt="avatar"
              style={{ width: 350 }}
            />
          </div>
          {/* <h5 class="mb-3">Anna Deynah</h5> */}
          <h2 className=" mb-3" style={{ fontFamily: 'rooneysans' , fontWeight: "bold"}}>
            Why is God silent?
          </h2>
          <p className="text-muted" style={{ fontFamily: 'rooneysans' }}>
          The teacher is always silent during a test.
A good teacher anyways, not the miracle center kind, the one who came to class every day, prepped his students, even did weekend classes and online videos during the COVID-19 pandemic.

          </p>
          <p className="d-flex justify-content-center">
            <a href="post/post1" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              READ MORE
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <div className="blog-img d-flex justify-content-center">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="avatar"
              style={{ width: 150 }}
            />
          </div>
          {/* <h5 class="mb-3">Anna Deynah</h5> */}
          <h3 className="blog-meta mb-3" style={{ fontFamily: 'rooneysans' }}>
                  Why is God silent
          </h3>
          <p className="text-muted" style={{ fontFamily: 'rooneysans' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <p className="d-flex justify-content-center">
            <a href="" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              READ MORE
            </a>
          </p>
        </div>
        <div className="col-lg-4">
          <div className="blog-img d-flex justify-content-center">
            <img
              className="rounded-circle shadow-1-strong mb-4"
              src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
              alt="avatar"
              style={{ width: 150 }}
            />
          </div>
          {/* <h5 class="mb-3">Maria Kate</h5> */}
          <p className="blog-meta mb-3" style={{ fontFamily: 'rooneysans' }}>
            By Admin <span>September 24, 2022</span>
          </p>
          <p className="text-muted" style={{ fontFamily: 'rooneysans' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
          <p className="d-flex justify-content-center">
            <a href="" className="btn-outline-warning btn-lg" style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}>
              READ MORE
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>
</>


  {/* Footer */}
<>
  <footer
    id="footer"
    className="page-footer font-small blue pt-4 mt-10"
    style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
  >
    <div className="container-fluid text-center text-md-left ">
      {/* Grid row */}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-6 mt-md-0 mt-3">
          {/* Content */}
          <h5
            className="text-uppercase"
            style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}

          >
            About YPS
          </h5>
          <p>
              A group of young professionals in from different works of life across the globe who love
             God and are passionate about missions.
          </p>
        </div>
        {/* Grid column */}
        <hr className="clearfix w-100 d-md-none pb-3" />
        {/* Grid column */}
        <div className="col-md-3 mb-md-0 mb-3">
          <h5
            className="text-uppercase"
            style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
          >
            Follow us on
          </h5>
          <div className="icon">
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <a
                  className="fab fa-twitter px-2 font-weight-bold"
                  href="https://getbootstrap.com/docs/4.0/components/card/"
                />
              </li>
              <li>
                <a
                  className="fab fa-instagram px-2 font-weight-bold"
                  href="https://instagram.com/ypsinmissions?igshid=YmMyMTA2M2Y="
                />
              </li>
              <li>
                <a
                  className="fab fa-facebook px-2 font-weight-bold"
                  href="https://getbootstrap.com/docs/4.0/components/card/"
                />
              </li>
              <li>
                <a
                  className="fab fa-youtube px-2 font-weight-bold"
                  href="https://www.youtube.com/watch?v=2T27M-8Aeh4&t=210s"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5
            className="text-uppercase"
            style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
          >
            Join Us Here
          </h5>
          <div className="icon">
            <a
              className="btn-outline-warning btn-lg"
              style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}
              href="https://forms.gle/McZJpbFZ2p8WsW6K9"
              role="button"
            >
              {" "}
              JOIN{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Footer Links */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3" style={{ fontFamily: 'rooneysans', fontWeight: "bold", fontSize: 15 }}>
      © 2022 Copyright:
      <span style={{ fontFamily: 'rooneysans', fontWeight: "bold" }}> Young Professionals</span>
    </div>
    {/* Copyright */}
  </footer>

</>
        <>
        {/* to top icon */}
        <a href="#" className="to-top bg-warning">dfgdrrraegazeg
          <i className="fas fa-chevron-up" />
        </a>
        </>

        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></Script>
        {/* <Script src="script.js"></Script> */}

        <Script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/5.0.0/mdb.min.js"
        ></Script>   
    

      </main>   
    </div>
  )
}

