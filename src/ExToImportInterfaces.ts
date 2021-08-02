// https://stackoverflow.com/questions/37263357/how-to-declare-and-import-typescript-interfaces-in-a-separate-file
// in IfcSampleInterface.ts:

export interface IfcSampleInterface {
   key: string;
   value: string;
}
// In SampleInterface.ts

import { IfcSampleInterface } from './IfcSampleInterface';
let sampleVar: IfcSampleInterface;
