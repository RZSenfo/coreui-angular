import { ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class NavDropdownDirective {
    private el;
    constructor(el: ElementRef);
    toggle(): void;
}
/**
* Allows the dropdown to be toggled via click.
*/
export declare class NavDropdownToggleDirective {
    private dropdown;
    constructor(dropdown: NavDropdownDirective);
    toggleOpen($event: any): void;
}
export declare class AppSidebarNavComponent {
    navItems: any;
    true: any;
    role: string;
    isDivider(item: any): boolean;
    isTitle(item: any): boolean;
    isNavItem(item: any): boolean;
    constructor();
}
export declare class AppSidebarNavDividerComponent {
    divider: any;
    constructor();
}
import { Router } from '@angular/router';
export declare class AppSidebarNavItemComponent implements OnInit {
    private router;
    private el;
    item: any;
    hasClass(): boolean;
    isDropdown(): boolean;
    thisUrl(): any;
    isActive(): boolean;
    constructor(router: Router, el: ElementRef);
    ngOnInit(): void;
}
export declare class AppSidebarNavLinkComponent implements OnInit {
    private el;
    link: any;
    hasVariant(): boolean;
    isBadge(): boolean;
    isExternalLink(): boolean;
    isIcon(): boolean;
    hideMobile(): void;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
export declare class AppSidebarNavDropdownComponent implements OnInit {
    private el;
    link: any;
    hasBadge(): boolean;
    hasIcon(): boolean;
    constructor(el: ElementRef);
    ngOnInit(): void;
}
export declare class AppSidebarNavTitleComponent implements OnInit {
    private el;
    private renderer;
    title: any;
    constructor(el: ElementRef, renderer: Renderer2);
    hasClass(): boolean;
    ngOnInit(): void;
}
