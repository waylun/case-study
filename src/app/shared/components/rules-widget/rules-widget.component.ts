import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-rules-widget',
  templateUrl: './rules-widget.component.html',
  styleUrls: ['./rules-widget.component.scss'],
})
export class RulesWidgetComponent implements OnInit, OnDestroy {
  @Input() title: string;
  @Input() info: string;
  @Input() addButtonText = 'new rule';
  @Input() controlName: ControlName = 'inclusion';
  private unsubscribe$: Subject<void> = new Subject<void>();
  pagesData = [];
  segmentsData = [];
  hasCustom = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.controlName === 'inclusion') {
      this.form = this.fb.group({
        inclusion: this.fb.array([this.createClusion()]),
      });
    } else {
      this.form = this.fb.group({
        exclusion: this.fb.array([this.createClusion()]),
      });
    }

    // mock async data that coming from backend
    forkJoin(this.getPages(), this.getSegments())
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(res => {
        const [pages, segments] = res;
        this.pagesData = pages;
        this.segmentsData = segments;
        this.patchDefaultValue(this.pagesData[0].id, this.segmentsData[0].id, 0);
      });
  }

  private createClusion(custom?: string | number): FormGroup {
    if (custom + '' === '999') {
      return this.fb.group({
        pages: [''],
        segments: [''],
        url: ['', [Validators.required, this.urlValidate()]],
      });
    } else {
      return this.fb.group({
        pages: [''],
        segments: [''],
        url: [''],
      });
    }
  }

  private patchDefaultValue(pageVal: string, segmentVal: string, idx: number): void {
    ((this.form.get(this.controlName) as FormArray).controls[idx] as FormGroup).controls.pages.patchValue(pageVal);
    ((this.form.get(this.controlName) as FormArray).controls[idx] as FormGroup).controls.segments.patchValue(
      segmentVal,
    );
  }

  addRule(form): void {
    const length = form.length;
    const currObj = form[length - 1];

    (this.form.get(this.controlName) as FormArray).push(this.createClusion(currObj && currObj.pages));
    if (length > 0) {
      this.patchDefaultValue(currObj.pages, currObj.segments, length);
    } else {
      this.patchDefaultValue(this.pagesData[0].id, this.segmentsData[0].id, 0);
    }
  }

  removeRule(idx: number): void {
    (this.form.get(this.controlName) as FormArray).removeAt(idx);
  }

  private getPages(): Observable<IOptions[]> {
    return of([
      { id: 0, name: 'All Pages' },
      { id: 34, name: 'Home Pages' },
      { id: 56, name: 'Product Pages' },
      { id: 78, name: 'Password Page' },
      { id: 999, name: 'Custom' },
    ]);
  }

  private getSegments(): Observable<IOptions[]> {
    return of([
      { id: 100, name: 'Contains' },
      { id: 200, name: 'Exact match' },
    ]);
  }

  onPagesChange(event: string, form: FormGroup) {
    if (event + '' === '999') {
      form.controls.url.setValidators([Validators.required, this.urlValidate()]);
    } else {
      form.controls.url.clearValidators();
    }
    form.controls.url.updateValueAndValidity();
  }

  onSubmit() {
    this.form.markAllAsTouched();

    if (this.form.status === 'INVALID') {
      return;
    }
    const value = this.form.controls[this.controlName].value.map(res => {
      if (res.pages + '' !== '999') {
        return { pages: res.pages };
      } else {
        return res;
      }
    });
    alert(JSON.stringify(value));
  }

  private urlValidate() {
    return (control: AbstractControl) => {
      const value = control.value;
      const error = { urlInValid: true };
      if (value.length === 0) {
        return error;
      }
      return null;
    };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

interface IOptions {
  id: number;
  name: string;
}

type ControlName = 'inclusion' | 'exclusion';
