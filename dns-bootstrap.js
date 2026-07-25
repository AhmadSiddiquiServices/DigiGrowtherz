const dns = require("dns");
dns.setServers(["1.1.1.1", "1.0.0.1"]);
console.log("DNS bootstrap active:", dns.getServers());