import os from "os";

// userInfo() - gives an object about the current user
console.log(os.userInfo());

// totalmem() - total memory available
console.log(os.totalmem());

// freemem() - total memory that is currently free
console.log(os.freemem());

// cpus() - gives an array of objects for every core of the cpu
console.log(os.cpus());
