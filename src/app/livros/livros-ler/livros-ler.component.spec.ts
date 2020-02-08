import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosLerComponent } from './livros-ler.component';

describe('LivrosLerComponent', () => {
  let component: LivrosLerComponent;
  let fixture: ComponentFixture<LivrosLerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivrosLerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivrosLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
