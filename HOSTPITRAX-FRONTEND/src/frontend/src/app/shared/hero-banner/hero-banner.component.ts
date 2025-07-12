import {Component, Input} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BreadcrumbNavigationComponent} from "../breadcrumb-navigation/breadcrumb-navigation.component";

@Component({
  selector: 'hero-banner',
  standalone: true,
  imports: [
    MatIcon,
    BreadcrumbNavigationComponent
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {
  @Input() imgSrc!: string;
  @Input() homeIconText!: string;
  @Input() hospitalLinkText!: string;
  @Input() mainTitleLine1!: string;
  @Input() mainTitleLine2!: string;
  @Input() mainParagraphLine1!: string;
  @Input() mainParagraphLine2!: string;
  @Input() hospitalLinkUrl!: string;
}
