"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.name = '';
        this.password = '';
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        console.log("tap event ", "name: ", this.name, " pass: ", this.password);
        if (this.name === "demo" && this.password === "demodemo") {
            this.name = '';
            this.password = '';
            this.routerExtensions.navigate(['/actions'], {
                transition: {
                    name: "slideTop",
                    duration: 500,
                    curve: "linear"
                }
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            moduleId: module.id,
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCxzREFBK0Q7QUFRL0Q7SUFHRSx3QkFBWSxJQUFVLEVBQ1osZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFINUMsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFHWixJQUFJLENBQUMsZUFBZSxHQUFJLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFtQixDQUFDO0lBRXBCLDhCQUFLLEdBQUw7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssVUFBVyxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDM0MsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxVQUFVO29CQUNoQixRQUFRLEVBQUUsR0FBRztvQkFDYixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDRixDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQXhCVSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQUlrQixXQUFJO1lBQ00seUJBQWdCO09BSmpDLGNBQWMsQ0F5QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICducy1sb2dpbicsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIG5hbWUgPSAnJztcclxuICBwYXNzd29yZCA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKHBhZ2U6IFBhZ2UsXHJcbiAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcclxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gIHRydWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHsgfVxyXG5cclxuICBsb2dpbigpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKFwidGFwIGV2ZW50IFwiLCBcIm5hbWU6IFwiLHRoaXMubmFtZSwgXCIgcGFzczogXCIsIHRoaXMucGFzc3dvcmQpO1xyXG4gICAgXHJcbiAgICBpZih0aGlzLm5hbWUgPT09IFwiZGVtb1wiICYmIHRoaXMucGFzc3dvcmQgPT09IFwiZGVtb2RlbW9cIiApIHtcclxuICAgICAgdGhpcy5uYW1lID0gJyc7XHJcbiAgICAgIHRoaXMucGFzc3dvcmQgPSAnJztcclxuICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL2FjdGlvbnMnXSwge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVRvcFwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==