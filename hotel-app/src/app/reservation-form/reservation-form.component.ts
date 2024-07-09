import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{  

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.min(1)]]
    })
  }

  onSubmit(){
    if(this.reservationForm.valid){
      console.log('valid')
    }else{
      console.log('invalid')
    }      
  }
}
