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
            {/* in here we  */}
        </div>
    )

}
