import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BreedSingleImageResponse {
  message: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) {
  }

  findDog(breed: string): Observable<BreedSingleImageResponse> {
    const endpoint = `https://dog.ceo/api/breed/${breed}/images/random`;

    return this.http.get<BreedSingleImageResponse>(endpoint);
  }
}
