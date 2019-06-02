import React, {Component} from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList =(props)=> {
 
     //receiving image from api request made in app and mapping on it to extract each image 
   const images= props.images.map((image)=>{
      //each image is passed to the children component ImageCard by passing props image in it
       return <ImageCard key={image.id} image={image} />
    }); 
    //return of all resulting iamges 
    return <div className="ImageList" >{images}</div>; 
};

export default ImageList;     