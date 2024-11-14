import { Component, inject } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Article } from '../../models/article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [ArticleListComponent, CommonModule,HttpClientModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss',
  providers: [HttpClient],
})
export class ArticlePageComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  article:Article = {
    id:0,
    title: '',
    content: '',
    image: '',
    createdAt: new Date,
    isPublished: false,
    likeCount: 0,
    categoryName: '',
    isLiked: false,
  } ;
  http = inject(HttpClient);
  articleSubscription!: Subscription;
  DB_URL: String = 'http://localhost:3000/articles';


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      if(this.articleId) {
        this.getArticleById(this.articleId);
      }
    });
  }
  getArticleById(id:number) {
    this.articleSubscription = this.http.get<Article>(`${this.DB_URL}/${id}`)
      .subscribe({
        next: (article) => {
          this.article = article;
          console.log('Article récupéré: ', article);
        },
        error: (error) => {
          console.error('Erreur :', error)
        },
        complete: () => {
          console.log('Articles :');
        }
      })
    }
  
  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }
}
