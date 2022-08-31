# Nexa Gaming Kit (NGK)

Build a "casual" game with no-code and just your creativity.


## nexa.json

It is recommended to place the configuration file in both the root directory of your web host and the root directory of your Git repository.

eg. `https://mykoolgame.fun/nexa.json`

eg. `https://github.com/mygamestudio/my-kool-game/blob/master/nexa.json`

Here is a sample file:

```json
{
  "category": "gaming",
  "title": "My Kool Game",
  "source": "https://github.com/mygamestudio/my-kool-game.git",
  "assets": "IPFS_Hash",
  "display": "fullscreen",
  "orientation": "landscape",
  "background_color": "#ffffff",
  "createdAt": 123456789,
  "updatedAt": 123456789
}
```

### Category

This the category of your Nexaverse Space.

### Title

This is the title of your game.

### Source

The source Git repo for your games source code and assets.

### Assets

The location of your game assets. This should be an IPFS link.

### Created At

The publishing date of your game.

### Updated At

The last time your game was updated.


## Construct 3

One of the leading HTML5 game engines.

## Phaser

Phaser is good for developing cross-platform game applications. Its support for a wide range of plugins and the large community of developers building games with Phaser makes it very easy to get started with the framework.

### Let’s build a basic application with Phaser

Create a preload function to load in your default static files.

```js
function preload() {
  this.load.setBaseURL('http://labs.phaser.io')
  this.load.image('sky', 'assets/skies/space3.png')
  this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  this.load.image('red', 'assets/particles/red.png')
}
```

Then, define your create function to display your newly created game.

```js
function create() {
  this.add.image(500, 500, 'sky')
  const particles = this.add.particles('red')
  const emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendeMode: 'ADD'
  })
  const logo = this.physics.add.image(400, 100, 'logo')
  logo.setVelocity(100, 200)
  logo.setBounce(1,1)
  logo.setCollideWorldBounds(true)
  emitter.setFollow(logo)
}
```

## Blender

Design, build and integrate your 3D models with ease.
