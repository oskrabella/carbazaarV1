import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation-widget',
  templateUrl: './reservation-widget.component.html',
  styleUrls: ['./reservation-widget.component.scss']
})
export class ReservationWidgetComponent implements OnInit {
  reservationForm: FormGroup;
  company = '';
  address = '';
  pickupLoc = '';
  pickupDate = '';
  pickupTime = '';
  dropoffLoc = '';
  dropoffDate = '';
  dropoffTime = '';
  age = '';
  residency = '';

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private fb: FormBuilder,
    private formBuilder: FormBuilder
  ) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
   }
  // @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
        pickupLoc: ['', Validators. required],
        pickupDate: new FormControl(new Date(), Validators.required),
        pickupTime: ['', Validators. required],
        dropoffLoc: ['', Validators. required],
        dropoffDate: new FormControl(new Date(new Date().setFullYear(new Date().getFullYear() + 1)), Validators.required),
        dropoffTime: ['', Validators. required],
        age: ['', Validators. required],
        residency: ['', Validators. required],
    });
  }

  onDateSelection(date: NgbDate) {
  if (!this.fromDate && !this.toDate) {
    this.fromDate = date;
  } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
    this.toDate = date;
  } else {
    this.toDate = null;
    this.fromDate = date;
  }
}

isHovered(date: NgbDate) {
  return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) &&
      date.before(this.hoveredDate);
}

  isInside(date: NgbDate) { return this.toDate && date.after(this.fromDate) && date.before(this.toDate); }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) ||
        this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  handleAddressChange(address: any) {
      console.log(address)
  }

  onPickUpSelection(e: any) {
      //  Parse out the Google data into something more useable
      // const companyData = e;
      // const formattedAddress = companyData.formatted_address;

      // this.company = companyData.name;
      // this.businessName = companyData.name || '';
      // this.address = formattedAddress.split(',')[0] || '';
      // this.city = formattedAddress.split(',')[1] || '';
      // const stateZip = formattedAddress.split(',')[2] || '';
      // this.state = stateZip.split(' ')[1] || '';
      // this.zip = stateZip.split(' ')[2] || '';
      // this.email = '';
      // this.phone = companyData.formatted_phone_number || '';
      // this.ownershipType = '';
      // this.yearEstablished = '';

      // const reservationData = {
      //     'pickupLoc': this.pickupLoc,
      //     'pickupDate': this.pickupDate,
      //     'pickupTime': this.pickupTime,
      //     'dropoffLoc': this.dropoffLoc,
      //     'dropoffDate': this.dropoffDate,
      //     'dropoffTime': this.dropoffTime,
      //     'age': this.age,
      //     'residency': this.residency
      // };

      //  Save our cleaned data
      // localStorage.setItem('companyData', JSON.stringify(businessData));
      //
      // this.doDefaults();
  }

  watcher(e: any) {
    // if (e.target.value.length >= 3) {
    //     this.company = 'New Company';
    // }
    console.log(e);
  }

  get f() { return this.reservationForm.controls; }

}
