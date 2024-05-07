import React, {useRef} from 'react';
import {useMountMicrofrontend} from '../../utils/mountMicrofrontendHelper';

const ConnectToLinkedinApp = ({onSignIn}) => {
    const ref = useRef(null);

    useMountMicrofrontend('connectToLinkedin', ref, {onSignIn});

    return <div ref={ref} ></div>;
};

export default ConnectToLinkedinApp;