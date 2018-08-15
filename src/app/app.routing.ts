import {Routes, RouterModule} from '@angular/router';
import {WhiteBoardComponent} from "./white-board/white-board.component";
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {SectionListComponent} from "./section-list/section-list.component";
import {EnrollmentsComponent} from "./enrollments/enrollments.component";
import {SectionUpdateComponent} from "./section-update/section-update.component";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizTakerComponent} from "./quiz-taker/quiz-taker.component";
import {QuizSubmissionsComponent} from "./quiz-submissions/quiz-submissions.component";
import {QuizAnswersComponent} from "./quiz-answers/quiz-answers.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WhiteBoardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/section', component: SectionListComponent },
  {path: 'enrollment/:sectionId', component: EnrollmentsComponent},
  {path: 'update/:courseId/:sectionId', component: SectionUpdateComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget/:widgetId', component: CourseViewerComponent},
  {path: 'quizzes', component: QuizListComponent},
  {path: 'quiz/:quizId', component: QuizTakerComponent},
  {path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  {path: 'quiz/:quizId/submission/:submissionId', component: QuizAnswersComponent},
  /*
  {path: 'quiz/:quizId/submissions/user', component: QuizSubmissionsComponent},
  */
  {path: '**', component: WhiteBoardComponent}, // last
];

export const routing = RouterModule.forRoot(appRoutes);
