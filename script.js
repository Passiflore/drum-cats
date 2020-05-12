
// Get all DOM elements
const soundButtons = document.querySelector('.soundButton')
const activated = soundButtons.querySelector('.activated')
const more = soundButtons.querySelector('.more')
const less = soundButtons.querySelector('.less')
const output = soundButtons.querySelector('.output')


const musicians = document.querySelector('.musicians')
const drum = musicians.querySelector('.drum')
const drum1 = musicians.querySelector('.drum1')
const drum2 = musicians.querySelector('.drum2')
const drumButton =  musicians.querySelector('.drumButton')

const triangle = musicians.querySelector('.triangle')
const triangle1 = musicians.querySelector('.triangle1')
const triangle2 = musicians.querySelector('.triangle2')
const triangleButton =  musicians.querySelector('.triangleButton')

const guitar = musicians.querySelector('.guitar')
const guitar1 = musicians.querySelector('.guitar1')
const guitar2 = musicians.querySelector('.guitar2')
const guitarButton =  musicians.querySelector('.guitarButton')

const piano = musicians.querySelector('.piano')
const piano1 = musicians.querySelector('.piano1')
const piano2 = musicians.querySelector('.piano2')
const pianoButton =  musicians.querySelector('.pianoButton')

const sing = musicians.querySelector('.sing')
const sing1 = musicians.querySelector('.sing1')
const sing2 = musicians.querySelector('.sing2')
const singButton =  musicians.querySelector('.singButton')

const sax = musicians.querySelector('.sax')
const sax1 = musicians.querySelector('.sax1')
const sax2 = musicians.querySelector('.sax2')
const saxButton =  musicians.querySelector('.saxButton')
const saxophon = musicians.querySelector('.saxophon')

const actionElement = document.querySelector('.action')
const drumAudio = new Audio ('./sounds/drum.mp3')
const triangleAudio = new Audio ('./sounds/triangle.mp3')
const guitarAudio = new Audio ('./sounds/guitar.mp3')
const pianoAudio = new Audio ('./sounds/piano.mp3')
const piano2Audio = new Audio ('./sounds/piano2.mp3')
const singAudio = new Audio ('./sounds/sing.mp3')
const saxAudio = new Audio ('./sounds/saxo.mp3')
const sax2Audio = new Audio ('./sounds/sax2.mp3')



// Activation button
const start = () =>
{
    drum1.style.display = ('block')
    guitar1.style.display = ('block')
    guitar2.style.display = ('none')
    sax1.style.display = ('block')
    sax2.style.display = ('none')
    piano1.style.display = ('block')
    piano2.style.display = ('none')
    sing1.style.display = ('block')
    sing2.style.display = ('none')
    triangle1.style.display = ('block')
    triangle2.style.display = ('none')
    drumButton.style.display=('block')
    triangleButton.style.display=('block')
    guitarButton.style.display=('block')
    pianoButton.style.display=('block')
    singButton.style.display=('block')
    saxButton.style.display=('block')
    activated.style.display=('block')
    more.style.display=('block')
    less.style.display=('block')
    output.style.display=('block')

    actionElement.style.display = 'none'
}
actionElement.addEventListener('click', start)


// SOUND BUTTON //

// Sound off and on // 
let volume = 50
let outputValue = 0
soundOn = 'true'
const soundButton = () => 
{
    if (soundOn == 'true')
    {
        volume = 0
        drumAudio.volume = `${volume}`* 0.01
        singAudio.volume = `${volume}`* 0.01
        guitarAudio.volume = `${volume}`* 0.01
        triangleAudio.volume = `${volume}`* 0.01
        sax2Audio.volume = `${volume}`* 0.01
        pianoAudio.volume = `${volume}`* 0.01
        piano2Audio.volume = `${volume}`* 0.01
        soundOn = 'false'
        activated.textContent = "Sound Off"
        
    }
    else 
    {
        volume = 50
        drumAudio.volume = `${volume}`* 0.01
        singAudio.volume = `${volume}`* 0.01
        guitarAudio.volume = `${volume}`* 0.01
        triangleAudio.volume = `${volume}`* 0.01
        sax2Audio.volume = `${volume}`* 0.01
        pianoAudio.volume = `${volume}`* 0.01
        piano2Audio.volume = `${volume}`* 0.01
        soundOn = 'true'
        activated.textContent = "Sound On"
    }
   outputValue = `${volume}%`
   output.textContent =  outputValue
}
activated.addEventListener('click',soundButton)

