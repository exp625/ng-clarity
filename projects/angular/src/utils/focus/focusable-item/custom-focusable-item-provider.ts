/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Type } from '@angular/core';

import { FocusableItem } from './focusable-item';

export function customFocusableItemProvider<T>(implementation: Type<T>) {
  return [
    implementation,
    {
      provide: FocusableItem,
      useExisting: implementation,
    },
  ];
}
