import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { BreadcrumbMenu } from './../../models';
@Component({
  selector: 'wb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less'],
})
export class BreadcrumbsComponent implements OnInit {
  private readonly ROUTER_DATA_KEY = 'breadcrumb';
  breadcrumbItems: BreadcrumbMenu[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.breadcrumbItems = this.createBreadcrumbList(this.activatedRoute.root));
  }

  private createBreadcrumbList(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadcrumbMenu[] = []
  ): BreadcrumbMenu[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeURL) {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data[this.ROUTER_DATA_KEY];
      if (label) {
        breadcrumbs.push({ label, url });
      }

      return this.createBreadcrumbList(child, url, breadcrumbs);
    }
  }
}