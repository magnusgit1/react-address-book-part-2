
import { Link } from 'react-router-dom'
function Contact({ contact, showDetails }) {

    return (
        <>
        {showDetails 
        ?
        <div className="extra-details">
            <h2 className="name">{contact.firstName + " " + contact.lastName}</h2>
            <img src={contact.profileImage} alt="No picture found"/>
            <h4>Email: {contact.email}</h4>
            <h4>Job: {contact.jobTitle}</h4>
            <h4>Street: {contact.street}</h4>
            <h4>City: {contact.city}</h4> 
        </div>
        : 
        <div className="normal-details">
            <Link to={`/contact/${contact.id}`}>
                <h2 className="name">{contact.firstName + " " + contact.lastName}</h2>
            </Link>
            <img src={contact.profileImage} alt="No picture found"/>
        </div>
        }
        </>
    )
}

export default Contact