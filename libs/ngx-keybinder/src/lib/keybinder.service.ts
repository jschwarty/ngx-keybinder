import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KeybinderService {
  private bindings: {
    [context: string]: {
      [key: string]: () => void
    }
  };

  constructor() {
    this.bindings = {};
  }

  bindKey(key: string, context: string, command: () => void): void {
    if (this.bindings[context] === undefined) {
      this.bindings[context] = {};
    }
    this.bindings[context][key] = command;
  }

  getBinding(key: string, context: string): () => void | undefined {
    return this.bindings[context][key];
  }
}
