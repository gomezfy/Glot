"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translations = void 0;
exports.getUserLocale = getUserLocale;
exports.getMessages = getMessages;
exports.translations = {
    'pt-BR': {
        help: {
            title: '🌍 Bot de Tradução - Ajuda',
            description: 'Traduza mensagens automaticamente usando emojis de bandeiras!',
            howToUse: {
                title: '📖 Como Usar',
                content: '1️⃣ Envie uma mensagem em qualquer canal\n' +
                    '2️⃣ Reaja à mensagem com um emoji de bandeira\n' +
                    '3️⃣ Receba a tradução via **DM privada**!'
            },
            languages: {
                title: '🌐 Idiomas Suportados (12)'
            },
            tips: {
                title: '💡 Dicas',
                content: '• As traduções são enviadas por **mensagem privada** (DM)\n' +
                    '• Certifique-se de que suas DMs estão habilitadas\n' +
                    '• O bot usa cache para evitar traduções duplicadas\n' +
                    '• Funciona com mensagens de até 1000 caracteres'
            },
            features: {
                title: '⚙️ Funcionalidades',
                content: '✅ Tradução automática por reação\n' +
                    '✅ 12 idiomas diferentes\n' +
                    '✅ Sistema de cache inteligente\n' +
                    '✅ Privacidade total (DM apenas para quem reage)\n' +
                    '✅ Suporte a mensagens antigas\n' +
                    '✅ Respostas no seu idioma!'
            },
            troubleshooting: {
                title: '❓ Problemas?',
                content: '• **Não recebi a tradução:** Verifique se suas DMs estão habilitadas\n' +
                    '• **Mensagem vazia:** Bot só traduz mensagens com texto\n' +
                    '• **Erro de tradução:** Tente novamente em alguns segundos'
            },
            supportButton: '💬 Servidor de Suporte',
            footer: 'Bot de Tradução v2.4.0 | Desenvolvido com TypeScript e discord.js'
        },
        invite: {
            title: '🔗 Adicionar Bot ao Servidor',
            description: 'Adicione este bot de tradução ao seu servidor Discord!',
            clickButton: '**Clique no botão abaixo** para adicionar o bot ao seu servidor.',
            permissions: '**Permissões necessárias:**',
            permissionsList: '✅ Ver canais\n' +
                '✅ Enviar mensagens\n' +
                '✅ Adicionar reações\n' +
                '✅ Ler histórico de mensagens\n' +
                '✅ Usar comandos de barra'
        },
        translation: {
            title: '**Tradução para {language}:**',
            originalText: '**Texto original:**',
            translatedText: '**Tradução:**'
        },
        errors: {
            translationFailed: '❌ Desculpe, não consegui traduzir esta mensagem. Possíveis motivos:\n' +
                '• Erro na API de tradução\n' +
                '• Suas DMs estão desativadas\n\n' +
                'Tente novamente em alguns instantes.',
            dmDisabled: '⚠️ Não foi possível enviar DM. Verifique suas configurações de privacidade.'
        }
    },
    'en-US': {
        help: {
            title: '🌍 Translation Bot - Help',
            description: 'Automatically translate messages using flag emojis!',
            howToUse: {
                title: '📖 How to Use',
                content: '1️⃣ Send a message in any channel\n' +
                    '2️⃣ React to the message with a flag emoji\n' +
                    '3️⃣ Receive the translation via **private DM**!'
            },
            languages: {
                title: '🌐 Supported Languages (12)'
            },
            tips: {
                title: '💡 Tips',
                content: '• Translations are sent via **private message** (DM)\n' +
                    '• Make sure your DMs are enabled\n' +
                    '• The bot uses cache to avoid duplicate translations\n' +
                    '• Works with messages up to 1000 characters'
            },
            features: {
                title: '⚙️ Features',
                content: '✅ Automatic translation by reaction\n' +
                    '✅ 12 different languages\n' +
                    '✅ Smart cache system\n' +
                    '✅ Total privacy (DM only for who reacts)\n' +
                    '✅ Support for old messages\n' +
                    '✅ Responses in your language!'
            },
            troubleshooting: {
                title: '❓ Issues?',
                content: '• **Didn\'t receive translation:** Check if your DMs are enabled\n' +
                    '• **Empty message:** Bot only translates text messages\n' +
                    '• **Translation error:** Try again in a few seconds'
            },
            supportButton: '💬 Support Server',
            footer: 'Translation Bot v2.4.0 | Built with TypeScript and discord.js'
        },
        invite: {
            title: '🔗 Add Bot to Server',
            description: 'Add this translation bot to your Discord server!',
            clickButton: '**Click the button below** to add the bot to your server.',
            permissions: '**Required permissions:**',
            permissionsList: '✅ View channels\n' +
                '✅ Send messages\n' +
                '✅ Add reactions\n' +
                '✅ Read message history\n' +
                '✅ Use slash commands'
        },
        translation: {
            title: '**Translation to {language}:**',
            originalText: '**Original text:**',
            translatedText: '**Translation:**'
        },
        errors: {
            translationFailed: '❌ Sorry, I couldn\'t translate this message. Possible reasons:\n' +
                '• Translation API error\n' +
                '• Your DMs are disabled\n\n' +
                'Please try again in a few moments.',
            dmDisabled: '⚠️ Could not send DM. Check your privacy settings.'
        }
    },
    'es-ES': {
        help: {
            title: '🌍 Bot de Traducción - Ayuda',
            description: '¡Traduce mensajes automáticamente usando emojis de banderas!',
            howToUse: {
                title: '📖 Cómo Usar',
                content: '1️⃣ Envía un mensaje en cualquier canal\n' +
                    '2️⃣ Reacciona al mensaje con un emoji de bandera\n' +
                    '3️⃣ ¡Recibe la traducción vía **MD privado**!'
            },
            languages: {
                title: '🌐 Idiomas Compatibles (12)'
            },
            tips: {
                title: '💡 Consejos',
                content: '• Las traducciones se envían por **mensaje privado** (MD)\n' +
                    '• Asegúrate de que tus MDs estén habilitados\n' +
                    '• El bot usa caché para evitar traducciones duplicadas\n' +
                    '• Funciona con mensajes de hasta 1000 caracteres'
            },
            features: {
                title: '⚙️ Funcionalidades',
                content: '✅ Traducción automática por reacción\n' +
                    '✅ 12 idiomas diferentes\n' +
                    '✅ Sistema de caché inteligente\n' +
                    '✅ Privacidad total (MD solo para quien reacciona)\n' +
                    '✅ Soporte para mensajes antiguos\n' +
                    '✅ ¡Respuestas en tu idioma!'
            },
            troubleshooting: {
                title: '❓ ¿Problemas?',
                content: '• **No recibí la traducción:** Verifica si tus MDs están habilitados\n' +
                    '• **Mensaje vacío:** El bot solo traduce mensajes con texto\n' +
                    '• **Error de traducción:** Intenta de nuevo en unos segundos'
            },
            supportButton: '💬 Servidor de Soporte',
            footer: 'Bot de Traducción v2.4.0 | Desarrollado con TypeScript y discord.js'
        },
        invite: {
            title: '🔗 Añadir Bot al Servidor',
            description: '¡Añade este bot de traducción a tu servidor de Discord!',
            clickButton: '**Haz clic en el botón de abajo** para añadir el bot a tu servidor.',
            permissions: '**Permisos necesarios:**',
            permissionsList: '✅ Ver canales\n' +
                '✅ Enviar mensajes\n' +
                '✅ Añadir reacciones\n' +
                '✅ Leer historial de mensajes\n' +
                '✅ Usar comandos de barra'
        },
        translation: {
            title: '**Traducción a {language}:**',
            originalText: '**Texto original:**',
            translatedText: '**Traducción:**'
        },
        errors: {
            translationFailed: '❌ Lo siento, no pude traducir este mensaje. Posibles razones:\n' +
                '• Error en la API de traducción\n' +
                '• Tus MDs están desactivados\n\n' +
                'Intenta de nuevo en unos momentos.',
            dmDisabled: '⚠️ No se pudo enviar MD. Verifica tu configuración de privacidad.'
        }
    },
    'fr': {
        help: {
            title: '🌍 Bot de Traduction - Aide',
            description: 'Traduisez automatiquement les messages en utilisant des emojis de drapeaux!',
            howToUse: {
                title: '📖 Comment Utiliser',
                content: '1️⃣ Envoyez un message dans n\'importe quel canal\n' +
                    '2️⃣ Réagissez au message avec un emoji de drapeau\n' +
                    '3️⃣ Recevez la traduction via **MP privé**!'
            },
            languages: {
                title: '🌐 Langues Supportées (12)'
            },
            tips: {
                title: '💡 Conseils',
                content: '• Les traductions sont envoyées par **message privé** (MP)\n' +
                    '• Assurez-vous que vos MPs sont activés\n' +
                    '• Le bot utilise le cache pour éviter les traductions en double\n' +
                    '• Fonctionne avec des messages jusqu\'à 1000 caractères'
            },
            features: {
                title: '⚙️ Fonctionnalités',
                content: '✅ Traduction automatique par réaction\n' +
                    '✅ 12 langues différentes\n' +
                    '✅ Système de cache intelligent\n' +
                    '✅ Confidentialité totale (MP uniquement pour qui réagit)\n' +
                    '✅ Support des anciens messages\n' +
                    '✅ Réponses dans votre langue!'
            },
            troubleshooting: {
                title: '❓ Problèmes?',
                content: '• **Je n\'ai pas reçu la traduction:** Vérifiez si vos MPs sont activés\n' +
                    '• **Message vide:** Le bot ne traduit que les messages texte\n' +
                    '• **Erreur de traduction:** Réessayez dans quelques secondes'
            },
            supportButton: '💬 Serveur d\'Assistance',
            footer: 'Bot de Traduction v2.4.0 | Développé avec TypeScript et discord.js'
        },
        invite: {
            title: '🔗 Ajouter le Bot au Serveur',
            description: 'Ajoutez ce bot de traduction à votre serveur Discord!',
            clickButton: '**Cliquez sur le bouton ci-dessous** pour ajouter le bot à votre serveur.',
            permissions: '**Permissions requises:**',
            permissionsList: '✅ Voir les canaux\n' +
                '✅ Envoyer des messages\n' +
                '✅ Ajouter des réactions\n' +
                '✅ Lire l\'historique des messages\n' +
                '✅ Utiliser les commandes slash'
        },
        translation: {
            title: '**Traduction en {language}:**',
            originalText: '**Texte original:**',
            translatedText: '**Traduction:**'
        },
        errors: {
            translationFailed: '❌ Désolé, je n\'ai pas pu traduire ce message. Raisons possibles:\n' +
                '• Erreur de l\'API de traduction\n' +
                '• Vos MPs sont désactivés\n\n' +
                'Veuillez réessayer dans quelques instants.',
            dmDisabled: '⚠️ Impossible d\'envoyer un MP. Vérifiez vos paramètres de confidentialité.'
        }
    },
    'de': {
        help: {
            title: '🌍 Übersetzungs-Bot - Hilfe',
            description: 'Übersetzen Sie Nachrichten automatisch mit Flaggen-Emojis!',
            howToUse: {
                title: '📖 Wie zu Verwenden',
                content: '1️⃣ Senden Sie eine Nachricht in einem beliebigen Kanal\n' +
                    '2️⃣ Reagieren Sie auf die Nachricht mit einem Flaggen-Emoji\n' +
                    '3️⃣ Erhalten Sie die Übersetzung per **privater DM**!'
            },
            languages: {
                title: '🌐 Unterstützte Sprachen (12)'
            },
            tips: {
                title: '💡 Tipps',
                content: '• Übersetzungen werden per **Privatnachricht** (DM) gesendet\n' +
                    '• Stellen Sie sicher, dass Ihre DMs aktiviert sind\n' +
                    '• Der Bot verwendet Cache, um doppelte Übersetzungen zu vermeiden\n' +
                    '• Funktioniert mit Nachrichten bis zu 1000 Zeichen'
            },
            features: {
                title: '⚙️ Funktionen',
                content: '✅ Automatische Übersetzung durch Reaktion\n' +
                    '✅ 12 verschiedene Sprachen\n' +
                    '✅ Intelligentes Cache-System\n' +
                    '✅ Totale Privatsphäre (DM nur für Reagierende)\n' +
                    '✅ Unterstützung für alte Nachrichten\n' +
                    '✅ Antworten in Ihrer Sprache!'
            },
            troubleshooting: {
                title: '❓ Probleme?',
                content: '• **Übersetzung nicht erhalten:** Überprüfen Sie, ob Ihre DMs aktiviert sind\n' +
                    '• **Leere Nachricht:** Bot übersetzt nur Textnachrichten\n' +
                    '• **Übersetzungsfehler:** Versuchen Sie es in einigen Sekunden erneut'
            },
            supportButton: '💬 Support-Server',
            footer: 'Übersetzungs-Bot v2.4.0 | Erstellt mit TypeScript und discord.js'
        },
        invite: {
            title: '🔗 Bot zum Server Hinzufügen',
            description: 'Fügen Sie diesen Übersetzungs-Bot zu Ihrem Discord-Server hinzu!',
            clickButton: '**Klicken Sie auf die Schaltfläche unten**, um den Bot zu Ihrem Server hinzuzufügen.',
            permissions: '**Erforderliche Berechtigungen:**',
            permissionsList: '✅ Kanäle anzeigen\n' +
                '✅ Nachrichten senden\n' +
                '✅ Reaktionen hinzufügen\n' +
                '✅ Nachrichtenverlauf lesen\n' +
                '✅ Slash-Befehle verwenden'
        },
        translation: {
            title: '**Übersetzung auf {language}:**',
            originalText: '**Originaltext:**',
            translatedText: '**Übersetzung:**'
        },
        errors: {
            translationFailed: '❌ Entschuldigung, ich konnte diese Nachricht nicht übersetzen. Mögliche Gründe:\n' +
                '• Übersetzungs-API-Fehler\n' +
                '• Ihre DMs sind deaktiviert\n\n' +
                'Bitte versuchen Sie es in einigen Augenblicken erneut.',
            dmDisabled: '⚠️ Konnte DM nicht senden. Überprüfen Sie Ihre Datenschutzeinstellungen.'
        }
    },
    'it': {
        help: {
            title: '🌍 Bot di Traduzione - Aiuto',
            description: 'Traduci automaticamente i messaggi usando emoji di bandiere!',
            howToUse: {
                title: '📖 Come Usare',
                content: '1️⃣ Invia un messaggio in qualsiasi canale\n' +
                    '2️⃣ Reagisci al messaggio con un emoji di bandiera\n' +
                    '3️⃣ Ricevi la traduzione tramite **DM privato**!'
            },
            languages: {
                title: '🌐 Lingue Supportate (12)'
            },
            tips: {
                title: '💡 Suggerimenti',
                content: '• Le traduzioni vengono inviate tramite **messaggio privato** (DM)\n' +
                    '• Assicurati che i tuoi DM siano abilitati\n' +
                    '• Il bot usa la cache per evitare traduzioni duplicate\n' +
                    '• Funziona con messaggi fino a 1000 caratteri'
            },
            features: {
                title: '⚙️ Funzionalità',
                content: '✅ Traduzione automatica tramite reazione\n' +
                    '✅ 12 lingue diverse\n' +
                    '✅ Sistema di cache intelligente\n' +
                    '✅ Privacy totale (DM solo per chi reagisce)\n' +
                    '✅ Supporto per vecchi messaggi\n' +
                    '✅ Risposte nella tua lingua!'
            },
            troubleshooting: {
                title: '❓ Problemi?',
                content: '• **Non ho ricevuto la traduzione:** Verifica se i tuoi DM sono abilitati\n' +
                    '• **Messaggio vuoto:** Il bot traduce solo messaggi di testo\n' +
                    '• **Errore di traduzione:** Riprova tra qualche secondo'
            },
            supportButton: '💬 Server di Supporto',
            footer: 'Bot di Traduzione v2.4.0 | Sviluppato con TypeScript e discord.js'
        },
        invite: {
            title: '🔗 Aggiungi Bot al Server',
            description: 'Aggiungi questo bot di traduzione al tuo server Discord!',
            clickButton: '**Fai clic sul pulsante qui sotto** per aggiungere il bot al tuo server.',
            permissions: '**Permessi richiesti:**',
            permissionsList: '✅ Visualizza canali\n' +
                '✅ Invia messaggi\n' +
                '✅ Aggiungi reazioni\n' +
                '✅ Leggi cronologia messaggi\n' +
                '✅ Usa comandi slash'
        },
        translation: {
            title: '**Traduzione in {language}:**',
            originalText: '**Testo originale:**',
            translatedText: '**Traduzione:**'
        },
        errors: {
            translationFailed: '❌ Spiacente, non sono riuscito a tradurre questo messaggio. Possibili motivi:\n' +
                '• Errore API di traduzione\n' +
                '• I tuoi DM sono disabilitati\n\n' +
                'Riprova tra qualche istante.',
            dmDisabled: '⚠️ Impossibile inviare DM. Controlla le tue impostazioni di privacy.'
        }
    },
    'ja': {
        help: {
            title: '🌍 翻訳ボット - ヘルプ',
            description: '旗の絵文字を使ってメッセージを自動翻訳！',
            howToUse: {
                title: '📖 使い方',
                content: '1️⃣ 任意のチャンネルにメッセージを送信\n' +
                    '2️⃣ 旗の絵文字でメッセージにリアクション\n' +
                    '3️⃣ **プライベートDM**で翻訳を受け取る！'
            },
            languages: {
                title: '🌐 対応言語 (12)'
            },
            tips: {
                title: '💡 ヒント',
                content: '• 翻訳は**プライベートメッセージ**（DM）で送信されます\n' +
                    '• DMが有効になっていることを確認してください\n' +
                    '• ボットは重複翻訳を避けるためにキャッシュを使用します\n' +
                    '• 1000文字までのメッセージに対応'
            },
            features: {
                title: '⚙️ 機能',
                content: '✅ リアクションによる自動翻訳\n' +
                    '✅ 12の異なる言語\n' +
                    '✅ スマートキャッシュシステム\n' +
                    '✅ 完全なプライバシー（リアクションした人にのみDM）\n' +
                    '✅ 古いメッセージのサポート\n' +
                    '✅ あなたの言語で応答！'
            },
            troubleshooting: {
                title: '❓ 問題?',
                content: '• **翻訳が届かない:** DMが有効か確認してください\n' +
                    '• **空のメッセージ:** ボットはテキストメッセージのみ翻訳します\n' +
                    '• **翻訳エラー:** 数秒後に再試行してください'
            },
            supportButton: '💬 サポートサーバー',
            footer: '翻訳ボット v2.4.0 | TypeScriptとdiscord.jsで開発'
        },
        invite: {
            title: '🔗 サーバーにボットを追加',
            description: 'この翻訳ボットをDiscordサーバーに追加しましょう！',
            clickButton: '**下のボタンをクリック**してサーバーにボットを追加してください。',
            permissions: '**必要な権限:**',
            permissionsList: '✅ チャンネルを見る\n' +
                '✅ メッセージを送信\n' +
                '✅ リアクションを追加\n' +
                '✅ メッセージ履歴を読む\n' +
                '✅ スラッシュコマンドを使用'
        },
        translation: {
            title: '**{language}への翻訳:**',
            originalText: '**元のテキスト:**',
            translatedText: '**翻訳:**'
        },
        errors: {
            translationFailed: '❌ 申し訳ありませんが、このメッセージを翻訳できませんでした。考えられる理由:\n' +
                '• 翻訳APIエラー\n' +
                '• DMが無効になっています\n\n' +
                'しばらくしてから再試行してください。',
            dmDisabled: '⚠️ DMを送信できませんでした。プライバシー設定を確認してください。'
        }
    },
    'ko': {
        help: {
            title: '🌍 번역 봇 - 도움말',
            description: '국기 이모티콘을 사용하여 메시지를 자동으로 번역하세요!',
            howToUse: {
                title: '📖 사용 방법',
                content: '1️⃣ 아무 채널에나 메시지 보내기\n' +
                    '2️⃣ 국기 이모티콘으로 메시지에 반응하기\n' +
                    '3️⃣ **개인 DM**으로 번역 받기!'
            },
            languages: {
                title: '🌐 지원 언어 (12개)'
            },
            tips: {
                title: '💡 팁',
                content: '• 번역은 **개인 메시지**(DM)로 전송됩니다\n' +
                    '• DM이 활성화되어 있는지 확인하세요\n' +
                    '• 봇은 중복 번역을 피하기 위해 캐시를 사용합니다\n' +
                    '• 최대 1000자 메시지까지 작동'
            },
            features: {
                title: '⚙️ 기능',
                content: '✅ 반응을 통한 자동 번역\n' +
                    '✅ 12개의 다른 언어\n' +
                    '✅ 스마트 캐시 시스템\n' +
                    '✅ 완전한 개인 정보 보호 (반응한 사람에게만 DM)\n' +
                    '✅ 이전 메시지 지원\n' +
                    '✅ 귀하의 언어로 응답!'
            },
            troubleshooting: {
                title: '❓ 문제?',
                content: '• **번역을 받지 못함:** DM이 활성화되어 있는지 확인하세요\n' +
                    '• **빈 메시지:** 봇은 텍스트 메시지만 번역합니다\n' +
                    '• **번역 오류:** 몇 초 후에 다시 시도하세요'
            },
            supportButton: '💬 지원 서버',
            footer: '번역 봇 v2.4.0 | TypeScript 및 discord.js로 제작'
        },
        invite: {
            title: '🔗 서버에 봇 추가',
            description: '이 번역 봇을 Discord 서버에 추가하세요!',
            clickButton: '**아래 버튼을 클릭**하여 서버에 봇을 추가하세요.',
            permissions: '**필요한 권한:**',
            permissionsList: '✅ 채널 보기\n' +
                '✅ 메시지 보내기\n' +
                '✅ 반응 추가\n' +
                '✅ 메시지 기록 읽기\n' +
                '✅ 슬래시 명령어 사용'
        },
        translation: {
            title: '**{language}(으)로 번역:**',
            originalText: '**원본 텍스트:**',
            translatedText: '**번역:**'
        },
        errors: {
            translationFailed: '❌ 죄송합니다. 이 메시지를 번역할 수 없었습니다. 가능한 이유:\n' +
                '• 번역 API 오류\n' +
                '• DM이 비활성화됨\n\n' +
                '잠시 후 다시 시도해주세요.',
            dmDisabled: '⚠️ DM을 보낼 수 없습니다. 개인 정보 설정을 확인하세요.'
        }
    },
    'ru': {
        help: {
            title: '🌍 Бот Переводчик - Помощь',
            description: 'Автоматически переводите сообщения с помощью эмодзи флагов!',
            howToUse: {
                title: '📖 Как Использовать',
                content: '1️⃣ Отправьте сообщение в любой канал\n' +
                    '2️⃣ Отреагируйте на сообщение эмодзи флага\n' +
                    '3️⃣ Получите перевод через **личное сообщение**!'
            },
            languages: {
                title: '🌐 Поддерживаемые Языки (12)'
            },
            tips: {
                title: '💡 Советы',
                content: '• Переводы отправляются **личным сообщением** (ЛС)\n' +
                    '• Убедитесь, что ваши ЛС включены\n' +
                    '• Бот использует кеш, чтобы избежать дублирования переводов\n' +
                    '• Работает с сообщениями до 1000 символов'
            },
            features: {
                title: '⚙️ Возможности',
                content: '✅ Автоматический перевод по реакции\n' +
                    '✅ 12 разных языков\n' +
                    '✅ Умная система кеширования\n' +
                    '✅ Полная конфиденциальность (ЛС только для реагирующих)\n' +
                    '✅ Поддержка старых сообщений\n' +
                    '✅ Ответы на вашем языке!'
            },
            troubleshooting: {
                title: '❓ Проблемы?',
                content: '• **Не получил перевод:** Проверьте, включены ли ваши ЛС\n' +
                    '• **Пустое сообщение:** Бот переводит только текстовые сообщения\n' +
                    '• **Ошибка перевода:** Попробуйте снова через несколько секунд'
            },
            supportButton: '💬 Сервер Поддержки',
            footer: 'Бот Переводчик v2.4.0 | Разработано на TypeScript и discord.js'
        },
        invite: {
            title: '🔗 Добавить Бота на Сервер',
            description: 'Добавьте этого бота-переводчика на свой Discord-сервер!',
            clickButton: '**Нажмите на кнопку ниже**, чтобы добавить бота на свой сервер.',
            permissions: '**Необходимые разрешения:**',
            permissionsList: '✅ Просмотр каналов\n' +
                '✅ Отправка сообщений\n' +
                '✅ Добавление реакций\n' +
                '✅ Чтение истории сообщений\n' +
                '✅ Использование слэш-команд'
        },
        translation: {
            title: '**Перевод на {language}:**',
            originalText: '**Исходный текст:**',
            translatedText: '**Перевод:**'
        },
        errors: {
            translationFailed: '❌ Извините, не удалось перевести это сообщение. Возможные причины:\n' +
                '• Ошибка API перевода\n' +
                '• Ваши ЛС отключены\n\n' +
                'Пожалуйста, попробуйте снова через несколько мгновений.',
            dmDisabled: '⚠️ Не удалось отправить ЛС. Проверьте настройки конфиденциальности.'
        }
    },
    'zh-CN': {
        help: {
            title: '🌍 翻译机器人 - 帮助',
            description: '使用国旗表情符号自动翻译消息！',
            howToUse: {
                title: '📖 如何使用',
                content: '1️⃣ 在任意频道发送消息\n' +
                    '2️⃣ 用国旗表情符号对消息做出反应\n' +
                    '3️⃣ 通过**私信**接收翻译！'
            },
            languages: {
                title: '🌐 支持的语言 (12种)'
            },
            tips: {
                title: '💡 提示',
                content: '• 翻译通过**私信**（DM）发送\n' +
                    '• 确保您的私信已启用\n' +
                    '• 机器人使用缓存避免重复翻译\n' +
                    '• 支持最多1000个字符的消息'
            },
            features: {
                title: '⚙️ 功能',
                content: '✅ 通过反应自动翻译\n' +
                    '✅ 12种不同的语言\n' +
                    '✅ 智能缓存系统\n' +
                    '✅ 完全隐私（仅向反应者发送私信）\n' +
                    '✅ 支持旧消息\n' +
                    '✅ 用您的语言回复！'
            },
            troubleshooting: {
                title: '❓ 问题？',
                content: '• **没有收到翻译：** 检查您的私信是否已启用\n' +
                    '• **空消息：** 机器人只翻译文本消息\n' +
                    '• **翻译错误：** 几秒钟后重试'
            },
            supportButton: '💬 支持服务器',
            footer: '翻译机器人 v2.4.0 | 使用TypeScript和discord.js开发'
        },
        invite: {
            title: '🔗 添加机器人到服务器',
            description: '将此翻译机器人添加到您的Discord服务器！',
            clickButton: '**点击下面的按钮**将机器人添加到您的服务器。',
            permissions: '**所需权限:**',
            permissionsList: '✅ 查看频道\n' +
                '✅ 发送消息\n' +
                '✅ 添加反应\n' +
                '✅ 阅读消息历史\n' +
                '✅ 使用斜杠命令'
        },
        translation: {
            title: '**翻译成{language}:**',
            originalText: '**原文:**',
            translatedText: '**翻译:**'
        },
        errors: {
            translationFailed: '❌ 抱歉，无法翻译此消息。可能的原因:\n' +
                '• 翻译API错误\n' +
                '• 您的私信已禁用\n\n' +
                '请稍后重试。',
            dmDisabled: '⚠️ 无法发送私信。请检查您的隐私设置。'
        }
    }
};
function getUserLocale(discordLocale) {
    const localeMap = {
        'pt-BR': 'pt-BR',
        'en-US': 'en-US',
        'en-GB': 'en-US',
        'es-ES': 'es-ES',
        'es-419': 'es-ES',
        'fr': 'fr',
        'de': 'de',
        'it': 'it',
        'ja': 'ja',
        'ko': 'ko',
        'ru': 'ru',
        'zh-CN': 'zh-CN',
        'zh-TW': 'zh-CN'
    };
    return localeMap[discordLocale] || 'en-US';
}
function getMessages(locale) {
    return exports.translations[locale] || exports.translations['en-US'];
}
//# sourceMappingURL=i18n.js.map