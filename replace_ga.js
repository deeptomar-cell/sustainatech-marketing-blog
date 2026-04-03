const fs = require('fs');
const path = require('path');

const replacementID = 'G-MTQS8KQ0NP';

function walk(dir) {
    fs.readdirSync(dir).forEach(file => {
        let fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath);
        } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('G-MTQS8KQ0NP')) {
                let updated = content.replace(/G-MTQS8KQ0NP/g, replacementID);
                fs.writeFileSync(fullPath, updated);
                console.log('Successfully updated:', fullPath);
            }
        }
    });
}

walk(__dirname);
