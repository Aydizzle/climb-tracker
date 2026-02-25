import { Link } from 'react-router-dom';

function Layout ({ children }) {
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/admin/1">Admin</Link>
            </nav>

            {children}
        </div>
    )
}

export default Layout;