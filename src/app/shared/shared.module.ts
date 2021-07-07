import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RulesWidgetComponent } from './components/rules-widget/rules-widget.component';

@NgModule({
  declarations: [RulesWidgetComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RulesWidgetComponent],
})
export class SharedModule {}
