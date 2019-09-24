import {useEffect,useState} from 'react';

const useFetch=(endpoint)=>{

    const[data,setData]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);

    const getData=async(url)=>{
     await fetch(url).then(response=>response.json()).then(data=>{
        setData(data);
        setLoading(false);

     }).catch(errr=>{
        setError(err);
        setLoading(false);
     });

    }

    useEffect(
        ()=>{
            getData(endpoint);
        },[]);
    return{
        data,
        error,
        loading
    }

}
export{
    useFetch 
}