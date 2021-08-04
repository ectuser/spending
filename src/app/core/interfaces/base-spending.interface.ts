export interface BaseSpending {
  amount: number;
  description?: string;
  categoryId: string;
  date: Date | number;
}
