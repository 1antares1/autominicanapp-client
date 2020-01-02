export class FirebaseConfig {
    public apiKey: string; // "<your-key>";
    public appId: string; // "<your-app-id>";
    public authDomain: string; // "<your-project-authdomain>";
    public databaseURL: string; // "<your-database-URL>";
    public projectId: string; // "<your-project-id>";
    public storageBucket: string; // "<your-storage-bucket>";
    public messagingSenderId: string; // "<your-messaging-sender-id>";
    public measurementId: string; // "<your-measurement-id>";

    constructor() {
        this.apiKey = "";
        this.authDomain = "";
        this.databaseURL = "";
        this.projectId = "";
        this.storageBucket = "";
        this.messagingSenderId = "";
        this.appId = "";
        this.measurementId = "";
    }
}
