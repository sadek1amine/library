const { hash } = require("bcryptjs");

async function main() {
    const hashed = await hash("admin2026", 10);
    console.log(hashed);
}

main();