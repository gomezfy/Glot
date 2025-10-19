# 🌍 Bot Discord de Tradução

Bot Discord que traduz mensagens automaticamente quando usuários reagem com emojis de bandeiras!

## 🚀 Funcionalidades

- ✅ **Menu de Contexto** - Clique com botão direito em mensagens para traduzir (só você vê!)
- ✅ **Comando `/help` interativo** com todas as informações e botão de suporte
- ✅ **Comando `/invite` para adicionar o bot** a outros servidores
- ✅ **Sistema multilíngue inteligente** - Bot responde no idioma do usuário automaticamente
- ✅ **Tradução por reação** com emojis - Envia via DM privada
- ✅ Suporte a 12 idiomas diferentes
- ✅ Sistema de cache para evitar traduções duplicadas
- ✅ Mostra texto original e tradução lado a lado
- ✅ Tratamento de erros robusto

## 🎯 Como Usar

### 👤 Para Usuários:

**Método 1: Menu de Contexto (Recomendado)** ⭐
1. **Clique com botão direito** em qualquer mensagem
2. Selecione **"Traduzir para [idioma]"** no menu
3. A tradução aparece **só para você** no canal (mensagem privada ephemeral)
4. Idiomas disponíveis: 🇧🇷 Português, 🇺🇸 Inglês, 🇪🇸 Espanhol

**Método 2: Reações** 
1. Reaja à mensagem com um emoji de bandeira (ex: 🇧🇷 🇬🇧 🇪🇸 🇫🇷 🇩🇪 🇮🇹 🇯🇵 🇰🇷 🇷🇺 🇨🇳)
2. O bot enviará a tradução **via DM (mensagem privada)**
3. Suporta todos os 12 idiomas disponíveis

⚠️ **Para receber DMs:** Certifique-se de que suas DMs estão habilitadas

**Comando /help**
- Digite `/help` em qualquer canal
- Receba um guia completo em **seu idioma**
- Acesse o **servidor de suporte** através do botão

### 👨‍💼 Para Adicionar o Bot ao Seu Servidor:

1. **Use o comando `/invite`** no bot para obter o link de convite
2. Clique no botão gerado para adicionar o bot ao seu servidor
3. Selecione o servidor e confirme as permissões necessárias
4. Pronto! O bot está funcionando no seu servidor

**Ou acesse o convite direto:** (use `/invite` no bot para gerar o link personalizado)

## 🌐 Idiomas Suportados

### Para Tradução de Mensagens:

| Emoji | Idioma | Código |
|-------|--------|--------|
| 🇧🇷 | Português | pt |
| 🇬🇧 | Inglês | en |
| 🇺🇸 | Inglês | en |
| 🇨🇦 | Inglês | en |
| 🇪🇸 | Espanhol | es |
| 🇫🇷 | Francês | fr |
| 🇩🇪 | Alemão | de |
| 🇮🇹 | Italiano | it |
| 🇨🇳 | Chinês | zh-cn |
| 🇯🇵 | Japonês | ja |
| 🇰🇷 | Coreano | ko |
| 🇷🇺 | Russo | ru |

### Interface do Bot (Mensagens Automáticas):

O bot detecta automaticamente seu idioma e responde em:
- 🇧🇷 Português (Brasil)
- 🇺🇸 Inglês (EUA)
- 🇪🇸 Espanhol
- 🇫🇷 Francês
- 🇩🇪 Alemão
- 🇮🇹 Italiano
- 🇯🇵 Japonês
- 🇰🇷 Coreano
- 🇷🇺 Russo
- 🇨🇳 Chinês (Simplificado)

## 📦 Tecnologias

- **TypeScript 5.x** - Linguagem principal com tipagem estática
- **discord.js v14** - Framework para Discord bots
- **@vitalets/google-translate-api** - API de tradução gratuita
- **Node.js 20** - Runtime JavaScript

## ⚙️ Configuração

### Passo 1: Criar o Bot no Discord

1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications)
2. Clique em "New Application" e dê um nome ao seu bot
3. Vá para a aba "Bot" e clique em "Add Bot"
4. Em "Privileged Gateway Intents", ative:
   - ✅ Presence Intent
   - ✅ Server Members Intent
   - ✅ Message Content Intent
5. Clique em "Reset Token" e copie o token (guarde em local seguro!)

### Passo 2: Configurar no Replit

