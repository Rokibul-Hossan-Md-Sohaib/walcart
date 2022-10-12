import React from 'react';
import { Container } from 'react-bootstrap';
import About from './About/About';
import RightSide from './RightSide/RightSide';
import Sidebar from './Sidebar/Sidebar';

const MaiFeatures = () => {
    return (
        <Container>
            <div className="row mt-4">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-6"><About/></div>
                <div className="col-md-3"><RightSide/></div>
            </div>
        </Container>
    );
};

export default MaiFeatures;