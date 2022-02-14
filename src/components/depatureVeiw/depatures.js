import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirportDepatures, selectDepatures, selectDepaturesError, selectDepaturesLoading } from "../../features/depaturesSlice";
import Container from "../Container/Container";

const Departures = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAirportDepatures())
    }, [dispatch])
    
    const depatureData = useSelector(selectDepatures);
    const loading = useSelector(selectDepaturesLoading);
    const error = useSelector(selectDepaturesError);

    console.log(depatureData)

    return (
        <div>
            <Container  title={'Depatures'}
                        data={depatureData}
                        loading={loading}
                        error={error}
            />
        </div>
    )
}

export default Departures