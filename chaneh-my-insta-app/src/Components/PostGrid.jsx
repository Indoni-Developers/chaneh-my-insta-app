import React from 'react';
import PostItem from './PostItem';

const image1 = require("../assets/crack.jpg");
const image2 = require("../assets/lake.jpg");
const image3 = require("../assets/road.jpg");
const image4 = require("../assets/sunrise.jpg");
const image5 = require("../assets/sunset.jpg");
const image6 = require("../assets/tree.jpg");

class PostGrid extends React.Component{
    myImages(){
        const images= [image1,image2,image3,image4,image5,image6];

        return images.map(item=> {
            return <PostItem image={item} /> //for each image return the image
        });
        // return images;
        }
    render(){
        return(
            <div>
                {this.myImages()}

            </div>
        )
    }
}

export default PostGrid;