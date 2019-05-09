import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import xml from 'highlight.js/lib/languages/xml';
import { HighlightModule } from 'ngx-highlightjs';

import { SharedModule } from './shared.module';

function hljsLanguages() {
  return [
    { name: 'typescript', func: typescript },
    { name: 'xml', func: xml },
    { name: 'bash', func: bash }
  ];
}

export const SHARED_TEST_IMPORTS = [
  SharedModule,
  HighlightModule.forRoot({ languages: hljsLanguages })
];
