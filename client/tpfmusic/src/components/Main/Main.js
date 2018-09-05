// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";
import './Main.css';
import Search from "../Search/Search.js";
import logo from '../../img/logo.jpg';
import ReactPlayer from 'react-player';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

// Create the Main component
class Main extends Component {
    render() {
        return (
            // We can only render a single div. So we need to group everything inside of this main-container one
            <div className="main-container">
                <div className="container">
                    <div className="landpage-header">
                        <strong><img src={logo} alt="logo" width="400px" height=""/></strong>
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
                                <div className="socialIcons">
                                    <a><FaFacebookF /></a>
                                    <a><FaInstagram /></a>
                                    <a><FaSpotify /></a>
                                    <a><FaApple /></a>
                                    <a><FaTwitter /></a>
                                    <a><FaEnvelope /></a>
                                </div>
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
                                <div className="login">
                                    <a><FaUser /> Login</a>
                                </div>
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
                            <div className="sectionHeader">
                                Latest Music 
                            </div>
                            <div className="playerContainer">
                                <ReactPlayer url='https://soundcloud.com/4am4am/lush-feat-megiapa' 

                
                                    controls="true"
                                    config={{
                                        youtube: {
                                          playerVars: { showinfo: 1 }
                                        },
                                        soundcloud: {
                                          color: '#FF69B4'
                                        }
                                    }} 
                                />
                            </div>
                            <div className="lastestMusicText">
                                <h1>\\\ IV-AM \\\</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum orci nulla, ut gravida est consequat porta. In nulla justo, eleifend eget elit id, aliquam congue velit. Duis vehicula, ante nec blandit sollicitudin, dolor mi dignissim quam, vel interdum ipsum libero et ex. Maecenas ut dapibus lorem. Vestibulum fermentum dapibus dui, volutpat malesuada ex tristique ac. Suspendisse id aliquam ex, fermentum mattis enim. Sed eget lobortis ligula. Duis ullamcorper mi ipsum, in tincidunt sem placerat non. Integer imperdiet a urna eget commodo.</p>
                            </div>
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
