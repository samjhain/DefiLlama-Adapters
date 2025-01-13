const { staking } = require('../helper/staking');

const contracts = [
  '0x44a9257389660a296a08c7a0e79301427f1efa26',
  '0x0b803b06451222df3188edadc26a0c798e3435d9',
  '0xa5f343bb051ca6aa9a306a5c86f37559be647782',
  '0x69e093f4d130f770ffad1f3b289c857b11d7d52d',
  '0x2a1cd14ca01be649ef9b9d40affcfb56ae85e6a3',
  '0x3b1d064902d85f8d309b20758946f7feefe5e50c',
  '0x76abc8b2da505ffaecfc775c36541d0f4235963d',
  '0xd119d765a8915b07ff9c7a515677935521a447ca',
  '0x2bfb6fd2f38b57034328f2e2e1c47f8ceae79d43'
];

module.exports = {
  bsc: {
    tvl: () => ({}),
    staking: staking(
      contracts,
      "0x1d0Ac23F03870f768ca005c84cBb6FB82aa884fD"
    ),
  },
  methodology: "Galeon tokens can be utilized for staking within the protocol.",
};
