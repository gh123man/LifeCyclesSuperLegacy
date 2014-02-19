var UIDtoSCKpool = {} //session id to socket id pool
var SCKtoUIDpool = {} //socket id to session id pool

var SCKtoPIDpool = {} //session id to socket id pool
var PIDtoSCKpool = {} //socket id to session id object pool


socket.on('test', function (data) {
    /*
        for (var i = 0; i < 200; i++) {
            setTimeout(function() {
                io.sockets.socket(socket.id).volatile.emit('update', 'test<br/>');
            }, i * 80);
            
        }
        */
        
        var sock = net.createConnection({path: "/tmp/test2"});
        console.log(data.test);
        sock.write(data.test, function() {

            sock.on('data', function(data) {
            
                console.log(data.toString());
                io.sockets.socket(socket.id).volatile.emit('update', data.toString());
                sock.destroy();
                
            }).on('connect', function() {
                //sock.write("GET / HTTP/1.0\r\n\r\n");
            }).on('end', function() {
                console.log('DONE');
            });
            
        });

    });
    

//handles in-comming request from the apache server, assume on same physical machine, so ip is the same.
function handler ( req, res ) {
    // Check for notices from PHP
    if(res.socket.remoteAddress == '127.0.0.1') { // <- local ip
        if(req.method == 'POST') {
            // The server is trying to send us an activity message

            var form = new formidable.IncomingForm();
            form.parse(req, function(err, fields, files) {
                
                res.writeHead(200, [[ "Content-Type", "text/plain"]
                        , ["Content-Length", 0]
                        ]);
                res.write('');
                res.end();
                
                if (fields.query == "notification") { //handle a notification from the sites main server
                } else if (fields.query == "comment") { //handle a new comment from the main server
                }
            });
        }
    }
};

for (var key in PIDtoSCKpool[fields.pID]) {
    io.sockets.socket(key).volatile.emit(fields.query, {status: true, pID: fields.pID, parent: fields.parent, body: fields.body});
}

socket.on('authenticate', function (data) {
        
        var http = require('http');
        
        var userData;

        var options = {
            host: '127.0.0.1',
            port: 80,
            path: "/node/sessionContextProvider.php?sid=" + data.sid
        };

        http.get(options, function(resp){
            resp.on('data', function(chunk){
                userData = JSON.parse(chunk);
                
                console.log(userData);
                
                
                if (typeof(UIDtoSCKpool[userData.userid]) == 'undefined') {
                    UIDtoSCKpool[userData.userid] = {};
                    UIDtoSCKpool[userData.userid][socket.id] = socket.id;
                } else {
                    UIDtoSCKpool[userData.userid][socket.id] = socket.id;
                }
        
                SCKtoUIDpool[socket.id] = userData.userid;
                
                console.log(UIDtoSCKpool);
                console.log(SCKtoUIDpool);
                
            });
            
        }).on("error", function(e){
            console.log("Got error: " + e.message);
            return;
        });

    });
    
    
    //disconnect event
    socket.on('disconnect', function () { //on disconnect remove user data form the routing table.
        /*
        if (!isEmpty(UIDtoSCKpool[SCKtoUIDpool[socket.id]])) {
            delete UIDtoSCKpool[SCKtoUIDpool[socket.id]][socket.id];
            
            if (isEmpty(UIDtoSCKpool[SCKtoUIDpool[socket.id]])) {
                delete UIDtoSCKpool[SCKtoUIDpool[socket.id]]
            }
        } else {
            delete UIDtoSCKpool[SCKtoUIDpool[socket.id]];
        }
        delete SCKtoUIDpool[socket.id];
        
        if (!isEmpty(PIDtoSCKpool[SCKtoPIDpool[socket.id]])) {
            delete PIDtoSCKpool[SCKtoPIDpool[socket.id]][socket.id];
            
            if (isEmpty(PIDtoSCKpool[SCKtoPIDpool[socket.id]])) {
                delete PIDtoSCKpool[SCKtoPIDpool[socket.id]]
            }
        } else {
            delete PIDtoSCKpool[SCKtoPIDpool[socket.id]];
        }
        delete SCKtoPIDpool[socket.id];
        
        console.log('DISCONNECTED');
        */
    });
