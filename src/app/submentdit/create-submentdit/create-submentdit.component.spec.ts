import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubmentditComponent } from './create-submentdit.component';

describe('CreateSubmentditComponent', () => {
  let component: CreateSubmentditComponent;
  let fixture: ComponentFixture<CreateSubmentditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubmentditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubmentditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
