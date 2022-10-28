import styled from "styled-components"
import { useState, useContext, useEffect } from "react"
import { getAlertNewPosts } from "../../Services/api"
import GlobalContext from "../../contexts/globalContext";

export default function AlertNewPosts({numbNewPosts}){

    return (
        <AlertBox>
            <h1>
                {`${numbNewPosts} new posts, load more! ()`}
            </h1>
        </AlertBox>
    )
}

const AlertBox = styled.div`
  width: 611px;
  height: 61px;
  background: #1877F2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 25px;
  h1 {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF;
  }
`
