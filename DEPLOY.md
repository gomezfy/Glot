# 🚀 Guia de Deploy para Discloud

Este guia explica como fazer deploy do bot Discord de tradução na Discloud.

## 📋 Pré-requisitos

- ✅ Node.js instalado no seu computador
- ✅ Token do bot Discord configurado
- ✅ Conta na [Discloud](https://discloud.app/)

## 🔧 Passo a Passo

### 1. Baixar ou Clonar o Projeto

Se estiver no Replit:
1. Clique em "Download as zip" no menu de arquivos
2. Extraia o arquivo ZIP no seu computador

Se estiver no GitHub:
```bash
git clone https://github.com/seu-usuario/discord-translator-bot.git
cd discord-translator-bot
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Compilar o Projeto TypeScript

```bash
npm run build
```

Este comando compila todo o código TypeScript da pasta `src/` para JavaScript na pasta `dist/`.

### 4. Preparar Arquivos para Upload

Você precisa criar um arquivo ZIP com os seguintes arquivos:

**Incluir:**
- ✅ `dist/` (pasta com código compilado)
- ✅ `node_modules/` (dependências)
- ✅ `package.json`
- ✅ `package-lock.json`
- ✅ `discloud.config`

**NÃO incluir:**
- ❌ `src/` (código TypeScript original)
- ❌ `.git/` (controle de versão)
- ❌ `.env` (variáveis locais)
- ❌ Arquivos de documentação (.md)
- ❌ Arquivos de configuração do Replit

### 5. Criar o ZIP

**No Linux/Mac:**
```bash
zip -r bot-discord.zip dist/ node_modules/ package.json package-lock.json discloud.config
```

**No Windows:**
1. Selecione as pastas e arquivos mencionados acima
2. Clique com botão direito > "Enviar para" > "Pasta compactada"
3. Renomeie para `bot-discord.zip`

### 6. Upload na Discloud

1. Acesse [https://discloud.app/dashboard](https://discloud.app/dashboard)
2. Faça login com sua conta
3. Clique em **"Upload de Aplicação"** ou **"Nova Aplicação"**
4. Selecione o arquivo `bot-discord.zip`
5. Aguarde o upload completar (pode demorar alguns minutos dependendo do tamanho)

### 7. Configurar Token do Bot

1. No dashboard da Discloud, encontre sua aplicação
2. Clique em **"Configurações"** ou **"Editar"**
3. Procure a seção **"Variáveis de Ambiente"**
4. Adicione uma nova variável:
   - **Nome:** `DISCORD_BOT_TOKEN`
   - **Valor:** Cole o token do seu bot Discord
5. Clique em **"Salvar"**

### 8. Iniciar o Bot

O bot deve iniciar automaticamente após salvar as configurações. Se não:

1. Vá para o painel da aplicação
2. Clique em **"Iniciar"** ou **"Start"**
3. Aguarde alguns segundos

### 9. Verificar Logs

Para verificar se o bot está rodando:

1. No dashboard, clique na sua aplicação
2. Vá para **"Logs"** ou **"Console"**
3. Você deve ver mensagens como:
   ```
   ✅ Bot conectado como SeuBot#1234
   🌍 Pronto para traduzir mensagens!
   ```

## 📊 Configuração do discloud.config

O arquivo já vem configurado corretamente:

```ini
TYPE=bot
MAIN=dist/index.js
RAM=100
AUTORESTART=true
VERSION=latest
APT=tools
```

**Explicação:**
- `TYPE=bot` - Define que é um bot Discord
- `MAIN=dist/index.js` - Arquivo principal compilado
- `RAM=100` - Memória alocada (100MB no plano gratuito)
- `AUTORESTART=true` - Reinicia automaticamente se crashar
- `VERSION=latest` - Usa a versão mais recente do Node.js
- `APT=tools` - Ferramentas adicionais do sistema

## 🔄 Atualizações Futuras

Quando fizer mudanças no código:

1. **Editar código** na pasta `src/`
2. **Compilar** com `npm run build`
3. **Criar novo ZIP** com os arquivos atualizados
4. **Upload** na Discloud (substituir aplicação)
5. **Reiniciar** o bot no dashboard

## ❓ Troubleshooting

### Bot não inicia

**Problema:** Bot fica offline ou não conecta
**Solução:**
- Verifique se o token está correto nas variáveis de ambiente
- Confira os logs para ver mensagens de erro
- Certifique-se que compilou o TypeScript antes de criar o ZIP

### Erro "Cannot find module"

**Problema:** Falta alguma dependência
**Solução:**
- Certifique-se de incluir `node_modules/` no ZIP
- Ou delete `node_modules/` e faça upload sem ele (Discloud instalará automaticamente)

### Bot crashando constantemente

**Problema:** Bot reinicia a cada poucos segundos
**Solução:**
- Verifique os logs na dashboard
- Procure por erros de autenticação ou permissões
- Confirme que as intents estão habilitadas no Discord Developer Portal

### RAM insuficiente

**Problema:** Bot para por falta de memória
**Solução:**
- Aumente o valor de `RAM` no `discloud.config` (exemplo: `RAM=256`)
- Isso pode exigir upgrade do plano na Discloud

## 💡 Dicas

1. **Mantenha o código fonte seguro** - Não delete os arquivos `src/` do seu computador
2. **Use Git** - Versione seu código para não perder mudanças
3. **Teste localmente** - Sempre teste com `npm start` antes de fazer deploy
4. **Monitore logs** - Verifique regularmente os logs na Discloud
5. **Backup do token** - Guarde o token do bot em local seguro

## 🆘 Suporte

- **Discloud:** [https://docs.discloud.com/](https://docs.discloud.com/)
- **Discord.js:** [https://discord.js.org/](https://discord.js.org/)
- **Discord Developer:** [https://discord.com/developers](https://discord.com/developers)

---

✅ **Pronto!** Seu bot Discord está rodando 24/7 na Discloud! 🎉
