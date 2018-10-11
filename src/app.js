const Peer =  require('peerjs');
const uid = require('uid');
const $ = require('jquery');
const config = {host: 'viitor-wertc.herokuapp.com', port: 443, secure:true, key:'peerjs'}


function getPeer(){
    let id = uid(10);
    $('#peer-id').append(id);
    return id;
}
const peer = Peer(getPeer(), config);
console.log('Peer', peer);