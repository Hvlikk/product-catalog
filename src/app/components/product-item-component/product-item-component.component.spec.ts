import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponentComponent } from './product-item-component.component';

describe('ProductItemComponentComponent', () => {
  let component: ProductItemComponentComponent;
  let fixture: ComponentFixture<ProductItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
