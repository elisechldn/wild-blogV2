import { Component, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';
import { ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, ArticleThumbnailComponent, HttpClientModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent {
  
  articleId!: number;
  articles: Article[] = [];
  http = inject(HttpClient);
  articleSubscription!: Subscription;
  DB_URL: String = 'http://localhost:3000/articles/';

  constructor() {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articleSubscription = this.http.get<Article[]>(`${this.DB_URL}`)
      .subscribe({
          next: (articles) => {
            this.articles = articles;
        },
        error: (error) => {
          console.error('Erreur: ', error);
        },
        complete: () => {
          console.log('Les articles : ', this.articles)
        }
      });
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  handleLike(article: Article) {
    article.isLiked = !article.isLiked;
  }
}
