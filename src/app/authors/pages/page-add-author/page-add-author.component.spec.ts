import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddAuthorComponent } from './page-add-author.component';

describe('PageAddAuthorComponent', () => {
  let component: PageAddAuthorComponent;
  let fixture: ComponentFixture<PageAddAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAddAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAddAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
