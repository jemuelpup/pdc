import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBlockComponent } from './tool-block.component';

describe('ToolBlockComponent', () => {
  let component: ToolBlockComponent;
  let fixture: ComponentFixture<ToolBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
