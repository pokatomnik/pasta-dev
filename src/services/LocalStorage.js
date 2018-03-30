import isObject from 'lodash.isobject';

export class LocalStorageService {
  constructor(key) {
    this._key = key;
  }

  save(value) {
    if (isObject(value)) {
      localStorage.setItem(this._key, JSON.stringify(value));
      return;
    }

    localStorage.setItem(this._key, '' + value);
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem(this._key)) || {};
    } catch (e) {
      return '' + localStorage.getItem(this._key);
    }
  }

  flush() {
    localStorage.removeItem(this._key);
  };
}
