# genhttplogs

**Node.js script that generates HTTP access logs**

## Installation
```
git clone https://github.com/mihailj/genhttplogs.git
cd genhttplogs
npm install
```

## Usage
```
npm start [speed] -s
npm start [speed] -s >> access.log
```
[speed] = float; ex: 20, 0.5, etc...; lower is slower

## Output
```
107.221.23.250 - - [14/Jun/2016:18:11:18 +0000] "GET /withdrawal_microchip_movies.php HTTP/1.1" 200 6254 "-" "Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko"
2.33.153.37 - - [14/Jun/2016:18:11:33 +0000] "GET /24/365_hardware.html HTTP/1.1" 200 1374 "-" "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko"
133.16.196.204 - - [14/Jun/2016:18:11:33 +0000] "GET /ergonomic_metal_sausages_panel_ram.gif HTTP/1.1" 200 2836 "-" "Mozilla/5.0 (Windows; U; Windows NT 6.0) AppleWebKit/532.1.2 (KHTML, like Gecko) Chrome/36.0.899.0 Safari/532.1.2"
...
```
