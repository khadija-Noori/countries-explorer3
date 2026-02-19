export default function SearchFilter({
    search,setSearch,region,setRegion
}){
    return(
        // in here i should make the box of search by div
        <div>
            <input type="text"
            placeholder="SEARCH COUNTRY"
            value={search}
            // in here we should make its function by event 
            onChange={(e)=>setSearch(e.target.value)}
            />
            <select
            value={region}
            onChange={(e)=>setRegion(e.target.value)}
            >
             <option value="all">All</option>
             <option value="Africa">Africa</option>
             <option value="Americas">Americas</option>
             <option value="Asia">Asia</option>
             <option value="Europe">Europe</option>
             <option value="Oceania">Oceania</option>
            </select>
        </div>
    )

}
