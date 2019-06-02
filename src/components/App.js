import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends Component {
state={ images:[]};

//to use  async methode alternative !!!
    onSearchSubmit= async (term)=>{
       
        //simpler method to get the data
    const response= await unsplash.get('/search/photos',{
        //the query is the search term we are going to use after ? and the api adress
        params:{query: term}
    });

    this.setState({images: response.data.results});
    
    //promise : object that give a notification when some work (like network is done)
    };
    render(){
    return(
        <div className="ui container" style={{margintop: '10px'}}>
         <SearchBar onSubmitParent={this.onSearchSubmit}/>
         <ImageList images={this.state.images}/>
        </div>
    )
    }
}

export default App; 

/* 
*  headers :{
    //search key
    Authorization: 'Client-ID db1abb2c0152b4fb4e2370dbba0229c0facd57eb66784a982406b191ce50901e'
}, *///after .then can put a call back fct invoqued with whatever data we got back.
//we then specify response.data.results */