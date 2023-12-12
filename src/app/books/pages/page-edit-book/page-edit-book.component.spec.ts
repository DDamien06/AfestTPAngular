import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditBookComponent } from './page-edit-book.component';

describe('PageEditBookComponent', () => {
  let component: PageEditBookComponent;
  let fixture: ComponentFixture<PageEditBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEditBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
