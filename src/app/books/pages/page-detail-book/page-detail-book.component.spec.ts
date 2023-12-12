import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailBookComponent } from './page-detail-book.component';

describe('PageDetailBookComponent', () => {
  let component: PageDetailBookComponent;
  let fixture: ComponentFixture<PageDetailBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailBookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
