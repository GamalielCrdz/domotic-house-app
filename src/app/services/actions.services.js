"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bluetooth = require("nativescript-bluetooth");
var rxjs_1 = require("rxjs");
var core_1 = require("@angular/core");
var ActionService = /** @class */ (function () {
    function ActionService() {
    }
    ActionService.prototype.listenToBluetoothEnabled = function () {
        return new rxjs_1.Observable(function (observer) {
            bluetooth.isBluetoothEnabled()
                .then(function (enabled) { return observer.next(enabled); });
            var intervalHandle = setInterval(function () {
                bluetooth.isBluetoothEnabled()
                    .then(function (enabled) { return observer.next(enabled); });
            }, 10000);
            // stop checking every second on unsubscribe
            return function () { return clearInterval(intervalHandle); };
        });
    };
    ActionService.prototype.hasCoarseLocationPermission = function () {
        return bluetooth.hasCoarseLocationPermission();
    };
    ActionService.prototype.requestCoarseLocationPermission = function () {
        return bluetooth.requestCoarseLocationPermission();
    };
    ActionService.prototype.scan = function () {
        var devices = [];
        bluetooth.startScanning({
            skipPermissionCheck: false,
            seconds: 50,
            onDiscovered: function (peripheral) {
                console.log(peripheral);
                if (peripheral.name) {
                    console.log("UUID: " + peripheral.UUID + " name: " + peripheral.name);
                    devices.push(peripheral);
                }
            }
        });
    };
    ActionService = __decorate([
        core_1.Injectable()
    ], ActionService);
    return ActionService;
}());
exports.ActionService = ActionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjdGlvbnMuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBcUQ7QUFDckQsNkJBQWtDO0FBQ2xDLHNDQUEyQztBQUkzQztJQUFBO0lBMkNBLENBQUM7SUF6Q0MsZ0RBQXdCLEdBQXhCO1FBQ0UsTUFBTSxDQUFDLElBQUksaUJBQVUsQ0FBQyxVQUFBLFFBQVE7WUFDNUIsU0FBUyxDQUFDLGtCQUFrQixFQUFFO2lCQUMzQixJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUE7WUFFMUMsSUFBSSxjQUFjLEdBQUcsV0FBVyxDQUM5QjtnQkFDRSxTQUFTLENBQUMsa0JBQWtCLEVBQUU7cUJBQzNCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQTtZQUM1QyxDQUFDLEVBQ0MsS0FBSyxDQUFDLENBQUM7WUFFWCw0Q0FBNEM7WUFDNUMsTUFBTSxDQUFDLGNBQU0sT0FBQSxhQUFhLENBQUMsY0FBYyxDQUFDLEVBQTdCLENBQTZCLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsbURBQTJCLEdBQTNCO1FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCx1REFBK0IsR0FBL0I7UUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVELDRCQUFJLEdBQUo7UUFDRSxJQUFNLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFbkIsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUN0QixtQkFBbUIsRUFBRSxLQUFLO1lBQzFCLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFHLFVBQUMsVUFBc0I7Z0JBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hCLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVMsVUFBVSxDQUFDLElBQUksZUFBVSxVQUFVLENBQUMsSUFBTSxDQUFDLENBQUE7b0JBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNCLENBQUM7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXpDVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBMkN6QjtJQUFELG9CQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmx1ZXRvb3RoID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LWJsdWV0b290aCcpO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGVyaXBoZXJhbCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1ibHVldG9vdGgnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uU2VydmljZSB7XHJcblxyXG4gIGxpc3RlblRvQmx1ZXRvb3RoRW5hYmxlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XHJcbiAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxyXG4gICAgICAgIC50aGVuKGVuYWJsZWQgPT4gb2JzZXJ2ZXIubmV4dChlbmFibGVkKSlcclxuICAgXHJcbiAgICAgIGxldCBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIGJsdWV0b290aC5pc0JsdWV0b290aEVuYWJsZWQoKVxyXG4gICAgICAgICAgICAudGhlbihlbmFibGVkID0+IG9ic2VydmVyLm5leHQoZW5hYmxlZCkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgICwgMTAwMDApO1xyXG4gICBcclxuICAgICAgLy8gc3RvcCBjaGVja2luZyBldmVyeSBzZWNvbmQgb24gdW5zdWJzY3JpYmVcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGhhc0NvYXJzZUxvY2F0aW9uUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiBibHVldG9vdGguaGFzQ29hcnNlTG9jYXRpb25QZXJtaXNzaW9uKCk7XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0Q29hcnNlTG9jYXRpb25QZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gYmx1ZXRvb3RoLnJlcXVlc3RDb2Fyc2VMb2NhdGlvblBlcm1pc3Npb24oKTtcclxuICB9XHJcblxyXG4gIHNjYW4oKSB7XHJcbiAgICBjb25zdCBkZXZpY2VzID0gW107XHJcbiAgIFxyXG4gICAgYmx1ZXRvb3RoLnN0YXJ0U2Nhbm5pbmcoe1xyXG4gICAgICBza2lwUGVybWlzc2lvbkNoZWNrOiBmYWxzZSxcclxuICAgICAgc2Vjb25kczogNTAsXHJcbiAgICAgIG9uRGlzY292ZXJlZDogIChwZXJpcGhlcmFsOiBQZXJpcGhlcmFsICkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBlcmlwaGVyYWwpO1xyXG4gICAgICAgIGlmKHBlcmlwaGVyYWwubmFtZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYFVVSUQ6ICR7cGVyaXBoZXJhbC5VVUlEfSBuYW1lOiAke3BlcmlwaGVyYWwubmFtZX1gKVxyXG4gICAgICAgICAgZGV2aWNlcy5wdXNoKHBlcmlwaGVyYWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=