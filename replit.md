# Discord Translation Bot - Documentação do Projeto

## 📋 Visão Geral

Bot Discord desenvolvido em TypeScript com discord.js v14 que traduz mensagens automaticamente quando os usuários reagem com emojis de bandeiras.

**Status:** ✅ Produção - Pronto para Discloud  
**Data de criação:** 19 de outubro de 2025  
**Última atualização:** 19 de outubro de 2025 (Documentação Discloud)  
**Linguagem:** TypeScript 5.x (compilado para ES2022)

## 🎯 Objetivo

Criar um bot Discord que facilita a comunicação multilíngue em servidores, permitindo que usuários traduzam mensagens simplesmente reagindo com emojis de bandeiras.

## 🏗️ Arquitetura do Projeto

### Estrutura de Arquivos

```
/
├── src/                      # Código-fonte TypeScript
│   ├── index.ts             # Arquivo principal do bot (classe DiscordTranslatorBot)
│   ├── commands/
│   │   ├── help.ts          # Comando /help com embed multilíngue
│   │   └── register.ts      # Sistema de registro de comandos
│   ├── config/
│   │   ├── languages.ts     # Configuração de idiomas e emojis
│   │   └── i18n.ts          # Sistema de internacionalização (10 idiomas)
│   ├── services/
│   │   └── translator.ts    # Serviço de tradução (TranslatorService)
│   └── types/
│       └── index.ts         # Definições de tipos TypeScript
├── dist/                    # Código JavaScript compilado (gerado automaticamente)
├── tsconfig.json           # Configuração do compilador TypeScript
├── package.json            # Configurações e dependências
├── .gitignore             # Arquivos ignorados pelo Git
├── README.md              # Documentação para usuários
├── DEPLOY.md              # Guia de deploy para Discloud
├── COMO_HOSPEDAR_DISCLOUD.md  # Guia simplificado de deploy Discloud
├── CHECKLIST_DISCLOUD.txt     # Checklist rápido para deploy
└── replit.md              # Documentação técnica do projeto
```

### Tecnologias Utilizadas

- **TypeScript 5.9** - Linguagem principal com sistema de tipos
- **Node.js 20** - Runtime JavaScript
- **discord.js 14.23.2** - Biblioteca oficial para Discord bots
- **@vitalets/google-translate-api 9.2.1** - API de tradução gratuita
- **Secrets do Replit** - Gerenciamento seguro do token do bot

### Funcionalidades Implementadas

1. ✅ Autenticação usando token do bot Discord (DISCORD_BOT_TOKEN)
2. ✅ **Comando slash `/help` com embed interativo**
3. ✅ **Comando slash `/invite` para gerar link de convite do bot**
4. ✅ **Menu de contexto para tradução** (botão direito em mensagens)
5. ✅ **Tradução ephemeral** (só quem pediu vê, direto no canal)
6. ✅ **Sistema de internacionalização (i18n) com 10 idiomas**
7. ✅ **Detecção automática do idioma do usuário**
8. ✅ Detecção de reações em mensagens
9. ✅ Sistema de mapeamento emoji → idioma (12 idiomas)
10. ✅ Tradução automática usando Google Translate API
11. ✅ Sistema de cache de traduções (limite: 1000 entradas)
12. ✅ Envio de traduções via DM (mensagem privada) para privacidade
13. ✅ Registro automático de comandos slash na inicialização
14. ✅ Tratamento de erros robusto
15. ✅ Compatibilidade com Replit e Discloud
16. ✅ Suporte a partials para mensagens não cacheadas
17. ✅ Sistema de convite público com OAuth2

## 🔧 Decisões Arquiteturais

### Por que TypeScript?

- **Segurança de tipos** - Erros detectados em tempo de compilação
- **Melhor DX** - Autocompletar, refatoração e navegação no código
- **Arquitetura escalável** - Classes, interfaces e separação de responsabilidades
- **Manutenibilidade** - Código autodocumentado com tipos explícitos
- **Profissionalismo** - Padrão da indústria para projetos sérios

### Por que CommonJS em vez de ES Modules?

- **Compatibilidade universal** - Funciona em qualquer plataforma (Replit, Discloud, VPS)
- **Sem problemas de importação** - CommonJS é mais maduro e estável
- **Deploy simplificado** - Não requer configurações especiais no servidor
- **Node_modules direto** - Dependências funcionam sem transpilação adicional

### Por que discord.js v14?

- Versão mais recente e estável
- Suporte completo a TypeScript
- Integração nativa com Replit

### Por que @vitalets/google-translate-api?

- Não requer autenticação ou API keys
- Gratuito e fácil de usar
- Funciona bem para casos de uso básicos de tradução

### Sistema de Cache

- Implementado com Map() nativo do JavaScript
- Limite de 1000 traduções para evitar uso excessivo de memória
- Política FIFO (First In, First Out) para limpeza

### Autenticação

