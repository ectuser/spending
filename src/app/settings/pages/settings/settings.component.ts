import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  links: { link: string; text: string }[] = [
    { link: 'categories', text: 'Categories' },
    { link: 'period', text: 'Period' },
  ];
}
