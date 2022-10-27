import { createRepost } from "../../../Services/api.js";
import getConfig from "../../../Services/getConfig.js";

async function sharePost(repost, setRepost) {
  
  const token = localStorage.getItem("token");

  const repostData = [{ postId: repost.postId, userId: repost.userId }];

  createRepost(getConfig(token), repostData)
    .then((res) => {
      setRepost({ status: false, postId: "", userId: "" });
    })
    .catch((res) => {
      console.log("algo deu errado");
    });
}

export {
  sharePost,
}
