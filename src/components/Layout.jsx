import { Link } from 'react-router-dom';

function Layout ({ children }) {
    <div>
        <nav>
            <link to="/">Home</link>
            <link to="/admin/1">Admin</link>
        </nav>

        {children}
    </div>
}

export default Layout;