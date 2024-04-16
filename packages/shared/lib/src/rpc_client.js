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

async function fetchProposals(epoch, status) {
    const res = await fetch("https://interface-namada.quantnode.xyz/namada/proposals");

    const data = await res.json();

    let result = JSON.stringify(data.propDigest.allProps.sort((a, b) => b.prop_id - a.prop_id).filter(x => x.status === Number(status)).slice(0, 10).map(x => x.prop_id));
    console.log(result);
    return result;
}

module.exports = { wasmFetch, fetchProposals };
