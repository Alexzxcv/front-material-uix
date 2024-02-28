import {makeAutoObservable} from "mobx";

export default class ThingsStore {
    constructor() {
        this._data = []
        this._thingId = ''
        this._serialNumber = ''
        this._model = ''
        this._manufacturer = ''
        this._facility = ''
        makeAutoObservable(this)
    }
    setData(newData) {
        this._data = newData
    }

    setThingId(thingID) {
        this._thingId = thingID
    }

    setSerialNumber(newSerialNumber) {
        this._serialNumber = newSerialNumber
    }

    setModel(newModel) {
        this._model=newModel
    }

    setManufacturer(newManufacturer) {
        this._manufacturer=newManufacturer
    }

    setFacility(newFacility) {
        this._facility = newFacility
    }

    get data() {
        return this._data
    }

    get thingId() {
        return this._thingId
    }

    get serialNumber() {
        return this._serialNumber
    }
    get model() {
        return this._model
    }

    get manufacturer() {
        return this._manufacturer
    }

    get facility() {
        return this._facility
    }
}