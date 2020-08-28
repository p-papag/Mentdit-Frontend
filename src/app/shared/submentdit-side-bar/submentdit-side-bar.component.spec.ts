import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmentditSideBarComponent } from './submentdit-side-bar.component';

describe('SubmentditSideBarComponent', () => {
  let component: SubmentditSideBarComponent;
  let fixture: ComponentFixture<SubmentditSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmentditSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmentditSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
