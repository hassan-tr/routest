import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const withRouter = (WrappedComponent) => (props) => {
    const match = { params: useParams() };
    const navigate = useNavigate();
    const location = useLocation();

    return <WrappedComponent {...props} match={match} navigate={navigate} location={location} />;
};

export default withRouter;
