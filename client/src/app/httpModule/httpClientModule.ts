import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class HttpClient {
  private http: Http;

  public Post(url: string, obj: any) {
    alert(url);
    alert(JSON.stringify(obj));

    return this.http.post(url, JSON.stringify(obj))
    .toPromise()
    .then(this.GetResponse);
  }

  private GetResponse(response: Response): String {

    if (!response.ok) {
      return JSON.stringify(response.text) || '';
    } else {
      const res = response.json();
      return res.data || '';
    }
  }
}
