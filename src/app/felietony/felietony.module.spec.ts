import { FelietonyModule } from './felietony.module';

describe('FelietonyModule', () => {
  let felietonyModule: FelietonyModule;

  beforeEach(() => {
    felietonyModule = new FelietonyModule();
  });

  it('should create an instance', () => {
    expect(felietonyModule).toBeTruthy();
  });
});
