import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from "../components/Card";

const View = () => {

    let { cardId } = useParams();
    const navigate = useNavigate();

    const API_ROUTE = "https://business-cards-17a47-default-rtdb.europe-west1.firebasedatabase.app/cards";

    const [data, setData] = useState({});
    const [loaded, setLoaded] = useState(false);

    const loadCard = async () => {
        setLoaded(false);
        const apiResponse = await fetch(API_ROUTE + `/${cardId}.json`);
        const json = await apiResponse.json();

        if (!apiResponse || json === null) {
            navigate("/404");
        } else {
            setData(json);
            setLoaded(true);
        }
    }

    useEffect(() => {
        if (!cardId || cardId === undefined) {
            navigate("/");
        } else {
            loadCard();
        }
    }, [])

    return (
        <div className="w-full h-screen relative flex justify-start items-start font-sans overflow-hidden">
            <div className="h-screen flex-1 overflow-hidden relative">
                <div className={`w-full block h-screen blur-md bg-gradient-to-br scale-110 from-slate-500 via-slate-700 to-slate-900 transition-all duration-300`}></div>
                <div className={`block w-full h-screen py-4 px-4 md:py-16 md:px-24 absolute top-0 left-0 transition-all duration-300`}>
                    {loaded && <Card data={data} />}
                </div>
            </div>
        </div>
    );
}

export default View