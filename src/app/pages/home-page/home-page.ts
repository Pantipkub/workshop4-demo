import { Component } from '@angular/core';
import { SegmentedNavComponent } from '../../shared/components/segmented-nav-component/segmented-nav-component';
import { SocialInfoComponent } from './components/social-info-component/social-info-component';
import { ArticleBoxComponent } from './components/article-box-component/article-box-component';
import { SubscribeBoxComponent } from './components/subscribe-box-component/subscribe-box-component';

@Component({
  selector: 'app-home-page',
  imports: [SegmentedNavComponent, SocialInfoComponent, ArticleBoxComponent, SubscribeBoxComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  sampleData = {
    title: 'Crafting a design system for a multiplanetary future',
    description: 'Most companies try to stay ahead of the curve when it comes to visual design...',
    href: '/articles/design-system',
    publishedAt: 'September 5, 2022',
  }
}
