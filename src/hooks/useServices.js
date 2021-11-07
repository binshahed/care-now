import { useEffect, useState } from "react";

const useServices=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://api.npoint.io/7cc673e1dfeceebbdc6b")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return [services, setServices]
}
export default useServices