import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirportArrivals, selectArrivals, selectArrivalsError, selectArrivalsLoading } from "../../features/arrivalsSlice";

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
        <div>
        </div>
    )
}

export default Arrivals