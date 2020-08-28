import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmentditsComponent } from './list-submentdits.component';

describe('ListSubmentditsComponent', () => {
  let component: ListSubmentditsComponent;
  let fixture: ComponentFixture<ListSubmentditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubmentditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubmentditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
