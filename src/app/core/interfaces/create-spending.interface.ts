import { BaseSpending } from './base-spending.interface';

export interface CreateSpending extends BaseSpending {
  date: Date;
}
