'use client'
import React from "react";
import {Dna} from "react-loader-spinner";


export default function LoadingSpinner({width = "100", height = "100"}) {
    return (

        <Dna
            height={height}
            width={width}
            color="#4a6dff"
            wrapperStyle={{}}
            visible={true}
            wrapperClass={'flex justify-center'}
            outerCircleColor=""
            innerCircleColor=""
            barColor=""
            ariaLabel='circles-with-bar-loading'
        />
    );
}