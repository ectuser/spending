import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TaigaModule } from '../taiga.module';
import { AddSpendingComponent } from './components/add-spending/add-spending.component';

@NgModule({
  declarations: [HomeComponent, AddSpendingComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, TaigaModule],
})
export class HomeModule {}
