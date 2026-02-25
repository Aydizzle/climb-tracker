import { Link } from 'react-router-dom';
import './Layout.css'

function Layout ({ children }) {
    return(
        <div>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/admin/1">Admin</Link>
            </nav>

            {children}
        </div>
    )
}

export default Layout;