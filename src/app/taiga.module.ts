import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiDialogModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiNotificationsModule,
  TuiRootModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputInlineModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiAutoFocusModule } from '@taiga-ui/cdk';

const modules = [
  TuiRootModule,
  TuiNotificationsModule,
  TuiDialogModule,
  TuiButtonModule,
  TuiSelectModule,
  TuiDataListModule,
  TuiDataListWrapperModule,
  TuiInputNumberModule,
  TuiIslandModule,
  TuiSvgModule,
  TuiMarkerIconModule,
  TuiHostedDropdownModule,
  TuiLinkModule,
  TuiScrollbarModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputInlineModule,
  TuiNotificationsModule,
  TuiAutoFocusModule,
];

@NgModule({
  imports: [CommonModule, ...modules],
  exports: [...modules],
})
export class TaigaModule {}
