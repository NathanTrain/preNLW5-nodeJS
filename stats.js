const os = require('os');
const log = require("./logger.js")

function toMB(mem) {
    let mbMem =
        mem // * bites
        / 1024 // * kb
        / 1024 // * mb;
    return parseInt(mbMem); 
};  

setInterval(()=>{
    const { freemem, totalmem } = os; // ! desestruturação

    const total = toMB(totalmem());
    const mem = toMB(freemem());
    const percents = parseInt((mem / total) * 100);
    
    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    };
    
    console.clear();
    console.log(" ====== PC STATS ======");
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`);

}, 1000);