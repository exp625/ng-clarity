/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

let NB_INSTANCES = 0;

export function uniqueIdFactory() {
  return 'clr-id-' + NB_INSTANCES++;
}
