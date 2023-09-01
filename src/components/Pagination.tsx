import React from "react";
import { PaginationType } from "../@types/types";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Pagination({ numberOfPages, page, setSearchParams }: PaginationType) {
    let pagination;

    function changeHandler(page: number){
        setSearchParams((previousSearchParams) => {
            const newSearchParams = new URLSearchParams(previousSearchParams);
            newSearchParams.set("page" , String(page));
            return newSearchParams;
        })
    }

    if (numberOfPages > 2) {
        if (page > 1) {
            pagination = (
                <>
                    <button onClick={() => { changeHandler(page - 1) }} ><FaAngleLeft /></button>
                    {
                        page + 1 > numberOfPages && <button onClick={() => changeHandler(page - 2)} >{page - 2}</button>
                    }
                    <button onClick={() => { changeHandler(page - 1) }} >{page - 1}</button>
                    <button onClick={() => { changeHandler(page) }} className="active" >{page}</button>
                    {
                        page + 1 <= numberOfPages && <>
                            <button onClick={() => { changeHandler(page + 1) }} >{page + 1}</button>
                            <button onClick={() => { changeHandler(page + 1) }} ><FaAngleRight /></button> </>
                    }
                </>
            )
        }
        else {
            pagination = (
                <>
                    <button onClick={() => { changeHandler(page) }} className="active" >{page}</button>
                    <button onClick={() => { changeHandler(page + 1) }} >{page + 1}</button>
                    <button onClick={() => { changeHandler(page + 2) }} >{page + 2}</button>
                    <button onClick={() => { changeHandler(page + 1) }} ><FaAngleRight /></button>
                </>
            )
        }
    }
    else {
        if (numberOfPages === 1) {
            pagination = (
                <>

                </>
            )
        }
        else {
            if (page === 1) {
                pagination = (
                    <>
                        <button onClick={() => { changeHandler(1) }}  className="active" >1</button>
                        <button onClick={() => { changeHandler(2) }} >2</button>
                        <button onClick={() => { changeHandler(2) }} ><FaAngleRight /></button>
                    </>
                )
            }
            else {
                pagination = (
                    <>
                        <button onClick={() => { changeHandler(1) }}  ><FaAngleLeft /></button>
                        <button onClick={() => { changeHandler(1) }}  >1</button>
                        <button onClick={() => { changeHandler(2) }}  className="active" >2</button>
                    </>
                )
            }
        }
    }

    return pagination;
}