/**
 * @file index.ts
 * @description command 根
 * @author MrMudBean <Mr.MudBean@outlook.com>
 * @license MIT
 * @copyright  2026 ©️ MrMudBean
 * @since 2026-01-11 23:59
 * @version 3.0.0
 * @lastModified 2026-06-23 18:08
 */

export { Args } from './arg/index';

export type {
  ArgsArrMap,
  ArgsArrMapItem,
  ArgsArrMapItemType,
  ArgsArrMapOptions,
  ArgsArrMapType,
  ArgsGeneralItemParadigm,
  ArgsItemOptions,
  ArgsItemOptionsType,
  ArgsMap,
  ArgsMapItem,
  ArgsMapItemType,
  ArgsMapType,
  ArgsType,
  OptionNameArray,
} from './arg/index';

export { selection } from './selection';

export type {
  SelectionCheckDataMap,
  SelectionNoKindDataMap,
  SelectionParamData,
  SelectionParamDataMapType,
  SelectionParamDataType,
  SelectionParamObjectData,
  SelectionRadioDataMap,
  SelectionResultType,
} from './selection';

export { question } from './question';

export type {
  QuestionParamData,
  QuestionParamDataType,
  QuestionReturn,
  QuestionReturnType,
  QuestionVerify,
} from './question';

export { CURRENT, ERROR, INFO, prefixList, SUCCESS, WARN } from './info';
export type { CommandPrintOption, PrintOption } from './info';
