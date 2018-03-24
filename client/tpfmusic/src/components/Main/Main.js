// Include React as a dependency
import React, { Component } from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
import { Link } from "react-router";
import './Main.css';


// Create the Main component
class Main extends Component {
    render() {
        return (
            // We can only render a single div. So we need to group everything inside of this main-container one
            <div className="main-container">
                <div className="container">
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
                                <Link className="navbar-brand" to="/">PartyFavorz</Link>
                            </div>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    {/* Using <Link> in place of <a> and "to" in place of "href" */}
                                    <li><Link to="/search">Search</Link></li>
                                    <li><Link to="/saved">Placeholder</Link></li>
                                    <li><Link to="/saved">Placeholder</Link></li>
                                    <li><Link to="/saved">Placeholder</Link></li>
                                    <li><Link to="/saved">Placeholder</Link></li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    {/* Jumbotron */}
                    <div className="">
                        <h2 className="text-center"><strong>PARTY FAVORZ</strong></h2>
                        <h3 className="text-center">Search and register for parties and info.</h3>
                    </div>
                    {/* Here we will deploy the sub components (Search or Saved */}
                    {/* These sub-components are getting passed as this.props.children */}
                    {this.props.children}
                    <footer>
                        <hr />
                        <p className="pull-right">
                            Proudly built by @JDOTGRAHAM
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
};

// Export the module back to the route
export default Main;
