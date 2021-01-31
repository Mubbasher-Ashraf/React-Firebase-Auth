import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';
import SignUp from '../SignUp';
import Dashboard from '../Dashboard';
import Login from '../Login';
import ForgotPassword from '../ForgotPassword';
import UpdateProfile from '../UpdateProfile';
import UploadFile from '../UploadFile';
import PrivateRoute from '../route/PrivateRoute';

const route = () => (
    <Container className="fc d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="w-100" style={{ maxWidth: '400px' }}>
            <Router>
                <Switch>
                    <AuthProvider>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute path="/update-profile" component={UpdateProfile} />
                        <PrivateRoute path="/file-section" component={UploadFile} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/forget-password" component={ForgotPassword} />
                        <Route path="/signup" component={SignUp} />
                    </AuthProvider>
                </Switch>
            </Router>
        </div>
    </Container>
);

export default route;
