import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaComissaoComponent } from './turma-comissao.component';

describe('TurmaComissaoComponent', () => {
  let component: TurmaComissaoComponent;
  let fixture: ComponentFixture<TurmaComissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurmaComissaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurmaComissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
