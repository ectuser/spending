import { BaseSpending } from './base-spending.interface';

export interface SpendingModel extends BaseSpending {
  id: string;
  date: Date;
}
