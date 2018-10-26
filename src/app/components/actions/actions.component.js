"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var actions_services_1 = require("../../services/actions.services");
var ActionsComponent = /** @class */ (function () {
    function ActionsComponent(actionService) {
        this.actionService = actionService;
        this.firstSwitchState = "OFF";
        this.secondSwitchState = "ON";
        this.isBluetoothEnabled = false;
    }
    ActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionService.listenToBluetoothEnabled().subscribe(function (enabled) {
            _this.isBluetoothEnabled = enabled;
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
    };
    ActionsComponent.prototype.onFirstChecked = function (args) {
        this.actionService.scan();
    };
    ActionsComponent = __decorate([
        core_1.Component({
            selector: 'actions',
            moduleId: module.id,
            templateUrl: './actions.component.html',
            styleUrls: ['./actions.component.css']
        }),
        __metadata("design:paramtypes", [actions_services_1.ActionService])
    ], ActionsComponent);
    return ActionsComponent;
}());
exports.ActionsComponent = ActionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxvRUFBZ0U7QUFRaEU7SUFLRSwwQkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFKekMscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUNoQyx1QkFBa0IsR0FBYSxLQUFLLENBQUM7SUFJckMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFhQztRQVpDLElBQUksQ0FBQyxhQUFhLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQzdELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUE7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSDs7Ozs7Ozs7V0FRRztJQUNMLENBQUM7SUFFTSx5Q0FBYyxHQUFyQixVQUFzQixJQUFJO1FBQ3hCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTFCVSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3ZDLENBQUM7eUNBTW1DLGdDQUFhO09BTHJDLGdCQUFnQixDQTJCNUI7SUFBRCx1QkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FjdGlvbnMuc2VydmljZXNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWN0aW9ucycsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWN0aW9ucy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHB1YmxpYyBmaXJzdFN3aXRjaFN0YXRlID0gXCJPRkZcIjtcclxuICBwdWJsaWMgc2Vjb25kU3dpdGNoU3RhdGUgPSBcIk9OXCI7XHJcbiAgaXNCbHVldG9vdGhFbmFibGVkOiBib29sZWFuID0gIGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvblNlcnZpY2U6IEFjdGlvblNlcnZpY2UpIHsgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGlvblNlcnZpY2UubGlzdGVuVG9CbHVldG9vdGhFbmFibGVkKCkuc3Vic2NyaWJlKGVuYWJsZWQgPT4ge1xyXG4gICAgICB0aGlzLmlzQmx1ZXRvb3RoRW5hYmxlZCA9IGVuYWJsZWRcclxuICAgIH0pO1xyXG4gICAgLyppZih0aGlzLmlzQmx1ZXRvb3RoRW5hYmxlZCkge1xyXG4gICAgICB0aGlzLmFjdGlvblNlcnZpY2UuaGFzQ29hcnNlTG9jYXRpb25QZXJtaXNzaW9uKCkuXHJcbiAgICAgIHRoZW4oZ3JhbnRlZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYXMgTG9jYXRpb24gUGVybWlzc2lvbj8gXCIgKyBncmFudGVkKTtcclxuICAgICAgICBpZiAoZ3JhbnRlZCA9PSBmYWxzZSApe1xyXG4gICAgICAgICAgdGhpcy5hY3Rpb25TZXJ2aWNlLnJlcXVlc3RDb2Fyc2VMb2NhdGlvblBlcm1pc3Npb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9Ki9cclxuICB9XHJcbiAgICAgIFxyXG4gIHB1YmxpYyBvbkZpcnN0Q2hlY2tlZChhcmdzKSB7XHJcbiAgICB0aGlzLmFjdGlvblNlcnZpY2Uuc2NhbigpO1xyXG4gIH1cclxufVxyXG4gICAgIl19