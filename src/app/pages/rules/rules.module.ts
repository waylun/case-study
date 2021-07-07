import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulesComponent } from './rules.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RulesComponent],
  imports: [CommonModule, RulesRoutingModule, SharedModule],
})
export class RulesModule {}
