import fetch from 'node-fetch'

export default async function setup() {
    const archive = await fetch('https://github.com/rx-modules/PlayerDB/releases/download/v2.0.2/PlayerDB.v2.0.2.zip');
    
}