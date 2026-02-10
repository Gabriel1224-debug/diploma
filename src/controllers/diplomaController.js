// Banco de dados temporário em memória
let diplomasEmitidos = [];

exports.emitir = (req, res) => {
    const { aluno, cpf, curso } = req.body;
    
    // Gerando um Hash/Código de autenticidade simples
    const codigoAutenticidade = 'DIP-' + Math.random().toString(36).substr(2, 9).toUpperCase();

    const novoDiploma = {
        id: diplomasEmitidos.length + 1,
        aluno,
        cpf,
        curso,
        codigoAutenticidade,
        dataEmissao: new Date().toLocaleDateString('pt-BR')
    };

    diplomasEmitidos.push(novoDiploma);
    res.json({ success: true, message: "Diploma Gerado!", dados: novoDiploma });
};

exports.listar = (req, res) => {
    res.json(diplomasEmitidos);
};