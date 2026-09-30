import { useState } from "react"

const SearchPage = ({ search, setSearch }) => {

    return (
        <div className="mb-4">
            <input type="text" placeholder="Search for the products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-1 px-4 w-full outline-none border border-[#ccc] rounded-2xl"
            />
        </div>
    )
}

export default SearchPage