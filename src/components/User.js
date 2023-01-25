import { useParams } from 'react-router-dom'
export default function User() {
    const params = useParams();
    const { name } = params;
    const { id } = params;
    return (
        <div>
            <h2>This user {name},{id} page</h2>
        </div>
    )
}   