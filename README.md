# dht12

Temperature and humidity sensor based on library https://github.com/kelly/node-i2c . The library is part of beaglebone debian software images.


The program was used to add temperature/humidity data to existing system by plugging DHT12 sensor to beaglebone Green located inside the fridge through Grove i2c connection. The sensor response time  was set to 50 ms for catching the event of opening fridge door. For more dynamic systems the response time should be increased to avoid the sensor errors.    
