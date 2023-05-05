import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIdeasComponent } from './share-ideas.component';

describe('ShareIdeasComponent', () => {
  let component: ShareIdeasComponent;
  let fixture: ComponentFixture<ShareIdeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareIdeasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
