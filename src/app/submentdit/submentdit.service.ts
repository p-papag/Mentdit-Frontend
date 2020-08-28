import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {SubmentditModel} from './submentdit-response';

@Injectable({
  providedIn: 'root'
})
export class SubmentditService {

  constructor(private http: HttpClient) { }

  getAllSubmentdits(): Observable<Array<SubmentditModel>> {
    return this.http.get<Array<SubmentditModel>>('http://localhost:8080/api/submentdit');
  }

  createSubmentdit(submentditModel: SubmentditModel): Observable<SubmentditModel> {
    return this.http.post<SubmentditModel>('http://localhost:8080/api/submentdit',
    submentditModel);
  }
}
