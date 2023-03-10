import React,{useState, useEffect} from "react";
import axios from 'axios'
import Mainpage from "./HomePage"
function LoadImages(){
    const [image, setImage]=useState([])
    const count=1
useEffect(()=>{
    axios
.get("https://api.unsplash.com/photos/?client_id=c_5GHI_6hF96HjT0v20zprIiaReqSrttWSWXTYxAw5Y")
.then((data)=>{
    setImage(data.data)
})
},[count])

console.log(image)
return(
image.map((i)=>(
    <Mainpage src={i.urls.thumb}/>
    ))
)
}
export default LoadImages