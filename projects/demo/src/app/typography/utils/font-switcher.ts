/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { checkForExistingPresetName, FontPreset, fontPresets, getPreset } from './font-presets';

@Component({
  selector: 'clr-typography-font-switcher',
  styleUrls: ['./font-switcher.scss'],
  templateUrl: './font-switcher.html',
})
export class FontSwitcher {
  private _name = '';

  presetSwitcher = new FormGroup({
    preset: new FormControl('Metropolis'),
  });

  presets = fontPresets.map(presetTuple => presetTuple[0]).sort();

  @Input() layout: 'vertical' | 'horizontal' = 'vertical';
  @Input() label = 'Presets';

  @Output() switchFontPreset = new EventEmitter<FontPreset>();

  noop() {
    return;
  }

  @Input()
  get fontName() {
    return this._name;
  }

  set fontName(val: string) {
    this.switchFont(val);
  }

  handleSwitchFont(event: Event) {
    this.switchFont((event.target as HTMLInputElement).value);
  }

  private switchFont(presetToLoad: string) {
    if (checkForExistingPresetName(presetToLoad)) {
      this.presetSwitcher.setValue({ preset: presetToLoad });
      this.sendFontSwitch(presetToLoad);
      this._name = presetToLoad;
    } else {
      this.presetSwitcher.setValue({ preset: '' });
      this._name = '';
    }
  }

  sendFontSwitch(presetToLoad: string) {
    const presetObj: FontPreset = getPreset(presetToLoad);

    if (presetObj === null) {
      return;
    }

    this.switchFontPreset.emit(presetObj);
  }
}
