/**
 * Created by tommy_2 on 2014/8/21.
 */
var serverIp = null;
var serverPort = null;
var mts = {
    create : function(ip,port){
        serverIp = ip;
        serverPort = port;
    },

    getIp : function(){
        return serverIp;
    },

    getPort : function () {
        return serverPort;
    }
};


experts = module.exports = mts;