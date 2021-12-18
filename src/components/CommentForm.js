import { useState } from 'react'
import { connect } from 'react-redux' 
import { submitComment } from '../redux/actionCreators'


function CommentForm(employeeId, submitComment){

    const [content, setContent] = useState("")

    const onSubmit = (e) => {
        e.preventDefault()
        const newComment = {content}
        submitComment(newComment, employeeId)
    }

    return <form className="new_comment" onSubmit={onSubmit}>
    <label>
    Content:
    <textarea name="content" onChange={(e) => setContent(e.target.value)} value={content}></textarea> 
   </label>
  <input type="submit" value="Submit" />
    </form>

}

const mapStateToProps = (state) => ({employeeId: state.selectedEmployee.id})

export default connect(mapStateToProps, {submitComment})(CommentForm)