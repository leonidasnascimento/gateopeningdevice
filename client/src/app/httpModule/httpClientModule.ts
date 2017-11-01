import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

export class HttpClient {
  public Post(url: string, obj: any, http: Http) {

    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    console.log(JSON.stringify(obj));

    return http.post(url, obj)
    .toPromise()
    .then(this.GetResponse);
  }

  private GetResponse(response: Response): String {
    if (response.ok) {
      return response.text();
    }
  }
}
