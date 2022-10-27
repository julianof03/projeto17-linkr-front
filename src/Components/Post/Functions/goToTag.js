import { useNavigate } from "react-router-dom";

function GoToTag(tag) {
    const navigate = useNavigate()
    const newTag = tag.replace('#', '')
    navigate(`/hashtag/${newTag}`)
}

export {
    GoToTag,
}