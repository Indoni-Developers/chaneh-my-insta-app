import React from 'React';

class PostItem extends React.Component{

    render(){
        return(
        <div className="PostItemContainer">
            <div className="PostItem" style={{backgroundImage: `url(${this.props.image})`}}></div>         

        </div>
        )
    }
    
}
export default PostItem;