/* eslint-disable @typescript-eslint/explicit-function-return-type */
/**
 * Small wrapper for fetch to make it easier to pass props
 * Called wasmFetch to avoid naming conflict
 */
async function wasmFetch(url, method, body) {
  const res = await fetch(url, {
    method,
    body,
  });
  return res;
}

async function fetchProposals(epoch) {
  console.log("epoch", epoch);
  const res = await fetch("https://it.api.namada.red/api/v1/chain/governance/proposals", {
    method: "GET"
  });

  const data = await res.json();

  console.log(data);
  let resulst = data.proposals.filter(x => x.end_epoch > epoch && x.start_epoch < epoch);
  console.log("result", resulst);
  return JSON.stringify(resulst.map(x => x.id));
}

module.exports = { wasmFetch, fetchProposals };
