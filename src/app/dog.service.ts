import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BreedSingleImageResponse {
  message: string;
  status: string;
}

export interface BreedImagesResponse {
  message: string[];
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

  findMany(breed: string, count: number): Observable<BreedImagesResponse> {
    const endpoint = `https://dog.ceo/api/breed/${breed}/images/random/${count}`;

    return this.http.get<BreedImagesResponse>(endpoint);
  }
}
