import { useNavigate, useLocation } from 'react-router-dom';
export default function Home() {
    const nav = useNavigate();
    const location = useLocation();
    function changeUrl(url) {
        nav(url);
    }
    return (
        <div className='container'>
            <h2>
                <code>React Router 6</code>
            </h2>
            <h2>Home</h2>
            <button onClick={() => changeUrl('/about')}>Go to About</button>
            <button onClick={() => changeUrl('/filter?age=5&type=works')}>Go to Filter</button>
        </div>
    )
} 