import {makeAutoObservable} from "mobx";

export default class MessagesStore {
    constructor() {
        this._data = {
            voltage: [{
                x: 0,
                y: 0,
            }],
            current: [{
                x: 0,
                y: 0,
            }],
            temperature: [{
                x: 0,
                y: 0,
            }],
            humidity: [{
                x: 0,
                y: 0,
            }],
        }
        makeAutoObservable(this)
    }

    setData(action, newData) {
        switch (action) {
            case 'voltage':
                this._data.voltage = newData
                break;
            case 'current':
                this._data.current = newData
                break;
            case 'temperature':
                this._data.temperature = newData
                break;
            case 'humidity':
                this._data.humidity = newData
                break;
            default:
                return;
        }
    }

    get data() {
        return this._data
    }
}