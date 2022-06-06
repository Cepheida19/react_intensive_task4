import React from "react";
import {useParams} from "react-router-dom";


const Description = () => {
    const {id} = useParams();

    return (
        <div>
            подробное описание товара
            <div>id={id}</div>
        </div>
    )
}
export default Description;