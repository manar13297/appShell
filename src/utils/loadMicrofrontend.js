import * as __webpack_share_scopes__ from "webpack-merge";

export const loadMicrofrontend = async (name) => {
    return new Promise(async (resolve, reject) => {
        const response = await fetch(`http://localhost:8090/api/metadata/${name}`);
        const metadata = await response.json();
        console.log("Metadata: ", metadata)
        if (!metadata) {
            return reject(`Microfrontend with name ${name} not found`);
        }

        if (document.querySelector(`script[src="${metadata.remoteEntryUrl}"]`)) {
            console.log(`Script already loaded: ${metadata.remoteEntryUrl}`);
            console.log('window object:', window[name]);
            return resolve(window[name].mount);
        }

        const script = document.createElement('script');
        script.src = metadata.remoteEntryUrl;
        script.onload = async () => {
            await window[name].init(__webpack_share_scopes__.default);
            //----------------Should have a name convention--------------------------
            window[name].get(`./${name.charAt(0).toUpperCase() + name.slice(1)}App`).then((factory) => {
                const Module = factory();
                console.log("Factory is: ", Module)
                console.log("Factory Mount is: ", Module.mount)
                return resolve(Module.mount);
            }).catch(reject);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
};