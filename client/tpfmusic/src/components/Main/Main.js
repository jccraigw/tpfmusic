// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";
import './Main.css';
import Search from "../Search/Search.js";
import img from '../../img/bg.jpg';


// Create the Main component
class Main extends Component {
    render() {
        return (
            // We can only render a single div. So we need to group everything inside of this main-container one
            <div className="main-container">
                <div className="container">
                    <div className="landpage-header">
                        <strong>PARTY FAVORZ</strong>
                    </div>

                    {/* Navbar */}
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button
                                    type="button"
                                    className="navbar-toggle"
                                    data-toggle="collapse"
                                    data-target=".navbar-collapse"
                                >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                </button>
                                
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    {/* Using <Link> in place of <a> and "to" in place of "href" */}
                                    {/*<li><Link to="/search">Search</Link></li>*/}
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/music">Music</Link></li>
                                    <li><Link to="/shows">Shows</Link></li>
                                    <li><Link to="/parties">Parties</Link></li>
                                    <li><Link to="/photos">Photos</Link></li>
                                    <li><Link to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Jumbotron */}
                    <div className="main-body-container">
                        
                        {/* Here we will deploy the sub components (Search or Saved */}
                        {/* These sub-components are getting passed as this.props.children */}
                        <div className="carousel">
                            
                        </div>
                         <div className="lastestMusic">
                            
                        </div>
                        {this.props.children}
                    </div>

                    <footer>
                            Proudly built by @JDOTGRAHAM
                    </footer>
                </div>
            </div>
        );
    }
};

// Export the module back to the route
export default Main;
