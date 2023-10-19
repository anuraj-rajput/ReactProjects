import React from "react";

import { useParams } from "react-router-dom"; 

export default function User() {
    const { id } = useParams();

    return (
        <>
            <h1 className="text-lg bg-gray-500 text-center text-yellow-500 p-5 m-4   align-middle justify-center">welcome {id}</h1>;
        </>
    ) 
}