

export const Header = (): JSX.Element => {
      return (
            <header>
                  <div className="top-bar d-none d-md-block pt-15 pb-15">
                        <div className="container">
                              <div className="row d-flex align-items-center">
                                    <div className="col-xl-8 col-lg-8 col-md-7">
                                          <div className="header-info">
                                                <span className="header-address"><i className="fa fa-map-marker-alt"></i> 58 Howard Street #2 San Francisco</span>
                                                <span className="header-phone"><i className="fas fa-phone"></i> +1 800 833 9780</span>
                                                <span className="header-email"><i className="fas fa-envelope"></i> info@example.com</span>
                                          </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-5 d-none d-md-block">
                                          <div className="header-social-icons header-social-icons-black f-right">
                                                <ul>
                                                      <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                      <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                                      <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                </ul>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="header-menu-area">
                        <div className="container">
                              <div className="row">
                                    <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-center">
                                          <div className="logo">
                                                <a href="index.html"><img src="img/logo/logo.png" alt="c" /></a>
                                          </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-9">
                                          <div className="header-right f-right d-none d-lg-block">
                                                <a href="appoinment.html" className="bt-btn btn-h-white">Get a Quote</a>
                                          </div>
                                          <div className="header__menu f-right">
                                                <nav id="mobile-menu">
                                                      <ul>
                                                            <li className="menu-item-has-children"><a href="index.html">Home</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="index.html">Home style 01</a></li>
                                                                        <li><a href="index-2.html">Home style 02</a></li>
                                                                        <li><a href="index-3.html">Home style 03</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li className="menu-item-has-children"><a href="services.html">Services</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="services.html">Services 01</a></li>
                                                                        <li><a href="services-2.html">Services 02</a></li>
                                                                        <li><a href="services-details.html">Services Details</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li className="menu-item-has-children"><a href="team.html">Team</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="team.html">Team Style 01</a></li>
                                                                        <li><a href="team-2.html">Team Style 02</a></li>
                                                                        <li><a href="team-details.html">Team Details</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li className="menu-item-has-children"><a href="shop.html">Shop</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="shop.html">Shop Page</a></li>
                                                                        <li><a href="product-details.html">Shop Details</a></li>
                                                                        <li><a href="cart.html">Shopping Cart</a></li>
                                                                        <li><a href="checkout.html">Checkout</a></li>
                                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                                        <li><a href="login.html">Login</a></li>
                                                                        <li><a href="register.html">Register</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li className="menu-item-has-children"><a href="blog.html">Blog</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="blog.html">Blog Right Sidebar</a></li>
                                                                        <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
                                                                        <li><a href="blog-no-sidebar.html">Blog No Sidebar</a></li>
                                                                        <li><a href="blog-2-col.html">Blog 2 Column</a></li>
                                                                        <li><a href="blog-2-col-mas.html">Blog 2 Col Masonry</a></li>
                                                                        <li><a href="blog-3-col.html">Blog 3 Column</a></li>
                                                                        <li><a href="blog-3-col-mas.html">Blog 3 Col Masonry</a></li>
                                                                        <li><a href="blog-details.html">Blog Details</a></li>
                                                                        <li><a href="blog-details-left-sidebar.html">Details Left Sidebar</a></li>
                                                                        <li><a href="blog-details-audio.html">Details Audio</a></li>
                                                                        <li><a href="blog-details-video.html">Details Video</a></li>
                                                                        <li><a href="blog-details-gallery.html">Details Gallery</a></li>
                                                                  </ul>
                                                            </li>
                                                            <li className="menu-item-has-children"><a href="#">Pages</a>
                                                                  <ul className="submenu">
                                                                        <li><a href="about.html">About</a></li>
                                                                        <li><a href="appoinment.html">Appoinment</a></li>
                                                                        <li><a href="portfolio-2-col.html">Portfolio 2 column</a></li>
                                                                        <li><a href="portfolio.html">Portfolio 3 column</a></li>
                                                                        <li><a href="portfolio-slider.html">Portfolio Slider</a></li>
                                                                        <li><a href="contact.html">Contact</a></li>
                                                                  </ul>
                                                            </li>
                                                      </ul>
                                                </nav>
                                          </div>
                                    </div>
                                    <div className="col-12">
                                          <div className="mobile-menu"></div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </header>
      )
}