// Less sound // 
less.addEventListener ('click', () =>
{

   if(volume > 1)
   {
        volume = volume - 10
        drumAudio.volume = `${volume}`* 0.01
        singAudio.volume = `${volume}`* 0.01
        guitarAudio.volume = `${volume}`* 0.01
        triangleAudio.volume = `${volume}`* 0.01
        sax2Audio.volume = `${volume}`* 0.01
        pianoAudio.volume = `${volume}`* 0.01
        piano2Audio.volume = `${volume}`* 0.01
        outputValue = `${volume}%`
   output.textContent =  outputValue
   }
   
console.log(volume)
})

// More sound //
more.addEventListener ('click', () =>
{

   if(volume < 100)
   {
        volume = (volume + 10)
        drumAudio.volume = `${volume}`* 0.01
        singAudio.volume = `${volume}`* 0.01
        guitarAudio.volume = `${volume}`* 0.01
        triangleAudio.volume = `${volume}`* 0.01
        sax2Audio.volume = `${volume}`* 0.01
        pianoAudio.volume = `${volume}`* 0.01
        piano2Audio.volume = `${volume}`* 0.01
        outputValue = `${volume}%`
        outputValue = `${volume}%`
   output.textContent =  outputValue
   }
})


// Musicians //

// DRUM CAT ///

// MOUSE MOVE ///
const drumAnimationOn = () => 
{
    drum1.style.display = ('none')
    drum2.style.display = ('block')
}
const drumAnimationleave = () => 
{
    drum1.style.display = ('block')
    drum2.style.display = ('none')

}
drum.addEventListener('mouseover',drumAnimationOn)
drum.addEventListener('mouseleave',drumAnimationleave)

// BUTTON MOVE ///
drumCatAnimation = true
const drumAnimation = () => 
{

   if (drumCatAnimation == 'true')
   {
    drum1.style.display = ('none')
    drum2.style.display = ('block')
    drumCatAnimation = 'false'
   }
   else 
   {
    drum1.style.display = ('block')
    drum2.style.display = ('none')
    drumCatAnimation = 'true'
   }
   drumAudio.play()
   drumAudio.currentTime = 0 
}
drumButton.addEventListener('click',drumAnimation)


// TRIANGLE CAT ///
// MOUSE MOVE ///
const triangleAnimationOn = () => 
{
    triangle1.style.display = ('none')
    triangle2.style.display = ('block')
}
const triangleAnimationleave = () => 
{
    triangle1.style.display = ('block')
    triangle2.style.display = ('none')

}
triangle.addEventListener('mouseover',triangleAnimationOn)
triangle.addEventListener('mouseleave',triangleAnimationleave)

// BUTTON MOVE ///
triangleCatAnimation = false
const triangleAnimation = () => 
{
   
   if (triangleCatAnimation == 'true')
   {
    triangle1.style.display = ('none')
    triangle2.style.display = ('block')
    triangleCatAnimation = 'false'
   }
   else 
   {
    triangle1.style.display = ('block')
    triangle2.style.display = ('none')
    triangleCatAnimation = 'true'
   }
   triangleAudio.play()
   triangleAudio.currentTime = 0 
}

triangleButton.addEventListener('click',triangleAnimation)


// GUITAR CAT ///

