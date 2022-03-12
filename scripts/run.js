const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);

    let waveCount;
    waveCount = await waveContract.getTotalWaves();

    let waveTnx = await waveContract.wave();
    await waveTnx.wait();
    waveCount = await waveContract.getTotalWaves();

    waveTnx = await waveContract.connect(randomPerson).wave();
    await waveTnx.wait();

    waveCount = await waveContract.getTotalWaves();

    let add = await waveContract.getAddress();
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();