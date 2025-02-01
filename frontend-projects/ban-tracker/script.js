const tabs = document.getElementsByClassName('tab');
let activeTab = document.querySelector('.tab.active');

const playerBans = document.getElementById('player-list');

const banTab = document.getElementById('content-players');
// const dodgeList = document.getElementById('content-dodge');
const addPlayer = document.getElementById('content-add');

let currIndex = 0;

let bannedPlayers = [];

updateContent()
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function() {
        activeTab = document.querySelector('.tab.active');
        activeTab.classList.remove('active');
        this.classList.add('active');
        activeTab = this;
        updateContent();
    });
}

function updateContent() {
    switch (activeTab.innerHTML) {
        case 'Player bans':
            banTab.style.display = 'block';
            // dodgeList.style.display = 'none';
            addPlayer.style.display = 'none';
            updatePlayerBans();
            break;
        case 'Dodge list':
            // banTab.style.display = 'none';
            // dodgeList.style.display = 'block';
            // addPlayer.style.display = 'none';
            break;
        case 'Add a player':
            banTab.style.display = 'none';
            // dodgeList.style.display = 'none';
            addPlayer.style.display = 'block';
            break;

    }
}

const playerBanForm = document.getElementById('player-ban-form');

playerBanForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const playerName = playerBanForm.elements['player'].value;
    const character = playerBanForm.elements['character'].value;
    bannedPlayers.push({index: currIndex, player: playerName, character: character});
    currIndex += 1;
    console.log(bannedPlayers);
    playerBanForm.reset();
});

function updatePlayerBans() {
    playerBans.innerHTML = '';
    for (let i = 0; i < bannedPlayers.length; i++) {
        const playerBan = bannedPlayers[i];
        const playerElement = createPlayer(playerBan.index, playerBan.player, playerBan.character);
        if (playerElement === undefined) {
            continue;
        }
        playerBans.appendChild(playerElement);
    }
}

function createPlayer(index, player, character) {
    if (player === '' || character === '') {
        return;
    }

    const playerDiv = document.createElement('div');
    playerDiv.classList.add('player');

    const playerNameDiv = document.createElement('div');
    playerNameDiv.classList.add('player-name');
    playerNameDiv.innerHTML = player;

    const playerCharacterDiv = document.createElement('div');
    playerCharacterDiv.classList.add('player-character');
    playerCharacterDiv.innerHTML = character;

    const removebutton = document.createElement('button');
    removebutton.classList.add('player-remove');
    removebutton.innerHTML = 'X';
    removebutton.addEventListener('click', function() {
        bannedPlayers = bannedPlayers.filter(function(bannedPlayer) { 
            return bannedPlayer.index != index;
        });
        updatePlayerBans();
    });

    

    playerDiv.appendChild(playerNameDiv);
    playerDiv.appendChild(playerCharacterDiv);
    playerDiv.appendChild(removebutton);
    return playerDiv;
}

const searchBox = document.getElementById('search');

searchBox.addEventListener('input', function() {
    const search = searchBox.value.toLowerCase();
    const players = playerBans.getElementsByClassName('player');
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const playerName = player.getElementsByClassName('player-name')[0].innerHTML.toLowerCase();
        if (playerName.includes(search)) {
            player.style.display = 'flex';
        } else {
            player.style.display = 'none';
        }
    }
});
