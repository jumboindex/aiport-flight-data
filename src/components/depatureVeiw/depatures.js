import { clear } from "@testing-library/user-event/dist/clear";
import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirportDepatures, selectDepatures, selectDepaturesError, selectDepaturesLoading } from "../../features/depaturesSlice";
import Container from "../Container/Container";

const Departures = () => {

    const [time, setTime] = useState(Date.now());
    const dispatch = useDispatch();

    useEffect(() => {
        // get depature data - dispatch asyc thunk to store
        dispatch(fetchAirportDepatures())
        // set interval of 60 seconds for update
        const interval = setInterval(() => setTime(Date.now()), (1000 * 60));
        // clean up
        return () => {
            clearInterval(interval)
        };

    }, [dispatch, time])
    
    const depatureData = useSelector(selectDepatures);
    const loading = useSelector(selectDepaturesLoading);
    const error = useSelector(selectDepaturesError);

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