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
import { TuiDataListWrapperModule, TuiInputNumberModule, TuiIslandModule, TuiMarkerIconModule, TuiSelectModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
  ],
  exports: [
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
  ],
})
export class TaigaModule {}
