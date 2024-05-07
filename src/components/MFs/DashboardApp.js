import React, {useRef} from 'react';
import {useMountMicrofrontend} from '../../utils/mountMicrofrontendHelper';

const DashboardApp = ({onSignIn, onLinkedinConnect}) => {
    const ref = useRef(null);

    useMountMicrofrontend('dashboard', ref, {onSignIn, onLinkedinConnect});

    return <div ref={ref} ></div>;
};

export default DashboardApp;