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

const data = `{
   "propDigest": {
       "heightEpoch": {
           "epoch": 97,
           "epochProgress": "88.9",
           "epochEndTime": "2024-04-15T05:10:31.497Z",
           "height": 383851,
           "time": "2024-04-15T03:50:35.519450648Z",
           "blocktime": "10.1",
           "blocktimeAvg": "11.1"
       },
       "counters": {
           "total": 711,
           "ended": 708,
           "pending": 0,
           "ongoing": 3,
           "passed": 206,
           "rejected": 502
       },
       "allProps": [
           {
               "prop_id": 700,
               "status": 2,
               "author": "tnam1qpzzgq60d70vpslggwu7mr656twelhr9jur5nru5",
               "type": "Default",
               "title": "How to burn 5000 NAM tokens",
               "ep_start": 94,
               "ep_end": 98,
               "result": -1
           },
           {
               "prop_id": 709,
               "status": 2,
               "author": "tnam1qrt502wtqpa8nf3hx9ax2qc6efn38hv8ngghnlu7",
               "type": "PGF",
               "title": "Ukurenov is will be a best steward",
               "ep_start": 94,
               "ep_end": 98,
               "result": -1
           },
           {
               "prop_id": 710,
               "status": 2,
               "author": "tnam1qq3xvwzr8lgxh4kv87ue7x8xvq7tfttqsv9vxnkw",
               "type": "PGF",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 94,
               "ep_end": 98,
               "result": -1
           },
           {
               "prop_id": 0,
               "status": 0,
               "author": "tnam1qp6fw8q274w8mpttl52fgthz20feue0jg5xmpprh",
               "type": "Default",
               "title": "lankou in da place",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 1,
               "status": 0,
               "author": "tnam1qzpzskevn6v24h5jpjcjwe4t2my7vzv3cgk8y3yl",
               "type": "Pgf",
               "title": "encipher for Steward 2024",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 2,
               "status": 0,
               "author": "tnam1qqrhwfj678xq07nfwmmxkvjgzzdr9ywamqqjn88x",
               "type": "Default",
               "title": "CosmicValidator test proposal",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 3,
               "status": 0,
               "author": "tnam1qyt74dsrt4tlrf6kvnhlu65w5ezxv50ahvuld6zv",
               "type": "Pgf",
               "title": "Serenity now!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 4,
               "status": 0,
               "author": "tnam1qp7mf0k3g22fz8g9wmdh30gtaary8cu9ds7cnw6w",
               "type": "Default",
               "title": "SE-testing",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 5,
               "status": 0,
               "author": "tnam1qq22qmw72m3e6c8lajx8jmzzh2h4t3dp7cfs4dxf",
               "type": "Default",
               "title": "About Zenode",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 6,
               "status": 0,
               "author": "tnam1qq22qmw72m3e6c8lajx8jmzzh2h4t3dp7cfs4dxf",
               "type": "Pgf",
               "title": "Hattrick Steward",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 7,
               "status": 0,
               "author": "tnam1qqnhfnt2puulcydwxh0gh4pd0du9fwrekycx64h8",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 8,
               "status": 0,
               "author": "tnam1qp7e7vh2httqq4tgam6nwl8qvgc3wgxkacvyz43v",
               "type": "Pgf",
               "title": "Steward",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 9,
               "status": 0,
               "author": "tnam1qp7e7vh2httqq4tgam6nwl8qvgc3wgxkacvyz43v",
               "type": "Pgf",
               "title": "Steward",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 10,
               "status": 0,
               "author": "tnam1qzz8zyly0e3qj7cw0jlxelu3x596vrp72q54d5f4",
               "type": "Pgf",
               "title": "OV_Duck for Steward-Supreme 2024",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 265,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "Default",
               "title": "in search of an asteroid",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 12,
               "status": 0,
               "author": "tnam1qzdfys6q5nngrcvlw9kf7ykk90ds62ap3yuhcusx",
               "type": "Default",
               "title": "One Rookie pilot on the main deck",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 13,
               "status": 0,
               "author": "tnam1qzdfys6q5nngrcvlw9kf7ykk90ds62ap3yuhcusx",
               "type": "Pgf",
               "title": "Rookie Steward, for the greater good",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 14,
               "status": 0,
               "author": "tnam1qzlgjda3ne3a8jfawhlg5nujjwv923srfch85mts",
               "type": "Pgf",
               "title": "Palamar test proposal",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 15,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "Pgf",
               "title": "Hi my brothers!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 16,
               "status": 0,
               "author": "tnam1qzdfys6q5nngrcvlw9kf7ykk90ds62ap3yuhcusx",
               "type": "Pgf",
               "title": "Funding (just a bit) a real Rooki",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 17,
               "status": 0,
               "author": "tnam1qzdfys6q5nngrcvlw9kf7ykk90ds62ap3yuhcusx",
               "type": "Pgf",
               "title": "Funding (just a bit) a real Rookie",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 18,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "Default",
               "title": "Distribute naam",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 19,
               "status": 0,
               "author": "tnam1qzufnlr9arahv607a7607xyq28xcjq8zd5x8lnyw",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 20,
               "status": 0,
               "author": "tnam1qzufnlr9arahv607a7607xyq28xcjq8zd5x8lnyw",
               "type": "Pgf",
               "title": "Shielding expedition genesis",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 21,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "Default",
               "title": "SPAM PROP -  = 100$",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 22,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "Default",
               "title": "Preferable to Be Healthy: Voting for the Priority of Health",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 23,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "Default",
               "title": "Proposal for Celebration: Gathering for a Memorable Night of Whiskey, Blackjack, and Fun",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 24,
               "status": 0,
               "author": "tnam1qzs4a4nc4un6xv6d30dsgm35wq32wwxewct2gghw",
               "type": "Default",
               "title": "Good new everyone!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 25,
               "status": 0,
               "author": "tnam1qzs4a4nc4un6xv6d30dsgm35wq32wwxewct2gghw",
               "type": "Default",
               "title": "Good new everyone!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 26,
               "status": 0,
               "author": "tnam1qzs4a4nc4un6xv6d30dsgm35wq32wwxewct2gghw",
               "type": "Default",
               "title": "Good new everyone!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 27,
               "status": 0,
               "author": "tnam1qqsrhr894nnupdyu2fqrg290pyxd50pq5vrj8xtf",
               "type": "Pgf",
               "title": "1, 2, 3 go!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 29,
               "status": 0,
               "author": "tnam1qqrhwfj678xq07nfwmmxkvjgzzdr9ywamqqjn88x",
               "type": "Pgf",
               "title": "One Small Step to get RIODs",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 31,
               "status": 0,
               "author": "tnam1qpttyjrpcznq4dskq2jh8gga3def5kzvjy4xqnjp",
               "type": "Pgf",
               "title": "Good news everyone!",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 153,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "Default",
               "title": "Hello world",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 30,
               "status": 0,
               "author": "tnam1qqu5ya9zda2cx56qclcllttznxm78szq75m5hrp2",
               "type": "Default",
               "title": "NodeJom Proposal Test",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 335,
               "status": 0,
               "author": "tnam1qp9clrmxcyjgg25dkafymdtay4rvec04tvt0vrss",
               "type": "PGF",
               "title": "vinnie",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 675,
               "status": 0,
               "author": "tnam1qz2r2sapa3jwzuwssutt9kzgkuwhv3zlugluaunk",
               "type": "PGF",
               "title": "PGF Funding",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 35,
               "status": 0,
               "author": "tnam1qqyklrx2d5rusqujqnfku5cjy26jghv5tu2zy8gg",
               "type": "Pgf",
               "title": "Let's change the life",
               "ep_start": 2,
               "ep_end": 4,
               "result": 0
           },
           {
               "prop_id": 155,
               "status": 0,
               "author": "tnam1qq4vl0s8qpk86na20yza05pkql2ssvrwfulwzthf",
               "type": "PGF",
               "title": "Limit for Steward 2024",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 40,
               "status": 0,
               "author": "tnam1qy24smlm8tdg8vawx8xh30fxa8kcwnudkvufz9zn",
               "type": "Pgf",
               "title": "Tnso.io for Steward 2024",
               "ep_start": 3,
               "ep_end": 5,
               "result": 1
           },
           {
               "prop_id": 34,
               "status": 0,
               "author": "tnam1qptpw59jf40nwatcpgpu02wkcpwh5ajapues8qly",
               "type": "Pgf",
               "title": "Just vote positively :)",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 37,
               "status": 0,
               "author": "tnam1qpc8e2vnsk03tvpnm65ccls9y5w5kdnzmucx3sa0",
               "type": "Default",
               "title": "We are presenting a proposal that will send our community to the moon",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 38,
               "status": 0,
               "author": "tnam1qpc8e2vnsk03tvpnm65ccls9y5w5kdnzmucx3sa0",
               "type": "Default",
               "title": "PSS-01",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 39,
               "status": 0,
               "author": "tnam1qpc8e2vnsk03tvpnm65ccls9y5w5kdnzmucx3sa0",
               "type": "Default",
               "title": "PSS-022",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 41,
               "status": 0,
               "author": "tnam1qrqwvua4qeexy6luqdajerx6tq7ddhwnaq2tchh5",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 42,
               "status": 0,
               "author": "tnam1qqqdr4y4zymc3ctsthpy0fcezdn4jvjl6ye073k0",
               "type": "Pgf",
               "title": "Nominating kelpie for steward.",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 215,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Fund EmberStake Steward For 1 NAM per Epoch",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 154,
               "status": 0,
               "author": "tnam1qrt6a3u33sp4q7a4a2ulav74h89zgs47syt4gdx7",
               "type": "Default",
               "title": "Test Proposal for Shielded Expedition",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 158,
               "status": 0,
               "author": "tnam1qru848k8xamjsyyv5d7uc29zdrjvpn7hgg3hrmds",
               "type": "PGF",
               "title": "lpalleti for Steward 2024",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 50,
               "status": 0,
               "author": "tnam1qzpzskevn6v24h5jpjcjwe4t2my7vzv3cgk8y3yl",
               "type": "Pgf",
               "title": "encipher for Steward 2024",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 43,
               "status": 0,
               "author": "tnam1qq9je57dm384utn6q44ykrrmhdlhgypxqcc324t4",
               "type": "Default",
               "title": "Want points for shielded expedition :)",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 45,
               "status": 0,
               "author": "tnam1qptxc33vsqmx0ttmdcxepcvwvshefwa6ygufkkdu",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 46,
               "status": 0,
               "author": "tnam1qx5al0d7te7lf52p92shnfklssrwqacyx5gs7v5c",
               "type": "Pgf",
               "title": "Add CryptoSJ steward proposal",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 48,
               "status": 0,
               "author": "tnam1qpax5hvq7mfhywezr6mw4lg8xskmjvql6vmdll8n",
               "type": "Pgf",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 49,
               "status": 0,
               "author": "tnam1qptxc33vsqmx0ttmdcxepcvwvshefwa6ygufkkdu",
               "type": "Pgf",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 51,
               "status": 0,
               "author": "tnam1qx5al0d7te7lf52p92shnfklssrwqacyx5gs7v5c",
               "type": "Pgf",
               "title": "Prop-Steward-013",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 53,
               "status": 0,
               "author": "tnam1qx2vhw6est5z6stfvjjfx4q9kry2w5k3yycjawjw",
               "type": "Pgf",
               "title": "DAO for a better world",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 52,
               "status": 0,
               "author": "tnam1qx5al0d7te7lf52p92shnfklssrwqacyx5gs7v5c",
               "type": "Default",
               "title": "Add CryptoSJ steward proposal",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 188,
               "status": 0,
               "author": "tnam1qrrez00p9takdckynkzs5hu7q47s80kesqd0lp5t",
               "type": "PGF",
               "title": "namascan by hkey",
               "ep_start": 14,
               "ep_end": 18,
               "result": 1
           },
           {
               "prop_id": 159,
               "status": 0,
               "author": "tnam1qpr32ut5zptx6mt3ar9vhsra7j7zgtexvc3v5pr4",
               "type": "PGF",
               "title": "Beeram",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 156,
               "status": 0,
               "author": "tnam1qpulw07ee58kyt3mtm2ssf7akvt5zz36lujswypt",
               "type": "PGF",
               "title": "Mat for Steward 2024",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 157,
               "status": 0,
               "author": "tnam1qpr2uzf9pgrd6sucp34wq5gss5rm2un5lszcwzqc",
               "type": "PGF",
               "title": "Dr for Steward 2024",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 144,
               "status": 0,
               "author": "tnam1qz5hjx4jj8dkt0wch5s4vpv7xmk4umuca5crgewz",
               "type": "Default",
               "title": "Namada is the best!",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 64,
               "status": 0,
               "author": "tnam1q9lurg47yae0ljt7uc2zmzwqgr59c8umdgl2q2zf",
               "type": "Default",
               "title": "Governance proposal to test Default proposals.",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 66,
               "status": 0,
               "author": "tnam1qpywhrqvzcqudmkjzrh8cw6sv3p98zzkpu353u2t",
               "type": "Pgf",
               "title": "Add WhisperNode as PGF Steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 62,
               "status": 0,
               "author": "tnam1qq9je57dm384utn6q44ykrrmhdlhgypxqcc324t4",
               "type": "Default",
               "title": "Want points for shielded expedition :)",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 57,
               "status": 0,
               "author": "tnam1qx6u8kz57nvnev89w3er9khr7c4ya76jgckp2rm5",
               "type": "Default",
               "title": "TestProposal",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 67,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "Default",
               "title": "Pilot",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 148,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 59,
               "status": 0,
               "author": "tnam1qr0dzqnwyt0c62s93492vnvs0hqs4krgrc6wty9e",
               "type": "Pgf",
               "title": "orahapris",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 63,
               "status": 0,
               "author": "tnam1q9lurg47yae0ljt7uc2zmzwqgr59c8umdgl2q2zf",
               "type": "Pgf",
               "title": "Proposal to add Daniel from Mandragora as a Steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 56,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "Default",
               "title": "This is a title",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 242,
               "status": 0,
               "author": "tnam1qpq2qux0rj2eu2undmqn44cc8ma87hclt555lqdv",
               "type": "PGF",
               "title": "deber",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 61,
               "status": 0,
               "author": "tnam1qqcdw6jdf8lute4rkxq3lgjmfkh9ayhcuvspxh4c",
               "type": "Default",
               "title": "Prop-Std-01",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 72,
               "status": 0,
               "author": "tnam1qqwyqdklynhqn89z0huhpdgmg5rrcklkk5u5c9lz",
               "type": "Default",
               "title": "Gib moni",
               "ep_start": 6,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 74,
               "status": 0,
               "author": "tnam1q8k3n8s8kxru59rv5elrcet04r8py82jmcw3m8cl",
               "type": "Default",
               "title": "Cancel SE Pilot Wanted Asteroids for governance participation rate.",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 75,
               "status": 0,
               "author": "tnam1qp6fw8q274w8mpttl52fgthz20feue0jg5xmpprh",
               "type": "Pgf",
               "title": "New Steward, lankou",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 69,
               "status": 0,
               "author": "tnam1qrvvecp0fuj89zn86037s4vh3t03p4d3evxkrwka",
               "type": "Pgf",
               "title": "Nominate Mellifera for steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 131,
               "status": 0,
               "author": "tnam1qx7xkpd7e3xjl4guhnqs4xycahwpfcsfpq4q449g",
               "type": "Default",
               "title": "Namada testnet proposal test",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 132,
               "status": 0,
               "author": "tnam1qq85rglphjeumsleh3ad6yghjll0cpqguyyj47r7",
               "type": "PGF",
               "title": "Add Oneplus steward proposal",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 76,
               "status": 0,
               "author": "tnam1qyvw79z550r5e5nd5euhyvlargqnp0g9vg4lrsd9",
               "type": "Pgf",
               "title": "Nodiums Steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 207,
               "status": 0,
               "author": "tnam1qpn0wjeh2fkkfjn6s5dtqlt6ufmhcup9cu979hsw",
               "type": "PGF",
               "title": "Namada Explorer (ValidatorVn) as Steward - Help fund tools for Namada Ecosystem",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 138,
               "status": 0,
               "author": "tnam1qyrhc87p6uyewa2xtdfv73fu63pxddweuvy5gfjp",
               "type": "Default",
               "title": "Test proposal creation",
               "ep_start": 10,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 161,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "PGF",
               "title": "Gimme your money",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 189,
               "status": 0,
               "author": "tnam1qqy4pg7rvdenm62h0drnuxxpcchd8nt8hqc0vdpq",
               "type": "PGF",
               "title": "Eagles fly high",
               "ep_start": 14,
               "ep_end": 18,
               "result": 1
           },
           {
               "prop_id": 190,
               "status": 0,
               "author": "tnam1qphp5lpdxjfmh8cmp2s5gpsz88eqlasq8crgzmqf",
               "type": "PGF",
               "title": "Vote me for President Steward 2024",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 297,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "PGF",
               "title": "2xStake for Steward",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 174,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 134,
               "status": 0,
               "author": "tnam1qqhn4w7ul25ynd5hcz0zqm2c5cn8krwxyq53yylt",
               "type": "Default",
               "title": "Nodeify as Steward",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 82,
               "status": 0,
               "author": "tnam1qr85m66fvewa2vs9ksmyzwct5ws7ye0wlsfef3c8",
               "type": "Default",
               "title": "Gimme gimme gimee",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 83,
               "status": 0,
               "author": "tnam1qq6lxympuusdqrn7lnva7htzemrlsq2kkqyaxc0q",
               "type": "Default",
               "title": "Hard work is the key",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 139,
               "status": 0,
               "author": "tnam1qyrhc87p6uyewa2xtdfv73fu63pxddweuvy5gfjp",
               "type": "PGF",
               "title": "Brightlystake steward",
               "ep_start": 10,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 133,
               "status": 0,
               "author": "tnam1qqhn4w7ul25ynd5hcz0zqm2c5cn8krwxyq53yylt",
               "type": "Default",
               "title": "Nodeify as Steward",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 84,
               "status": 0,
               "author": "tnam1qq6lxympuusdqrn7lnva7htzemrlsq2kkqyaxc0q",
               "type": "Default",
               "title": "Hard work is the key",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 191,
               "status": 0,
               "author": "tnam1qrdnrfcjgr7zj6e32wsy4xttr32jprarxvnlcxtj",
               "type": "PGF",
               "title": "Unit410 for steward",
               "ep_start": 14,
               "ep_end": 18,
               "result": 1
           },
           {
               "prop_id": 284,
               "status": 0,
               "author": "tnam1qr4zhc352atvjnftgr7kpwuqc3x9yuu4ngu9krx4",
               "type": "PGF",
               "title": "Vote - We are the one",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 162,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "PGF",
               "title": "Intergalactic funding",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 374,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Add EmberStake as PGF Steward",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 470,
               "status": 0,
               "author": "tnam1qzapwdp5ldskua87lqd0nd2kcc7pjeljvqxt770v",
               "type": "PGF",
               "title": "OnThePluto PgfSteward",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 90,
               "status": 0,
               "author": "tnam1qrw5ksvkde67yh5cq99k2da2sltjdcyahcqqejsp",
               "type": "Pgf",
               "title": "tRDM",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 91,
               "status": 0,
               "author": "tnam1qrswkd5lhm0ur35crzy0mj57wksl5g3n2ys2j9ct",
               "type": "Default",
               "title": "How to burn 500 NAM tokens",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 87,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "Pgf",
               "title": "Mekonglabs for Steward for life",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 95,
               "status": 0,
               "author": "tnam1qp7mf0k3g22fz8g9wmdh30gtaary8cu9ds7cnw6w",
               "type": "Pgf",
               "title": "Add PathrockNetwork as PGF Steward",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 196,
               "status": 0,
               "author": "tnam1qpzqjf7gts05zx5afx4dnvpkxe7tkhxnmqkf4hwt",
               "type": "Default",
               "title": "Small steps to big Mainnet",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 54,
               "status": 0,
               "author": "tnam1qyly63yu6gm7zn97ueqz9wjyahy6h8qndyejwp7q",
               "type": "Default",
               "title": "Poem-01",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 88,
               "status": 0,
               "author": "tnam1qqrhwfj678xq07nfwmmxkvjgzzdr9ywamqqjn88x",
               "type": "Pgf",
               "title": "PGF fund proposal by CV",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 55,
               "status": 0,
               "author": "tnam1qppefdpha0rwtf4qsuyvxmnnnvjvgz84yvf2nz0m",
               "type": "Pgf",
               "title": "A class task: vote yay for this proposal",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 140,
               "status": 0,
               "author": "tnam1qqnwe079tuhxakt3qz3fflsavy6u5wj8tysgln3h",
               "type": "Default",
               "title": "Suntzu for Steward 2024",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 58,
               "status": 0,
               "author": "tnam1qx2vhw6est5z6stfvjjfx4q9kry2w5k3yycjawjw",
               "type": "Pgf",
               "title": "Fund raising for Big Macs",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 89,
               "status": 0,
               "author": "tnam1qp6fw8q274w8mpttl52fgthz20feue0jg5xmpprh",
               "type": "Pgf",
               "title": "Funding (just a bit) a real Rooki",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 11,
               "status": 0,
               "author": "tnam1qqsrhr894nnupdyu2fqrg290pyxd50pq5vrj8xtf",
               "type": "PGF",
               "title": "Cosmic Conundrum: To Infinity and Beyond!",
               "ep_start": 8,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 257,
               "status": 0,
               "author": "tnam1qzuz70pvwhc64wq7uquuayggcjhnmm5vsgjre2p7",
               "type": "PGF",
               "title": "cato",
               "ep_start": 22,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 123,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Pgf",
               "title": "2pilot for Steward for life",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 28,
               "status": 0,
               "author": "tnam1qqc4gvqtywrmslx7z2sdkjzh8jlx9ewmwus0psgd",
               "type": "Pgf",
               "title": "nodeADDICT",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 32,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "Default",
               "title": "Enhance Community Engagement Platform",
               "ep_start": 2,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 33,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "Pgf",
               "title": "Enhance Community Engagement Platform",
               "ep_start": 2,
               "ep_end": 6,
               "result": 1
           },
           {
               "prop_id": 36,
               "status": 0,
               "author": "tnam1q8j7hv499zz5rl256pkyh9lwzu7n00u69ywz7dpx",
               "type": "Default",
               "title": "Testing some proposal, dunno what gonna change",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 121,
               "status": 0,
               "author": "tnam1qrfuxxfqf36flurh77glclq7gyg737j72g6clhv5",
               "type": "Default",
               "title": "Never forget!",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 119,
               "status": 0,
               "author": "tnam1qr4vlrtptct4tzxqv5fpm4uhepuuj0ynzup93v2y",
               "type": "Default",
               "title": "Data Encryption",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 92,
               "status": 0,
               "author": "tnam1q84tqxcm0l792cvtx8ufe6erx00fwwjtggv925l4",
               "type": "Default",
               "title": "Slashed validators lives matter",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 120,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "2pilot 1st proposal",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 122,
               "status": 0,
               "author": "tnam1qxzpknsjdadvapd9vu0xk3kgak6ndkgwvutsh2yp",
               "type": "Default",
               "title": "Dear Shielded Expedition Crew and Pilot",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 93,
               "status": 0,
               "author": "tnam1q84tqxcm0l792cvtx8ufe6erx00fwwjtggv925l4",
               "type": "Default",
               "title": "Slashed validators lives matter",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 47,
               "status": 0,
               "author": "tnam1qpax5hvq7mfhywezr6mw4lg8xskmjvql6vmdll8n",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 60,
               "status": 0,
               "author": "tnam1qrqwvua4qeexy6luqdajerx6tq7ddhwnaq2tchh5",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 4,
               "ep_end": 6,
               "result": 0
           },
           {
               "prop_id": 375,
               "status": 0,
               "author": "tnam1qrjdug0hfyuxhkrncx8ezk8dzhfxsrwjdgze0mru",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 80,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 94,
               "status": 0,
               "author": "tnam1qp7mf0k3g22fz8g9wmdh30gtaary8cu9ds7cnw6w",
               "type": "Pgf",
               "title": "Add PathrockNetwork as PGF Steward",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 164,
               "status": 0,
               "author": "tnam1qzvga7vyxphejjrmqv6hkr3wl47x7wkj2ummjul7",
               "type": "PGF",
               "title": "Stakeflow test Steward proposal",
               "ep_start": 14,
               "ep_end": 16,
               "result": 0
           },
           {
               "prop_id": 165,
               "status": 0,
               "author": "tnam1qxyt0vrk50r0pc69ama6ayqvrgha80xrtqjvm22j",
               "type": "PGF",
               "title": "Add L0vd as PGF Steward. With L0ve",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 471,
               "status": 0,
               "author": "tnam1qq9m9ga5jmv4jfjmkfdfxypeugn7u5lykye8qrtj",
               "type": "Default",
               "title": "This is my first proposal",
               "ep_start": 62,
               "ep_end": 64,
               "result": 0
           },
           {
               "prop_id": 85,
               "status": 0,
               "author": "tnam1qpywhrqvzcqudmkjzrh8cw6sv3p98zzkpu353u2t",
               "type": "Pgf",
               "title": "Add WhisperNode as PGF Steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 1
           },
           {
               "prop_id": 106,
               "status": 0,
               "author": "tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 98,
               "status": 0,
               "author": "tnam1qq22qmw72m3e6c8lajx8jmzzh2h4t3dp7cfs4dxf",
               "type": "Pgf",
               "title": "GoHaltMe",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 105,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "Default",
               "title": "Vote For The NamdaExplorer",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 100,
               "status": 0,
               "author": "tnam1qzufnlr9arahv607a7607xyq28xcjq8zd5x8lnyw",
               "type": "Pgf",
               "title": "Pass this to create ETH Bridge Pool",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 103,
               "status": 0,
               "author": "tnam1q86rqqdmmtfmh896m025887hpk5w2tcn3uay33cx",
               "type": "PGF",
               "title": "NamandaLabs for Steward 2024",
               "ep_start": 10,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 104,
               "status": 0,
               "author": "tnam1qx2xz8ggmzgfgkj5n33fzumq3lept6hf7yqxcrex",
               "type": "Default",
               "title": "Test proposal #1234567",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 102,
               "status": 0,
               "author": "tnam1qqxavhusumxnk4l4csumgrjdk63wwzwypg3p34k3",
               "type": "Default",
               "title": "Test proposal for Shielded Expedition",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 70,
               "status": 0,
               "author": "tnam1qz3cdqhjygngjazj6v7u97fy3azhjx64jqs40lan",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 77,
               "status": 0,
               "author": "tnam1qqwfh9hzlxf2n5w4v0ljd46qgw4q7mls9v2vwdh2",
               "type": "Pgf",
               "title": "One Small Step for Namada, One Giant Leap for Nocturnal",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 254,
               "status": 0,
               "author": "tnam1qzlgjda3ne3a8jfawhlg5nujjwv923srfch85mts",
               "type": "PGF",
               "title": "Palamar for Steward 2024",
               "ep_start": 22,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 118,
               "status": 0,
               "author": "tnam1qq22a83pmtcr85me5sx6mqzfes809k882u90exjt",
               "type": "Default",
               "title": "Useless proposal",
               "ep_start": 10,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 115,
               "status": 0,
               "author": "tnam1qrdnrfcjgr7zj6e32wsy4xttr32jprarxvnlcxtj",
               "type": "Default",
               "title": "Proposal",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 116,
               "status": 0,
               "author": "tnam1qqcdw6jdf8lute4rkxq3lgjmfkh9ayhcuvspxh4c",
               "type": "Default",
               "title": "Prop-Steward-01",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 200,
               "status": 0,
               "author": "tnam1qqr8fld54cckvt2cc2e87z9s7eajm324usq5vkm9",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 376,
               "status": 0,
               "author": "tnam1qrp0pjajmptn0l86arafah7l0r4h0eu7cqxlh8qg",
               "type": "PGF",
               "title": "Add Viri as PGF Steward",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 268,
               "status": 0,
               "author": "tnam1qpnhswjlnknhap6r3q792jlhmmqwqlvupyd22v55",
               "type": "Default",
               "title": "CHAIN HALTS ONLY ON FRIDAYS! Or never.",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 142,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "PGF",
               "title": "Mekonglabs for Steward for life",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 108,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Add EmberStake as PGF Steward",
               "ep_start": 8,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 112,
               "status": 0,
               "author": "tnam1qrswkd5lhm0ur35crzy0mj57wksl5g3n2ys2j9ct",
               "type": "Default",
               "title": "How to burn 500 NAM tokens",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 113,
               "status": 0,
               "author": "tnam1qrswkd5lhm0ur35crzy0mj57wksl5g3n2ys2j9ct",
               "type": "Default",
               "title": "How to burn 500 NAM tokens",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 114,
               "status": 0,
               "author": "tnam1qqcdw6jdf8lute4rkxq3lgjmfkh9ayhcuvspxh4c",
               "type": "Pgf",
               "title": "Prop-Steward-01",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 403,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "PGF Good For All Steaward Namanda SE",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 68,
               "status": 0,
               "author": "tnam1qrszyy66uk22mfe0vlyttcr5p4y8zmugfcknf6dc",
               "type": "Pgf",
               "title": "nodeADDICT",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 127,
               "status": 0,
               "author": "tnam1qr85m66fvewa2vs9ksmyzwct5ws7ye0wlsfef3c8",
               "type": "PGF",
               "title": "Gimme gimme gimee",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 129,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "PGF",
               "title": "Hi my brothers!",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 71,
               "status": 0,
               "author": "tnam1qz6ajncnl7egu5mcwq69f322lff2re0es57dgzer",
               "type": "Pgf",
               "title": "Nominating jasondavies for PGF steward",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 143,
               "status": 0,
               "author": "tnam1qy24smlm8tdg8vawx8xh30fxa8kcwnudkvufz9zn",
               "type": "PGF",
               "title": "888Tnso for all slashed validator",
               "ep_start": 11,
               "ep_end": 13,
               "result": 0
           },
           {
               "prop_id": 130,
               "status": 0,
               "author": "tnam1qqrhwfj678xq07nfwmmxkvjgzzdr9ywamqqjn88x",
               "type": "PGF",
               "title": "Add CosmicValidator as PGF steward",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 109,
               "status": 0,
               "author": "tnam1qq6lxympuusdqrn7lnva7htzemrlsq2kkqyaxc0q",
               "type": "Pgf",
               "title": "Hard work is the key",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 126,
               "status": 0,
               "author": "tnam1q8j7ln3cyhg78xtsfg2p3kexmnrd2538zy8gcsxg",
               "type": "Pgf",
               "title": "Proposal to add a Steward by Daniel from Mandragora",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 244,
               "status": 0,
               "author": "tnam1qpfa52xxj644lqgafk4c6rn89wnt9pkwd5r2zww4",
               "type": "PGF",
               "title": "Namada Prop",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 128,
               "status": 0,
               "author": "tnam1qr85m66fvewa2vs9ksmyzwct5ws7ye0wlsfef3c8",
               "type": "PGF",
               "title": "Gimme gimme gimee",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 180,
               "status": 0,
               "author": "tnam1qrwzxlamrtrlzptj9d7ernhu9g8q5l5ve58udaty",
               "type": "Default",
               "title": "One Small Step for Namada every small step counts,Namada will be great, One Giant Leap for Memekind and namada is the best",
               "ep_start": 14,
               "ep_end": 16,
               "result": 0
           },
           {
               "prop_id": 78,
               "status": 0,
               "author": "tnam1qrgq23xz4zrhdsjmvy32pvf6thpf80refvqtyzpt",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 96,
               "status": 0,
               "author": "tnam1qra7z5s3r95c8qctcx8zhavxj5k5xmczd5f8dez4",
               "type": "Pgf",
               "title": "Add steward proposal",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 117,
               "status": 0,
               "author": "tnam1q97748flqlna0m0kj4703xgmv7x8cl7amcekcc94",
               "type": "PGF",
               "title": "Galactic Rescue: A Steward's Tale",
               "ep_start": 10,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 107,
               "status": 0,
               "author": "tnam1qzufnlr9arahv607a7607xyq28xcjq8zd5x8lnyw",
               "type": "Default",
               "title": "ETH Bridge Pool",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 97,
               "status": 0,
               "author": "tnam1qra7z5s3r95c8qctcx8zhavxj5k5xmczd5f8dez4",
               "type": "Pgf",
               "title": "Add steward proposal",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 111,
               "status": 0,
               "author": "tnam1qq6lxympuusdqrn7lnva7htzemrlsq2kkqyaxc0q",
               "type": "Default",
               "title": "Hard work is the key",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 152,
               "status": 0,
               "author": "tnam1qpwclyjgnzstsgfdvckqs9vjm82t5j6rrcetmsf8",
               "type": "PGF",
               "title": "Advancing ZkSNARKs Research as Stewart",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 199,
               "status": 0,
               "author": "tnam1qqcdw6jdf8lute4rkxq3lgjmfkh9ayhcuvspxh4c",
               "type": "Default",
               "title": "Prop-Std-01",
               "ep_start": 40,
               "ep_end": 42,
               "result": 0
           },
           {
               "prop_id": 377,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "PGF",
               "title": "Prop-Steward-013",
               "ep_start": 46,
               "ep_end": 48,
               "result": 1
           },
           {
               "prop_id": 205,
               "status": 0,
               "author": "tnam1qyrhc87p6uyewa2xtdfv73fu63pxddweuvy5gfjp",
               "type": "PGF",
               "title": "Brightlystake steward",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 99,
               "status": 0,
               "author": "tnam1qpfa52xxj644lqgafk4c6rn89wnt9pkwd5r2zww4",
               "type": "Pgf",
               "title": "Vote me for Steward 2024",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 44,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "Default",
               "title": "PLS ONLY VOTE NO! VOTE NO!",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 110,
               "status": 0,
               "author": "tnam1qq6lxympuusdqrn7lnva7htzemrlsq2kkqyaxc0q",
               "type": "Pgf",
               "title": "Hard work is the key",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 124,
               "status": 0,
               "author": "tnam1qqgccstk66854ffyzytdzue3d593gxxayveecl7e",
               "type": "Pgf",
               "title": "PGF Funding proposal by Daniel from Mandragora as a non yet official Steward",
               "ep_start": 8,
               "ep_end": 10,
               "result": 1
           },
           {
               "prop_id": 169,
               "status": 0,
               "author": "tnam1qqhn4w7ul25ynd5hcz0zqm2c5cn8krwxyq53yylt",
               "type": "PGF",
               "title": "Nodeify as Human Faucet",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 168,
               "status": 0,
               "author": "tnam1qy24smlm8tdg8vawx8xh30fxa8kcwnudkvufz9zn",
               "type": "PGF",
               "title": "888Tnso for all slashed validator",
               "ep_start": 13,
               "ep_end": 17,
               "result": 1
           },
           {
               "prop_id": 166,
               "status": 0,
               "author": "tnam1qz6ajncnl7egu5mcwq69f322lff2re0es57dgzer",
               "type": "PGF",
               "title": "jasondavies for steward",
               "ep_start": 14,
               "ep_end": 18,
               "result": 1
           },
           {
               "prop_id": 285,
               "status": 0,
               "author": "tnam1qr4jc0tmgl5uk83z795uyupthm630trdng9muvyu",
               "type": "PGF",
               "title": "PGF steward prop",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 79,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 170,
               "status": 0,
               "author": "tnam1qpnh5f33vw6c3d77d72vskcm3dejwvm5qsn2hfdt",
               "type": "Default",
               "title": "empty proposal to vote nay",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 65,
               "status": 0,
               "author": "tnam1qz25ulvyack97swv4e6p5dvpn49ldkvm0qhlcezu",
               "type": "Pgf",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 86,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "Pgf",
               "title": "Mekonglabs for Steward for life",
               "ep_start": 6,
               "ep_end": 8,
               "result": 0
           },
           {
               "prop_id": 171,
               "status": 0,
               "author": "tnam1qq3lm4pcr60k6eka8ctng6up89ayu8vt25kq3wpp",
               "type": "PGF",
               "title": "Nodiums Steward attempt 2",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 136,
               "status": 0,
               "author": "tnam1qqhn4w7ul25ynd5hcz0zqm2c5cn8krwxyq53yylt",
               "type": "PGF",
               "title": "Nodeify as Steward",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 137,
               "status": 0,
               "author": "tnam1qzyx5uwftfg7k0pg6aarx576j7h3n93yqquq7atu",
               "type": "Default",
               "title": "NAMADA SHIELDED EXPEDITION",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 378,
               "status": 0,
               "author": "tnam1qxc3uy65uc34u7g3h69wxwn3en3xnvqrqugne0rc",
               "type": "PGF",
               "title": "Subbotinvv as PGF Steward",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 172,
               "status": 0,
               "author": "tnam1qq3lm4pcr60k6eka8ctng6up89ayu8vt25kq3wpp",
               "type": "PGF",
               "title": "Nodiums Steward attempt 2",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 175,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "Mekonglabs for Steward for life",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 269,
               "status": 0,
               "author": "tnam1qrqql8vdv45n9h9l4ga44anz2rzcewmq3qff3v55",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 258,
               "status": 0,
               "author": "tnam1qxgnegx3se9htr05982atux3ytr797s8av39s5vy",
               "type": "PGF",
               "title": "Cosmostation for Steward",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 192,
               "status": 0,
               "author": "tnam1qrgq23xz4zrhdsjmvy32pvf6thpf80refvqtyzpt",
               "type": "PGF",
               "title": "Hallenjay Steward",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 209,
               "status": 0,
               "author": "tnam1qzlgjda3ne3a8jfawhlg5nujjwv923srfch85mts",
               "type": "PGF",
               "title": "Palamar for Steward 2024",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 179,
               "status": 0,
               "author": "tnam1qpz99eewr7kth6w57645fd2jrr9rs5229gge4t8c",
               "type": "Default",
               "title": "Cancel SE Pilot Wanted Asteroids for governance participation rate.",
               "ep_start": 14,
               "ep_end": 16,
               "result": 0
           },
           {
               "prop_id": 181,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "PGF",
               "title": "Namada Explorer (Gnosed) as Steward - Help fund tools for Namada Ecosystem",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 245,
               "status": 0,
               "author": "tnam1qzvskush5cpnyzva4exwfdqwy59nl8mmsgkg2zca",
               "type": "PGF",
               "title": "aleennado",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 182,
               "status": 0,
               "author": "tnam1qxkvddv57k9mzvegwsq0sxty4evwug86jg8r3f8e",
               "type": "PGF",
               "title": "Amadison79 for Steward 2024",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 208,
               "status": 0,
               "author": "tnam1qzlgjda3ne3a8jfawhlg5nujjwv923srfch85mts",
               "type": "PGF",
               "title": "Palamar for Steward 2024",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 310,
               "status": 0,
               "author": "tnam1qzt8tyawy2maprde3fxcfe5qa2rcm09ukcutp43n",
               "type": "PGF",
               "title": "Junkio as PGF Steward to the moon!",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 183,
               "status": 0,
               "author": "tnam1qpz62q490mx83nau7pvrejj5uz5a30kqqsavle5k",
               "type": "Default",
               "title": "Proposal to be Voted Yay",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 216,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Fund EmberStake IBC Contributions For 3 NAM ",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 231,
               "status": 0,
               "author": "tnam1qq2cwz7wwt0ykqlpstjrnu7xnqdm4yt3ec956a9z",
               "type": "Default",
               "title": "AM Solutions proposal",
               "ep_start": 20,
               "ep_end": 22,
               "result": 0
           },
           {
               "prop_id": 135,
               "status": 0,
               "author": "tnam1qrec580tcg5claces0vg76cgrs6jqe5taujxm07q",
               "type": "PGF",
               "title": "InfraDAO as Steward",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 101,
               "status": 0,
               "author": "tnam1qz5h8lpyues7rzz3vklkzv29mdc2ckuaxvfm885w",
               "type": "PGF",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 259,
               "status": 0,
               "author": "tnam1qzg7975ktktcpm4x6xz9zt0ltpc29aq86qf9k9w5",
               "type": "PGF",
               "title": "Stake Machine Faucet",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 193,
               "status": 0,
               "author": "tnam1qzg7975ktktcpm4x6xz9zt0ltpc29aq86qf9k9w5",
               "type": "Default",
               "title": "Namada SE, Unstuck Version",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 150,
               "status": 0,
               "author": "tnam1q84tqxcm0l792cvtx8ufe6erx00fwwjtggv925l4",
               "type": "PGF",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 323,
               "status": 0,
               "author": "tnam1qq45sy8kmzrv823rmgqt6ghwuj6jc70rr59055mw",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 125,
               "status": 0,
               "author": "tnam1qqwg84fx6t0u7yvyug3mrzc7l4l8sd638v2fz8q5",
               "type": "PGF",
               "title": "Bayram for Steward 2024",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 253,
               "status": 0,
               "author": "tnam1qqpu50lsacjs0rmhu6jlquv0p9zpkuvvayn3hxyq",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 22,
               "ep_end": 24,
               "result": 0
           },
           {
               "prop_id": 145,
               "status": 0,
               "author": "tnam1qqnwe079tuhxakt3qz3fflsavy6u5wj8tysgln3h",
               "type": "PGF",
               "title": "Suntzu for Steward 2024",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 217,
               "status": 0,
               "author": "tnam1qpjc84lkm6w86vr26czglks4w7j3wkutw5lacz7r",
               "type": "PGF",
               "title": "Enhancing Testnet Scalability through Dynamic Consensus Algorithms (no)",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 227,
               "status": 0,
               "author": "tnam1qzt8tyawy2maprde3fxcfe5qa2rcm09ukcutp43n",
               "type": "PGF",
               "title": "Junkio - Make Namada Great Again",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 186,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "Default",
               "title": "Nodes.Guru proposal",
               "ep_start": 14,
               "ep_end": 16,
               "result": 0
           },
           {
               "prop_id": 195,
               "status": 0,
               "author": "tnam1qp4xxzte89uwkvn025f035ghfts5vsyjpvz2j3dq",
               "type": "PGF",
               "title": "Sepidpersia for Steward 2024",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 141,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 173,
               "status": 0,
               "author": "tnam1qpy4wmvd0g3jkpx36xjgd5j6tuqej6k90cx0d90s",
               "type": "Default",
               "title": "One Small Step for Namada every small step counts,Namada will be great, One Giant Leap for Memekind and namada is the best",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 176,
               "status": 0,
               "author": "tnam1qrj8ezv0s5neht698q3uc8hher2l4e2plqwzeavu",
               "type": "Default",
               "title": "One Small Step for Namada every small step counts,Namada will be great, One Giant Leap for Memekind and namada is the best",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 73,
               "status": 0,
               "author": "tnam1q9ynczyyw22npfsw8sylks78kek0q233w5ngzfeu",
               "type": "Default",
               "title": "Congratulations Namada",
               "ep_start": 8,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 163,
               "status": 0,
               "author": "tnam1qr6jpwk46utlsay84krs79lhw93yzjzncs0qv0me",
               "type": "Default",
               "title": "One Small Step for Namada every small step counts, One Giant Leap for Memekind and namada is the best",
               "ep_start": 12,
               "ep_end": 14,
               "result": 0
           },
           {
               "prop_id": 272,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "PGF",
               "title": "Steward",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 243,
               "status": 0,
               "author": "tnam1qphp5lpdxjfmh8cmp2s5gpsz88eqlasq8crgzmqf",
               "type": "PGF",
               "title": "Namada Fam 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 223,
               "status": 0,
               "author": "tnam1qrj8ezv0s5neht698q3uc8hher2l4e2plqwzeavu",
               "type": "PGF",
               "title": "Python for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 81,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "Default",
               "title": "Proposal to Adjust Uptime Score Calculation Starting from Epoch 3",
               "ep_start": 6,
               "ep_end": 10,
               "result": 0
           },
           {
               "prop_id": 147,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 10,
               "ep_end": 12,
               "result": 0
           },
           {
               "prop_id": 149,
               "status": 0,
               "author": "tnam1qr7nm2nlxy9mu7ru00lds7ykwcvvz2lh8u0asrpm",
               "type": "PGF",
               "title": "thoalt for Steward 2024",
               "ep_start": 10,
               "ep_end": 12,
               "result": 1
           },
           {
               "prop_id": 210,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "PGF",
               "title": "Proposal for localhost Validator - Steward 2024",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 621,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "PGF",
               "title": "Pretoro for steward - pilot edition",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 233,
               "status": 0,
               "author": "tnam1qqwg84fx6t0u7yvyug3mrzc7l4l8sd638v2fz8q5",
               "type": "PGF",
               "title": "King Bayram is Coming...",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 239,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "PGF",
               "title": "PGF",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 246,
               "status": 0,
               "author": "tnam1qz6uyk3eh44asmx6qscstykgvpayz2rk6chu4lm2",
               "type": "PGF",
               "title": "Mztacat Steward",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 184,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 194,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "Mekonglabs for Steward for life",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 260,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again, free for all",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 289,
               "status": 0,
               "author": "tnam1qzjeyn2zs9u0tykrlrzmtpgx7xgnmfvpgcxhr6ze",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 255,
               "status": 0,
               "author": "tnam1qz46de8a3mh0vjjfvaqarwkvd6njrc5e5yatgc7m",
               "type": "PGF",
               "title": "lisbo",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 167,
               "status": 0,
               "author": "tnam1qp74ss8w69cs9qfluclye55vl6wsr3xszs3tq5r5",
               "type": "Default",
               "title": "One Small Step for Namada every small step counts, One Giant Leap for Memekind and namada is the best",
               "ep_start": 14,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 146,
               "status": 0,
               "author": "tnam1qx2vhw6est5z6stfvjjfx4q9kry2w5k3yycjawjw",
               "type": "PGF",
               "title": "Steward CryptoDruide",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 225,
               "status": 0,
               "author": "tnam1qzt8tyawy2maprde3fxcfe5qa2rcm09ukcutp43n",
               "type": "PGF",
               "title": "Junkio - Make Namada Great Again",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 151,
               "status": 0,
               "author": "tnam1qxzmkvh9d8guftam56qznfxenxwsgp56xc980ggm",
               "type": "PGF",
               "title": "Redefining Validator Slashing Penalties for Double Signing in Namada",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 160,
               "status": 0,
               "author": "tnam1qx2xz8ggmzgfgkj5n33fzumq3lept6hf7yqxcrex",
               "type": "PGF",
               "title": "Add deNodes as PGF Steward",
               "ep_start": 12,
               "ep_end": 14,
               "result": 1
           },
           {
               "prop_id": 213,
               "status": 0,
               "author": "tnam1qzf8nc5hn6xac9l8te4dacahf83cf98ssgx36xj3",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 18,
               "ep_end": 20,
               "result": 0
           },
           {
               "prop_id": 290,
               "status": 0,
               "author": "tnam1qzjeyn2zs9u0tykrlrzmtpgx7xgnmfvpgcxhr6ze",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 271,
               "status": 0,
               "author": "tnam1qpnhswjlnknhap6r3q792jlhmmqwqlvupyd22v55",
               "type": "PGF",
               "title": "ITRocket as PGF Steward to the moon!",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 212,
               "status": 0,
               "author": "tnam1qxy9qez7f63rly36suw08z65ur9e2lfspcgzp4uy",
               "type": "PGF",
               "title": "ForestNode Steward 2024",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 187,
               "status": 0,
               "author": "tnam1qpzqjf7gts05zx5afx4dnvpkxe7tkhxnmqkf4hwt",
               "type": "PGF",
               "title": "Namada one love ever <3",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 236,
               "status": 0,
               "author": "tnam1qzv9v40dy5y7eayvrlec4ughmq0wlgtayuevpe47",
               "type": "PGF",
               "title": "MAsoltani for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 312,
               "status": 0,
               "author": "tnam1qr0dzqnwyt0c62s93492vnvs0hqs4krgrc6wty9e",
               "type": "PGF",
               "title": "orahapris",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 197,
               "status": 0,
               "author": "tnam1qz0k8qn8fjc3sdek8a2t87zqn5h2ccck550vnlz6",
               "type": "Default",
               "title": "SE Protocol Upgrade V1",
               "ep_start": 16,
               "ep_end": 20,
               "result": 0
           },
           {
               "prop_id": 274,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "PGF",
               "title": "Hades as Steward - always supporting the community",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 276,
               "status": 0,
               "author": "tnam1qzjeyn2zs9u0tykrlrzmtpgx7xgnmfvpgcxhr6ze",
               "type": "PGF",
               "title": "Hyn as Steward",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 185,
               "status": 0,
               "author": "tnam1q84tqxcm0l792cvtx8ufe6erx00fwwjtggv925l4",
               "type": "PGF",
               "title": "P2P for Steward 2024",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 198,
               "status": 0,
               "author": "tnam1qrqql8vdv45n9h9l4ga44anz2rzcewmq3qff3v55",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 249,
               "status": 0,
               "author": "tnam1qyrhc87p6uyewa2xtdfv73fu63pxddweuvy5gfjp",
               "type": "PGF",
               "title": "Brightlystake  remove steward",
               "ep_start": 22,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 270,
               "status": 0,
               "author": "tnam1qpnhswjlnknhap6r3q792jlhmmqwqlvupyd22v55",
               "type": "PGF",
               "title": "ITRocket as PGF Steward to the moon!",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 275,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "PGF",
               "title": "PGF Proposal with IBC Integration",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 311,
               "status": 0,
               "author": "tnam1qq45sy8kmzrv823rmgqt6ghwuj6jc70rr59055mw",
               "type": "PGF",
               "title": "Congratulations, the network is back online",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 324,
               "status": 0,
               "author": "tnam1qpzm8gfr3l6znhkd2p22s9ma7kkgnlsh3v2rq62q",
               "type": "PGF",
               "title": "Qublockchain for Steward",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 277,
               "status": 0,
               "author": "tnam1qq45sy8kmzrv823rmgqt6ghwuj6jc70rr59055mw",
               "type": "PGF",
               "title": "Congratulations, the network is back online",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 232,
               "status": 0,
               "author": "tnam1qz25ulvyack97swv4e6p5dvpn49ldkvm0qhlcezu",
               "type": "PGF",
               "title": "DTEAM for Steward",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 273,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "PGF",
               "title": "Hades for Steward 2024",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 211,
               "status": 0,
               "author": "tnam1qpzqjf7gts05zx5afx4dnvpkxe7tkhxnmqkf4hwt",
               "type": "PGF",
               "title": "Prop-Steward-iamvision",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 288,
               "status": 0,
               "author": "tnam1qpn0wjeh2fkkfjn6s5dtqlt6ufmhcup9cu979hsw",
               "type": "PGF",
               "title": "Validatorvn for Steward 2024",
               "ep_start": 28,
               "ep_end": 30,
               "result": 1
           },
           {
               "prop_id": 178,
               "status": 0,
               "author": "tnam1qycyxsy0k6d7nlklk656unaktnu4ju3j9q5fggzr",
               "type": "PGF",
               "title": "First onchain proposal by ValidBlocks",
               "ep_start": 14,
               "ep_end": 16,
               "result": 1
           },
           {
               "prop_id": 204,
               "status": 0,
               "author": "tnam1qpnh5f33vw6c3d77d72vskcm3dejwvm5qsn2hfdt",
               "type": "PGF",
               "title": "Nodiums Steward attempt 4",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 267,
               "status": 0,
               "author": "tnam1qrpgqus79k0a9sqtwlkft9tvj588dw7sscgzswxy",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 280,
               "status": 0,
               "author": "tnam1qrpgqus79k0a9sqtwlkft9tvj588dw7sscgzswxy",
               "type": "PGF",
               "title": "Anna_sitchihina for Steward 2024",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 281,
               "status": 0,
               "author": "tnam1qqx0p2jus8hjvnxf7clqnn58gcredde02szr9d2r",
               "type": "PGF",
               "title": "Jupiter for Steward Testing",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 177,
               "status": 0,
               "author": "tnam1qycyxsy0k6d7nlklk656unaktnu4ju3j9q5fggzr",
               "type": "Default",
               "title": "First onchain proposal by ValidBlocks",
               "ep_start": 14,
               "ep_end": 16,
               "result": 0
           },
           {
               "prop_id": 224,
               "status": 0,
               "author": "tnam1qqnwe079tuhxakt3qz3fflsavy6u5wj8tysgln3h",
               "type": "PGF",
               "title": "Suntzu request fund for faucet",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 344,
               "status": 0,
               "author": "tnam1qq8h3swfha0fgqjkyh02xcpn5w6duhhm2g9mhycs",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 40,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 298,
               "status": 0,
               "author": "tnam1qzg7975ktktcpm4x6xz9zt0ltpc29aq86qf9k9w5",
               "type": "PGF",
               "title": "Namada SE, Unstuck Version",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 287,
               "status": 0,
               "author": "tnam1qz4h8drmfhtqx3kgev22sd8lkpn4gy82qy3fqkmw",
               "type": "PGF",
               "title": "Steward",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 379,
               "status": 0,
               "author": "tnam1q87w8pdu0k0dsnmc83y3k6gu40m93kqa4s0ujwmf",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 48,
               "ep_end": 50,
               "result": 0
           },
           {
               "prop_id": 240,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "Nodes.Guru Steward proposal",
               "ep_start": 20,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 398,
               "status": 0,
               "author": "tnam1q8p2n5ctwz8x9k7392pxe43vrjrrgj7dwc63harg",
               "type": "PGF",
               "title": "Namada 2024: Uniting for Progress",
               "ep_start": 54,
               "ep_end": 58,
               "result": 1
           },
           {
               "prop_id": 664,
               "status": 0,
               "author": "tnam1qz54p9k9fwpq44d0rngqh8sswcrfdhgq35zzw7xm",
               "type": "PGF",
               "title": "My first PGF",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 248,
               "status": 0,
               "author": "tnam1qq66hqfwanv2afkcwhje8kl2f5jstn9aqgn5llqz",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 22,
               "ep_end": 24,
               "result": 0
           },
           {
               "prop_id": 325,
               "status": 0,
               "author": "tnam1qqpqshqak0cfry9glanntrvv6wwp9lzgnvknen9p",
               "type": "PGF",
               "title": "ThuThuNetWork for Steward for life.",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 234,
               "status": 0,
               "author": "tnam1qpwclyjgnzstsgfdvckqs9vjm82t5j6rrcetmsf8",
               "type": "PGF",
               "title": "Fund for Advancing ZkSNARKs Research",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 250,
               "status": 0,
               "author": "tnam1qq66hqfwanv2afkcwhje8kl2f5jstn9aqgn5llqz",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 22,
               "ep_end": 24,
               "result": 0
           },
           {
               "prop_id": 247,
               "status": 0,
               "author": "tnam1qplya0laa929schy9m0szlgh5adauvczmu02vkjh",
               "type": "Default",
               "title": "PROPOSAL TO APPROVE NAMADA INTEGRATION WITH AVAIL",
               "ep_start": 20,
               "ep_end": 24,
               "result": 0
           },
           {
               "prop_id": 266,
               "status": 0,
               "author": "tnam1qz0k8qn8fjc3sdek8a2t87zqn5h2ccck550vnlz6",
               "type": "Default",
               "title": "SE Protocol Upgrade V1",
               "ep_start": 24,
               "ep_end": 28,
               "result": 1
           },
           {
               "prop_id": 262,
               "status": 0,
               "author": "tnam1qqra8ys3cjmxawj6zsapvyhl5npc58fs8ceceugh",
               "type": "Default",
               "title": "TEST",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 332,
               "status": 0,
               "author": "tnam1qy7u3y3sqltmd68a43lsr0khu8c9y8uyyuzy7sck",
               "type": "Default",
               "title": "Test",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 326,
               "status": 0,
               "author": "tnam1qq45sy8kmzrv823rmgqt6ghwuj6jc70rr59055mw",
               "type": "PGF",
               "title": "Proposal to add CipherstoneValidator as one of the stewards",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 222,
               "status": 0,
               "author": "tnam1qp74ss8w69cs9qfluclye55vl6wsr3xszs3tq5r5",
               "type": "PGF",
               "title": "Omnilord for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 226,
               "status": 0,
               "author": "tnam1qyx6lhprjg3j28n98mc8g8ek53w2kmazrqd7u55e",
               "type": "PGF",
               "title": "ZKValidator for Steward",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 300,
               "status": 0,
               "author": "tnam1qqad3tglrvppcx5wyfdjnl488s3d898wvsv5mn6f",
               "type": "PGF",
               "title": "ThuNamada Steward 2024",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 346,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 40,
               "ep_end": 42,
               "result": 1
           },
           {
               "prop_id": 345,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 40,
               "ep_end": 42,
               "result": 1
           },
           {
               "prop_id": 261,
               "status": 0,
               "author": "tnam1qrmtrdkc9zsm4gj6qzrqc9d2g63hzmsmqgqxq203",
               "type": "PGF",
               "title": "Proposal to add Elon Musk from Tesla as a Steward",
               "ep_start": 24,
               "ep_end": 28,
               "result": 1
           },
           {
               "prop_id": 347,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "Default proposal",
               "ep_start": 40,
               "ep_end": 42,
               "result": 1
           },
           {
               "prop_id": 263,
               "status": 0,
               "author": "tnam1qxxyzcv9hxs6v2hmysehzhwu5czx4pczxcrhjlfe",
               "type": "PGF",
               "title": "lavii.store Steward",
               "ep_start": 24,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 299,
               "status": 0,
               "author": "tnam1qrjdug0hfyuxhkrncx8ezk8dzhfxsrwjdgze0mru",
               "type": "PGF",
               "title": "Small steps to big Mainnet",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 214,
               "status": 0,
               "author": "tnam1qzesekwfv4ajwmcu5t9lpdfqj5nxy7snzvutl5p3",
               "type": "PGF",
               "title": "Will NAMADA developers expand the reward pool after the campaign ends?",
               "ep_start": 18,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 220,
               "status": 0,
               "author": "tnam1qrwzxlamrtrlzptj9d7ernhu9g8q5l5ve58udaty",
               "type": "PGF",
               "title": "Drunk for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 327,
               "status": 0,
               "author": "tnam1qqx0p2jus8hjvnxf7clqnn58gcredde02szr9d2r",
               "type": "PGF",
               "title": "JupiterStake for Steward 2024",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 256,
               "status": 0,
               "author": "tnam1qxt9tr3ctrhnxa5pa70uj2yclh5edlq6avm3pzfc",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 472,
               "status": 0,
               "author": "tnam1qpywx9mx3ah2pkp7jdgkyth9605kxczpqqs90z39",
               "type": "Default",
               "title": "Namada to the Moon",
               "ep_start": 62,
               "ep_end": 64,
               "result": 0
           },
           {
               "prop_id": 473,
               "status": 0,
               "author": "tnam1qpywx9mx3ah2pkp7jdgkyth9605kxczpqqs90z39",
               "type": "PGF",
               "title": "Should The NEBB update more frequently",
               "ep_start": 62,
               "ep_end": 66,
               "result": 1
           },
           {
               "prop_id": 315,
               "status": 0,
               "author": "tnam1qrhnj4cw0d6agek9v8yxs3p2arxynmc3ucn5ekua",
               "type": "PGF",
               "title": "Unlimit for PFG Funding Testing",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 348,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "It's a Beautiful life with Namada",
               "ep_start": 40,
               "ep_end": 42,
               "result": 0
           },
           {
               "prop_id": 349,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 237,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "Nodes.Guru Steward proposal",
               "ep_start": 20,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 228,
               "status": 0,
               "author": "tnam1qqsp6kre33xysk77e6pupsfv3lqmecpl6gql8lmn",
               "type": "PGF",
               "title": "terlia",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 229,
               "status": 0,
               "author": "tnam1qqjs32j3kma0syrj3m5q4gfppkkwdfq3zgh8w3v6",
               "type": "PGF",
               "title": "Erekle for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 230,
               "status": 0,
               "author": "tnam1qr24knyet40h4v4d2uj9y8szk4vvwujy8us9frvs",
               "type": "PGF",
               "title": "proposal",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 235,
               "status": 0,
               "author": "tnam1qxzpknsjdadvapd9vu0xk3kgak6ndkgwvutsh2yp",
               "type": "PGF",
               "title": "Add DSRV as Steward",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 291,
               "status": 0,
               "author": "tnam1qrj0luufnu8gm5nxcs53j93cvrk3mnp8tyrrcgqz",
               "type": "PGF",
               "title": "Steward for Steward 2024",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 292,
               "status": 0,
               "author": "tnam1qpzm8gfr3l6znhkd2p22s9ma7kkgnlsh3v2rq62q",
               "type": "PGF",
               "title": "Stake Machine Faucet",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 313,
               "status": 0,
               "author": "tnam1qrwng6kykz3czjvjhjvydynhufp4q93ass7wvrrc",
               "type": "PGF",
               "title": "Step to the mainnet in 2024",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 350,
               "status": 0,
               "author": "tnam1qpfdghevjctmk5nyvm8yecnltwxk9k0fgqhntys2",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 333,
               "status": 0,
               "author": "tnam1qy7u3y3sqltmd68a43lsr0khu8c9y8uyyuzy7sck",
               "type": "Default",
               "title": "S prop",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 293,
               "status": 0,
               "author": "tnam1qqpqshqak0cfry9glanntrvv6wwp9lzgnvknen9p",
               "type": "PGF",
               "title": "P2P for Steward 2024",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 238,
               "status": 0,
               "author": "tnam1qqm7euwxqva3xllxjz3wt8pwmtcgcllg05cfekpn",
               "type": "PGF",
               "title": "Namada's Lunar Odyssey: A Leap for Memekind! 🚀🌕",
               "ep_start": 20,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 328,
               "status": 0,
               "author": "tnam1qqra8ys3cjmxawj6zsapvyhl5npc58fs8ceceugh",
               "type": "PGF",
               "title": "CosmoBaik for Steward 2024",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 329,
               "status": 0,
               "author": "tnam1qq3sfe7k3qvvlm89d9d2ev4anezc6f59rqys8t9j",
               "type": "PGF",
               "title": "2xStake for Steward",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 474,
               "status": 0,
               "author": "tnam1qr4njyrgqdlnnu7jnkyn9qsmpkkxs40ufq87s693",
               "type": "PGF",
               "title": "Namada is bigger than DOGE",
               "ep_start": 62,
               "ep_end": 66,
               "result": 1
           },
           {
               "prop_id": 404,
               "status": 0,
               "author": "tnam1qph60hh43apm3pvw6fk6cnzjaw5g2l3mrcdu9f9p",
               "type": "Default",
               "title": "Dafault proposal",
               "ep_start": 56,
               "ep_end": 58,
               "result": 0
           },
           {
               "prop_id": 219,
               "status": 0,
               "author": "tnam1qr6jpwk46utlsay84krs79lhw93yzjzncs0qv0me",
               "type": "PGF",
               "title": "Ifediora for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 201,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "Nodes.Guru Steward proposal",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 206,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "PGF",
               "title": "Hades as Steward - always supporting the community",
               "ep_start": 18,
               "ep_end": 20,
               "result": 1
           },
           {
               "prop_id": 221,
               "status": 0,
               "author": "tnam1qpy4wmvd0g3jkpx36xjgd5j6tuqej6k90cx0d90s",
               "type": "PGF",
               "title": "Oracle for Steward 2024",
               "ep_start": 20,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 279,
               "status": 0,
               "author": "tnam1qqx0p2jus8hjvnxf7clqnn58gcredde02szr9d2r",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 351,
               "status": 0,
               "author": "tnam1qx0u65rsxthxunp5vjvdxeqgjj3ddpcsf5rrrxu4",
               "type": "Default",
               "title": "Pay for me, everyday",
               "ep_start": 40,
               "ep_end": 42,
               "result": 0
           },
           {
               "prop_id": 352,
               "status": 0,
               "author": "tnam1qx0u65rsxthxunp5vjvdxeqgjj3ddpcsf5rrrxu4",
               "type": "Default",
               "title": "Pay for me, everyday",
               "ep_start": 40,
               "ep_end": 42,
               "result": 0
           },
           {
               "prop_id": 322,
               "status": 0,
               "author": "tnam1qzt8tyawy2maprde3fxcfe5qa2rcm09ukcutp43n",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 202,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "Nodes.Guru Steward proposal",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 203,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "Nodes.Guru Steward proposal",
               "ep_start": 16,
               "ep_end": 18,
               "result": 0
           },
           {
               "prop_id": 251,
               "status": 0,
               "author": "tnam1qph60hh43apm3pvw6fk6cnzjaw5g2l3mrcdu9f9p",
               "type": "PGF",
               "title": "Joker Steward",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 353,
               "status": 0,
               "author": "tnam1qx0u65rsxthxunp5vjvdxeqgjj3ddpcsf5rrrxu4",
               "type": "Default",
               "title": "Pay for me, everyday",
               "ep_start": 40,
               "ep_end": 42,
               "result": 0
           },
           {
               "prop_id": 381,
               "status": 0,
               "author": "tnam1qph6mnwtfnfgaa4098gsdww76vdf4crtlsgvwu62",
               "type": "PGF",
               "title": "Add Decentrio to Steward",
               "ep_start": 50,
               "ep_end": 52,
               "result": 0
           },
           {
               "prop_id": 241,
               "status": 0,
               "author": "tnam1qr36j29ujmynjjj63c8269cghz60xtkxrct92tv7",
               "type": "PGF",
               "title": "prop",
               "ep_start": 22,
               "ep_end": 26,
               "result": 1
           },
           {
               "prop_id": 354,
               "status": 0,
               "author": "tnam1q87w8pdu0k0dsnmc83y3k6gu40m93kqa4s0ujwmf",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 42,
               "ep_end": 46,
               "result": 1
           },
           {
               "prop_id": 218,
               "status": 0,
               "author": "tnam1qzesekwfv4ajwmcu5t9lpdfqj5nxy7snzvutl5p3",
               "type": "PGF",
               "title": "Blockchain Integration for Reduced Transaction Fees and Enhanced AI Capabilities with NAMADA",
               "ep_start": 18,
               "ep_end": 22,
               "result": 1
           },
           {
               "prop_id": 380,
               "status": 0,
               "author": "tnam1qpn0wjeh2fkkfjn6s5dtqlt6ufmhcup9cu979hsw",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 50,
               "ep_end": 52,
               "result": 0
           },
           {
               "prop_id": 394,
               "status": 0,
               "author": "tnam1qz6ag74xegc64th8u58g9033j8crkgduq5mdj7jj",
               "type": "PGF",
               "title": "Tassernals for Steward 2024",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 397,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 56,
               "ep_end": 58,
               "result": 0
           },
           {
               "prop_id": 282,
               "status": 0,
               "author": "tnam1qqu5ya9zda2cx56qclcllttznxm78szq75m5hrp2",
               "type": "PGF",
               "title": "Add NodeJom as Steward",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 625,
               "status": 0,
               "author": "tnam1qprkmy2qrerhpq5w5jffganmqnzzpdnnjcgjtz38",
               "type": "Default",
               "title": "Integration Proposal",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 283,
               "status": 0,
               "author": "tnam1qpfa52xxj644lqgafk4c6rn89wnt9pkwd5r2zww4",
               "type": "PGF",
               "title": "Namada Prop",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 301,
               "status": 0,
               "author": "tnam1qyjcwlyr3mhnydywagmn37udryq3z4d70q3ydhze",
               "type": "PGF",
               "title": "Linamr as PGF Steward to the moon!",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 304,
               "status": 0,
               "author": "tnam1qq3xvwzr8lgxh4kv87ue7x8xvq7tfttqsv9vxnkw",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 30,
               "ep_end": 32,
               "result": 0
           },
           {
               "prop_id": 305,
               "status": 0,
               "author": "tnam1q8q0g5j4k9ume9lapusf7wz9z3n7t8g4mszfsmtq",
               "type": "Default",
               "title": "Integration Proposal",
               "ep_start": 30,
               "ep_end": 32,
               "result": 0
           },
           {
               "prop_id": 252,
               "status": 0,
               "author": "tnam1qzxectrfqkggtjdjnvydeas7lfhfurh08qapsz73",
               "type": "PGF",
               "title": "Namanda - Enhance Community Engagement Platform Strongest",
               "ep_start": 22,
               "ep_end": 24,
               "result": 1
           },
           {
               "prop_id": 336,
               "status": 0,
               "author": "tnam1qrw5ksvkde67yh5cq99k2da2sltjdcyahcqqejsp",
               "type": "PGF",
               "title": "tRDM for Steward 2024",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 382,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "It's a Beautiful life with Namada",
               "ep_start": 50,
               "ep_end": 54,
               "result": 1
           },
           {
               "prop_id": 317,
               "status": 0,
               "author": "tnam1qqrhwfj678xq07nfwmmxkvjgzzdr9ywamqqjn88x",
               "type": "PGF",
               "title": "Add CosmicValidator as PGF steward",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 355,
               "status": 0,
               "author": "tnam1qx4ay0xkfjs8z2t3cea9pterrustygsxhvd9pyfk",
               "type": "PGF",
               "title": "Live in a better World!",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 295,
               "status": 0,
               "author": "tnam1qqgccstk66854ffyzytdzue3d593gxxayveecl7e",
               "type": "PGF",
               "title": "Proposal to add Daniel from Mandragora as a Steward",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 383,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Add EmberStake as PGF Steward",
               "ep_start": 50,
               "ep_end": 54,
               "result": 1
           },
           {
               "prop_id": 302,
               "status": 0,
               "author": "tnam1qpz99eewr7kth6w57645fd2jrr9rs5229gge4t8c",
               "type": "PGF",
               "title": "Stakin for Steward 2024",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 278,
               "status": 0,
               "author": "tnam1qqx0p2jus8hjvnxf7clqnn58gcredde02szr9d2r",
               "type": "Default",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 264,
               "status": 0,
               "author": "tnam1qqra8ys3cjmxawj6zsapvyhl5npc58fs8ceceugh",
               "type": "PGF",
               "title": "Proposal Marketing Research and Promotion for Namada",
               "ep_start": 24,
               "ep_end": 26,
               "result": 0
           },
           {
               "prop_id": 296,
               "status": 0,
               "author": "tnam1qp5rgpa3p2aezq7q06hhz7y0q5fx6l5d5g47sedx",
               "type": "PGF",
               "title": "One Small Step for Namada, One Giant Leap for Me",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 303,
               "status": 0,
               "author": "tnam1qx0u65rsxthxunp5vjvdxeqgjj3ddpcsf5rrrxu4",
               "type": "PGF",
               "title": "Maybe it will be cool idea",
               "ep_start": 30,
               "ep_end": 32,
               "result": 1
           },
           {
               "prop_id": 314,
               "status": 0,
               "author": "tnam1qzxectrfqkggtjdjnvydeas7lfhfurh08qapsz73",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 30,
               "ep_end": 32,
               "result": 0
           },
           {
               "prop_id": 356,
               "status": 0,
               "author": "tnam1qp7ag54ty634g3p2dj45w382t838v3zhhqygt2u9",
               "type": "PGF",
               "title": "Steward proporsal",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 384,
               "status": 0,
               "author": "tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",
               "type": "PGF",
               "title": "Will NAMADA developers expand the reward pool after the campaign ends?",
               "ep_start": 50,
               "ep_end": 52,
               "result": 0
           },
           {
               "prop_id": 430,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 294,
               "status": 0,
               "author": "tnam1qqy79xtkzkzep2e8qtugxd934k2969ncavsv9qs8",
               "type": "Default",
               "title": "Lets Not Just Test, But Also Have a Blast",
               "ep_start": 28,
               "ep_end": 30,
               "result": 0
           },
           {
               "prop_id": 357,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Fund EmberStake IBC Contributions For 3000",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 493,
               "status": 0,
               "author": "tnam1qrj0luufnu8gm5nxcs53j93cvrk3mnp8tyrrcgqz",
               "type": "PGF",
               "title": "Ibc action on Namada will help token circulation between Cosmos - Namada - ETH is easier",
               "ep_start": 70,
               "ep_end": 74,
               "result": 1
           },
           {
               "prop_id": 385,
               "status": 0,
               "author": "tnam1qqsa3segx4jfe4zdkkj0q5md5e9jffv0hu6kknc0",
               "type": "Default",
               "title": "Shielded Expedition v2, let's foorkin' gooo 🍴🚀",
               "ep_start": 50,
               "ep_end": 54,
               "result": 0
           },
           {
               "prop_id": 331,
               "status": 0,
               "author": "tnam1qpvucyamefqt57t748ngkuzkng7d52wp9sw6zf6p",
               "type": "Default",
               "title": "AMAN",
               "ep_start": 32,
               "ep_end": 34,
               "result": 0
           },
           {
               "prop_id": 306,
               "status": 0,
               "author": "tnam1qpywx9mx3ah2pkp7jdgkyth9605kxczpqqs90z39",
               "type": "Default",
               "title": "Should The NEBB update more frequently",
               "ep_start": 30,
               "ep_end": 34,
               "result": 0
           },
           {
               "prop_id": 573,
               "status": 0,
               "author": "tnam1qrs29lpqfhsucelmjgy5l7cfu5d9y8gycu0stxvt",
               "type": "Default",
               "title": "Mario - One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 309,
               "status": 0,
               "author": "tnam1qr4njyrgqdlnnu7jnkyn9qsmpkkxs40ufq87s693",
               "type": "PGF",
               "title": "Namada is bigger than DOGE",
               "ep_start": 30,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 318,
               "status": 0,
               "author": "tnam1qq4utu8nelg4fhjn4neurvfnw9nyrk9wmsx3mw4d",
               "type": "PGF",
               "title": "We do it",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 319,
               "status": 0,
               "author": "tnam1qrkl0cuxw25myr3kakq8jnt37mfjp2jks5j40yw4",
               "type": "PGF",
               "title": "Add n1stake steward proposal",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 358,
               "status": 0,
               "author": "tnam1qq8h3swfha0fgqjkyh02xcpn5w6duhhm2g9mhycs",
               "type": "PGF",
               "title": "HARDFORK UPGRADE!",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 286,
               "status": 0,
               "author": "tnam1qrhnj4cw0d6agek9v8yxs3p2arxynmc3ucn5ekua",
               "type": "PGF",
               "title": "Namada Telegram Bot as Steward - Help fund tools for Namada Ecosystem",
               "ep_start": 26,
               "ep_end": 28,
               "result": 0
           },
           {
               "prop_id": 386,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "PGF",
               "title": "Hades as Steward - always supporting the community",
               "ep_start": 50,
               "ep_end": 52,
               "result": 0
           },
           {
               "prop_id": 307,
               "status": 0,
               "author": "tnam1qr4njyrgqdlnnu7jnkyn9qsmpkkxs40ufq87s693",
               "type": "Default",
               "title": "Ronaldo or Messi is the GOAT, Yay for Ronaldo, Nay for Messi",
               "ep_start": 30,
               "ep_end": 34,
               "result": 0
           },
           {
               "prop_id": 308,
               "status": 0,
               "author": "tnam1qr4njyrgqdlnnu7jnkyn9qsmpkkxs40ufq87s693",
               "type": "Default",
               "title": "Ronaldo or Messi is the GOAT, Yay for Ronaldo, Nay for Messi",
               "ep_start": 30,
               "ep_end": 34,
               "result": 0
           },
           {
               "prop_id": 433,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 434,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 432,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 359,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "Default",
               "title": "Feeling rich today, so created a proposal",
               "ep_start": 42,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 360,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "Default",
               "title": "Feeling rich today, so created a proposal",
               "ep_start": 42,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 320,
               "status": 0,
               "author": "tnam1qpnh5f33vw6c3d77d72vskcm3dejwvm5qsn2hfdt",
               "type": "PGF",
               "title": "Nodiums Steward attempt 7",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 435,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 440,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 337,
               "status": 0,
               "author": "tnam1qxy9qez7f63rly36suw08z65ur9e2lfspcgzp4uy",
               "type": "PGF",
               "title": "Staying positive",
               "ep_start": 34,
               "ep_end": 36,
               "result": 1
           },
           {
               "prop_id": 438,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 436,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 387,
               "status": 0,
               "author": "tnam1qz5jwutlx00w55acmhly34pqfl05tk46q5us47qn",
               "type": "PGF",
               "title": "Namada of Anoma",
               "ep_start": 52,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 439,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 405,
               "status": 0,
               "author": "tnam1qr7nm2nlxy9mu7ru00lds7ykwcvvz2lh8u0asrpm",
               "type": "PGF",
               "title": "thoalt for Steward 2024",
               "ep_start": 56,
               "ep_end": 58,
               "result": 0
           },
           {
               "prop_id": 437,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 494,
               "status": 0,
               "author": "tnam1qz8gs4ds0xx4y83lv96ldercqsmnxnwa5gde8dst",
               "type": "PGF",
               "title": "For Namada and Community",
               "ep_start": 70,
               "ep_end": 72,
               "result": 0
           },
           {
               "prop_id": 680,
               "status": 0,
               "author": "tnam1qqr8fld54cckvt2cc2e87z9s7eajm324usq5vkm9",
               "type": "Default",
               "title": "Good by Shielded Expedition",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 679,
               "status": 0,
               "author": "tnam1qp26yhsqtvv4thdqhhednha3p5j6d359kqkn6pcg",
               "type": "Default",
               "title": "Good by Shielded Expedition",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 388,
               "status": 0,
               "author": "tnam1qz5jwutlx00w55acmhly34pqfl05tk46q5us47qn",
               "type": "PGF",
               "title": "Namada of Anoma",
               "ep_start": 52,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 361,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "PGF",
               "title": "Steward Proposal",
               "ep_start": 42,
               "ep_end": 44,
               "result": 0
           },
           {
               "prop_id": 321,
               "status": 0,
               "author": "tnam1qr6h03uvj8mlaghj8w6h4hgxrv56j9g56sdcmung",
               "type": "PGF",
               "title": "alamate",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 389,
               "status": 0,
               "author": "tnam1qzxp9z5kyesvvq83704yfy399ug2s9kquyeh037d",
               "type": "PGF",
               "title": "Improving Transparency and Accountability in Cosmos Testnet Governance",
               "ep_start": 52,
               "ep_end": 54,
               "result": 0
           },
           {
               "prop_id": 574,
               "status": 0,
               "author": "tnam1qzxharc68vmgnfam4jpjg5jusme8xr9axq4m5cr7",
               "type": "Default",
               "title": "Default type of proposal",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 448,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 442,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 445,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 429,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 431,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 443,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 446,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 444,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 447,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 575,
               "status": 0,
               "author": "tnam1qr5lgah5pq0wenf9x0w962gnvm6y8fq5zc37z5ja",
               "type": "PGF",
               "title": "Pabloo for steward",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 441,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 362,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "Default proposal",
               "ep_start": 44,
               "ep_end": 46,
               "result": 1
           },
           {
               "prop_id": 477,
               "status": 0,
               "author": "tnam1qpn0wjeh2fkkfjn6s5dtqlt6ufmhcup9cu979hsw",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 66,
               "ep_end": 68,
               "result": 0
           },
           {
               "prop_id": 392,
               "status": 0,
               "author": "tnam1qrjdug0hfyuxhkrncx8ezk8dzhfxsrwjdgze0mru",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 54,
               "ep_end": 58,
               "result": 1
           },
           {
               "prop_id": 363,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 46,
               "ep_end": 48,
               "result": 1
           },
           {
               "prop_id": 390,
               "status": 0,
               "author": "tnam1qzn5lyy725grjk27qwfk2l7mv9vuecuysv5v5kwz",
               "type": "PGF",
               "title": "Add arrita as PGF Steward",
               "ep_start": 52,
               "ep_end": 54,
               "result": 0
           },
           {
               "prop_id": 465,
               "status": 0,
               "author": "tnam1qph60hh43apm3pvw6fk6cnzjaw5g2l3mrcdu9f9p",
               "type": "Default",
               "title": "Proporsal 450",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 475,
               "status": 0,
               "author": "tnam1qr5a7005hm6jjuxa8e7q0yxdwzv2tvmwa5e2dzxl",
               "type": "PGF",
               "title": "Propose PGF Steward",
               "ep_start": 62,
               "ep_end": 64,
               "result": 1
           },
           {
               "prop_id": 476,
               "status": 0,
               "author": "tnam1qp5xhr0gj6r2yateccc9yk4lekz2lhpe3gjchpl5",
               "type": "PGF",
               "title": "Congrats successful hard fork. We are going to end of Shielded Expedition testnet and launch mainnet",
               "ep_start": 62,
               "ep_end": 66,
               "result": 1
           },
           {
               "prop_id": 677,
               "status": 0,
               "author": "tnam1qp26yhsqtvv4thdqhhednha3p5j6d359kqkn6pcg",
               "type": "PGF",
               "title": "Need some tokens, gonna share with community",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 449,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 365,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "Namanda SE - Update to v1.1",
               "ep_start": 44,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 450,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 393,
               "status": 0,
               "author": "tnam1qpvnhp0s76mgu27czge5e7urnk68942xeghyvnd5",
               "type": "PGF",
               "title": "anastasialover for Steward",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 451,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 483,
               "status": 0,
               "author": "tnam1qpmntexxz3mclk793tf9rek4j6jwphlduu79rr3m",
               "type": "PGF",
               "title": "Asemkut steward",
               "ep_start": 68,
               "ep_end": 70,
               "result": 0
           },
           {
               "prop_id": 619,
               "status": 0,
               "author": "tnam1qphp5lpdxjfmh8cmp2s5gpsz88eqlasq8crgzmqf",
               "type": "Default",
               "title": "Steward offell",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 624,
               "status": 0,
               "author": "tnam1qprkmy2qrerhpq5w5jffganmqnzzpdnnjcgjtz38",
               "type": "PGF",
               "title": "Steward",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 626,
               "status": 0,
               "author": "tnam1qprkmy2qrerhpq5w5jffganmqnzzpdnnjcgjtz38",
               "type": "PGF",
               "title": "PGF Proposal with IBC Integration",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 366,
               "status": 0,
               "author": "tnam1qxegpxyj8jnr7lvpnatjhamnzq2v33cg3v4nw3yf",
               "type": "PGF",
               "title": "NODERS TEAM Steward proposal",
               "ep_start": 44,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 330,
               "status": 0,
               "author": "tnam1qqad3tglrvppcx5wyfdjnl488s3d898wvsv5mn6f",
               "type": "PGF",
               "title": "Thunamda for Steward 2024",
               "ep_start": 32,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 407,
               "status": 0,
               "author": "tnam1qpn0wjeh2fkkfjn6s5dtqlt6ufmhcup9cu979hsw",
               "type": "PGF",
               "title": "Steward proposal",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 678,
               "status": 0,
               "author": "tnam1qqr8fld54cckvt2cc2e87z9s7eajm324usq5vkm9",
               "type": "PGF",
               "title": "Need some tokens, gonna share with community",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 391,
               "status": 0,
               "author": "tnam1qp4h4p92kfxaqmmu0n0pyef7w3mzf7swp5lz54a4",
               "type": "PGF",
               "title": "Enhancing Transparency and Accountability in Namada Testnet Governance",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 452,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 453,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 454,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 316,
               "status": 0,
               "author": "tnam1qqsa3segx4jfe4zdkkj0q5md5e9jffv0hu6kknc0",
               "type": "Default",
               "title": "Shielded Expedition, Fork Yeah",
               "ep_start": 30,
               "ep_end": 34,
               "result": 1
           },
           {
               "prop_id": 339,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "PGF",
               "title": "Be Generous and the Universe will reward you FOREVER!",
               "ep_start": 36,
               "ep_end": 38,
               "result": 1
           },
           {
               "prop_id": 338,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "Default",
               "title": "Activate Shielded Rewards for NAAN with 5% reward rate",
               "ep_start": 36,
               "ep_end": 38,
               "result": 0
           },
           {
               "prop_id": 455,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 367,
               "status": 0,
               "author": "tnam1q88p7xd7p8sppy4vkflqk4dvmmhzp0y26gvsq5se",
               "type": "PGF",
               "title": "Linamr as PGF Steward to the moon!",
               "ep_start": 44,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 408,
               "status": 0,
               "author": "tnam1qppwtk3sp08gg9j60sqa3gmxn3q5pzn25s5hpccl",
               "type": "PGF",
               "title": "It's a Beautiful life with Namada",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 458,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 460,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 457,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 459,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 456,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 413,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 627,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "PGF",
               "title": "PGF funding",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 368,
               "status": 0,
               "author": "tnam1qpnhswjlnknhap6r3q792jlhmmqwqlvupyd22v55",
               "type": "PGF",
               "title": "Funding for monitoring tools development",
               "ep_start": 44,
               "ep_end": 46,
               "result": 1
           },
           {
               "prop_id": 369,
               "status": 0,
               "author": "tnam1q8f5sgllfva0zsh298kn4rc4r22uqkgtms66evdr",
               "type": "PGF",
               "title": "SE TEST",
               "ep_start": 44,
               "ep_end": 46,
               "result": 0
           },
           {
               "prop_id": 409,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 340,
               "status": 0,
               "author": "tnam1q968wp2h0c4anu2808zkawg0sdxake2re57s7lsx",
               "type": "PGF",
               "title": "Chiku for Steward - Namada",
               "ep_start": 36,
               "ep_end": 38,
               "result": 1
           },
           {
               "prop_id": 395,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 410,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 411,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 396,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 412,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 370,
               "status": 0,
               "author": "tnam1q9j5g6vwmasjq2xm7r28jkqkvtxqwx02vc97fnnf",
               "type": "PGF",
               "title": "Bobby for Steward 2024",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 341,
               "status": 0,
               "author": "tnam1qz47y6te37p7nqhz28kfmkneqn2kqa5hzy2dajlw",
               "type": "PGF",
               "title": "Add CV as PGF steward",
               "ep_start": 36,
               "ep_end": 38,
               "result": 0
           },
           {
               "prop_id": 466,
               "status": 0,
               "author": "tnam1qptpw59jf40nwatcpgpu02wkcpwh5ajapues8qly",
               "type": "PGF",
               "title": "Need some tokens, gonna share with community",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 418,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 464,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 415,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 463,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 461,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 462,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 416,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 420,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 419,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 417,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 414,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 364,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "NamadaLabs - Make public goods funding great again - Let's move forward to V1",
               "ep_start": 52,
               "ep_end": 54,
               "result": 1
           },
           {
               "prop_id": 342,
               "status": 0,
               "author": "tnam1qx0u65rsxthxunp5vjvdxeqgjj3ddpcsf5rrrxu4",
               "type": "PGF",
               "title": "Pay for me, everyday",
               "ep_start": 38,
               "ep_end": 40,
               "result": 1
           },
           {
               "prop_id": 343,
               "status": 0,
               "author": "tnam1qyys6uvp43kkscmregj256verwqatmkxmqscnvhf",
               "type": "PGF",
               "title": "Maybe it will be cool idea 2",
               "ep_start": 38,
               "ep_end": 40,
               "result": 0
           },
           {
               "prop_id": 421,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 371,
               "status": 0,
               "author": "tnam1qpc50e5frmfl2lfu7k966xk6qf4fxarklgqrz03a",
               "type": "PGF",
               "title": "Add Caelus Labs to Steward",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 399,
               "status": 0,
               "author": "tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",
               "type": "PGF",
               "title": "It's a Beautiful life with Namada",
               "ep_start": 54,
               "ep_end": 58,
               "result": 1
           },
           {
               "prop_id": 584,
               "status": 0,
               "author": "tnam1qpy4wmvd0g3jkpx36xjgd5j6tuqej6k90cx0d90s",
               "type": "PGF",
               "title": "oracle for Steward 2024",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 620,
               "status": 0,
               "author": "tnam1qpfa52xxj644lqgafk4c6rn89wnt9pkwd5r2zww4",
               "type": "Default",
               "title": "Default",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 623,
               "status": 0,
               "author": "tnam1qpgq2fvz7p3an405fk2m5nceyfc8dcceyy0t7p7d",
               "type": "PGF",
               "title": "We do it",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 334,
               "status": 0,
               "author": "tnam1qz6na53ueyalmng8fsknz35a4jkelqkpygtfgmyq",
               "type": "PGF",
               "title": "Become Steward",
               "ep_start": 34,
               "ep_end": 36,
               "result": 0
           },
           {
               "prop_id": 427,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 401,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "PGF Good For All Steaward Namanda SE",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 402,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "PGF Good For All Steaward Namanda SE",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 372,
               "status": 0,
               "author": "tnam1qqa9tmpzyp9dk0cw5wesdq5g7xcgsqvnkvzyps39",
               "type": "PGF",
               "title": "SE",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 424,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 422,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 467,
               "status": 0,
               "author": "tnam1qzxharc68vmgnfam4jpjg5jusme8xr9axq4m5cr7",
               "type": "PGF",
               "title": "Namada Explorer to STEWARD!",
               "ep_start": 62,
               "ep_end": 64,
               "result": 0
           },
           {
               "prop_id": 425,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 400,
               "status": 0,
               "author": "tnam1qqnarl4h6dsy4jchy0tcxakh286ec03weyfnks6e",
               "type": "PGF",
               "title": "PGF Good For All Steaward Namanda SE",
               "ep_start": 54,
               "ep_end": 56,
               "result": 0
           },
           {
               "prop_id": 428,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 426,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 423,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "Proposals swarm",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 485,
               "status": 0,
               "author": "tnam1qrhnj4cw0d6agek9v8yxs3p2arxynmc3ucn5ekua",
               "type": "PGF",
               "title": "Namada Telegram Bot as Steward - Help fund tools for Namada Ecosystem",
               "ep_start": 68,
               "ep_end": 72,
               "result": 1
           },
           {
               "prop_id": 406,
               "status": 0,
               "author": "tnam1qruqt7q7nh9c9ser09yjrhwnuqt5fz2rkc068k35",
               "type": "PGF",
               "title": "Implementing a Namada Testnet Bug Bounty Program",
               "ep_start": 58,
               "ep_end": 60,
               "result": 0
           },
           {
               "prop_id": 468,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "PGF",
               "title": "Pretoro for steward",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 629,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "Default",
               "title": "Celebrating The End of Namada Shield Expedition",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 373,
               "status": 0,
               "author": "tnam1qrqyt7expnlknt5z030qhgcgxak6lj7cuchgzxqn",
               "type": "PGF",
               "title": "serana",
               "ep_start": 46,
               "ep_end": 48,
               "result": 0
           },
           {
               "prop_id": 630,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "PGF",
               "title": "Did You Love NAMADA?",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 681,
               "status": 0,
               "author": "tnam1qr495c9zr52lfc8vedu2lwutffhk6a8p5qkvvrq9",
               "type": "PGF",
               "title": "Fible1 for Dear Leader",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 631,
               "status": 0,
               "author": "tnam1qprkmy2qrerhpq5w5jffganmqnzzpdnnjcgjtz38",
               "type": "Default",
               "title": "Test",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 632,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "PGF",
               "title": "HELP FamNode for PGF Please",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 469,
               "status": 0,
               "author": "tnam1qptc2u622m03ku3dvm085agustefgjk6m55t76ue",
               "type": "PGF",
               "title": "Try steward",
               "ep_start": 60,
               "ep_end": 62,
               "result": 0
           },
           {
               "prop_id": 495,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "PGF",
               "title": "Do You Love NAMADA ?",
               "ep_start": 72,
               "ep_end": 74,
               "result": 1
           },
           {
               "prop_id": 583,
               "status": 0,
               "author": "tnam1qra9t7vuy5llnrz78jw0pjq7276z3weleqv0grlp",
               "type": "PGF",
               "title": "F5 Nodes PGF Steward Proposal",
               "ep_start": 82,
               "ep_end": 86,
               "result": 1
           },
           {
               "prop_id": 591,
               "status": 0,
               "author": "tnam1qqy4873vfdm842nv4vw0zv0wj4zxlavl5vm4apmu",
               "type": "PGF",
               "title": "BlackOreo wants to become the Steward~",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 663,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "Default",
               "title": "Custom wasm proposal",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 572,
               "status": 0,
               "author": "tnam1qqlp6rdaxcwyp8m4pf8tsdywtruzwlw5tq639jnk",
               "type": "PGF",
               "title": "LFG S-E finished",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 518,
               "status": 0,
               "author": "tnam1qphfyjj2yht4hcaz0jle9km8zdy8z6v72qyw9eha",
               "type": "PGF",
               "title": "One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 80,
               "ep_end": 82,
               "result": 1
           },
           {
               "prop_id": 665,
               "status": 0,
               "author": "tnam1qq7k93ky5zr2e20hxyz53v46z7m3ugdtj5ly9t7f",
               "type": "PGF",
               "title": "PGF Funding for Namada Protocol",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 496,
               "status": 0,
               "author": "tnam1qrtfk9xkzk788mnujkkmn42tetc5yzg0rstgdq00",
               "type": "PGF",
               "title": "Breaking News: Successful Hard Fork, Prepare for the Moon Landing!",
               "ep_start": 72,
               "ep_end": 76,
               "result": 1
           },
           {
               "prop_id": 479,
               "status": 0,
               "author": "tnam1qy5rack0dgu0rt24lejq5t0aefynl5chpv5fzh7h",
               "type": "Default",
               "title": "Namada Blockchain: Empowering Privacy",
               "ep_start": 64,
               "ep_end": 68,
               "result": 0
           },
           {
               "prop_id": 585,
               "status": 0,
               "author": "tnam1qp74ss8w69cs9qfluclye55vl6wsr3xszs3tq5r5",
               "type": "PGF",
               "title": "omnilord for Steward 2024",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 588,
               "status": 0,
               "author": "tnam1qqd3z5qeg0pu0s5h24szxq4pe4dgd3naxsztstjw",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 628,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "PGF",
               "title": "PGF funding",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 633,
               "status": 0,
               "author": "tnam1qprkmy2qrerhpq5w5jffganmqnzzpdnnjcgjtz38",
               "type": "Default",
               "title": "Test",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 612,
               "status": 0,
               "author": "tnam1qrl0q8py6ducdv62mmh9mr8fwc44awjqxsc50nun",
               "type": "PGF",
               "title": "pacovit steward",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 622,
               "status": 0,
               "author": "tnam1qq6k4ghgy9luhaueaqjqzmscy67erkpgzu49fv4c",
               "type": "PGF",
               "title": "edatsushi for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 662,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "Default",
               "title": "Custom wasm proposal",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 497,
               "status": 0,
               "author": "tnam1qruzh0cdkgujaa5ql2va5xy8hnl4kslpuccfln5s",
               "type": "Default",
               "title": "Shielded rewards: testnet ATOM (1%), NAAN (1%)",
               "ep_start": 72,
               "ep_end": 76,
               "result": 1
           },
           {
               "prop_id": 617,
               "status": 0,
               "author": "tnam1qphp5lpdxjfmh8cmp2s5gpsz88eqlasq8crgzmqf",
               "type": "PGF",
               "title": "Steward offell",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 480,
               "status": 0,
               "author": "tnam1qr8g2traxpyttzuy2ufqxlw7lc3wazawku2g5etu",
               "type": "PGF",
               "title": "crazydimka PgfSteward",
               "ep_start": 64,
               "ep_end": 66,
               "result": 0
           },
           {
               "prop_id": 638,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "PGF",
               "title": "PGF funding",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 636,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "PGF",
               "title": "PGF funding",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 616,
               "status": 0,
               "author": "tnam1qpfa52xxj644lqgafk4c6rn89wnt9pkwd5r2zww4",
               "type": "PGF",
               "title": "Vote me for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 637,
               "status": 0,
               "author": "tnam1qpj6tq4gwnurdjtfvmu73zm44g60k8fyzq503lm2",
               "type": "PGF",
               "title": "PGF funding",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 500,
               "status": 0,
               "author": "tnam1qpyhhzydm3ptfe2jwtpnvmwzwhd34fc4luy86aju",
               "type": "PGF",
               "title": "Steward Proposal",
               "ep_start": 74,
               "ep_end": 76,
               "result": 1
           },
           {
               "prop_id": 640,
               "status": 0,
               "author": "tnam1qq9hsnwxanqyevl3sjyd4qadr0dfhnuha5d7ztqm",
               "type": "PGF",
               "title": "Exciting Update: Transitioning to Mainnet after Successful Hard Fork",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 498,
               "status": 0,
               "author": "tnam1qzjeyn2zs9u0tykrlrzmtpgx7xgnmfvpgcxhr6ze",
               "type": "PGF",
               "title": "Become steward ",
               "ep_start": 74,
               "ep_end": 78,
               "result": 1
           },
           {
               "prop_id": 499,
               "status": 0,
               "author": "tnam1qzjeyn2zs9u0tykrlrzmtpgx7xgnmfvpgcxhr6ze",
               "type": "PGF",
               "title": "Become steward ",
               "ep_start": 74,
               "ep_end": 78,
               "result": 1
           },
           {
               "prop_id": 666,
               "status": 0,
               "author": "tnam1qrnk6tymtq8p2enttnewcg9efph7pk6atvaw8p6r",
               "type": "Default",
               "title": "Devil's proposal😈",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 639,
               "status": 0,
               "author": "tnam1qrnj4csplxg2h7asj4r2l5julk76mjg27spenyvu",
               "type": "PGF",
               "title": "Steward Sined222",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 503,
               "status": 0,
               "author": "tnam1qqh4gvfczu3jczk7qqv6c6euwvrla3lqdyjumqu9",
               "type": "PGF",
               "title": "a16z Steward",
               "ep_start": 74,
               "ep_end": 76,
               "result": 0
           },
           {
               "prop_id": 687,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam3",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 667,
               "status": 0,
               "author": "tnam1q8rwz9lpj0tuw2n246splfan0pqflusj9c29q2q9",
               "type": "PGF",
               "title": "Add Staking-power as Steward",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 688,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam4",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 689,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam5",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 501,
               "status": 0,
               "author": "tnam1qztk959j0t9jnfkwypj8vy7n70pz958peq8skjux",
               "type": "PGF",
               "title": "I will be glad to receive your help!",
               "ep_start": 74,
               "ep_end": 76,
               "result": 0
           },
           {
               "prop_id": 502,
               "status": 0,
               "author": "tnam1qztk959j0t9jnfkwypj8vy7n70pz958peq8skjux",
               "type": "PGF",
               "title": "I will be glad to receive your help!",
               "ep_start": 74,
               "ep_end": 76,
               "result": 0
           },
           {
               "prop_id": 685,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam1",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 686,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam2",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 682,
               "status": 0,
               "author": "tnam1qq9txzpwzw4kzvgas2ksuhgsx5wnqhce4cuvvuez",
               "type": "Default",
               "title": "test proposal",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 684,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam0",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 683,
               "status": 0,
               "author": "tnam1qzzxlhss746l23aas7853sqzmy5haaeznc2sw97z",
               "type": "PGF",
               "title": "Will Namada give roids for create proposal?",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 690,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam6",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 481,
               "status": 0,
               "author": "tnam1qrtfk9xkzk788mnujkkmn42tetc5yzg0rstgdq00",
               "type": "PGF",
               "title": "Expansion of Community Outreach Program",
               "ep_start": 66,
               "ep_end": 70,
               "result": 0
           },
           {
               "prop_id": 505,
               "status": 0,
               "author": "tnam1qp74ss8w69cs9qfluclye55vl6wsr3xszs3tq5r5",
               "type": "PGF",
               "title": "omnilord for Steward 2024",
               "ep_start": 74,
               "ep_end": 76,
               "result": 0
           },
           {
               "prop_id": 642,
               "status": 0,
               "author": "tnam1qz2r2sapa3jwzuwssutt9kzgkuwhv3zlugluaunk",
               "type": "PGF",
               "title": "Elect silent as steward",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 506,
               "status": 0,
               "author": "tnam1qpvz9gppxe9jzjzhfs90kmtea896s5sd6qag6ez4",
               "type": "PGF",
               "title": "Monleru for Steward",
               "ep_start": 74,
               "ep_end": 76,
               "result": 1
           },
           {
               "prop_id": 586,
               "status": 0,
               "author": "tnam1qxyt0vrk50r0pc69ama6ayqvrgha80xrtqjvm22j",
               "type": "PGF",
               "title": "L0vd PGF Funding proposal. With L0ve",
               "ep_start": 82,
               "ep_end": 84,
               "result": 1
           },
           {
               "prop_id": 504,
               "status": 0,
               "author": "tnam1qpy4wmvd0g3jkpx36xjgd5j6tuqej6k90cx0d90s",
               "type": "PGF",
               "title": "oracle for Steward 2024",
               "ep_start": 74,
               "ep_end": 76,
               "result": 0
           },
           {
               "prop_id": 691,
               "status": 0,
               "author": "tnam1q8hu2fww5t6xqffux6uydq9v7m2jl0wsavpu7vv8",
               "type": "Default",
               "title": "let's spam7",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 643,
               "status": 0,
               "author": "tnam1qz2r2sapa3jwzuwssutt9kzgkuwhv3zlugluaunk",
               "type": "PGF",
               "title": "Elect silent as steward",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 576,
               "status": 0,
               "author": "tnam1qruqt7q7nh9c9ser09yjrhwnuqt5fz2rkc068k35",
               "type": "PGF",
               "title": "Implementation of a Multi-Chain Asset Management System on Namada Testnet",
               "ep_start": 80,
               "ep_end": 84,
               "result": 1
           },
           {
               "prop_id": 676,
               "status": 0,
               "author": "tnam1qrxyn8j5lsw0l6rzy9stjn859mwfqgacmut44qmh",
               "type": "PGF",
               "title": "BlackBlocks for Steward 2024",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 597,
               "status": 0,
               "author": "tnam1qrwvdxmzjq9mva3jkvgcmslvkvm28sxr75ygvanj",
               "type": "Default",
               "title": "I want to be a pgf stewart.",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 599,
               "status": 0,
               "author": "tnam1qp74ss8w69cs9qfluclye55vl6wsr3xszs3tq5r5",
               "type": "PGF",
               "title": "NamadaLabs@heliax Vote Giong to V2",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 488,
               "status": 0,
               "author": "tnam1qx4ay0xkfjs8z2t3cea9pterrustygsxhvd9pyfk",
               "type": "PGF",
               "title": "",
               "ep_start": 68,
               "ep_end": 72,
               "result": 1
           },
           {
               "prop_id": 507,
               "status": 0,
               "author": "tnam1qpuyxtukussg23vna7nkquty4gvanyq4duu32w9u",
               "type": "PGF",
               "title": "My First Proposal",
               "ep_start": 76,
               "ep_end": 78,
               "result": 0
           },
           {
               "prop_id": 579,
               "status": 0,
               "author": "tnam1qrszyy66uk22mfe0vlyttcr5p4y8zmugfcknf6dc",
               "type": "PGF",
               "title": "Help me become a steward :)",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 645,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "PGF",
               "title": "HELP FamNode for PGF Please",
               "ep_start": 88,
               "ep_end": 90,
               "result": 1
           },
           {
               "prop_id": 510,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "Default",
               "title": "Launch the Ethereum bridge frens",
               "ep_start": 76,
               "ep_end": 78,
               "result": 0
           },
           {
               "prop_id": 580,
               "status": 0,
               "author": "tnam1qzwjnu7u5vx689cey3x0u7l94henwtmpksak20l8",
               "type": "Default",
               "title": "Continue block signing",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 592,
               "status": 0,
               "author": "tnam1qp3xz9j3xs0cmrj3ehfgu2g0zcu27haw3crmdyez",
               "type": "PGF",
               "title": "systemus for Steward 2024",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 509,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "Default",
               "title": "Activate Shielded Rewards for NAAN with 5% reward rate",
               "ep_start": 76,
               "ep_end": 80,
               "result": 0
           },
           {
               "prop_id": 508,
               "status": 0,
               "author": "tnam1qzlzf57y3j95zmml0ljfmkcy5843mm8seqst82mr",
               "type": "PGF",
               "title": "Be Generous and the Universe will reward you FOREVER!",
               "ep_start": 80,
               "ep_end": 82,
               "result": 1
           },
           {
               "prop_id": 593,
               "status": 0,
               "author": "tnam1qxyt0vrk50r0pc69ama6ayqvrgha80xrtqjvm22j",
               "type": "PGF",
               "title": "L0vd PGF Funding proposal. With L0ve",
               "ep_start": 84,
               "ep_end": 86,
               "result": 1
           },
           {
               "prop_id": 587,
               "status": 0,
               "author": "tnam1qzdfys6q5nngrcvlw9kf7ykk90ds62ap3yuhcusx",
               "type": "Default",
               "title": "Validatorade test",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 644,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "PGF",
               "title": "Did You Love NAMADA?",
               "ep_start": 88,
               "ep_end": 90,
               "result": 1
           },
           {
               "prop_id": 581,
               "status": 0,
               "author": "tnam1qp6fw8q274w8mpttl52fgthz20feue0jg5xmpprh",
               "type": "Default",
               "title": "Funding (just a bit) a real Rooki",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 511,
               "status": 0,
               "author": "tnam1qqcdw6jdf8lute4rkxq3lgjmfkh9ayhcuvspxh4c",
               "type": "PGF",
               "title": "Prop-Steward-01",
               "ep_start": 80,
               "ep_end": 84,
               "result": 1
           },
           {
               "prop_id": 513,
               "status": 0,
               "author": "tnam1qzj35ek9rzvytg5m98yw4qf76n2ann0euurqlkk7",
               "type": "PGF",
               "title": "Steward",
               "ep_start": 78,
               "ep_end": 80,
               "result": 0
           },
           {
               "prop_id": 605,
               "status": 0,
               "author": "tnam1qq6n6arysqj2t5etpdf8r8psz4v6n0glav0ywjcg",
               "type": "PGF",
               "title": "Test",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 594,
               "status": 0,
               "author": "tnam1qrwzxlamrtrlzptj9d7ernhu9g8q5l5ve58udaty",
               "type": "PGF",
               "title": "NamadaLabs@heliax Vote Giong to V2",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 595,
               "status": 0,
               "author": "tnam1qr6jpwk46utlsay84krs79lhw93yzjzncs0qv0me",
               "type": "PGF",
               "title": "NamadaLabs@heliax Vote Giong to V2",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 646,
               "status": 0,
               "author": "tnam1qq7ga25gm4k4dax9w34l8tmune9crn37ys4md867",
               "type": "PGF",
               "title": "DaniilTrender for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 693,
               "status": 0,
               "author": "tnam1qp67vvmfeylac9zhnagdjs8jlpdlpvq3qc2vwj9h",
               "type": "Default",
               "title": "Vote this to be part of the S.H.I.E.L.D.E.D.",
               "ep_start": 94,
               "ep_end": 96,
               "result": 0
           },
           {
               "prop_id": 692,
               "status": 0,
               "author": "tnam1q8p2n5ctwz8x9k7392pxe43vrjrrgj7dwc63harg",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 92,
               "ep_end": 94,
               "result": 1
           },
           {
               "prop_id": 596,
               "status": 0,
               "author": "tnam1qpy4wmvd0g3jkpx36xjgd5j6tuqej6k90cx0d90s",
               "type": "PGF",
               "title": "NamadaLabs@heliax Vote Giong to V2",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 512,
               "status": 0,
               "author": "tnam1qrnj4csplxg2h7asj4r2l5julk76mjg27spenyvu",
               "type": "PGF",
               "title": "Steward Sined222",
               "ep_start": 78,
               "ep_end": 80,
               "result": 0
           },
           {
               "prop_id": 600,
               "status": 0,
               "author": "tnam1qrj8ezv0s5neht698q3uc8hher2l4e2plqwzeavu",
               "type": "PGF",
               "title": "NamadaLabs@heliax Vote Giong to V2",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 582,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "Default",
               "title": "Celebrating The End of Namada Shield Expedition",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 694,
               "status": 0,
               "author": "tnam1qxdlvt04892jx2m5y3dsqagrlh5grreuqgfmtftm",
               "type": "PGF",
               "title": "Moonode for Steward 2024",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 695,
               "status": 0,
               "author": "tnam1qp67vvmfeylac9zhnagdjs8jlpdlpvq3qc2vwj9h",
               "type": "PGF",
               "title": "Manueldb Pfg",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 514,
               "status": 0,
               "author": "tnam1qrqwvua4qeexy6luqdajerx6tq7ddhwnaq2tchh5",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 78,
               "ep_end": 80,
               "result": 0
           },
           {
               "prop_id": 668,
               "status": 0,
               "author": "tnam1qq299t9e65dzs68hy9ylu37jeal02my6cu2ruawu",
               "type": "PGF",
               "title": "xyz",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 669,
               "status": 0,
               "author": "tnam1qq299t9e65dzs68hy9ylu37jeal02my6cu2ruawu",
               "type": "Default",
               "title": "Cancel .",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 647,
               "status": 0,
               "author": "tnam1qr495c9zr52lfc8vedu2lwutffhk6a8p5qkvvrq9",
               "type": "PGF",
               "title": "Fible1 for Dear Leader",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 696,
               "status": 0,
               "author": "tnam1q92q5epmfp8m33zkftu9rzqsn05wlwh3cuhxzggw",
               "type": "PGF",
               "title": "Add Mohismstake to Steward 2024",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 670,
               "status": 0,
               "author": "tnam1qq299t9e65dzs68hy9ylu37jeal02my6cu2ruawu",
               "type": "PGF",
               "title": "PGF Proposal with IBC Integration",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 671,
               "status": 0,
               "author": "tnam1qq299t9e65dzs68hy9ylu37jeal02my6cu2ruawu",
               "type": "Default",
               "title": "Integration Proposal",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 610,
               "status": 0,
               "author": "tnam1qpr477sufxt3sz800hsgr9xyf3dvc4fjguejd27c",
               "type": "PGF",
               "title": "Shielded-Expedition testnet ends in epoch 91 and mainnet launch soon",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 515,
               "status": 0,
               "author": "tnam1qqk32wfjxnw5tga2r2vr6f4dwu7qaw847stzazpv",
               "type": "PGF",
               "title": "Last chance",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 635,
               "status": 0,
               "author": "tnam1qy5cc06znmm3jqnayyk4ecjmzwphv6anuqtcqcm5",
               "type": "PGF",
               "title": "Mainet will be the next big thing on NAMADA",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 697,
               "status": 0,
               "author": "tnam1qr80dar99mud69l5yavyzgkppchlcuny5vrn8mj2",
               "type": "Default",
               "title": "New Chain Proposal",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 516,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "Default",
               "title": "Celebrating The End of Namada Shield Expedition",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 482,
               "status": 0,
               "author": "tnam1q860ncdzdz32aad3lv8rrku37dq9p3gad56x3k2d",
               "type": "PGF",
               "title": "rch for Steward 2024",
               "ep_start": 66,
               "ep_end": 68,
               "result": 0
           },
           {
               "prop_id": 478,
               "status": 0,
               "author": "tnam1q84tqxcm0l792cvtx8ufe6erx00fwwjtggv925l4",
               "type": "PGF",
               "title": "P2P for Steward 2024",
               "ep_start": 64,
               "ep_end": 66,
               "result": 0
           },
           {
               "prop_id": 517,
               "status": 0,
               "author": "tnam1qrs72rgdq90nmf0a3wmpwgv20jcvlkzxfy8dqfnp",
               "type": "Default",
               "title": "Celebrating The End of Namada Shield Expedition",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 634,
               "status": 0,
               "author": "tnam1qpn88d75gunlef4v53ul957v3w0ktg5t4vwqcuzp",
               "type": "PGF",
               "title": "terzomillenio for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 1
           },
           {
               "prop_id": 648,
               "status": 0,
               "author": "tnam1qpmfc6qw72438tw0gh858jm4qua4e8kk4q273r5m",
               "type": "PGF",
               "title": "PGF Steward will be deployed on mainnet soon",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 698,
               "status": 0,
               "author": "tnam1q8f33kk5mmwp94dx5al8dc39f6sj2p35vq7wnzce",
               "type": "PGF",
               "title": "Morecon for PGF Steward 2024",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 699,
               "status": 0,
               "author": "tnam1qp67vvmfeylac9zhnagdjs8jlpdlpvq3qc2vwj9h",
               "type": "PGF",
               "title": "manueldb",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 519,
               "status": 0,
               "author": "tnam1qpphyvxjnxp0xg8n7y7x2kms3qh73k9y3uaxffaw",
               "type": "PGF",
               "title": "Proposal by cimbrin",
               "ep_start": 80,
               "ep_end": 82,
               "result": 1
           },
           {
               "prop_id": 520,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 641,
               "status": 0,
               "author": "tnam1qpphyvxjnxp0xg8n7y7x2kms3qh73k9y3uaxffaw",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 521,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 522,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 523,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 674,
               "status": 0,
               "author": "tnam1qrvvecp0fuj89zn86037s4vh3t03p4d3evxkrwka",
               "type": "PGF",
               "title": "Funding Mellifera",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 524,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 525,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 673,
               "status": 0,
               "author": "tnam1qptpw59jf40nwatcpgpu02wkcpwh5ajapues8qly",
               "type": "Default",
               "title": "End shielded expedition!",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 535,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 530,
               "status": 0,
               "author": "tnam1qrf5sp50lxpj8u8nc2x6h9s84030ye4pvqtyqrp3",
               "type": "PGF",
               "title": "Test Proposal",
               "ep_start": 80,
               "ep_end": 82,
               "result": 1
           },
           {
               "prop_id": 538,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 534,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 528,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 527,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 540,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 529,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 537,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 539,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 536,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 532,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 533,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 531,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 649,
               "status": 0,
               "author": "tnam1qq6mag86rga870yug8c84nh68nmxhcx88qghtun3",
               "type": "PGF",
               "title": "Airdrop for best testers",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 486,
               "status": 0,
               "author": "tnam1qzlh47mcne4d5h205ucyf3t5y4hzrekg6czvq6u3",
               "type": "PGF",
               "title": "Implementation of Community Governance Mechanism",
               "ep_start": 70,
               "ep_end": 74,
               "result": 1
           },
           {
               "prop_id": 550,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 543,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 547,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 551,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 544,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 546,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 548,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 542,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 549,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 552,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 555,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 489,
               "status": 0,
               "author": "tnam1q84p28wdy68kmgm3tvavvrtwzgujnvw24g8jm047",
               "type": "PGF",
               "title": "Stewie for Steward 2024 (Test Proposal)",
               "ep_start": 70,
               "ep_end": 72,
               "result": 1
           },
           {
               "prop_id": 556,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 554,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 577,
               "status": 0,
               "author": "tnam1qz2557sqgfw4h5f9y4ezmzsp2m4048600vgvqp8s",
               "type": "PGF",
               "title": "Haunak for Steward 2024",
               "ep_start": 80,
               "ep_end": 84,
               "result": 1
           },
           {
               "prop_id": 557,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 701,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Add EmberStake as PGF Steward",
               "ep_start": 92,
               "ep_end": 96,
               "result": 0
           },
           {
               "prop_id": 553,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 558,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 650,
               "status": 0,
               "author": "tnam1qyg76jtxvlmv98jz54v03g48j3zve850eq84j4f2",
               "type": "PGF",
               "title": "Keplr Test PGF Proposal",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 484,
               "status": 0,
               "author": "tnam1qrkc8ls3qf9qvu0xa0z3asla86c72ndkqv3h3p9h",
               "type": "PGF",
               "title": "Celebrating the Epic Saga of the Hard Fork: From Testnet to Mainnet and Beyond!",
               "ep_start": 68,
               "ep_end": 72,
               "result": 1
           },
           {
               "prop_id": 561,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 562,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 563,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 571,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 564,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 560,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 565,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 569,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 570,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 566,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 567,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 568,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 490,
               "status": 0,
               "author": "tnam1qrzhc7yv9t9a3q8a5tf9f7v9szzv2gm6q58cz602",
               "type": "Default",
               "title": "One Small Step for Namada.",
               "ep_start": 70,
               "ep_end": 74,
               "result": 0
           },
           {
               "prop_id": 491,
               "status": 0,
               "author": "tnam1qrzhc7yv9t9a3q8a5tf9f7v9szzv2gm6q58cz602",
               "type": "Default",
               "title": "One Small Step for Namada.",
               "ep_start": 70,
               "ep_end": 74,
               "result": 0
           },
           {
               "prop_id": 492,
               "status": 0,
               "author": "tnam1qq6w35st93kn2zg92wwpuueycv2hwqcmyy5e0frp",
               "type": "Default",
               "title": "Congrats successful hard fork. We are going to end of Shielded Expedition testnet and launch mainnet.",
               "ep_start": 72,
               "ep_end": 74,
               "result": 0
           },
           {
               "prop_id": 526,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 611,
               "status": 0,
               "author": "tnam1qqkrtd3utkm8h3z3qk3wp59l93n89gl6mgf8pkgh",
               "type": "PGF",
               "title": "Vu nguyen for Steward 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 606,
               "status": 0,
               "author": "tnam1qrszyy66uk22mfe0vlyttcr5p4y8zmugfcknf6dc",
               "type": "PGF",
               "title": "Organization of high-quality ROIDs mining",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 541,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 559,
               "status": 0,
               "author": "tnam1qrlwpwhwm9s8fktnrlh0mspnwa5j9mklustt8a5h",
               "type": "Default",
               "title": "It's my party and I create proposals if I want to",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 702,
               "status": 0,
               "author": "tnam1q9k0jkssxmwdd0g3vpulvl7yp3rv7rnnuyezutcp",
               "type": "PGF",
               "title": "Fund EmberStake IBC Contributions For 3000",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 703,
               "status": 0,
               "author": "tnam1qzj6cu3697p247klksnf4vjd00dgcju64sfjjswu",
               "type": "Default",
               "title": "My Proposal",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 589,
               "status": 0,
               "author": "tnam1qrj0luufnu8gm5nxcs53j93cvrk3mnp8tyrrcgqz",
               "type": "PGF",
               "title": "Congratulation go to mainnet.",
               "ep_start": 82,
               "ep_end": 86,
               "result": 1
           },
           {
               "prop_id": 598,
               "status": 0,
               "author": "tnam1qz2557sqgfw4h5f9y4ezmzsp2m4048600vgvqp8s",
               "type": "PGF",
               "title": "Enhancing Namada Testnet Through Decentralized Governance",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 545,
               "status": 0,
               "author": "tnam1qqayrt4aakl7qm5nzmgj3907sjlyyj4zdgsty8zs",
               "type": "Default",
               "title": "Prome - One Small Step for Namada, One Giant Leap for Memekind",
               "ep_start": 80,
               "ep_end": 82,
               "result": 0
           },
           {
               "prop_id": 672,
               "status": 0,
               "author": "tnam1qrvvecp0fuj89zn86037s4vh3t03p4d3evxkrwka",
               "type": "Default",
               "title": "Reliable and scalable public RPC - powered by Lava",
               "ep_start": 90,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 704,
               "status": 0,
               "author": "tnam1qzamxsgw00e6s5ajgdltzyh0dx6cdnfzuupmmnu7",
               "type": "Default",
               "title": "King Lear",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 487,
               "status": 0,
               "author": "tnam1qruqt7q7nh9c9ser09yjrhwnuqt5fz2rkc068k35",
               "type": "PGF",
               "title": "Implementation of a Multi-Chain Asset Management System on Namada Testnet",
               "ep_start": 68,
               "ep_end": 72,
               "result": 1
           },
           {
               "prop_id": 651,
               "status": 0,
               "author": "tnam1q9kdhreynpfg5c2wvnwvherfl3jmuz6rlq09yqcp",
               "type": "Default",
               "title": "NG Proposal Test",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 590,
               "status": 0,
               "author": "tnam1qra9t7vuy5llnrz78jw0pjq7276z3weleqv0grlp",
               "type": "PGF",
               "title": "F5 Nodes PGF Steward Proposal",
               "ep_start": 82,
               "ep_end": 84,
               "result": 0
           },
           {
               "prop_id": 652,
               "status": 0,
               "author": "tnam1q9kdhreynpfg5c2wvnwvherfl3jmuz6rlq09yqcp",
               "type": "PGF",
               "title": "Add NG as Steward",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 578,
               "status": 0,
               "author": "tnam1qz2557sqgfw4h5f9y4ezmzsp2m4048600vgvqp8s",
               "type": "PGF",
               "title": "Haunak for Steward 2024",
               "ep_start": 82,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 608,
               "status": 0,
               "author": "tnam1qyn6wzxyy8hkjmwsh9mkuv9ggmzpukyv6vzyu7qr",
               "type": "PGF",
               "title": "Rigorous: The steward you deserve, but did not need",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 607,
               "status": 0,
               "author": "tnam1qyn6wzxyy8hkjmwsh9mkuv9ggmzpukyv6vzyu7qr",
               "type": "PGF",
               "title": "Rigorous: The steward you deserve, but did not need",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 601,
               "status": 0,
               "author": "tnam1qr8sc2hscdqydq6tjyuwthq2vk7daz3flgs0tvll",
               "type": "PGF",
               "title": "Accelerating Namada Testnet Performance with Optimized Node Infrastructure",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 602,
               "status": 0,
               "author": "tnam1qp4h4p92kfxaqmmu0n0pyef7w3mzf7swp5lz54a4",
               "type": "PGF",
               "title": "Namada Testnet: Unleashing the Power of Quantum-Resistant Algorithms",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 706,
               "status": 0,
               "author": "tnam1qqf9uc344mfuqe8nyhnuzz8ge7h9pgq6tu83pr5c",
               "type": "PGF",
               "title": "NAMADA SE ENDS",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 707,
               "status": 0,
               "author": "tnam1qx0vgvdl8k5mhtsqr8w6xwe06ynmsddy3ulc4x4w",
               "type": "PGF",
               "title": "Free Lambos for everyone",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 609,
               "status": 0,
               "author": "tnam1qzq9mglfz4p2pah9wwdux8wetqyxjdgvpvxdw27t",
               "type": "PGF",
               "title": "Kanir for Steward 2024",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 708,
               "status": 0,
               "author": "tnam1qqfed8nhzv07rxuvtc8r80cjzjfdr42pzvzmp5qq",
               "type": "Default",
               "title": "My Canary Bird",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 653,
               "status": 0,
               "author": "tnam1qzhl5chhztlgjf8tr0wjlg2304suqx7s8spvxnhl",
               "type": "PGF",
               "title": "pro-nodes75 for Steward",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 603,
               "status": 0,
               "author": "tnam1qq8h3swfha0fgqjkyh02xcpn5w6duhhm2g9mhycs",
               "type": "PGF",
               "title": "Stewie for Steward 2024",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 604,
               "status": 0,
               "author": "tnam1qzpgcq8ymkxvq9j4jn6vcm64uf7znsywk55zwfvz",
               "type": "PGF",
               "title": "cryptobtcbuyer as PGF Steward to the moon!",
               "ep_start": 84,
               "ep_end": 86,
               "result": 0
           },
           {
               "prop_id": 654,
               "status": 0,
               "author": "tnam1qq9l6feczdscfwdxasddccvr46auz0acfc0r5r96",
               "type": "Default",
               "title": "title proposal",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 655,
               "status": 0,
               "author": "tnam1qq9l6feczdscfwdxasddccvr46auz0acfc0r5r96",
               "type": "PGF",
               "title": "Shut down of SE",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 656,
               "status": 0,
               "author": "tnam1qqhr6qparl0s7vstwde9n34kxh4apwv42vkp865d",
               "type": "PGF",
               "title": "This is my first suggestion.",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 705,
               "status": 0,
               "author": "tnam1qr495c9zr52lfc8vedu2lwutffhk6a8p5qkvvrq9",
               "type": "PGF",
               "title": "Yogi Bear for Dear Leader",
               "ep_start": 92,
               "ep_end": 94,
               "result": 0
           },
           {
               "prop_id": 657,
               "status": 0,
               "author": "tnam1qx0vgvdl8k5mhtsqr8w6xwe06ynmsddy3ulc4x4w",
               "type": "Default",
               "title": "A limited airdrop for early users ",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 658,
               "status": 0,
               "author": "tnam1qzqj0gdghxktmsnq8ksw798w7j6hcgkzlsxplnrg",
               "type": "PGF",
               "title": "Add steward proposal",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 613,
               "status": 0,
               "author": "tnam1qpr477sufxt3sz800hsgr9xyf3dvc4fjguejd27c",
               "type": "PGF",
               "title": "Become a PGF Funding for the ultimate SE epoch 91",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 659,
               "status": 0,
               "author": "tnam1qrxsgyezw36yl4cjyt2nxzhld5srg62qas6yac0p",
               "type": "PGF",
               "title": "my first  pgf",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 614,
               "status": 0,
               "author": "tnam1qzqgs9jdn76vtphjye6ntcgjv8rvm5c5wvsrq4zy",
               "type": "Default",
               "title": "baconvalley steward satoshi 2024",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 660,
               "status": 0,
               "author": "tnam1qrxsgyezw36yl4cjyt2nxzhld5srg62qas6yac0p",
               "type": "Default",
               "title": "aaaaaa",
               "ep_start": 88,
               "ep_end": 90,
               "result": 0
           },
           {
               "prop_id": 615,
               "status": 0,
               "author": "tnam1qpmqqpxavzlut0f4jr736pr5zmt8z7hxwcdyd33v",
               "type": "Default",
               "title": "Shielded Expedition winners slot extension",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           },
           {
               "prop_id": 661,
               "status": 0,
               "author": "tnam1qp8ckg9y8zt8r3h7vcv28yrfwlferkcuvc2fp6kj",
               "type": "PGF",
               "title": "Curtains close: For Namada, with Love",
               "ep_start": 88,
               "ep_end": 92,
               "result": 0
           },
           {
               "prop_id": 618,
               "status": 0,
               "author": "tnam1qzns3ta6j2mcgt6lpvljjjsrk8t2utnt7ydlu7l9",
               "type": "PGF",
               "title": "Vote nay",
               "ep_start": 86,
               "ep_end": 88,
               "result": 0
           }
       ]
   }
}`

async function fetchProposals(epoch, status) {
   // const res = await fetch("http://143.198.221.123:3000/users");

   // const data = await res.json();
   // if (status === "ongoing") {
   //   let result = JSON.stringify(data.propDigest.allProps
   //     .sort((a, b) => b.prop_id - a.prop_id)
   //     .filter(x => x.status === Number(status))
   //     .filter(x => x.ep_end > epoch && x.ep_start < epoch)
   //     .slice(0, 10).map(x => x.prop_id));
   //   console.log(result);
   //   return result;
   // }
   let result = JSON.stringify(JSON.parse(data).propDigest.allProps.sort((a, b) => b.prop_id - a.prop_id).filter(x => x.status === Number(status)).slice(0, 10).map(x => x.prop_id));
   console.log(result);
   return result;
}

module.exports = { wasmFetch, fetchProposals };
