import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TuiRootModule, TuiNotificationsModule, TuiDialogModule, AppRoutingModule, TuiButtonModule],
  exports: [TuiRootModule, TuiNotificationsModule, TuiDialogModule, AppRoutingModule, TuiButtonModule],
})
export class TaigaModule {}
