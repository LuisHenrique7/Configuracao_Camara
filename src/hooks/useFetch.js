import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          // 6 - estado de loading
          // mudar throttling no network p 3g
          setLoading(true);
    
          // 8 - tratando erros
          try {
            const res = await fetch(url);
    
            const json = await res.json();
    
            setData(json);
    
            setMethod(null);
    
            // 8 - tratando erros
            setError(null);
          } catch (error) {
            console.log(error.message);
    
            setError("Houve um erro ao carregar os dados!");
          }
    
          setLoading(false);
        };
    
        fetchData();
      }, [url, callFetch]);
    
      return { data, loading, error };
}
