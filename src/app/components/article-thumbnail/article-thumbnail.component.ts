import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Article } from '../../models/article.model';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() notifyLike: EventEmitter<number> = new EventEmitter();

  sendNotification() {
    this.notifyLike.emit(this.article.likeCount);
  }
}
