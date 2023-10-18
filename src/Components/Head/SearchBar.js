import React from "react";
import { useState, useEffect } from "react";
import { SearchBox,FollowUser, SearchIcon, FoundUsers, UsersImage, ImageUsers, UsersName } from "../../Styles/SearchMenuStyle.js";
import { searchUsers } from "../../Services/api.js";
import getConfig from '../../Services/getConfig.js'
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [search, setSearch] = useState('');
    const [findUsers, setFindUsers] = useState([]);

    function handleSearch(e) {
        const element = e.target.value;
        setSearch(element);
    };

    useEffect(() => {
        if (search.length >= 3) {
            const dalaySearchUsers = setTimeout(async () => {
                try {
                    const request = await searchUsers(getConfig(token), search);
                    setFindUsers(request.data)

                } catch (error) {
                    console.log(error);
                };
            }, 300);

            return () => clearTimeout(dalaySearchUsers)
        } else {
            setFindUsers([])
            return;
        }
    }, [search]);

    function goToUserpage(id) {
        setFindUsers([]);
        navigate(`/users/${id}`);
    };

    return (
        <div>
            <SearchIcon />
            <SearchBox>
                <input type='text' placeholder="Search for people" onChange={handleSearch}></input>
            </SearchBox>

            <FoundUsers>
                {(!findUsers ? (<></>) : (
                    findUsers.map((u) =>
                        <div>
                            <UsersImage onClick={() => { goToUserpage(u.id) }}>
                                <ImageUsers profileImage={u.pictureUrl} />
                                <UsersName>{u.name}</UsersName>
                                <FollowUser isFollowing={u.follows!=null?'flex':'none'}>• following</FollowUser>
                            </UsersImage>
                        </div>
                    )
                ))}
            </FoundUsers>
        </div>
    )
};