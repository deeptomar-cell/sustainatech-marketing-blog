const https = require('https');

const measurementID = 'G-MTQS8KQ0NP';
const repoURL = 'https://deeptomar-cell.github.io/sustainatech-marketing-blog/';

function sendPing() {
    const clientId = Math.floor(Math.random() * 1000000000) + '.' + Math.floor(Math.random() * 1000000000);
    const postNum = Math.floor(Math.random() * 16); // 0 corresponds to home page
    
    let path = postNum === 0 ? 'index.html' : 'posts/post-' + postNum + '.html';
    let title = postNum === 0 ? 'Home | SustainaTech' : 'Sustainable Tech Trend ' + postNum;
    
    const uri = encodeURIComponent(repoURL + path);
    const encodedTitle = encodeURIComponent(title);
    
    // Using string concatenation to prevent string interpolation errors
    const url = 'https://www.google-analytics.com/g/collect?v=2&tid=' + measurementID + '&cid=' + clientId + '&en=page_view&dl=' + uri + '&dt=' + encodedTitle + '&sid=' + Math.floor(Math.random() * 1000000000) + '&sct=1';
    
    https.get(url, (res) => {
        console.log("Simulated user viewing: " + path + " (Status: " + res.statusCode + ")");
    }).on('error', (e) => {
        console.error("Traffic Engine Error:", e.message);
    });
}

console.log("Starting SustainaTech Traffic Drone...");
console.log("Pumping realistic user visits into dashboard for " + measurementID);

// Fire 50 random visits spread out over realistic intervals
let totalDelay = 0;
for(let i=0; i<50; i++) {
    totalDelay += Math.random() * 3000 + 1000; // 1 to 4 second gaps
    setTimeout(sendPing, totalDelay);
}
