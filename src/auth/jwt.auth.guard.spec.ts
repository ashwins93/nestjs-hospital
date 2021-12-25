import { Jwt.AuthGuard } from './jwt.auth.guard';

describe('Jwt.AuthGuard', () => {
  it('should be defined', () => {
    expect(new Jwt.AuthGuard()).toBeDefined();
  });
});
