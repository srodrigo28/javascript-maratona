const url = "http://localhost:3000/users"

const userName = "USER2"
const userPassword = "123456"

function validar() {
    userValido = userName.toLowerCase().trim()
    PasswordValido = userPassword.toLowerCase().trim()

    fetch(url,{
        method: 'GET',
        headers: { "Content-type": "application/json" }
    })
    .then( response => response.json() )
    .then( users => {
        const user = users.find( 
            item => item.username == userValido
            &&
            item.password == PasswordValido
        )
        if(user){
            console.log('Login bem-sucedido!')
        } else {
            console.log('Usuário ou senha incorretos');
        }
    })
}
validar()
