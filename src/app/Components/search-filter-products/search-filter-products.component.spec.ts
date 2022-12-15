import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterProductsComponent } from './search-filter-products.component';

describe('SearchFilterProductsComponent', () => {
  let component: SearchFilterProductsComponent;
  let fixture: ComponentFixture<SearchFilterProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilterProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFilterProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
