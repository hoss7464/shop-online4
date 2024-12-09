import React from 'react';
import { DashboardContainer, DashboardWrapper } from './DashboardElments';
import ScrollToTop from '../../core-ui/ScrollToTop';

const Dashboard = () => {
    return (
        <>
        <ScrollToTop />
        <DashboardContainer>
            
            <DashboardWrapper>Welcome to dashboard</DashboardWrapper>
        </DashboardContainer>
        </>
    );
};

export default Dashboard;