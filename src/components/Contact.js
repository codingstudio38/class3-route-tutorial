import { Link, Outlet } from 'react-router-dom';
export default function Contact() {
    return (
        <div>
            <h2>Contact Page</h2>
            <Link to="company" >Company</Link>
            <Link to="channel" style={{ "marginLeft": "5px" }}>Channel</Link>
            <Link to="others" style={{ "marginLeft": "5px" }}>Others</Link>
            <Outlet></Outlet>
        </div >
    )
}  