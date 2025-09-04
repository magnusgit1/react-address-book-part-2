 
import { Link } from 'react-router-dom'

function LeftMenu({ displayForm, setDisplayForm }){

    const onCreateContact = () => {
        setDisplayForm(!displayForm)
    }

    return (
        <>
        <div className="left-menu">
            <h2>Menu</h2>
            <Link to="/welcome">Home</Link>
            <button onClick={onCreateContact}>Create new contact</button>
        </div>
        </>
    )
}

export default LeftMenu