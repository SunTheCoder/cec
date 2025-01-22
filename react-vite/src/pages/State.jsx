import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LeafletMap from '../components/LeafletMap/Map';

const State = () => {
    const { stateName } = useParams();
    const [stateData, setStateData] = useState(null);
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchStateData = async () => {
            try {
                // Fetch state boundaries data
                const stateResponse = await fetch("/us-state-boundaries.geojson");
                const stateGeoJSON = await stateResponse.json();
                
                // Find the specific state
                const state = stateGeoJSON.features.find(
                    feature => feature.properties.name.toLowerCase() === stateName.toLowerCase()
                );
                setStateData(state);

                // Fetch reservations data
                const reservationsResponse = await fetch("/other_reservation.geojson");
                const reservationsData = await reservationsResponse.json();

                // Filter reservations within state bounds
                if (state) {
                    const bounds = L.geoJSON(state).getBounds();
                    const stateReservations = reservationsData.features.filter(reservation => {
                        const [lon, lat] = reservation.geometry.coordinates[0][0];
                        const point = L.latLng(lat, lon);
                        return bounds.contains(point);
                    });
                    setReservations(stateReservations);
                }
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };

        if (stateName) {
            fetchStateData();
        }
    }, [stateName]);

    if (!stateData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="state-page">
            <h1 className="text-2xl font-bold mb-4 capitalize">
                {stateName.replace(/-/g, ' ')}
            </h1>
            <div className="stats-section mb-4">
                <h2 className="text-xl font-semibold mb-2">Reservations in this state: {reservations.length}</h2>
                <ul className="list-disc pl-5">
                    {reservations.map((reservation, index) => (
                        <li key={index}>{reservation.properties.BASENAME}</li>
                    ))}
                </ul>
            </div>
            {/* <div className="map-section" style={{ height: "600px" }}>
                <LeafletMap />
            </div> */}
        </div>
    );
};

export default State;