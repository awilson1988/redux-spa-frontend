import { NavLink }  from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../redux/actionCreators'
import { sendForm } from 'emailjs-com'
import { ContactUs } from '.'

function Nav({logout, username}){
  
  const loggedInRender = () => <nav>
    <NavLink to="/services"><button>See All Services</button></NavLink>
    <NavLink to="/employees"><button>About Us</button></NavLink>
    <button>Contact Us</button>
    <button onClick={logout}>Logout</button>
  </nav>

  const loggedOutRender = () => <nav>Hello, user! Sign in or sign up!</nav>

  return username ? loggedInRender() : loggedOutRender()
}
  
  // return <nav>
  //   <NavLink to="/services">See all Services</NavLink>
  // </nav>
  const mapStateToProps = (state) => ({username: state.user.username})

  export default connect(mapStateToProps, {logout})(Nav);