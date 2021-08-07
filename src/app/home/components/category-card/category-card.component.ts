import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CategoryCard } from '../../../core/interfaces/category-card.interface';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryCardComponent {
  @Input() category?: CategoryCard;
  menuOpen = false;

  onMenuClick(event: Event): void {
    event.stopPropagation();
  }
}
