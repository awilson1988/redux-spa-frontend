function CommentCard({username, content}){
    
    return <div className="comment">
        <p>{username} says:</p>
        <p>{content}</p>
    </div>
}

export default CommentCard;