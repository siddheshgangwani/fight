controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f f f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f f f f f f f f f f f f f . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -200, 0)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 2 2 2 2 2 2 2 2 2 2 2 f f f 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 2 2 2 2 2 2 2 f 
        . f 2 2 2 2 2 2 2 2 2 2 2 f f f 
        . f f f f f f f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -10
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar2.value += -10
})
let projectile2: Sprite = null
let projectile: Sprite = null
let statusbar2: StatusBarSprite = null
let statusbar: StatusBarSprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `, SpriteKind.Player)
mySprite2 = sprites.create(assets.image`1`, SpriteKind.Enemy)
controller.moveSprite(mySprite, 150, 150)
controller.player2.moveSprite(mySprite2, 150, 150)
tiles.setTilemap(tilemap`level1`)
mySprite.setStayInScreen(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2 = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
statusbar.attachToSprite(mySprite)
statusbar2.attachToSprite(mySprite2)
statusbar.value = 100
statusbar2.value = 100
