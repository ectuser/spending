import { BaseSpending } from '../base-spending.interface';

export interface SpendingStorage extends BaseSpending {
  id: string;
  date: number;
}
