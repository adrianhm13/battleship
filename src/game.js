import { Ship } from './ship'
import { Gameboard} from './gameboard'
import { Player } from './player'
import { Render } from './dom'

function initGame() {
    const humanPlayer = new Player('human')
    const computerPlayer = new Player('computer')

    const gameboardHuman = new Gameboard()
    const gameboardComputer = new Gameboard()

    Render.renderGameboards(gameboardHuman)
    Render.renderGameboards(gameboardComputer)
}

export {initGame}