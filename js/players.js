function setPlayersStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}


const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayersStyle(player);
}

function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    console.log(player);
    player.innerHTML = `
    <h4 class="player-name">New player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ab earum maxime commodi cumque eveniet hic, ipsam provident similique, corrupti pariatur exercitationem sunt repudiandae dignissimos quod mollitia placeat quae! Quaerat!</p>
    `;
    setPlayersStyle(player);
    playerContainer.appendChild(player);
}

document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})