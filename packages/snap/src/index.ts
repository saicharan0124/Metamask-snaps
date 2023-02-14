import { OnRpcRequestHandler } from '@metamask/snap-types';
import { OnCronjobHandler } from '@metamask/snaps-types';
import { myFunction, getMessage } from './fetch';

// export const onRpcRequest: OnRpcRequestHandler = async({  request }) => {
//   switch (request.method) {
//     case 'inApp':
     
//       return wallet.request({
//         method: 'snap_notify',
//         params: [
//           {
//             type: 'inApp',
//             message:await myFunction(),
           
//           },
//         ],
//       });
//       case 'native':
//         return wallet.request({
//           method: 'snap_notify',
//           params: [
//             {
//               type: 'native',
//               message: `Hello`,
//             },
//           ],
//         });
//     default:
//       throw new Error('Method not found.');
//   }
// };

//cron-job
export const onCronjob: OnCronjobHandler = async ({ request }) => {
  switch (request.method) {
    case 'inApp':
      return wallet.request({
        method: 'snap_notify',
        params: [
          {
            type: 'inApp',
            message: await myFunction(),
          },
        ],
      });
      case 'native':
        return wallet.request({
          method: 'snap_notify',
          params: [
            {
              type: 'native',
              message: `Hello`,
            },
          ],
        });
    default:
      throw new Error('Method not found.');
  }
};




