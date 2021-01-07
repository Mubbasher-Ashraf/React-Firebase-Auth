import { useRef, useState, useEffect } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [subscription, setSubscription] = useState();
    const history = useHistory();
    
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError('');
            setLoading(true);
            const subscribe = await login(emailRef.current.value, passwordRef.current.value);
            setSubscription(subscribe);
            history.push("/");
        } catch (e) {
            setError('Error while login');
        }
        setLoading(false);
    }

    useEffect(() => {
        return subscription;
    }, [subscription]);
    
     return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    { error && <Alert variant="danger">{ error }</Alert> }
                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={ loading } className="w-100" type="submit">Login In</Button>
                    </Form>
                    <div className="w-100 text-center mt=3">
                        <Link to="/forget-password">Forget Password?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Create an Account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
export default Login;