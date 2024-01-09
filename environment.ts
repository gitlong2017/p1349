export const environment = {
    production: false,

    API_BASE_URL: 'http://172.11.111.1111:8000'
    API_BASE_URL: 'http://192.111.1.111:8080'
    API_BASE_URL: 'http://192.111.1.111:8000'

}

None of Above works, but 172.... get cors error, others got connection refused.

172 - when typing $ hostname -I ,   192 - my local computer ip

See below running ipconfig:

Computer: Windows 11 + WSL2

Wireless LAN adapter Wi-Fi:

   IPv4 Address. . . . . . . . . . . : 192.111.11.11
                  
Ethernet adapter vEthernet (WSL (Hyper-V firewall)):

   IPv4 Address. . . . . . . . . . . : 172.11.111.1


I actually only have wireless connection
  