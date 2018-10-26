import bluetooth = require('nativescript-bluetooth');
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Peripheral } from 'nativescript-bluetooth';

@Injectable()
export class ActionService {

  listenToBluetoothEnabled(): Observable<boolean> {
    return new Observable(observer => {
      bluetooth.isBluetoothEnabled()
        .then(enabled => observer.next(enabled))
   
      let intervalHandle = setInterval(
        () => {
          bluetooth.isBluetoothEnabled()
            .then(enabled => observer.next(enabled))
        }
        , 10000);
   
      // stop checking every second on unsubscribe
      return () => clearInterval(intervalHandle);
    })
  }

  hasCoarseLocationPermission(): Promise<boolean> {
    return bluetooth.hasCoarseLocationPermission();
  }

  requestCoarseLocationPermission(): Promise<any> {
    return bluetooth.requestCoarseLocationPermission();
  }

  scan() {
    const devices = [];
   
    bluetooth.startScanning({
      skipPermissionCheck: false,
      seconds: 50,
      onDiscovered:  (peripheral: Peripheral ) => {
        console.log(peripheral);
        if(peripheral.name) {
          console.log(`UUID: ${peripheral.UUID} name: ${peripheral.name}`)
          devices.push(peripheral);
        }
      }
    });
  }

}
