import { Component, OnInit } from '@angular/core';
import { Switch } from "tns-core-modules/ui/switch";
import { ActionService } from "../../services/actions.services";

@Component({
  selector: 'actions',
  moduleId: module.id,
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  public firstSwitchState = "OFF";
  public secondSwitchState = "ON";
  isBluetoothEnabled: boolean =  false;

  constructor(private actionService: ActionService) { 
    
  }
  
  ngOnInit(): void {
    this.actionService.listenToBluetoothEnabled().subscribe(enabled => {
      this.isBluetoothEnabled = enabled
    });
    /*if(this.isBluetoothEnabled) {
      this.actionService.hasCoarseLocationPermission().
      then(granted => {
        console.log("Has Location Permission? " + granted);
        if (granted == false ){
          this.actionService.requestCoarseLocationPermission();
        }
      })
    }*/
  }
      
  public onFirstChecked(args) {
    this.actionService.scan();
  }
}
    