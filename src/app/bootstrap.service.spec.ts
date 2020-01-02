import { async, fakeAsync, getTestBed, TestBed, inject, tick } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { Injector } from "@angular/core";
import { Location } from "@angular/common";
import { HttpClientModule, HttpClient } from "@angular/common/http";

/**
 * Own
 */
import { NotificationsService } from "angular2-notifications";
import { IAppSettings } from "./common/config/settings/app-settings";
import { AppInit } from "./bootstrap.service";

describe("*** Application Init Settings ***", () => {
    let httpMock: HttpTestingController;
    let appSetup: AppInit;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [
                HttpClient,
                Location,
                AppInit,
                NotificationsService
            ]
        });

        const testbed = getTestBed();
        appSetup = testbed.get(AppInit);
        httpMock = testbed.get(HttpTestingController);
    }));

    it("should return the AppSettings resource...", () => {
        const appSettingsResource: Promise<any> = appSetup.getAppSettingsResource();
        const req = httpMock.expectOne("/api/settings");

        expect(req.request.method).toEqual("GET");
        httpMock.verify();
    });
});
