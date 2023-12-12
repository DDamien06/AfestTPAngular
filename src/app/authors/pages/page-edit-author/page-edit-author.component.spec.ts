import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditAuthorComponent } from './page-edit-author.component';

describe('PageEditAuthorComponent', () => {
  let component: PageEditAuthorComponent;
  let fixture: ComponentFixture<PageEditAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEditAuthorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
