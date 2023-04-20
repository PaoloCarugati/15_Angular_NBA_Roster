import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSquadraComponent } from './team.component';

describe('ComponenteSquadraComponent', () => {
  let component: ComponenteSquadraComponent;
  let fixture: ComponentFixture<ComponenteSquadraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteSquadraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteSquadraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
