import React from "react";
import { useState, useEffect } from "react";
import { SearchBox, SearchIcon, FoundUsers, UsersImage, ImageUsers, UsersName} from "../../Styles/SearchMenuStyle.js";
import { searchUsers } from "../../Services/api.js";
import GlobalContext from '../../contexts/globalContext.js';
import { useContext } from 'react';

export default function SearchBar(){
    const { config } = useContext(GlobalContext);
    const[search,setSearch] = useState('');
    const[findUsers, setFindUsers] = useState([]);

    function handleSearch(e) {
        const element = e.target.value;
        setSearch(element);
    };

    useEffect(() => {
        if(search.length>=3){
        const dalaySearchUsers = setTimeout(async() => {
            try {
                const request = await searchUsers(config,search);

            } catch (error) {
                console.log(error);
            };
        }, 3000);
    
        return () => clearTimeout(dalaySearchUsers)
    }else{
        setFindUsers([])
        return;
    }
      }, [search]);

    function goToUserpage(name){
        console.log(name);
        setFindUsers([])
    };

    return(
        <div>
            <SearchIcon />
            <SearchBox>
                <input type='text' placeholder="Search for people" onChange={handleSearch}></input>
            </SearchBox>

            <FoundUsers>
                {(!findUsers?(<></>):(
                        findUsers.map((u)=>
                        <div>
                                <UsersImage onClick={()=>{goToUserpage(u.name)}}>
                                    <ImageUsers profileImage={u.pictureUrl} />
                                    <UsersName>{u.name}</UsersName>
                                </UsersImage>
                        </div>
                        )
                        
                ))}
                        
            </FoundUsers>
        </div>
    )
};