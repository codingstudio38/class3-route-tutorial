import { useSearchParams, useLocation } from 'react-router-dom';
export default function Filter() {
    const location = useLocation();
    // console.log(location);
    const [searchParams, setSearchParams] = useSearchParams();
    function update() {
        setSearchParams({ age: 50, type: "its works" })
    }
    return (
        <div>
            <h2>Filter Params {searchParams.get('age')} {searchParams.get('type')}</h2>
            <button onClick={() => update()}>Change Params</button>
        </div>
    )
} 