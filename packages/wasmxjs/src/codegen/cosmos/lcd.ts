import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    cosmos: {
      base: {
        tendermint: {
          v1beta1: new (await import("./base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      }
    }
  };
};