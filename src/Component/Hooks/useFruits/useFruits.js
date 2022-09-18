import { useEffect } from "react";
import { useState } from "react";

const useFruits = () => {
     const [fruits, setFruits] = useState([])
     useEffect(()=>{
        fetch('http://localhost:4000/fruits')
        .then(res => res.json())
        .then( data => setFruits(data))
     },[])
   
        return fruits
};

export default useFruits;