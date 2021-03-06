import { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    
    async function handleLogOut() {
        setError('');
        try {
            await logout();
            history.push("/login");
        } catch (e) {
            setError('Opps something went wrong while log out...!');
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                 { error && <Alert variant="danger">{ error }</Alert> }
                    <strong>Email: </strong>{ currentUser.email } <hr />
                    <Link to="update-profile" className="btn btn-primary w-100 mt-3">
                        Update Profile
                    </Link>
                    <Link to="file-section" className="btn btn-primary w-100 mt-3">
                        Upload File
                    </Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogOut}>Log Out</Button>
            </div>
        </>
    )
}
