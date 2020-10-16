import { Component, OnInit } from '@angular/core';
import { DogService, BreedSingleImageResponse } from '../dog.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  breed: string;
  dogUrl: string;
  failedToFetchDog = false;

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
  }

  findDog() {
    this.dogService.findDog(this.breed).subscribe((result: BreedSingleImageResponse) => {
      if (result.status === 'success') {
        this.dogUrl = result.message;
        this.failedToFetchDog = false;
      } else {
        this.failedToFetchDog = true;
      }
    }, (_err) => this.failedToFetchDog = true);
  }
}
