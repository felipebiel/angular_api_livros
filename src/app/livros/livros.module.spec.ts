import { LivrosModule } from './livros.module';

describe('LivrosModule', () => {
  let livrosModule: LivrosModule;

  beforeEach(() => {
    livrosModule = new LivrosModule();
  });

  it('should create an instance', () => {
    expect(livrosModule).toBeTruthy();
  });
});
