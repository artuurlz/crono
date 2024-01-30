const hora = document.querySelector(`.contador_hora`)
const minuto = document.querySelector(`.contador_minuto`)
const segundo = document.querySelector(`.contador_segundo`)
const btnIniciar = document.querySelector(`.btnIniciar`)
const btnParar = document.querySelector(`.btnParar`)
const btnZerar = document.querySelector(`.btnZerar`)

btnIniciar.addEventListener('click', () => {
    contador = setInterval(() => {
        let sec = Number(segundo.innerHTML++)
        if(sec===59){
            let min = Number(minuto.innerHTML++)
            segundo.innerHTML=0
            if(min===59){
                hora.innerHTML++
                minuto.innerHTML=0
            }
        }
    }, 1000)

    btnParar.addEventListener('click', () => {
        setTimeout(() => {
            clearInterval(contador)
        })
    })

    btnZerar.addEventListener('click', () => {
        hora.innerHTML=0
        minuto.innerHTML=0
        segundo.innerHTML=0
    })
})
