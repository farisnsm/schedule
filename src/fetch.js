const https = require('https');

async function f() {
    let xdata = await https.get('https://climbcalendar.herokuapp.com/api', (resp) => {
        let data = '';

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            return(console.table(JSON.parse(chunk.toString())))
        });
    })
    return(xdata)
}

export default f