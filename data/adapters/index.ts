import sdk from '../sdk';

import { setup as setupEthereum } from './ethereum';
import { setup as setupAztec } from './aztec';
import { setup as setupLoopring } from './loopring';

const feesList = sdk.getList('l2-fees');

feesList.addAdaptersWithSetupFunction(setupEthereum);
feesList.addAdaptersWithSetupFunction(setupAztec);
feesList.addAdaptersWithSetupFunction(setupLoopring);
