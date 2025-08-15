import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // Get user roles from localStorage or your auth service
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const roles = user.roles || [];

    // Get required roles from route data
    const requiredRoles = route.data['roles'] as Array<string>;

    // Check if user has at least one required role
    if (requiredRoles && requiredRoles.some(role => roles.includes(role))) {
      return true;
    } else {
      // Redirect to unauthorized page or login
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
