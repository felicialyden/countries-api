import { SyntheticEvent } from "react"
import { DropdownProps } from "../types"

export const Dropdown = ({ setRegion }: DropdownProps) => {
    const handleFilterRegion = (e: SyntheticEvent) => {
        const filteredRegion = (e.target as HTMLSelectElement).value
        setRegion(filteredRegion)
    }

    return (
        <select onChange={handleFilterRegion} className='regions-select clickable' name="regions" id="regions"> 
        <option value="all">Filter by region</option> 
        <option value="all">All</option> 
        <option value="africa">Africa</option> 
        <option value="americas">America</option> 
        <option value="asia">Asia</option> 
        <option value="europe">Europe</option> 
        <option value="oceania">Oceania</option> 
    </select>
    )
}