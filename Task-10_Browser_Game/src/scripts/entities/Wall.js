export default function Wall(x, y, game) {
    this.boundingType = 'box';
    this.x = x * game.blockSize;
    this.y = y * game.blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: game.blockSize, height: game.blockSize };

    this.update = function() {};

    this.render = function(game) {

        if (this.sleep) return;

        game.context.beginPath();
        game.context.rect(this.x, this.y, game.blockSize, game.blockSize);
        game.context.fillStyle = '#774F38';
        game.context.fill();
    };
};