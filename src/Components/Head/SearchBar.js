import React from "react";
import { useState } from "react";
import { SearchBox, SearchIcon } from "../../Styles/SearchMenuStyle.js";

export default function SearchBar(){
    const[search,setSearch] = useState('');

    function handleSearch(e) {
        const element = e.target.value;
        setSearch(element);
    };

    return(
        <div>
            <SearchIcon />

            <SearchBox>
                <input type='text' placeholder="Search for people" onChange={handleSearch}></input>
            </SearchBox>
            
        </div>
    )
}