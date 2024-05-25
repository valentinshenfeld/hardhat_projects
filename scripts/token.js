const { parseEther,formatEther } = require('ethers')
const hre = require('hardhat')
const ethers = hre.ethers
const TokenArtifact = require('../artifacts/contracts/Token.sol/Token.json')

async function currentBalance(address, msg = ''){
    const rawBalance = await ethers.provider.getBalance(address)
    console.log(msg, formatEther(rawBalance))
}
async function  main() {

    const [add1, add2] = await ethers.getSigners()
    const contarctAdd = '0x5fbdb2315678afecb367f032d93f642f64180aa3'

    const tokenContract = new ethers.Contract(
        contarctAdd,
        TokenArtifact.abi,
        add1
    )

    const tx = {
        to: contarctAdd,
        value: parseEther('1.0')
    }

    const sendTx = await add1.sendTransaction(tx)
    await sendTx.wait()
    // const tx = tokenContract.burn(10000)
    // console.log(tx)
    
    await currentBalance(add1.address, 'Account 2 balance: ')
    await currentBalance(contarctAdd, 'Contract balance: ')

    

    

}

main()
    .then(()=>process.exit(0))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });