import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirportArrivals, selectArrivals, selectArrivalsError, selectArrivalsLoading } from "../../features/arrivalsSlice";
import Container from "../Container/Container";

const Arrivals = () => {

    const [time, setTime] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        // get arrivals data - dispatch asyc thunk to store
        dispatch(fetchAirportArrivals());
        // set interval of 60 seconds for update
        const interval = setInterval(() => setTime(Date.now()), (1000 * 60));
        // clean up
        return () => {
            clearInterval(interval);
        }

    },[dispatch, time])
        
    const arrivalData = useSelector(selectArrivals);
    const loading = useSelector(selectArrivalsLoading);
    const error = useSelector(selectArrivalsError);

    
    return (
        <Container  title={'Arrivals'}
                    data={arrivalData} 
                    loading={loading}
                    error={error} />
    )
}

export default Arrivals