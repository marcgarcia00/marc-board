import React, {useEffect, useState} from 'react';

const Card = ({color=""}) => {
    const [theme, setTheme] = useState("bg-blue-400");

    useEffect(()=> {
        setTheme(color)
    },[color]);

    return (
        <div className="flex">
            <div className={`
                border
                border-black
                rounded
                p-3 m-3
                ${theme}
            `}>Card</div>
        </div>
    );
};
export default Card;