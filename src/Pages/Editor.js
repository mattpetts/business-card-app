import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
import Toolbar from "../components/Toolbar";
import Modal from "../components/Modal";
import { FaSlidersH, FaTimes, FaTrash, FaLink } from "react-icons/fa";
import uuid4 from "uuid4";

const Editor = () => {
    const API_ROUTE = "https://business-cards-17a47-default-rtdb.europe-west1.firebasedatabase.app/cards";

    const id = 'efd843d2-7a33-4cb8-8432-cfa055b1fb1f';

    const [toolbarOpen, setToolbarOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});
    const [shareLink, setShareLink] = useState('');

    const updateData = (d) => {
        const dataObj = {...data};
        dataObj[d.name] = d.value;
        setData({...dataObj})
    }

    const loadCard = async () => {
        const apiResponse = await fetch(API_ROUTE + `/${id}.json`);
        const json = await apiResponse.json();

        if (!apiResponse) {
            setData({
                'id': uuid4(),
                'colour_scheme': 'Sunrise',
            })
        } else {
            setData(json)
        }
    }

    const saveCard = ( data ) => {

        fetch(API_ROUTE + `/${data.id}.json`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setToolbarOpen(false);
    }

    const clearData = () => {
        const data = {'id': id, 'colour_scheme': 'Sunrise'};
        saveCard(data);
        setData(data);
    }

    const generateShareLink = () => {
        setShareLink(`${window.location}view/${data.id}`);
        setShowModal(true);
    }

    useEffect(() => {
        loadCard();
    }, [])

    return (
        <div className="w-full h-screen relative flex justify-start items-start font-sans overflow-hidden">
            <div className="h-screen flex-1 overflow-hidden relative">
                <div className={`${toolbarOpen ? 'w-full md:w-9/12' : 'w-full'} block h-screen blur-md bg-gradient-to-br scale-110 from-slate-500 via-slate-700 to-slate-900 transition-all duration-300`}></div>
                <div className={`block ${toolbarOpen ? 'w-full md:w-9/12' : 'w-full'} h-screen py-4 px-4 md:py-16 md:px-24 absolute top-0 left-0 transition-all duration-300`}>
                    <Card data={data} />
                    <button className="absolute w-14 h-14 top-0 right-28 bg-slate-800 text-white hover:bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center z-50" onClick={showModal ? () => setShowModal(false) : () => generateShareLink()}>{showModal ? <FaTimes /> : <FaLink />}</button>
                    <button className="absolute w-14 h-14 top-0 right-14 bg-slate-800 text-white hover:bg-gradient-to-r from-green-400 to-blue-500 flex justify-center items-center z-50" onClick={() => clearData()}><FaTrash /></button>
                    <button className="absolute w-14 h-14 top-0 right-0 bg-slate-800 hover:bg-gradient-to-r from-green-400 to-blue-500 text-white flex justify-center items-center z-50" onClick={() => setToolbarOpen(!toolbarOpen)}>{toolbarOpen ? <FaTimes /> : <FaSlidersH />}</button>
                </div>
                {showModal&& <Modal content={shareLink} />}
            </div>
            <Toolbar open={toolbarOpen} updateData={updateData} data={data} saveCard={() => saveCard(data)} />
        </div>
    );
}

export default Editor