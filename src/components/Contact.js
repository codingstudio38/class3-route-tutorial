import { Link, Outlet } from 'react-router-dom';
export default function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <Link to="company">Company</Link>
            <Link to="channel">Channel</Link>
            <Link to="others">Others</Link>
            <Outlet></Outlet>
        </div >
    )
} 