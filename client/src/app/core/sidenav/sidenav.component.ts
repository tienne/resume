import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { SidenavService, ISideItem } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private _routerSubscription: Subscription;
  menus: ISideItem[];

  constructor(
    private _sidenavService: SidenavService,
    private _router: Router
  ) {
    // 사이드바 생성시 현재 라우터를 확인하여 메뉴 오픈처리 생성자에 처리하는 이유는 route events 시점이 변경되서.. 아래 참고
    // https://github.com/angular/angular/issues/17473
    const url = this.stripSlashes(this._router.url);

    this._sidenavService.nextOpenByRoute(url);
  }

  ngOnInit() {
    // 라우팅 변경시 오픈 유지시킬 메뉴 처리
    this._routerSubscription = this._router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        const url = this.stripSlashes(event.url);

        this._sidenavService.nextOpenByRoute(url);
      });

    this._sidenavService.menuItems$.subscribe((menus: ISideItem[]) => {
      this.menus = menus;
    });
  }

  /**
   * url의 맨앞 /(슬래쉬)를 제거
   * @param {string} url
   * @returns {string}
   */
  stripSlashes(url: string): string {
    return url.replace(/^\/+/, '');
  }
}
