import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController, MenuController, LoadingController } from "@ionic/angular";

/**
 * Own
 */
import { BaseComponent } from "@app/main";

@Component({
  selector: "app-customer-create",
  templateUrl: "./customer-create.page.html",
  styleUrls: ["./customer-create.scss"],
})
export class CustomerCreatePage extends BaseComponent implements OnInit {
    public customerCreateForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController,
        public loadingCtrl: LoadingController,
        private formBuilder: FormBuilder
    ) {
        super();
    }

    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }

    ngOnInit() {
        this.init();
    }

    public init(): void {
        this.customerCreateForm = this.formBuilder.group({
            fullName: [null, Validators.compose([
                Validators.required
            ])],
            email: [null, Validators.compose([
                Validators.required
            ])],
            password: [null, Validators.compose([
                Validators.required
            ])]
        });
    }

    public async signUp() {
        const loader = await this.loadingCtrl.create({
            duration: 3000
        });

        loader.present();
        loader.onWillDismiss().then(() => {
            this.navCtrl.navigateRoot("/home-results");
        });
    }

    public goToLogin() {
        this.navCtrl.navigateRoot("/");
    }
}