1. No Replit, vá até a aba "Secrets" (ícone de cadeado na barra lateral)
2. Crie um novo secret:
   - **Key:** `DISCORD_BOT_TOKEN`
   - **Value:** Cole o token copiado do Discord
3. Clique em "Add Secret"
4. Execute o bot clicando em "Run"

### Passo 3: Adicionar o Bot ao Servidor

1. No Discord Developer Portal, vá para "OAuth2" > "URL Generator"
2. Selecione os scopes:
   - ✅ `bot`
3. Selecione as permissões:
   - ✅ Read Messages/View Channels
   - ✅ Send Messages
   - ✅ Send Messages in Threads
   - ✅ Add Reactions
   - ✅ Read Message History
4. Copie a URL gerada e abra em seu navegador
5. Selecione o servidor onde deseja adicionar o bot e clique em "Autorizar"

### Deploy na Discloud (Hospedagem 24/7 Gratuita)

O projeto já vem configurado para deploy na Discloud! Siga os passos:

#### 1. Preparar arquivos para deploy

```bash
# Compilar o projeto TypeScript
npm run build

# Criar ZIP com os arquivos necessários (no seu computador local)
zip -r bot-discord.zip dist/ node_modules/ package.json package-lock.json discloud.config
```

**Arquivos incluídos no deploy:**
- ✅ `dist/` - Código TypeScript compilado
- ✅ `node_modules/` - Dependências
- ✅ `package.json` e `package-lock.json`
- ✅ `discloud.config` - Configuração do servidor
- ❌ `src/` - Código TypeScript original (não é necessário)

#### 2. Fazer upload na Discloud

1. Acesse [Discloud Dashboard](https://discloud.app/)
2. Faça login com sua conta
3. Clique em **"Upload de Aplicação"**
4. Envie o arquivo `bot-discord.zip`
5. Aguarde o upload completar

#### 3. Configurar variáveis de ambiente

1. No dashboard, vá em **Aplicações > Seu Bot**
2. Clique em **Configurações**
3. Em **Variáveis de Ambiente**, adicione:
   ```
   DISCORD_BOT_TOKEN=seu_token_aqui
   ```
4. Salve as configurações
5. O bot iniciará automaticamente!

#### Arquivo discloud.config (já incluído)

```ini
TYPE=bot
MAIN=dist/index.js
RAM=100
AUTORESTART=true
VERSION=latest
APT=tools
```

**Nota:** O projeto funciona tanto no Replit quanto na Discloud sem modificações!

## 🎮 Comandos do Bot

### Comando Slash

- `/help` - Mostra informações completas sobre o bot, idiomas suportados e como usar

### Como Traduzir

O bot funciona por reações - basta reagir com emoji de bandeira em qualquer mensagem!

## 🔧 Desenvolvimento

### Estrutura do Projeto

```
/
├── src/
│   ├── index.ts              # Arquivo principal do bot
│   ├── config/
│   │   └── languages.ts      # Mapeamento de emojis para idiomas
│   ├── services/
│   │   └── translator.ts     # Serviço de tradução com cache
│   └── types/
│       └── index.ts          # Definições de tipos TypeScript
├── dist/                     # Código compilado (gerado automaticamente)
├── tsconfig.json             # Configuração do TypeScript
└── package.json
```

### Comandos Disponíveis

```bash
npm install       # Instalar dependências
npm run build     # Compilar TypeScript
npm start         # Compilar e executar o bot
npm run clean     # Limpar pasta dist/
```

## 📝 Notas

- O bot precisa de permissões para ler mensagens e adicionar reações
- **Traduções são enviadas via DM privada** - certifique-se de ter DMs habilitadas
- As traduções são armazenadas em cache temporariamente (máximo 1000)
- O bot ignora mensagens vazias e suas próprias mensagens
- Requer as seguintes intenções: Guilds, GuildMessages, GuildMessageReactions, MessageContent

## 🤝 Contribuindo

Sinta-se livre para adicionar mais idiomas editando o objeto `EMOJI_TO_LANG` no arquivo `src/config/languages.ts`!

### Por que TypeScript?

- ✅ **Segurança de tipos** - Erros detectados antes de executar
- ✅ **Autocompletar inteligente** - Melhor experiência de desenvolvimento
- ✅ **Código mais organizado** - Estrutura profissional com separação de responsabilidades
- ✅ **Manutenção facilitada** - Mais fácil de entender e modificar
- ✅ **Escalabilidade** - Preparado para crescer com novas funcionalidades

## 📄 Licença

ISC
