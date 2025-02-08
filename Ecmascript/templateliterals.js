function generateEmail(name, firm, bonus) {
    const welcomeEmail = `Hi ${name}! Welcome to the team! We’re thrilled to have you at  ${firm}. We know you’re going to be a valuable asset to our company and can’t wait to see what you accomplish. Here is you bonus ${bonus * 10} INR`;
    return welcomeEmail;
}

console.log(generateEmail("Vishnu", "HCLTech", 10));
console.log(generateEmail("Gokul", "CTS", 12));