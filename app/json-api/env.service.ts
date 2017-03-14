import { Injectable } from "@angular/core";
import * as _ from "lodash";


@Injectable()
export class Environment {
    private NAMESPACE: string = "envVars";

    public envName: string = "dev";
    public apiUrl: string = "http://localhost:3000";

    constructor(
        private _window: Window
    ) {
        if (this.NAMESPACE in _window) {
            _.forEach(["envName", "apiUrl"], (name: string) => {
                if (name in _window[this.NAMESPACE]) this[name] = _window[this.NAMESPACE][name];
            });
        }
    }
}
