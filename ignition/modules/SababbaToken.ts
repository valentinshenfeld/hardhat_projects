import { buildModule } from"@nomicfoundation/hardhat-ignition/modules";

const SababbaTokenModule = buildModule("SababbaTokenModule", (m) => {

  const token = m.contract("SababbaToken", [`2000000000000000`]);


  return { token };
});

export default SababbaTokenModule;