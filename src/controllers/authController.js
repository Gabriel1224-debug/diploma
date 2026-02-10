// O nome após o 'exports.' é o que será exportado
exports.fazerLogin = (req, res) => {
    const { usuario, senha } = req.body;

    if (usuario === 'admin@alfa.com' && senha === 'admin123') {
        return res.json({ success: true, redirect: '/dashboard/index.html' });
    } else {
        return res.status(401).json({ success: false, message: 'Credenciais inválidas' });
    }
};