// Pretend this is the real network request to avoid having to run a server on http://localhost:3000/ as required by network.fetch.ts
export const get = async (_url: Url) => {
  await new Promise(resolve => setTimeout(resolve, 4000*Math.random()));
  if (Math.random() < 0.2) throw new Error("Failed to fetch rates!!");
  return { RPC: {
      RPC: 1,
      IMC: Math.random(),
      WPU: Math.random(),
      DRG: Math.random(),
      ZKL: 0,
    } };
};