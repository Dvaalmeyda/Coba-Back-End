
//Tentukan nilai host sendiri dengan membuat propoerti NODE_ENV
/*const server = new Server({
    host: ProcessingInstruction.env.NODE_ENV !== 'production'?'localhost':'dicoding.com',
});*/

//process object untuk mengetahui penggunaan CPU ketika proses berjalan
const cpuInformation = process.memoryUsage();
 
console.log(cpuInformation);
 
/* output
{
  rss: 14569472,
  heapTotal: 2654208,
  heapUsed: 1788896,
  external: 855681,
  arrayBuffers: 9898
}
*/