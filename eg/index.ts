/**
 * @packageDocumentation
 * @module @vvi/command/index
 * @file index.ts
 * @description _
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-06-27 22:37
 * @version 4.0.0
 * @lastModified 2026-06-27 22:57
 */

import { question } from '../src/index';

await question({
  text: '请 🔧 配置上游分支的别名',
  resultText: '设置上游分支的别名为',
  tip: 'origin',
  required: false,
  private: false,
});
