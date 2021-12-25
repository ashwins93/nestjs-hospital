import { SuperuserGuard } from './superuser.guard';

describe('SuperuserGuard', () => {
  it('should be defined', () => {
    expect(new SuperuserGuard()).toBeDefined();
  });
});
