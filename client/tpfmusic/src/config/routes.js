// Inclue the React library
import React from "react";

// Include the react-router module
// Include the Route component
// Include the IndexRoute (catch-all route)
// Include the Router component
// Include the browserHistory prop to configure client side routing
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserhistory
import { Route, IndexRoute, Router, browserHistory } from "react-router";

// Reference the high-level components
import Main from "../components/Main/Main";
import Search from "../components/Search/Search";
import Music from "../components/Music/Music";
import Shows from "../components/Shows/Shows";
import Parties from "../components/Parties/Parties";
import Contact from "../components/Contact/Contact";
import Photos from "../components/Photos/Photos";
//import Saved from "../components/Saved";

// Export the Routes
export default (
    // High level component is the Router component.
    <Router history={browserHistory}>
        <Route path="/" component={Main}>

            {/* If user selects Search or Saved show the appropriate component */}
            {/*<Route path="Search" component={Search} />*/}
            <Route path="Music" component={Music} />
            <Route path="Shows" component={Shows} />
            <Route path="Parties" component={Parties} />
            <Route path="Contact" component={Contact} />
            <Route path="Photos" component={Photos} />

            {/* If user selects any other path... we get the Home Route */}
            {/*<IndexRoute component={Search} />*/}
        </Route>
    </Router>
);
