import { OnRpcRequestHandler } from '@metamask/snap-types';
// import { OnCronjobHandler } from '@metamask/snap-types';
import { myFunction, getMessage } from './fetch';

export const onRpcRequest: OnRpcRequestHandler = async({  request }) => {

//console.log("boi")
  // console.log(result);

  switch (request.method) {
    case 'inApp':
     
      return wallet.request({
        method: 'snap_notify',
        params: [
          {
            type: 'inApp',
            message:await myFunction(),
           
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






// export const onCronjob: OnCronjobHandler = async ({ request }) => {
//   switch (request.method) {
//     case 'exampleMethodOne':
//       return wallet.request({
//         method: 'snap_notify',
//         params: [
//           {
//             type: 'inApp',
//             message: `Hello, world!`,
//           },
//         ],
//       });

//     default:
//       throw new Error('Method not found.');
//   }
// };
