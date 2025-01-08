function createUser1( name, email, password ) {
    name = name
    email = email
    password = password

    console.log( 
        ' nome: ' + name + '\n', 
        'email: ' + email + '\n',
        'senha: ' + password + '\n',
    );
}

// createUser1( 'John Doe', 'john.doe@example.com', '123' )

function createUser2( {name, email, password} ) {
    user = {
        name: name,
        email: email,
        password: password,
    }
    return  console.log(
        ' nome: ' + user.name + '\n',
        'email: '+ user.email + '\n',
        'senha: '+ user.password + '\n',
    );
}

createUser2( {
    email: 'john.doe@example.com',
    password: 'password123',
    name: 'John Doe',
} )
