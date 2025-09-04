
import { useContext } from 'react'
import { DataContext } from '../App.jsx'
import Contact from './Contact.jsx'

function ContactList() {

    const { data } = useContext(DataContext)

    return (
        <>
        <div className="contact-box">
            <ul className="contact-list">
                {data.map((contact, index) => (
                    <li key={index}>
                        <Contact contact={contact} showDetails={false}/>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default ContactList