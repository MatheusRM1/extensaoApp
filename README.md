# 🎓 Extensão UFJF - Protótipo Mobile

Protótipo front-end de um aplicativo mobile para consulta e inscrição em projetos de extensão da Universidade Federal de Juiz de Fora (UFJF). 

Este projeto foi construído utilizando **React**, **Vite** e **Tailwind CSS**. Ele simula a interface de um smartphone diretamente no navegador, possuindo navegação entre telas e dados mockados para fins de demonstração.

## 🚀 Como rodar o projeto

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

### Passo a passo

1. **Clone o Repositório**.
2. **Abra o terminal** na pasta raiz do projeto.
3. **Instale as dependências** rodando o comando:
   ```bash  
   npm install
   ```
4. **Rode o Projeto** rodando o comando:
   ```bash  
   npm run dev
   ```

# 📱 Telas e Funcionalidades
O fluxo atual do protótipo é focado na experiência do aluno buscando projetos, contemplando:

Login: 
- Tela de acesso simulando a entrada com matrícula e senha do SIGA.

Home (Lista de Ações):
 - Listagem em formato de cards dos projetos disponíveis.
 - Barra de busca funcional.
 - Modal de filtros avançados (Modalidade, Área de Conhecimento e Carga Horária) totalmente integrados aos dados mockados.

Detalhes do Projeto: 
 - Informações detalhadas sobre a ação de extensão selecionada, incluindo descrição, atividades previstas, período e dados do coordenador responsável.

Contato com Coordenador:
 - Formulário para envio de dúvidas ou demonstração de interesse. 

Validação de preenchimento (botão de envio ativado apenas com texto).

Tela de sucesso de envio de mensagem com opções de retornar ao início ou enviar nova mensagem.

# 🛠️ Tecnologias Utilizadas
- React: Biblioteca principal de renderização de interfaces.
- Vite: Ferramenta de build e servidor de desenvolvimento super rápido.
- Tailwind CSS: Framework utilitário de CSS para estilização direta no JSX, garantindo um design fiel ao Figma sem necessidade de múltiplos arquivos CSS.

*Desenvolvido como protótipo acadêmico.*
