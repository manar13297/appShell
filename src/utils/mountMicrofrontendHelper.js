import {useEffect} from "react";
import {loadMicrofrontend} from "./loadMicrofrontend";
export const useMountMicrofrontend = (name, ref, props) => {
    useEffect(() => {
        loadMicrofrontend(name)
            .then(mountFn => {
                console.log(typeof mountFn)
                if (typeof mountFn === 'function') {
                    console.log("mount MF")
                   mountFn(ref.current , props)
                }
            })
            .catch(error => {
                console.error(`Failed to load or mount ${name} microfrontend`, error);
            });
    }, [name,ref,props]);
};