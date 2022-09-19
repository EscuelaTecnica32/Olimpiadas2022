const getApi = () => {
    fetch('https://olimpiadaset32.000webhostapp.com/?consulta=obtenerTurnosDisponibles', { method: 'GET' })
        .then(response => response.json())
        .then(
            response => {
                console.log(response);
                return(JSON.stringify(response))
            },
            error => {
                console.log("API ERROR -> " + error)
                return(false)
            }
        )
}

export default getApi