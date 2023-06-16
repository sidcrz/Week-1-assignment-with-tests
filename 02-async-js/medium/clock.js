const { format } = require('date-fns');

function updateClock() {
    const now = new Date();
    

    const time24 = format(now, 'HH:mm:ss');
    
    
    const time12 = format(now, 'hh:mm:ss aa');
    
    console.log(`24-hour format: ${time24}`);
    console.log(`12-hour format: ${time12}`);
}


setInterval(updateClock, 1000);

