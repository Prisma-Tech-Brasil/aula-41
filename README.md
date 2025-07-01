
# 🛠️ Aula 41 – Debug e Testes no Backend

## 🎯 Objetivo da Aula
Aprender as boas práticas de **debug** (depuração) e **testes** no desenvolvimento de APIs backend, entendendo como identificar e corrigir erros e como garantir que as funcionalidades da aplicação estejam funcionando corretamente.

---

## 🐞 Parte 1 – Debug (Depuração)

### 📌 O que é Debug?
Debug é o processo de **identificar, investigar e corrigir erros** (bugs) no código. Erros acontecem com todo programador — saber depurar é essencial para resolver problemas de forma eficiente.

---

### 🧪 Tipos de Erros Comuns
- **Erros de Sintaxe**: Ex. esquecer um `;` ou uma `}`.
- **Erros de Lógica**: O código roda, mas não faz o que deveria.
- **Erros em Tempo de Execução**: Tentativas de acessar algo que não existe ou nulo, por exemplo.

---

### 🔍 Ferramentas de Debug

#### 1. **`console.log()`**
O mais básico: imprime variáveis ou mensagens no terminal.
```js
console.log("Dados recebidos:", req.body);
```

#### 2. **Debugger do Node**
Você pode usar:
```bash
node inspect server.js
```
Ou usar um breakpoint no VSCode com o modo de depuração.

#### 3. **Extensão “REST Client” ou Insomnia/Postman**
Essas ferramentas ajudam a testar rotas individualmente e observar respostas e erros.

---

## ✅ Parte 2 – Testes

### 📌 Por que testar?
Testes ajudam a:
- Garantir que o código faz o que foi planejado.
- Evitar bugs antes de ir para produção.
- Melhorar a **manutenção** e **confiança** no código.

---

### 🔄 Tipos de Testes

| Tipo               | O que faz | Ferramenta comum |
|--------------------|-----------|------------------|
| Teste Unitário     | Testa funções isoladas | `Jest`, `Vitest` |
| Teste de Integração| Testa partes do sistema juntas | `Supertest`, `Jest` |
| Teste Manual       | Feito pelo desenvolvedor/testador | Insomnia, navegador |

---

### 🧪 Exemplo com Jest

#### 📦 Instalação
```bash
npm install --save-dev jest
```

Adicione no `package.json`:
```json
"scripts": {
  "test": "jest"
}
```

#### 📁 Estrutura recomendada
```
src/
├── services/
│   └── usuarioService.js
├── tests/
│   └── usuarioService.test.js
```

#### 📄 Exemplo de função
```js
function soma(a, b) {
  return a + b;
}
module.exports = soma;
```

#### 🧪 Teste com Jest
```js
const soma = require("../services/soma");

test("Deve somar 2 + 3 e retornar 5", () => {
  expect(soma(2, 3)).toBe(5);
});
```

---

### 🧰 Dica: Teste para função de login
```js
test("Login falha se senha estiver errada", () => {
  const resultado = autenticar("user@email.com", "senhaErrada");
  expect(resultado).toBe(null);
});
```

---

## 💡 Boas Práticas

- Teste rotinas importantes como **login**, **cadastro**, **criação de pedidos**, etc.
- Use nomes claros para os testes.
- Crie testes pequenos, objetivos e separados por responsabilidade.

---

## 📚 Para se aprofundar
- [Documentação do Jest](https://jestjs.io/pt-BR/docs/getting-started)
- [Node.js Debugger](https://nodejs.org/api/debugger.html)
- Curso "Testes no Node.js" da Alura

---

## 🏁 Atividade Prática
1. Ative o `debugger` no seu projeto e use breakpoints para observar o fluxo.
2. Escreva um teste para a função de criação de usuário.
3. Use `console.log()` para verificar se o corpo da requisição está chegando corretamente no controller.
