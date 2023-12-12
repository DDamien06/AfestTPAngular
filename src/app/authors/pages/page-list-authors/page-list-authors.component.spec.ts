import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListAuthorsComponent } from './page-list-authors.component';

describe('PageListAuthorsComponent', () => {
  let component: PageListAuthorsComponent;
  let fixture: ComponentFixture<PageListAuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageListAuthorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageListAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
