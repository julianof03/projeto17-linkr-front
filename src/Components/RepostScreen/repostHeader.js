import { getUser } from "../../Services/api";
import getConfig from "../../Services/getConfig.js";

import styled from "styled-components";
import { BiRepost } from "react-icons/bi";

export default function RepostHeader({repostUser}) {
   return (
    <Box>
        
        <BiRepost
                size="30px"
                
              />
       <div> Re-post by {repostUser}</div></Box>
   )
    
}

const Box = styled.div `
background-color: #1E1E1E;
padding: 6px;
color: white;
display: flex;
align-items: center;
border-radius:16px 16px 0 0;

div {
    margin-left: 2px;
}
`

