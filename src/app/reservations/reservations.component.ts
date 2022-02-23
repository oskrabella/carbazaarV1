import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {
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
  constructor() { }
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;

  ngOnInit(): void {
  }

  handleAddressChange(address: Address) {
      console.log(address)
  }

  onPickUpSelection(e) {
      //  Parse out the Google data into something more useable
      const companyData = e;
      const formattedAddress = companyData.formatted_address;

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

      const reservationData = {
          'pickupLoc': this.pickupLoc,
          'pickupDate': this.pickupDate,
          'pickupTime': this.pickupTime,
          'dropoffLoc': this.dropoffLoc,
          'dropoffDate': this.dropoffDate,
          'dropoffTime': this.dropoffTime,
          'age': this.age,
          'residency': this.residency
      };

      //  Save our cleaned data
      localStorage.setItem('companyData', JSON.stringify(businessData));

      this.doDefaults();
  }

  watcher(e) {
    if (e.target.value.length >= 3) {
        this.company = 'New Company';
    }
}

}
