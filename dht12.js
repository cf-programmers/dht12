 var i2c = require('i2c');

var address = 0x5c;
var wire = new i2c(address, {device: '/dev/i2c-2'}); // point to your i2c address

setInterval(getHumidityTemp,50);

function getHumidityTemp(){

        wire.readBytes(0x00, 5, function(err, res) {

                if(res[0]+res[1]+res[2]+res[3] != res[4]){   //checksum in 5th byte
                         printError(err);
                }else{
                        var Hum = res[0] + 0.01*res[1];
                        var T_celcius = res[2] + 0.01*res[3];
                        var T_farenheit = celc2far(T_celcius);
                        console.log(T_celcius.toFixed(2)+ '   '+T_farenheit+'   '+Hum.toFixed(2));
                }
        });
}

function printError(err){
        console.err(err);
}

function celc2far(tc){
        t_far = 1.8*tc+32;
        return t_far.toFixed(2);
 }
