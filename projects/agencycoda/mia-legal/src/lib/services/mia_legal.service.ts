import { Inject, Injectable } from '@angular/core';
import { MiaLegal } from '../entities/mia_legal';
import { MiaBaseCrudHttpService, MiaCoreConfig } from '@agencycoda/mia-core';
import { HttpClient } from '@angular/common/http';
import { MiaAuthConfig, MIA_AUTH_PROVIDER } from '@agencycoda/mia-auth';

@Injectable({
  providedIn: 'root'
})
export class MiaLegalService extends MiaBaseCrudHttpService<MiaLegal> {

  constructor(
    protected http: HttpClient,
    @Inject(MIA_AUTH_PROVIDER) protected config: MiaCoreConfig,
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-legal';
  }
 
  fetchBySlug(slug: string, language: string = 'en'): Promise<MiaLegal> {
    return this.get(this.basePathUrl + '/fetch-slug/' + slug + '-' + language);
  }
}