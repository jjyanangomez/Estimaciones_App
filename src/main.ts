import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { EstimacionComponent } from './app/components/estimacion/estimacion.component';

bootstrapApplication(EstimacionComponent, appConfig)
  .catch((err) => console.error(err));
