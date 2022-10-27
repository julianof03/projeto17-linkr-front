import { createRepost } from "../../../Services/api.js";
import getConfig from "../../../Services/getConfig.js";

export default async function sharePost(postUserId, postId, repost, setRepost) {
  setRepost({ status: true, postId: postId, userId: postUserId });
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
