import { Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class KeybinderService {
  private listenerRemovers: { [eventName: string]: Function };

  constructor(private eventManager: EventManager) {
    this.listenerRemovers = {};
  }

  bindKey(keys: string[], command: () => void): void {
    const eventName = this.buildKeyIndex(keys);
    const listenerRemover = this.eventManager
      .addGlobalEventListener('window', `keyup.${eventName}`, command);
    this.saveListenerRemover(eventName, listenerRemover);
  }

  clearBindings(): void {
    Object.keys(this.listenerRemovers).forEach((eventName: string) => {
      this.listenerRemovers[eventName]();
    });
    this.listenerRemovers = {};
  }

  private buildKeyIndex(keys: string[]): string {
    const sortLogic = (a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase());
    const modifiers = keys.filter(k => k.length > 1).sort(sortLogic);
    const nonModifiers = keys.filter(k => k.length === 1).sort(sortLogic);
    const sortedKeys = [...modifiers, ...nonModifiers];
    return sortedKeys.join('.');
  }

  private saveListenerRemover(eventName: string, listenerRemover: Function) {
    if (this.listenerRemovers[eventName]) {
      // todo: see if this is actually needed...
      this.listenerRemovers[eventName]();
      delete this.listenerRemovers[eventName];
    }
    this.listenerRemovers[eventName] = listenerRemover;
  }
}
