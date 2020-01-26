import { Injectable, Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PREVIEW_CONFIG, PreviewConfig } from '../models/preview-config.model';
import { Preview } from '../models/preview.model';
import { Observable, of } from 'rxjs';
import { startWith, delay, catchError } from 'rxjs/operators';

@Injectable()
export class PreviewService {

  constructor(
    private http: HttpClient,
    @Inject(PREVIEW_CONFIG) private config: PreviewConfig,
  ) {}

  private unfurlUrl = `https://unfurl.online/api/preview?url=`;
  load(url: string): Observable<Preview> {
    return this.http.get<Preview>(`${this.unfurlUrl}${url}`, {headers: {
      Authorization: `Bearer ${this.config.apiToken}`
    }})
    .pipe(
      catchError(error => of({url}))
    )
  }
}
