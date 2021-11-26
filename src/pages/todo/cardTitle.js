import React, {useEffect, useState} from 'react';

const CardTitle = ({title=""}) => {

    return(
        <div className="m-1">
            <p className="text-2xl"><strong>{title}</strong></p>
        </div>
    );
}
export default CardTitle;