- Usa variável de ambiente `DISCORD_BOT_TOKEN`
- Token armazenado de forma segura nos Secrets do Replit
- Compatível com múltiplas plataformas de hospedagem (Replit, Discloud, etc)

## 📝 Mudanças Recentes

**19/10/2025 - v2.4.2 (Documentação Simplificada para Discloud):**
- ✅ **Criado COMO_HOSPEDAR_DISCLOUD.md** - Guia passo a passo simplificado
- ✅ **Criado CHECKLIST_DISCLOUD.txt** - Checklist rápido para deploy
- ✅ Instruções otimizadas para usuários não técnicos
- ✅ Bot 100% pronto para deploy na Discloud

**19/10/2025 - v2.4.1 (Botão de Suporte no /help):**
- ✅ **Botão de suporte adicionado ao comando /help**
- ✅ Link direto para servidor de suporte (https://discord.gg/f2jmNWh3WV)
- ✅ Botão traduzido em todos os 10 idiomas suportados
- ✅ Footer atualizado para v2.4.0 em todas as mensagens

**19/10/2025 - v2.4.0 (Menu de Contexto + Tradução no Canal):**
- ✅ **Menu de contexto para traduzir mensagens** (botão direito)
- ✅ **Tradução aparece só para quem pediu no canal** (mensagem ephemeral)
- ✅ Suporte para 3 idiomas principais: Português, Inglês, Espanhol
- ✅ Mantém sistema de reações para todos os 12 idiomas
- ✅ Sistema híbrido: Menu de contexto (rápido) + Reações (mais idiomas)
- ✅ Documentação atualizada com novo método de uso

**19/10/2025 - v2.3.0 (Comando /invite + Sistema de Convite):**
- ✅ **Novo comando `/invite` para adicionar o bot a outros servidores**
- ✅ Sistema de geração automática de link OAuth2 com permissões corretas
- ✅ Botão interativo com link direto de convite
- ✅ Mensagens de convite em 10 idiomas diferentes
- ✅ Documentação atualizada com instruções de convite
- ✅ Bot agora pode ser adicionado publicamente a qualquer servidor Discord

**19/10/2025 - v2.2.0 (Sistema Multilíngue + Comando /help):**
- ✅ **Sistema completo de internacionalização (i18n)**
- ✅ **Bot responde automaticamente no idioma do usuário**
- ✅ Suporte para 10 idiomas na interface: PT-BR, EN, ES, FR, DE, IT, JA, KO, RU, ZH-CN
- ✅ **Comando slash `/help` com embed interativo e bonito**
- ✅ Sistema de registro automático de comandos na inicialização
- ✅ Handler de interações para comandos slash
- ✅ Mensagens de DM traduzidas para o idioma do usuário
- ✅ Mensagens de erro personalizadas por idioma
- ✅ Documentação atualizada com novo comando

**19/10/2025 - v2.0.0 (Migração para TypeScript + Discloud Ready):**
- ✅ Migração completa de JavaScript para TypeScript
- ✅ Estrutura de pastas profissional (src/, config/, services/, types/)
- ✅ Arquitetura orientada a objetos com classe DiscordTranslatorBot
- ✅ Serviço de tradução isolado (TranslatorService)
- ✅ Sistema de tipos completo com interfaces TypeScript
- ✅ Build automatizado com compilação TypeScript para CommonJS
- ✅ Source maps para debugging
- ✅ Configuração de DM privada para traduções
- ✅ Configuração completa para Discloud (discloud.config + .discloudignore)
- ✅ Sistema de módulos CommonJS para compatibilidade máxima
- ✅ Documentação de deploy detalhada

**19/10/2025 - v1.0.0 (Versão Inicial):**
- Instalação inicial do Node.js 20
- Configuração de dependências (discord.js, biblioteca de tradução)
- Implementação do sistema de tradução por reações
- Adicionado suporte para 12 idiomas diferentes
- Sistema de cache implementado
- Documentação criada (README.md e replit.md)

## 🎮 Como Funciona

### Inicialização
1. Bot obtém token da variável de ambiente DISCORD_BOT_TOKEN
2. Cliente Discord conecta com as intenções necessárias (Guilds, GuildMessages, GuildMessageReactions, MessageContent)
3. **Registra comandos slash automaticamente** (/help, /invite)

### Comando /help
1. Usuário digita `/help` em qualquer canal
2. Bot detecta automaticamente o idioma do Discord do usuário
3. Bot responde com embed interativo **no idioma do usuário** contendo:
   - Lista de idiomas suportados
   - Instruções de uso
   - Dicas e funcionalidades
   - Solução de problemas
   - **Botão de suporte** com link para servidor de ajuda (https://discord.gg/f2jmNWh3WV)

### Comando /invite
1. Usuário digita `/invite` em qualquer canal
2. Bot gera link OAuth2 personalizado com:
   - Client ID do bot
   - Permissões necessárias (View Channels, Send Messages, Add Reactions, Read Message History, Use Slash Commands)
   - Scopes: bot + applications.commands
3. Bot responde com embed **no idioma do usuário** contendo:
   - Botão clicável com link de convite
   - Lista de permissões necessárias
   - Instruções de como adicionar

### Menu de Contexto (Tradução no Canal)
1. Usuário clica com **botão direito** em qualquer mensagem
2. Seleciona **"Traduzir para [idioma]"** no menu
3. Bot traduz a mensagem e responde com **embed ephemeral** (só quem pediu vê)
4. Idiomas disponíveis:
   - 🇧🇷 Traduzir para Português
   - 🇺🇸 Translate to English
   - 🇪🇸 Traducir a Español
5. Tradução aparece **direto no canal** mas visível apenas para quem pediu

### Tradução por Reação
1. Bot monitora eventos de reação em mensagens
2. Valida se emoji corresponde a um idioma suportado
3. Traduz o conteúdo da mensagem para o idioma alvo (com verificação de cache)
4. Armazena tradução no cache (se não existir)
5. **Detecta o idioma do usuário baseado na tradução solicitada**
6. Envia tradução via DM privada **no idioma do usuário** para quem reagiu

## 🚀 Deployment

### Replit

1. Criar bot no Discord Developer Portal
2. Adicionar secret `DISCORD_BOT_TOKEN` no Replit
3. Workflow configurado para executar `npm start` (compila TypeScript e executa)
4. Bot mantido online via Replit Always On / Deployments

### Discloud

O projeto está **100% pronto** para deploy na Discloud com TypeScript:

**1. Preparação:**
```bash
npm run build  # Compila TypeScript para dist/
zip -r bot.zip dist/ node_modules/ package.json package-lock.json discloud.config
```

**2. Arquivos Incluídos:**
- ✅ `dist/` - Código compilado (CommonJS)
- ✅ `node_modules/` - Dependências
- ✅ `package.json` - Configuração do projeto
- ✅ `discloud.config` - Configuração do servidor (MAIN=dist/index.js)

**3. Arquivos Ignorados (via .discloudignore):**
- ❌ `src/` - Código TypeScript original
- ❌ Arquivos de configuração do Replit
- ❌ Documentação e arquivos de desenvolvimento

**4. Variáveis de Ambiente:**
- `DISCORD_BOT_TOKEN` - Configurado na dashboard da Discloud

**5. Configuração (discloud.config):**
```ini
TYPE=bot
MAIN=dist/index.js  # Aponta para código compilado
RAM=100
AUTORESTART=true
VERSION=latest
APT=tools
```

## 📊 Configurações de Permissões

O bot requer:
- **Intents:** Guilds, GuildMessages, GuildMessageReactions, MessageContent
- **Permissões:** Read Messages, Send Messages, Add Reactions, Read Message History

## 🔐 Segurança

- Token do bot armazenado como variável de ambiente (nunca exposto no código)
- `.gitignore` configurado para prevenir commit de secrets (.env)
- Validação de entrada para prevenir processamento de mensagens vazias
- Bot ignora suas próprias mensagens e mensagens de outros bots
- Rate limiting natural via cache de traduções

## 🐛 Problemas Conhecidos

Nenhum no momento.

## 📈 Próximos Passos Sugeridos

1. Adicionar comando para mostrar idiomas disponíveis
2. Implementar sistema de configuração por servidor
3. Adicionar estatísticas de uso
4. Implementar detecção automática de idioma da mensagem original
5. Adicionar suporte para tradução de múltiplas mensagens em thread

## 👤 Preferências do Usuário

- **Idioma preferido:** Português (PT-BR)
- **Objetivo principal:** Bot funcional para tradução via reações
- **Hospedagem desejada:** Discloud (futuramente)
- **Hospedagem atual:** Replit

## 🔄 Workflow

- **Comando:** `npm start` (compila TypeScript e executa)
- **Build:** `npm run build` (compila TypeScript para dist/)
- **Porta:** N/A (bot não é servidor web)
- **Tipo:** Processo contínuo (bot deve ficar online)

## 📊 Arquitetura do Código

### Camadas

1. **Camada de Apresentação** (`src/index.ts`)
   - Classe `DiscordTranslatorBot` gerencia eventos e coordenação
   - Handlers tipados para reações e mensagens

2. **Camada de Serviço** (`src/services/`)
   - `TranslatorService` - Gerencia tradução e cache
   - Métodos isolados e testáveis

3. **Camada de Configuração** (`src/config/`)
   - Configurações de idiomas e constantes
   - Fácil manutenção e expansão

4. **Camada de Tipos** (`src/types/`)
   - Interfaces e tipos TypeScript
   - Contratos claros entre módulos

5. **Camada de Comandos** (`src/commands/`)
   - `help.ts` - Comando /help com embed rico
   - `register.ts` - Sistema de registro de comandos slash
   - Fácil adicionar novos comandos
