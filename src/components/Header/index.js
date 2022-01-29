import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Cookie from "js-cookie";
import { CartContext } from "../../contexts/CartContext";
import AuthContext from "../../contexts/AuthContext";

const Header = () => {
  const { itemCount } = useContext(CartContext);
  const { user, setUser } = useContext(AuthContext);
  const history = useNavigate();

  const logout = () => {
    //remove token and user cookie
    window.localStorage.clear();
    // Cookie.remove("token");
    // delete window.__user;
    // sync logout between multiple windows
    // window.localStorage.setItem("logout", Date.now());
    //redirect to the home page
    history("/");
  };

  //Higher Order Component to wrap our pages and logout simultaneously logged in tabs
  // THIS IS NOT USED in the tutorial, only provided if you wanted to implement
  // const withAuthSync = (Component) => {
  //   const Wrapper = (props) => {
  //     const syncLogout = (event) => {
  //       if (event.key === "logout") {
  //         history("/login");
  //       }
  //     };

  //     useEffect(() => {
  //       window.addEventListener("storage", syncLogout);

  //       return () => {
  //         window.removeEventListener("storage", syncLogout);
  //         window.localStorage.removeItem("logout");
  //       };
  //     }, []);

  //     return <Component {...props} />;
  //   };

  //   if (Component.getInitialProps) {
  //     Wrapper.getInitialProps = Component.getInitialProps;
  //   }

  //   return Wrapper;
  // };
  return (
    <header class="header_area">
      <div class="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
        <nav class="classy-navbar" id="essenceNav">
          <Link class="nav-brand" to="/">
            Beauty Courses
          </Link>
          <div class="classy-navbar-toggler">
            <span class="navbarToggler">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div class="classy-menu">
            <div class="classycloseIcon">
              <div class="cross-wrap">
                <span class="top"></span>
                <span class="bottom"></span>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div class="classynav">
              <ul>
                <li>
                  <a href="#">All courses</a>
                  <div class="megamenu">
                    <ul class="single-mega cn-col-4">
                      <li class="title">BODY SCULPTING TREATMENTS</li>
                      <li>
                        <a href="#">Arm Lift</a>
                      </li>
                      <li>
                        <a href="#">Circumferential Lift &amp; Gynecomastia</a>
                      </li>
                      <li>
                        <a href="#">Breast Augmentation</a>
                      </li>
                      <li>
                        <a href="#">Breast Lift (Mastopexy)</a>
                      </li>
                      <li>
                        <a href="#">Liposuction</a>
                      </li>
                    </ul>
                    <ul class="single-mega cn-col-4">
                      <li class="title">Face</li>
                      <li>
                        <a href="#">Botox</a>
                      </li>
                      <li>
                        <a href="#">Brow Lift</a>
                      </li>
                      <li>
                        <a href="#">Chin Reshaping/Genioplasty</a>
                      </li>
                      <li>
                        <a href="#">Ear Pinning (Otoplasty)</a>
                      </li>
                      <li>
                        <a href="#">Rhinoplasty (Nose Job)</a>
                      </li>
                    </ul>
                    {/* <ul class="single-mega cn-col-4">
                      <li class="title">Kid's Collection</li>
                      <li>
                        <a href="#">Dresses</a>
                      </li>
                      <li>
                        <a href="#">Shirts</a>
                      </li>
                      <li>
                        <a href="#">T-shirts</a>
                      </li>
                      <li>
                        <a href="#">Jackets</a>
                      </li>
                      <li>
                        <a href="#">Trench</a>
                      </li>
                    </ul> */}

                    {/* Picture */}
                    <div class="single-mega cn-col-4">
                      <img src="assets/img/bg-img/bg-6.jpg" alt="" />
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul class="dropdown">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="header-meta d-flex clearfix justify-content-end">
          <div class="search-area">
            <form action="#" method="post">
              <input
                type="search"
                name="search"
                id="headerSearch"
                placeholder="Type for search"
              />
              <button type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>

          <div class="favourite-area">
            <a href="#">
              <img src="assets/img/core-img/heart.svg" alt="" />
            </a>
          </div>

          <div class="user-login-info">
            {user ? (
              <div>
                <h5>{user.username}</h5>
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                    setUser(null);
                  }}
                >
                  Logout
                </Link>
                {/* <a href="/#/dashboard" class="snipcart-user-profile">
              <span>
                <img src="https://img.icons8.com/officel/16/000000/guest-male.png" />
              </span>{" "}
              Account
            </a> */}
              </div>
            ) : (
              <Link to="/login">
                <img src="assets/img/core-img/user.svg" alt="" />
                {/* Sign in */}
              </Link>
            )}
          </div>

          <div class="cart-area">
            <Link to="/cart" class="snipcart-checkout">
              <img src="assets/img/core-img/bag.svg" alt="" />
              <span class="snipcart-items-count">{itemCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
    // <header className={styles.header}>
    //     <Link to='/'>Store</Link>
    //     <Link to='/about'>About</Link>
    //     <Link to='/cart' class="snipcart-checkout"> <CartIcon/> Cart (<span class="snipcart-items-count">0</span>)</Link>
    //       <a href="/#/dashboard" class="snipcart-user-profile">
    //       <span><img src="https://img.icons8.com/officel/16/000000/guest-male.png"/></span>  Account
    //       </a>

    // </header>
  );
};

export default Header;
