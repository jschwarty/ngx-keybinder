import { async, TestBed } from '@angular/core/testing';
import { NgxKeybinderModule } from './ngx-keybinder.module';

describe('NgxKeybinderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxKeybinderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxKeybinderModule).toBeDefined();
  });
});
