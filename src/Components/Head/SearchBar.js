import React from "react";
import { useState, useEffect } from "react";
import { SearchBox, SearchIcon, FoundUsers, UsersImage, ImageUsers, UsersName} from "../../Styles/SearchMenuStyle.js";
import { searchUsers } from "../../Services/api.js";
import { UserContext } from "../../contexts/userContext";
import { useContext } from 'react';


const teste = [
    {
        pictureUrl:'https://i.pinimg.com/originals/65/30/e4/6530e4c84826c0362a489954e7a9a28f.jpg',
        name:'leo'
    },
    {
        pictureUrl:'https://i.pinimg.com/originals/65/30/e4/6530e4c84826c0362a489954e7a9a28f.jpg',
        name:'valdi'
    },
    {
        pictureUrl:'https://s2.glbimg.com/i86mB2uvgqlN0IshyMvh7fsgx6E=/smart/e.glbimg.com/og/ed/f/original/2019/07/24/gato-chapeu-feito-com-proprio-gato04.jpg',
        name:'edson'
    },
    {
        pictureUrl:'https://images-americanas.b2w.io/produtos/1606130352/imagens/cap-bonito-chapeu-gato-traje-cosplay-filhote-de-cachorro-gatos-caes-engracado-perna-de-frango-laco-de-cabelo-cabeca-desgaste-pet-chapeu/1606130352_1_large.jpg',
        name:'sofia'
    }
    
]

export default function SearchBar(){
    const {config} = useContext(UserContext);
    const[search,setSearch] = useState('');
    const[findUsers, setFindUsers] = useState([]);

    function handleSearch(e) {
        const element = e.target.value;
        setSearch(element);
        console.log('ta mudando bichoo');
    };

    useEffect(() => {
        if(search.length>=3){
        const dalaySearchUsers = setTimeout(async() => {
            try {
                console.log('so to indo agr');
                //const request = await searchUsers(config,search);
                setFindUsers(teste);
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