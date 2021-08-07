import { SpendingModel } from '../interfaces/spending.interface';
import { generateId } from '../utils/generate-id.util';
import { SpendingStorage } from '../interfaces/localstorage-models/spending-storage.interface';

export class Spending implements SpendingModel {
  id: string;
  amount!: number;
  categoryId!: string;
  date!: Date;
  description?: string;

  constructor(source: Omit<SpendingModel, 'id'>) {
    this.id = generateId();
    Object.assign(this, source);
  }

  transformToSaveModel(): SpendingStorage {
    return { ...this, date: this.date.getTime() };
  }
}
