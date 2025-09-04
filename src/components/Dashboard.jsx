
import { useState } from 'react'
import LeftMenu from './LeftMenu.jsx'
import ContactList from './ContactList'
import ContactForm from './ContactForm.jsx'

function Dashboard() {

    const [displayForm, setDisplayForm] = useState(false)

    return (
        <>
        <div className="dashboard">
            <LeftMenu displayForm={displayForm} setDisplayForm={setDisplayForm}/>
            {displayForm ? <ContactForm  setDisplayForm={setDisplayForm}/> : <ContactList/>}
        </div>
        </>
    )
}

export default Dashboard