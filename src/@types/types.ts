import { SetURLSearchParams } from "react-router-dom"

export type PaginationType = {
    numberOfPages: number,
    setSearchParams: SetURLSearchParams,
    page: number,
}