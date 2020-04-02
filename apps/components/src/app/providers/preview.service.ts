import { Injectable, Inject, Optional } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PREVIEW_CONFIG, PreviewConfig } from '../models/preview-config.model';
import { Preview } from '../models/preview.model';
import { Observable, of } from 'rxjs';
import { startWith, delay, catchError } from 'rxjs/operators';
import { UNFURL_CONFIG_KEY } from '../config-key';
import { unfurl } from '../unfurl';


@Injectable()
export class PreviewService {

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Optional() @Inject(PREVIEW_CONFIG) private config: PreviewConfig,
  ) {}

  private apiToken:string = '';

  private unfurlUrl = `https://unfurl.online/api/v1/preview?url=`;
  load(url: string): Observable<Preview> {
    const apiToken = this.config ? this.config.apiToken : unfurl.getConfig()?.apiToken ?? '';

    if(!apiToken) {
      console.error(`Unfurl's Api Token is missing please make sure you add the Api Token Appropriately as per the documentation at https://github.com/unfurl/preview`);
    }
    this.apiToken = apiToken;

    return this.http.get<Preview>(`${this.unfurlUrl}${url}`, {headers: {
      Authorization: `Bearer ${this.apiToken}`
    }})
    .pipe(
      catchError(error => of({url}))
    )
  }

  verifyURL(preview :Preview) {
    const urlReg: RegExp = /^(https:\/\/|www)(\.)*(.+)\.(png|jpeg|svg|jpg)$/
    return preview.image.match(urlReg)

  }
}
