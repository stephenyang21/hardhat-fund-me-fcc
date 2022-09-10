const { run } = require("hardhat")
const { getArgumentForSignature } = require("typechain")

const verify = async (contractAddress, args) => {
    console.group("Verifying contract ...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!")
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
