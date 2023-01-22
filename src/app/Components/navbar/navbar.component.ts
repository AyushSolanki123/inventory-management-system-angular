import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCountProducts } from 'src/app/store/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() title!: string;

  countProducts$: Observable<number>;

  constructor(private store: Store) {
    this.countProducts$ = store.select(selectCountProducts);

    console.log(this.countProducts$);
  }
}
