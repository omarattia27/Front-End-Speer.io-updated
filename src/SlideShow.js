import React,{useState,useEffect} from 'react';
import image1 from './images/1edited.jpg';
import image2 from './images/2edited.jpg';
import image3 from './images/3edited.jpg';
import "./SlideShow.css";

const SlideShow = ()=>{
    
    const [slideIndex,setSlideIndex] = useState(0);        //array of images and slideIndex used to traverse throug the array
    const arr_of_images = [image1,image2,image3];
    let val = 1;
   
    function myFunction() {  //starts the interval
        setInterval(function(){
             setSlideIndex(val); 
             val += 1; 
            }, 5000);
    }

    function plus(n) {      //increments val which is used to update slideindex
        setSlideIndex(slideIndex+n);
        val += 1;
    }

    useEffect(()=>{ //once the component is opened the timer is set
      myFunction();
    },[]);

    return (    
        <div className="container"> 
        
           <div className="currentSlide">
               <img className="current_image" src={arr_of_images[Math.abs(slideIndex%3)]} alt=""></img>              
               <a className="prev" onClick={()=> plus(-1)}>&#10094;</a>
               <a className="next" onClick={()=> plus(1)}>&#10095;</a>
           </div>

        </div>    
    );
}

export default SlideShow;