



/* 
* Link to ripl front-end
* https://replit.com/@dfimbres/waveportal-starter-project#src/App.jsx
*
*/




const main = async () => {
    // Contract
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
      value: hre.ethers.utils.parseEther('0.1'),
    });
    await waveContract.deployed();
    console.log('Contract addy:', waveContract.address);
  
    // Balance
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));
  
    // Wave
    const waveTxn = await waveContract.wave('This is wave #1');
    await waveTxn.wait();
  
    // Wave
    const waveTxn2 = await waveContract.wave('This is wave #2');
    await waveTxn2.wait();
  
    // Wave
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log('Contract balance:', hre.ethers.utils.formatEther(contractBalance));
  
    // all waves
    let allWaves = await waveContract.getAllWaves();
    // console.log(allWaves);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();