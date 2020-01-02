import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CustomerCreatePage } from "./customer-create.page";
describe("CustomerCreatePage", () => {
    let component: CustomerCreatePage;
    let fixture: ComponentFixture<CustomerCreatePage>;

    beforeEach(async (() => {
        TestBed.configureTestingModule({
                declarations: [CustomerCreatePage],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
            }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomerCreatePage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
