import { useEffect, useState } from "react";

const useServices=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("https://api.npoint.io/d8198d95eaa4027fc096")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    return [services, setServices]
}
export default useServices