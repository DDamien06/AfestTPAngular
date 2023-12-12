import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddBookComponent } from './page-add-book.component';

describe('PageAddBookComponent', () => {
  let component: PageAddBookComponent;
  let fixture: ComponentFixture<PageAddBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
