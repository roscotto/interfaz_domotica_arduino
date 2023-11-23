function medirTemperatura() {
  let tempDisplay = document.getElementById('temperaturaVisor')

  fetch(`http://localhost:2223/medir/temperatura`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      return respuesta.json()    
    })
    .then(data => {
      tempDisplay.innerText = `${data.temperatura}`
    })
    .catch( err => {
      alert(err)
    })
}

function medirHumedad() {
  let humedadDisplay = document.getElementById('humedadVisor')

  fetch(`http://localhost:2223/medir/humedad`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      return respuesta.json()    
    })
    .then(data => {
      humedadDisplay.innerText = `${data.humedad}`
    })
    .catch( err => {
      alert(err)
    })
}


function encenderLuces() {
  let onOffCheckbox = document.getElementById('onOffCheckbox')
  let imgFoco = document.getElementById('imgFoco')
  if (onOffCheckbox.checked){
    fetch(`http://localhost:2223/encender`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgFoco.style.filter = 'brightness(1)'
    })
    .catch( err => {
      alert(err)
    })
  }else{
    fetch(`http://localhost:2223/apagar`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgFoco.style.filter = 'brightness(0.5)'
    })
    .catch( err => {
      alert(err)
    })
  }
  
}

function encenderRegador() {
  let regaderaCheckbox = document.getElementById('regaderaCheckbox')
  let imgPlanta = document.getElementById('imgPlanta')
  if (regaderaCheckbox.checked){
    fetch(`http://localhost:2223/encender/bomba`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgPlanta.style.filter = 'brightness(1)'
    })
    .catch( err => {
      alert(err)
    })
  }else{
    fetch(`http://localhost:2223/apagar/bomba`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgPlanta.style.filter = 'brightness(0.5)'
    })
    .catch( err => {
      alert(err)
    })
  }
}

function onOffVentilador() {
  let ventiladorCheckbox = document.getElementById('ventiladorCheckbox')
  let imgVentilador = document.getElementById('imgVentilador')
  if (ventiladorCheckbox.checked){
    fetch(`http://localhost:2223/encender/ventilador`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgVentilador.style.filter = 'brightness(1)'
    })
    .catch( err => {
      alert(err)
    })
  }else{
    fetch(`http://localhost:2223/apagar/ventilador`)
    .then(respuesta => {
      if (!respuesta.ok){
        throw new Error ('Algo salio mal')
      }
      imgVentilador.style.filter = 'brightness(0.5)'
    })
    .catch( err => {
      alert(err)
    })
  }
}