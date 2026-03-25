async function lagarta(){
    let lagarta = "()()()(00)";
    let lagarta_espichada = "( )( )( )(00)"
    let espaco = "   ";

    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    for(let i = 0; i < 30; i++){
        console.log(i % 2 == 0? lagarta = espaco + lagarta:
             lagarta_espichada = espaco + lagarta_espichada);
        await sleep (1000);
        console.clear();
        
    }
}