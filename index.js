const { checkEligibility } = require('./checker');

async function main() {
    console.log('--- Base Airdrop Checker Initialized ---');
    const address = '0x0000000000000000000000000000000000000000';
    console.log(`Checking: ${address}`);
    const result = await checkEligibility(address);
    console.log(result ? 'Status: ELIGIBLE!' : 'Status: Not Eligible');
}

main();
