import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTurmaComponent } from './buscar-turma.component';

describe('BuscarTurmaComponent', () => {
  let component: BuscarTurmaComponent;
  let fixture: ComponentFixture<BuscarTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarTurmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
