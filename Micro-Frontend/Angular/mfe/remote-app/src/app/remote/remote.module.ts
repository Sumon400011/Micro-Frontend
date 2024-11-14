import { NgModule } from '@angular/core';
import { RemoteComponent } from './remote.component';
import { RemoteRoutingModule } from './remote-routing.module';


@NgModule({
  imports: [RemoteComponent, RemoteRoutingModule],
  exports: [RemoteComponent],
})
export class RemoteModule {}
