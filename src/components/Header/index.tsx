import './styles.css';
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <header className="dsf-header">
            <nav className="dsf-container">
                <Link to="#">
                    <h1>DSFilter</h1>
                </Link>
                <div className="dsf-navbar-right">
                    <div className="dsf-menu-items-container">
                        <div className="dsf-menu-item">
                            produtos
                        </div>
                    </div>

                </div>
            </nav>
        </header>
    );
}