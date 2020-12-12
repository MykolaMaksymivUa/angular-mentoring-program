import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('on login user should be authenticated', () => {
    service.login('Admin', 'Admin').subscribe(() => {
      expect(service.isAuthenticated).toBe(true);
    });

  });

  it('on logout all user data should be cleared', () => {
    service.logout()

    expect(service.isAuthenticated).toBe(false);
  });

  // it('getUserInfo of user \'Test123\' should return \'Test123\'', () => {
  //   service.logout();
  //   const userLogin = 'Test123';

  //   service.login(userLogin, '123456').subscribe(() => {
  //     expect(service.getUserInfo()).toBe(userLogin);
  //     service.logout();
  //   })

  // });
});
