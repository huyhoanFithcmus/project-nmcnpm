import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";
import Search from './Search';
import "./css/menu.css"

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Logo = () => (
    // add image logo
    <div className="logo">
        <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/316428752_737289334739437_4113999952121010151_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DQiPyeg_8IAAX-sRUn8&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQkTiNLfuFw2kjjH-M-qJHl6AtPQtILmlVmQnYcPayC5Q&oe=63C22820" alt="logo" />
    </div>
);

const Menu = ({ history }) => (
    <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t1.15752-9/316428752_737289334739437_4113999952121010151_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=DQiPyeg_8IAAX-sRUn8&_nc_ht=scontent.fsgn5-14.fna&oh=03_AdQkTiNLfuFw2kjjH-M-qJHl6AtPQtILmlVmQnYcPayC5Q&oe=63C22820" alt="" width="150" height="50"></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarColor01">
                <form class="form-inline">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search Courses"></input>
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                </div>
                    {/* <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button> */}
                </form>
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/shop")}
                            to="/shop"
                        >
                            Courses
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/cart")}
                            to="/cart"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>{" "}
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Link>
                    </li>
                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item left">
                                <Link
                                    className="nav-link" id="signin"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                    Signin
                                </Link>
                            </li>

                            <li className="nav-item left">
                                <Link
                                    className="nav-link" id="signup"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span
                                className="nav-link"
                                style={{ cursor: "pointer", color: "#ffffff" }}
                                onClick={() =>
                                    signout(() => {
                                        history.push("/");
                                    })
                                }
                            >
                                Signout
                            </span>
                        </li>
                    )}
                </ul>

            </div>
        </nav>
    </>
    // <div>
    //     <ul className="nav nav-tabs bg-primary">
    //         <li className="nav-item">
    //             <Link
    //                 className="nav-link"
    //                 style={isActive(history, "/")}
    //                 to="/"
    //             >
    //                 Home
    //             </Link>
    //         </li>

    //         <li className="nav-item">
    //             <Link
    //                 className="nav-link"
    //                 style={isActive(history, "/shop")}
    //                 to="/shop"
    //             >
    //                 Shop
    //             </Link>
    //         </li>

    //         <li className="nav-item">
    //             <Link
    //                 className="nav-link"
    //                 style={isActive(history, "/cart")}
    //                 to="/cart"
    //             >
    //                 Cart{" "}
    //                 <sup>
    //                     <small className="cart-badge">{itemTotal()}</small>
    //                 </sup>
    //             </Link>
    //         </li>

    //         {isAuthenticated() && isAuthenticated().user.role === 0 && (
    //             <li className="nav-item">
    //                 <Link
    //                     className="nav-link"
    //                     style={isActive(history, "/user/dashboard")}
    //                     to="/user/dashboard"
    //                 >
    //                     Dashboard
    //                 </Link>
    //             </li>
    //         )}

    //         {isAuthenticated() && isAuthenticated().user.role === 1 && (
    //             <li className="nav-item">
    //                 <Link
    //                     className="nav-link"
    //                     style={isActive(history, "/admin/dashboard")}
    //                     to="/admin/dashboard"
    //                 >
    //                     Dashboard
    //                 </Link>
    //             </li>
    //         )}

    //         {!isAuthenticated() && (
    //             <Fragment>
    //                 <li className="nav-item left">
    //                     <Link
    //                         className="nav-link" id="signin"
    //                         style={isActive(history, "/signin")}
    //                         to="/signin"
    //                     >
    //                         Signin
    //                     </Link>
    //                 </li>

    //                 <li className="nav-item left">
    //                     <Link
    //                         className="nav-link" id="signup"
    //                         style={isActive(history, "/signup")}
    //                         to="/signup"
    //                     >
    //                         Signup
    //                     </Link>
    //                 </li>
    //             </Fragment>
    //         )}

    //         {isAuthenticated() && (
    //             <li className="nav-item">
    //                 <span
    //                     className="nav-link"
    //                     style={{ cursor: "pointer", color: "#ffffff" }}
    //                     onClick={() =>
    //                         signout(() => {
    //                             history.push("/");
    //                         })
    //                     }
    //                 >
    //                     Signout
    //                 </span>
    //             </li>
    //         )}
    //     </ul>
    // </div>
);

export default withRouter(Menu);
