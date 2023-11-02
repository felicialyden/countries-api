export const Dropdown = () => {
    return (
        <select className='clickable align-right' name="regions" id="regions"> 
        <option value="filter">Filter by region</option> 
        <option value="africa">Africa</option> 
        <option value="america">America</option> 
        <option value="asia">Asia</option> 
        <option value="europe">Europe</option> 
        <option value="oceania">Oceania</option> 
    </select>
    )
}