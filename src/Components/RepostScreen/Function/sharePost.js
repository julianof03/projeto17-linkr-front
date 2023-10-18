import { useContext } from "react";
import { BsWindowSidebar } from "react-icons/bs";
import GlobalContext from "../../../contexts/globalContext.js";
import { createRepost } from "../../../Services/api.js";
import getConfig from "../../../Services/getConfig.js";

async function sharePost(repost, setRepost) {
  const token = localStorage.getItem("token");
  const repostData = { postId: repost.postId, userId: repost.userId };
  
  createRepost(repostData, getConfig(token))
    .then((res) => {
      setRepost({ status: false, postId: "", userId: "" });
      window.location.reload(false);
    })
    .catch((res) => {
      setRepost({ status: false, postId: "", userId: "" });
    });
}

export { sharePost };
