/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable } from '@angular/core';

@Injectable()
export class VerticalNavGroupRegistrationService {
  navGroupCount = 0;

  registerNavGroup() {
    this.navGroupCount++;
  }

  unregisterNavGroup(): void {
    this.navGroupCount--;
  }
}
