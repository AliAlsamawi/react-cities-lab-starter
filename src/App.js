import React, { useState } from "react";
import imagesArr from './imageData'
import "./styles.css";
// //IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr
//// USE useState TO CREATE  [bigImage, setBigImage]
//// AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY

// //CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
// //THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

//// CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
//// ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
// //ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL

export default function App() {
const [bigImage, setBigImage] = useState(imagesArr[0].img)
const handelclick = (imgUrl)=>{
  setBigImage(imgUrl)
}
const images = imagesArr.map((element, index)=>{
  return(
    <img
    style={{ border: bigImage === element.img ? "5px solid green" : "" }}
    src={element.img}
    alt={element.city}
    className = {"thumb"}
    key= {index}
    onClick = {()=>handelclick(element.img)}
  />
  )
})

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt='bigImaage'/> 
      </div>
    </div>
  );
}
