import React from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "./components/Pagination";

export default function App(){
    const [searchParams , setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page") as string) || 1; 
    
    return(
        <>
            <Pagination page={page} setSearchParams={setSearchParams} numberOfPages={5} />
        </>
    )
}