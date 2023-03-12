//Latihan Process-Object

const initialMemoryUsage = process.memoryUsage().heapUsed; // isi dengan nilai heapused
const yourName = process.argv[2]; // isi dengan index ke-2 dari process.argv
const environment = process.env.NODE_ENV; // isi dengan nilai NODE_ENV dari process.env
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = process.memoryUsage().heapUsed; // isi dengan nilai heapUsed dari process.memoryUsage
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);