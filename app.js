const app = {
    add: (x,y) => x + y + 1,
    createPokemon: (name) => {
        return {
            name: name,
            type: 'Pokemon'
        }
    },
    getDmg: (hp, dmg) => hp - dmg,
    healHp: (hp, heal) => hp + heal
}

module.exports = app;