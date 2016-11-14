module.exports = {
  rpc: {
    host: "localhost",
    port: 8545
  },
  networks: {
    "live": { network_id: 1 },
    "morden": { network_id: 2 },
    "consensys": { network_id: 161 },
  },
  migrations_directory: "./migrations",
};
//truffle migrate --network live
