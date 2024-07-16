import ImageShow from "./ImageShow";
import './ImageShow.css';
import 'bulma/css/bulma.css';
function ImageList({images}){
    const renderedImages = images.map((image)=>{
        return <ImageShow  key={image.id} image={image}></ImageShow>
    })
    return <div className="image-list">{renderedImages}
    </div>
}

export default ImageList;