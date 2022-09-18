const getApi = () => {
    fetch('http://192.168.0.24:800/a/?consulta=obtenerTurnosDisponibles', { method: 'GET' })
        .then(response => response.json())
        .then(
            response => {
                console.log(response);
                return(response)
            },
            error => {
                console.log("API ERROR -> " + error)
                return(false)
            }
        )
}

export default getApi