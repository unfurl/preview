import { Injectable, Inject, Optional } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PREVIEW_CONFIG, PreviewConfig } from '../models/preview-config.model';
import { Preview, UnfurlMetadata } from '../models/preview.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { unfurl } from '../unfurl';
import {pick} from 'lodash-es';

function  mapMetadataToPreview(metadata: UnfurlMetadata): Preview {
  const preview: Preview = pick(metadata, [ 'title', 'description' ]);
  // Get image and description
  preview.image =
    metadata?.oEmbed?.thumbnails?.[ 0 ]?.url ?? metadata?.twitter_card?.images?.[ 0 ]?.url ?? metadata?.open_graph?.images?.[ 0 ]?.url ?? metadata?.favicon ?? metadata?.open_graph?.images?.[ 0 ]?.url;
  preview.description = metadata?.description ?? metadata?.open_graph?.description ?? metadata?.twitter_card?.description;
  return preview;
}

@Injectable()
export class PreviewService {

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Optional() @Inject(PREVIEW_CONFIG) private config: PreviewConfig,
  ) {}

  private apiToken:string = '';

  private unfurlUrl = `https://unfurl.online/api/v2/preview?url=`;
  load(url: string): Observable<Preview> {
    const apiToken = this.config ? this.config.apiToken : unfurl.getConfig()?.apiToken ?? '';

    if(!apiToken) {
      console.error(`Unfurl's Api Token is missing please make sure you add the Api Token Appropriately as per the documentation at https://github.com/unfurl/preview`);
    }
    this.apiToken = apiToken;

    return this.http.get<UnfurlMetadata>(`${this.unfurlUrl}${url}`, {headers: {
      Authorization: `Bearer ${this.apiToken}`
    }})
    .pipe(
      map(metadata => {
         const preview = mapMetadataToPreview(metadata);
         preview.url = url;
         return preview;
      }),
      catchError(error => of({url}))
    )
  }



  verifyURL(preview: Preview) {
    const urlReg: RegExp = /^(https:\/\/|www)(\.)*(.+)\.(png|jpeg|svg)$/;
    return preview?.image?.match(urlReg);
  }
}
