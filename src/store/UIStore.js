import {makeAutoObservable} from "mobx";

export default class UIStore {
    constructor() {
        this._mode = 'light'
        makeAutoObservable(this)
    }
    setMode(newMode) {
        this._mode = newMode
    }
    get mode() {
        return this._mode
    }
}