import { Component, OnInit } from '@angular/core';
import { KeybinderService } from '@keybinder/ngx-keybinder';

@Component({
  selector: 'keybinder-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private keybinderService: KeybinderService) {}

  ngOnInit(): void {
    this.bind(['shift', 'n']);

    this.keybinderService.bindKey(['shift', 'n'], () => {
      console.log(['shift', 'n'].join('+'), ' released');
    });

    this.bind(['b']);
    this.bind(['alt', 'shift', 'control']);
  }

  private bind(keys: string[]): void {
    this.keybinderService.bindKey(keys, () => {
      console.log(keys.join('+'), ' clicked');
    });
  }
}
