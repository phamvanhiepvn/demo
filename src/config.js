const prefix = 'REACT_APP_';
class Convert {
    constructor() {
        const keys = Object.keys(process.env);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!key.startsWith(prefix))
                continue;
            const after = key.split(prefix)[1];
            const value = process.env[key];
            if (value.startsWith('[') || value.startsWith('{'))
                this[after] = JSON.parse(process.env[key]);
            else
                this[after] = process.env[key];
        }
    }
}

export const Config = new Convert();