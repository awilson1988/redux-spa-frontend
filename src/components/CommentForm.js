import { useState } from "react"


function CommentForm(){

    const [content, setContent] = useState("")

    return <form>
    <label>
    Content:
    <textarea name="content" onChange={(e) => setContent(e.target.value)} value={content}></textarea> 
   </label>
  <input type="submit" value="Submit" />
    </form>

}

export default CommentForm