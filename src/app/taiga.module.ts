import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiDataListModule, TuiDialogModule, TuiNotificationsModule, TuiRootModule } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiInputNumberModule, TuiSelectModule } from '@taiga-ui/kit';

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
  ],
})
export class TaigaModule {}
