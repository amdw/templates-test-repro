import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycomponentComponent } from './mycomponent.component';

describe('MycomponentComponent', () => {
  let component: MycomponentComponent;
  let fixture: ComponentFixture<MycomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycomponentComponent);
    component = fixture.componentInstance;
    component.myinput = {myfield: 'myvalue2'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the value', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('myvalue2');
  });
});
