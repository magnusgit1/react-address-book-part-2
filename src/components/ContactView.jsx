
import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { DataContext } from '../App.jsx'
import Contact from './Contact';

function ContactView() {

    const { id } = useParams();
    const { data } = useContext(DataContext)
    const contact = data.find((x) => x.id === Number(id))

    
    if (!contact) {
        console.log(data)
        console.log(contact)
        console.log(id)
        return <p>Loading...</p>
    }
    
    return (
        <>
        <h2>Contact view</h2>
        <Contact contact={contact} showDetails={true}/>
        <Link to="/dashboard">Return to dashboard</Link>
        </>
    )
}

export default ContactView