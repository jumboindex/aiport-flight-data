import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirportArrivals, selectArrivals, selectArrivalsError, selectArrivalsLoading } from "../../features/arrivalsSlice";
import Container from "../Container/Container";

const Arrivals = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAirportArrivals());
    },[dispatch])
        
    const arrivalData = useSelector(selectArrivals);
    const loading = useSelector(selectArrivalsLoading);
    const error = useSelector(selectArrivalsError);

    console.log(arrivalData)
    return (
        <Container  title={'Arrivals'}
                    data={arrivalData} 
                    loading={loading}
                    error={error} />
    )
}

export default Arrivals