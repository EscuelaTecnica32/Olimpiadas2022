const lista = async () =>{
    const options = { method: 'GET' };

    const response = await fetch('http://olimpiadaset32.000webhostapp.com/index.php?consulta=obtenerRecorridos',options)

    return await response.json()
}

export default lista