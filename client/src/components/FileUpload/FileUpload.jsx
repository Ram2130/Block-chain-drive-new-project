import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from 'react-bootstrap/Button';
 

export default function  FileUploading() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            {/* <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button> */}
            <Button  onClick={onImageUpload}   {...dragProps} style={isDragging ? { color: "red" } : null} variant="secondary">Click or Drop here</Button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
             <Button  onClick={onImageRemoveAll}  variant="secondary">Remove all images</Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                <Button onClick={() => onImageUpdate(index)}  variant="secondary">Update</Button>
                <Button onClick={() => onImageRemove(index)} variant="secondary">Remove</Button>
                  {/* <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}