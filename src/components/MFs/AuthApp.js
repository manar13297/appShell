import React, {useRef} from 'react';
import {useMountMicrofrontend} from '../../utils/mountMicrofrontendHelper';

const AuthApp = ({onSignIn}) => {
    const ref = useRef(null);

    useMountMicrofrontend('auth', ref, {onSignIn});

    return <div ref={ref} ></div>;
};

export default AuthApp;