import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.css'
})
export class ReservationFormComponent implements OnInit{  

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRouter: ActivatedRoute  
  ){}

  ngOnInit(){
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', [Validators.required, Validators.min(1)]]
    })

    let id = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){
      this.reservationService.getReservation(id).subscribe(reservation => {
        if(reservation){
          this.reservationForm.patchValue(reservation);
        }          
      })
    }
  }

  onSubmit(){
    if(this.reservationForm.valid){
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRouter.snapshot.paramMap.get('id');

      if(id){
        this.reservationService.updateReservation(id, reservation).subscribe(() => {
          console.log("Update processed!");
        });      
      }else{
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("Add processed!");
        });     
      }

      this.router.navigate(['/list']);
    }     
  }
}
