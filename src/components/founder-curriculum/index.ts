import type { FC } from 'react';
import MomTestInterviewNotes from './MomTestInterviewNotes';
import ContrarianTruth from './ContrarianTruth';
import CommitmentsLog from './CommitmentsLog';
import HandDeliveredMVP from './HandDeliveredMVP';
import SocraticCallLog from './SocraticCallLog';
import FirstDollar from './FirstDollar';
import DefaultAliveCalc from './DefaultAliveCalc';

/**
 * Registry of inline mockup components, looked up by the `mockupKey` field
 * on a checklist item. Adding a new mockup: create the component file and
 * register it here.
 */
export const mockupComponents: Record<string, FC> = {
  'mom-test-notes': MomTestInterviewNotes,
  'contrarian-truth': ContrarianTruth,
  'commitments-log': CommitmentsLog,
  'hand-delivered-mvp': HandDeliveredMVP,
  'socratic-call-log': SocraticCallLog,
  'first-dollar': FirstDollar,
  'default-alive-calc': DefaultAliveCalc,
};

export { default as Confetti } from './Confetti';
export { MaterialsYouNeed } from './MaterialsYouNeed';
export { SourceScreenshots } from './SourceScreenshots';
