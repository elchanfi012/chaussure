import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChaussreComponent } from './edit-chaussre.component';

describe('EditChaussreComponent', () => {
  let component: EditChaussreComponent;
  let fixture: ComponentFixture<EditChaussreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditChaussreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChaussreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
