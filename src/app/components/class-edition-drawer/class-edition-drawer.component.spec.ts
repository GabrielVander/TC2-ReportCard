import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEditionDrawerComponent } from './class-edition-drawer.component';

describe('ClassEditionDrawerComponent', () => {
  let component: ClassEditionDrawerComponent;
  let fixture: ComponentFixture<ClassEditionDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassEditionDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEditionDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
