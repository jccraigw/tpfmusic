 // Include React as a dependency
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

// Include the Query and Results components
// import Query from "./Search/Query";
// import Results from "./Search/Results";

// Include the helpers for making API calls
//import helpers from "../utils/helpers";

// Create the Artist component
class Artist extends Component {
  // Here we set the initial state variables
  // (this allows us to propagate the variables for maniuplation by the children components
  // Also note the "resuls" state. This will be where we hold the data from our results
  state = { 
    results: []
  }

  // This function will be passed down into child components so they can change the "parent"
  // i.e we will pass this method to the query component that way it can change the main component
  // to perform a new search
  // setQuery = (newQuery, newStart, newEnd) => {
  //   helpers.runQuery(newQuery, newStart, newEnd)
  //   .then((data) => {
  //     this.setState({ results: { docs: data.docs } });
  //   });
  // }

  // Render the component. Note how we deploy both the Query and the Results Components
  render() {
    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        {/* <Query updateSearch={this.setQuery} />*/}
        {/* Note how we pass in the results into this component */}
        {/*<Results results={this.state.results} />*/}
        <h1>Featured Artist</h1>
       
        <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-512.png" height="100px" width="100px"></img>
        <h1>Prospect</h1>
        instagram, facebook, spotify
        
        <img src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_user-512.png" height="100px" width="100px"></img>
        <h1>4am4am</h1>
        instagram, facebook, spotify
        <ReactPlayer url='https://soundcloud.com/4am4am' 

            
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
    );
  }
};

// Export the module back to the route
export default Artist;
