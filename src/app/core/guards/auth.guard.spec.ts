import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthenticationService } from '../services';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let authService: AuthenticationService
  let guard: AuthGuard;
  let routeMock: any = { snapshot: {} };
  let routeStateMock: any = { snapshot: {}, url: '/courses' };
  // eslint-disable-next-line jasmine/no-unsafe-spy
  let routerMock = { navigate: jasmine.createSpy('navigate') }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: Router, useValue: routerMock },],
      imports: [HttpClientTestingModule]
    });
    authService = TestBed.inject(AuthenticationService);
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow the authenticated user to access app', () => {
    authService.isAuthenticated = true;

    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });

  it('should allow load module if user authenticated', () => {
    authService.isAuthenticated = true;

    expect(guard.canLoad(routeMock, routeStateMock)).toEqual(true);
  });
});