import { useParams } from 'react-router-dom'
export default function User() {
    const params = useParams();
    const { name } = params;
    return (
        <div>
            <h2>This user {name} page</h2>
        </div>
    )
} 