// MOUSE MOVE ///
const guitarAnimationOn = () => 
{
    guitar1.style.display = ('none')
    guitar2.style.display = ('block')
}
const guitarAnimationleave = () => 
{
    guitar1.style.display = ('block')
    guitar2.style.display = ('none')

}
guitar.addEventListener('mouseover',guitarAnimationOn)
guitar.addEventListener('mouseleave',guitarAnimationleave)

// BUTTON MOVE ///
guitarCatAnimation = true
const guitarAnimation = () => 
{

   if (guitarCatAnimation == 'true')
   {
    guitar1.style.display = ('none')
    guitar2.style.display = ('block')
    guitarCatAnimation = 'false'
   }
   else 
   {
    guitar1.style.display = ('block')
    guitar2.style.display = ('none')
    guitarCatAnimation = 'true'
   }
   guitarAudio.play()
   guitarAudio.currentTime = 0 
}
guitarButton.addEventListener('click',guitarAnimation)

// PIANO CAT ///

// MOUSE MOVE ///

const pianoAnimationOn = () => 
{
    piano1.style.display = ('none')
    piano2.style.display = ('block')
}
const pianoAnimationleave = () => 
{
    piano1.style.display = ('block')
    piano2.style.display = ('none')

}
piano.addEventListener('mouseover',pianoAnimationOn)
piano.addEventListener('mouseleave',pianoAnimationleave)

// BUTTON MOVE ///
let counterPiano = 0
pianoCatAnimation = true
const pianoAnimation = () => 
{

   if (pianoCatAnimation == 'true')
   {
    piano1.style.display = ('none')
    piano2.style.display = ('block')
    pianoCatAnimation = 'false'
   }
   else 
   {
    piano1.style.display = ('block')
    piano2.style.display = ('none')
    pianoCatAnimation = 'true'
   }
   
   piano2Audio.play()
   piano2Audio.currentTime = 0 
   counterPiano++

   if (counterPiano == 4)
   {
       pianoAudio.play()
       counterPiano = 0
   }
   console.log (counter)

}
pianoButton.addEventListener('click',pianoAnimation)


// SINGING CAT ///

// MOUSE MOVE ///
const singAnimationOn = () => 
{
    sing1.style.display = ('none')
    sing2.style.display = ('block')
}
const singAnimationleave = () => 
{
    sing1.style.display = ('block')
    sing2.style.display = ('none')

}
sing.addEventListener('mouseover',singAnimationOn)
sing.addEventListener('mouseleave',singAnimationleave)

// BUTTON MOVE ///
singCatAnimation = true
const singAnimation = () => 
{

   if (singCatAnimation == 'true')
   {
    sing1.style.display = ('none')
    sing2.style.display = ('block')
    singCatAnimation = 'false'
   }
   else 
   {
    sing1.style.display = ('block')
    sing2.style.display = ('none')
    singCatAnimation = 'true'
   }
   singAudio.play()
   singAudio.currentTime = 0 
}
singButton.addEventListener('click',singAnimation)


// SAXO CAT ///

// MOUSE MOVE ///
const saxAnimationOn = () => 
{
    sax1.style.display = ('none')
    sax2.style.display = ('block')

    saxAudio.play()
    saxAudio.volume = 0.25
    saxAudio.currentTime = 0 
}

const saxAnimationleave = () => 
{
    sax1.style.display = ('block')
    sax2.style.display = ('none')
    saxAudio.pause()

}
saxophon.addEventListener('mouseover',saxAnimationOn)
saxophon.addEventListener('mouseleave',saxAnimationleave)

// BUTTON MOVE ///
saxCatAnimation = false
const saxAnimation = () => 
{
   
   if (saxCatAnimation == 'true')
   {
    sax1.style.display = ('none')
    sax2.style.display = ('block')
    saxCatAnimation = 'false'
   }
   else 
   {
    sax1.style.display = ('block')
    sax2.style.display = ('none')
    saxCatAnimation = 'true'
   }
   saxAudio.pause()
   sax2Audio.play()
   sax2Audio.currentTime = 0 

}

saxButton.addEventListener('click',saxAnimation)
