import Game, {GameSavingData, readGameSaving as loadgame, writeGameSaving as savegame} from "./game.js";

const game = new Game();
game.start();
console.log('app worked');