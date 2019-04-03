import { KeybinderService } from './keybinder.service';

describe('KeybinderService', () => {
  it('should allow you to bind a key event to a function', () => {
    const keybinderService = new KeybinderService();
    const key = 'n';
    const context = 'people';
    const command = () => {
      console.log('command executed');
    };
    keybinderService.bindKey(key, context, command);
    expect(keybinderService.getBinding(key, context)).toBe(command);
  });

  it('should support the same key in different contexts', () => {
    const keybinderService = new KeybinderService();
    const key = 'n';
    const context1 = 'people';
    const context2 = 'orders';
    const command = () => {
      console.log('command executed');
    };
    keybinderService.bindKey(key, context1, command);
    expect(keybinderService.getBinding(key, context1)).toBe(command);
    keybinderService.bindKey(key, context2, command);
    expect(keybinderService.getBinding(key, context2)).toBe(command);
  });

  it('should support the same key in different contexts with different commands', () => {
    const keybinderService = new KeybinderService();
    const key = 'n';
    const context1 = 'people';
    const context2 = 'orders';
    const command1 = () => {
      console.log('command one executed');
    };
    const command2 = () => {
      console.log('command two executed');
    };
    keybinderService.bindKey(key, context1, command1);
    expect(keybinderService.getBinding(key, context1)).toBe(command1);
    keybinderService.bindKey(key, context2, command2);
    expect(keybinderService.getBinding(key, context2)).toBe(command2);
  });
});
