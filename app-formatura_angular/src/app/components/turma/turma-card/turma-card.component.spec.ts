import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaCardComponent } from './turma-card.component';

describe('TurmaCardComponent', () => {
  let component: TurmaCardComponent;
  let fixture: ComponentFixture<TurmaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurmaCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurmaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
