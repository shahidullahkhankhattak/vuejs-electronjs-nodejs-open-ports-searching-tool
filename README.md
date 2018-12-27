# An open ports searching tool created in vuejs, electronjs, nodejs

this tool combines the power of nodejs, electron and vuejs + axios to search for open ports and save headers & footer information of every open port thats found.

## features
#### brute force search e.g (192.168.1.1:0000) - (192.168.1.255:1000)
  this will give search for open ports of each ip and each port within 192.168.1.1 - 192.168.1.255 port 0000 to 65535
#### selective ip & port range
  you will have search for open ports within the specific range e.g
  * 192.168.1.1:0000 - 192.168.1.10:500
  * 192.168.1.50:0000 - 192.168.1.100:100
  
  this will search for open ports within that specific range, and will save header and footer information of each port thats found opened.
  
 #### bulk search
  this gives you the option of importing ip:port list from an excel file, csv file, or text file
  and will perform bruteforce on that speciffic list and will save header & footer information of each ip:port that's found opened & valid.

## requirements
* nodejs
* npm

## method for running
* clone the repo
* run cmd or terminal in that specific folder
* run npm install
* after npm installation is compelete. run npm start
* enjoy 
