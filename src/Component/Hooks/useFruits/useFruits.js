import { useEffect } from "react";
import { useState } from "react";
import Loading from "../../Shared/Loading/Loading";

const useFruits = () => {
     const [fruits, setFruits] = useState([])
     useEffect(()=>{
        fetch('https://sleepy-crag-27771.herokuapp.com/fruits')
        .then(res => res.json())
        .then( data => setFruits(data))
     },[])
   
        return fruits
};

export default useFruits;