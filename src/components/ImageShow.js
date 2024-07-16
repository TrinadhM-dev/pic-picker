import './ImageShow.css';
import 'bulma/css/bulma.css';
function ImageShow({image}){
    return <div className='columns'>
        <div className='column'></div>
        
        <img src={image.urls['small']} alt={image.alt_description}></img>
    </div>
}

export default ImageShow;