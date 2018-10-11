const Peer =  require('peerjs');
const uid = require('uid');
const $ = require('jquery');
const config = {host: 'java5-mmaoysvbxz.now.sh', port: 3000, secure:true, key:'peerjs'}


function getPeer(){
    let id = uid(10);
    $('#peer-id').append(id);
    return id;
}
const peer = Peer(getPeer(), config);
console.log('Peer', peer);