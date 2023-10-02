export function calcularMedia(nota1, nota2) {
    const calculo = (nota1 + nota2) / 2
    if(calculo < 7) {
        return 'Não aprovado com média ' + calculo
    } else {
        return 'Aprovado com média ' + calculo
    }
}