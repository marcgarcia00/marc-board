import React from 'react';
import Card from './todo/card';
import CardTitle from './todo/cardTitle';
import ControlPanel from './todo/controlPanel';

const WIP = () => {
    const panels = [0, 1, 2, 3, 4];

    const menuPanels = panels.map(item => {
        return (
            <div className="flex-row text-center bg-white">
                <CardTitle title="Title"/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        );
    });

    return(
        // Main page
        <>
            <div className="border bg-red-400 w-20 p-4 cursor-pointer text-center">
                <a href="/">Back</a>
            </div>
            <ControlPanel/>
            <div className="flex justify-evenly bg-gray-200">  
                {menuPanels}
            </div>
        </>
    );
}
export default WIP;