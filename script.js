async function buscarCep(cep) {
        var mensagemDeErro = document.getElementById('erro')
        mensagemDeErro.innerHTML = ''
    try{        
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPCompleto = await consultaCEP.json()
        if(consultaCEPCompleto.erro) {
            throw Error('CEP não existente!')
        }

        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')

        cidade.value = consultaCEPCompleto.localidade
        logradouro.value = consultaCEPCompleto.logradouro
        estado.value = consultaCEPCompleto.uf
        bairro.value = consultaCEPCompleto.bairro

        console.log(consultaCEPCompleto)
        return consultaCEPCompleto
    } catch (erro) {
        mensagemDeErro.innerHTML = '<p><br>CEP invalido. Tente novamente!</br></p>'
        console.log(erro)
    }    
}

const cep = document.getElementById('cep')
cep.addEventListener('focusout', ()=> buscarCep(cep.value))




        
 


