import { AddAnnnoucementPage } from './../pages/add-annnoucement/add-annnoucement';
import { AddRecommendationPage } from './../pages/add-recommendation/add-recommendation';
import { GeneralRecommendationPage } from './../pages/general-recommendation/general-recommendation';
import { DoctorTimetablePage } from './../pages/doctor-timetable/doctor-timetable';
import { DoctorHomePage } from './../pages/doctor-home/doctor-home';
import { UserListPage } from './../pages/user-list/user-list';
import { DoctorAnnoucementPage } from './../pages/doctor-annoucement/doctor-annoucement';
import { UsrReccomendationPage } from './../pages/usr-reccomendation/usr-reccomendation';
import { TabsPage } from './../pages/tabs/tabs';
import { StatusPage } from './../pages/status/status';
import { AccessPage } from './../pages/access/access';
// 3rd party modules
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

// Modules
import { AuthModule } from '../pages/auth/auth.module';
import { ProfileModule } from '../pages/profile/profile.module';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { FeedUploadPage } from '../pages/feed/feed-upload/feed-upload';
import { ListPage } from '../pages/plans/list/list';
import { PlansPage } from '../pages/plans/plans';
import { PlansSettingsPage } from '../pages/plans/plans-settings/plans-settings';
import { NutritionPage } from '../pages/nutrition/nutrition';
import { StepcounterPage } from '../pages/stepcounter/stepcounter';
import { ExplorePage } from '../pages/explore/explore';
import { PublicProfilePage } from '../pages/explore/public-profile/public-profile';

// Plugins
import { Facebook } from '@ionic-native/facebook';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Stepcounter } from '@ionic-native/stepcounter';
import { CameraPreview } from '@ionic-native/camera-preview';

// Services - Providers
import { PlansProvider } from '../providers/plans/plans.provider';
import { UploadProvider } from '../providers/upload/upload.provider';
import { CameraProvider } from '../providers/camera/camera.provider';
import { UsersProvider } from '../providers/users/users.provider';
import { NutritionProvider } from '../providers/nutrition/nutrition.provider';
import { FollowProvider } from '../providers/follow/follow.provider';
import { FeedProvider } from '../providers/feed/feed.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FeedPage,
    FeedUploadPage,
    ListPage,
    PlansPage,
    PlansSettingsPage,
    NutritionPage,
    StepcounterPage,
    ExplorePage,
    PublicProfilePage,
    AccessPage,
    StatusPage,
    UsrReccomendationPage,
    DoctorAnnoucementPage,
    UserListPage,
    DoctorHomePage,
    DoctorTimetablePage,
    GeneralRecommendationPage,
    AddRecommendationPage,
    AddAnnnoucementPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicImageViewerModule,
    IonicModule.forRoot(MyApp),
    AuthModule,
    ProfileModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FeedPage,
    FeedUploadPage,
    ListPage,
    PlansPage,
    PlansSettingsPage,
    NutritionPage,
    StepcounterPage,
    ExplorePage,
    PublicProfilePage,
    AccessPage,
    StatusPage,
    UsrReccomendationPage,
    DoctorAnnoucementPage,
    UserListPage,
    DoctorHomePage,
    DoctorTimetablePage,
    GeneralRecommendationPage,
    AddRecommendationPage,
    AddAnnnoucementPage

  ],
  providers: [
    Facebook,
    StatusBar,
    SplashScreen,
    Stepcounter,
    CameraPreview,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlansProvider,
    UploadProvider,
    CameraProvider,
    UsersProvider,
    NutritionProvider,
    FollowProvider,
    FeedProvider
  ]
})
export class AppModule {}
