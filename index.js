const fs = require('fs');
const readline = require('readline');

const generateReadme = (headings, paragraphs) => {
    let readmeContent = '';
    for (let i = 1; i <= headings; i++) {
        readmeContent += `# Heading ${i}\n\n`;
        for (let j = 1; j <= paragraphs; j++) {
            readmeContent += `This is paragraph ${j} under heading ${i}.\n\n`;
        }
    }
    return readmeContent;
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of headings: ', (headings) => {
    rl.question('Enter the number of paragraphs per heading: ', (paragraphs) => {
        const readmeContent = generateReadme(parseInt(headings), parseInt(paragraphs));
        fs.writeFile('generated_README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README file has been generated successfully.');
            rl.close();
        });
    });
});
