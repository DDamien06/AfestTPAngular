import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailAuthorComponent } from './page-detail-author.component';

describe('PageDetailAuthorComponent', () => {
  let component: PageDetailAuthorComponent;
  let fixture: ComponentFixture<PageDetailAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDetailAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDetailAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
