// 国际化（i18n）系统
const i18n = {
    // 当前语言
    currentLanguage: 'en',
    
    // 支持的语言配置
    languages: {
        'zh': { 
            name: '中文', 
            flag: '🇨🇳',
            speechLang: 'zh-CN'
        },
        'en': { 
            name: 'English', 
            flag: '🇺🇸',
            speechLang: 'en-US'
        },
        'ja': { 
            name: '日本語', 
            flag: '🇯🇵',
            speechLang: 'ja-JP'
        },
        'fr': { 
            name: 'Français', 
            flag: '🇫🇷',
            speechLang: 'fr-FR'
        },
        'de': { 
            name: 'Deutsch', 
            flag: '🇩🇪',
            speechLang: 'de-DE'
        },
        'es': { 
            name: 'Español', 
            flag: '🇪🇸',
            speechLang: 'es-ES'
        }
    },
    
    // 翻译文本
    translations: {
        zh: {
            appTitle: '听写助手',
            startRecording: '开始录制',
            stopRecording: '结束录制',
            startDictation: '开始听写',
            pauseDictation: '暂停听写',
            statusReady: '准备就绪',
            statusRecording: '正在录音...',
            statusProcessing: '正在处理录音...',
            statusComplete: '录音完成,已分割为 {count} 个片段',
            statusRestored: '已恢复 {count} 个片段',
            statusRestoredWithProgress: '已恢复 {count} 个片段（已完成 {played}/{total}）',
            statusNoSegments: '未检测到有效语音片段',
            statusInterrupted: '录音已中断，请重新开始录制',
            
            visualizerLabel: '实时音频波形',
            
            voiceControlTitle: '语音控制听写',
            voiceControlOff: '语音控制已关闭',
            voiceControlListening: '正在监听...',
            voiceControlWaiting: '等待语音命令...',
            
            commandsTitle: '可用命令：',
            commandStart: '开始 - 开始听写',
            commandNext: '好了 - 播放下一个片段',
            commandReplay: '什么 - 重新播放当前片段',
            commandPrevious: '上一个 - 播放上一个片段',
            
            settingsTitle: '高级设置',
            settingSilence: '停顿阈值 (秒):',
            settingVolume: '音量阈值:',
            settingLanguage: '语言:',
            
            segmentsTitle: '录音片段',
            playButton: '播放',
            
            emptyState: '点击"开始录制"按钮开始录音<br>每词间隔一秒',
            
            alertNeedRecording: '请先录制听写内容',
            alertMicPermission: '无法访问麦克风,请检查权限设置',
            alertRecordingInterrupted: '录音在锁屏期间被中断，请重新开始录制',
            alertStorageFull: '存储空间不足，无法保存录音数据',
            
            wechatTitle: '无法使用录音功能',
            wechatText: '微信内置浏览器限制了麦克风权限<br>请在系统浏览器中打开',
            wechatStep1: '点击右上角 ··· 菜单',
            wechatStep2: '选择 在浏览器中打开',
            wechatSupport: '支持 Chrome、Safari、Edge 等浏览器'
        },
        
        en: {
            appTitle: 'Dictation Assistant',
            startRecording: 'Start Recording',
            stopRecording: 'Stop Recording',
            startDictation: 'Start Dictation',
            pauseDictation: 'Pause Dictation',
            statusReady: 'Ready',
            statusRecording: 'Recording...',
            statusProcessing: 'Processing...',
            statusComplete: 'Recording complete, split into {count} segments',
            statusRestored: '{count} segments restored',
            statusRestoredWithProgress: '{count} segments restored (completed {played}/{total})',
            statusNoSegments: 'No valid voice segments detected',
            statusInterrupted: 'Recording interrupted, please start again',
            
            visualizerLabel: 'Live Audio Waveform',
            
            voiceControlTitle: 'Voice Control',
            voiceControlOff: 'Voice control off',
            voiceControlListening: 'Listening...',
            voiceControlWaiting: 'Waiting for command...',
            
            commandsTitle: 'Available Commands:',
            commandStart: 'Start - Begin dictation',
            commandNext: 'Next - Play next segment',
            commandReplay: 'Repeat - Replay current segment',
            commandPrevious: 'Previous - Play previous segment',
            
            settingsTitle: 'Advanced Settings',
            settingSilence: 'Silence Threshold (sec):',
            settingVolume: 'Volume Threshold:',
            settingLanguage: 'Language:',
            
            segmentsTitle: 'Audio Segments',
            playButton: 'Play',
            
            emptyState: 'Click "Start Recording" to begin<br>Pause 1 second between words',
            
            alertNeedRecording: 'Please record content first',
            alertMicPermission: 'Cannot access microphone, please check permissions',
            alertRecordingInterrupted: 'Recording interrupted during lock screen, please start again',
            alertStorageFull: 'Storage full, cannot save recording',
            
            wechatTitle: 'Recording Not Available',
            wechatText: 'WeChat browser restricts microphone access<br>Please open in system browser',
            wechatStep1: 'Tap ··· menu in top-right',
            wechatStep2: 'Select "Open in Browser"',
            wechatSupport: 'Supports Chrome, Safari, Edge, etc.'
        },
        
        ja: {
            appTitle: '聴写アシスタント',
            startRecording: '録音開始',
            stopRecording: '録音停止',
            startDictation: '聴写開始',
            pauseDictation: '一時停止',
            statusReady: '準備完了',
            statusRecording: '録音中...',
            statusProcessing: '処理中...',
            statusComplete: '録音完了、{count}個のセグメントに分割',
            statusRestored: '{count}個のセグメントを復元',
            statusRestoredWithProgress: '{count}個のセグメントを復元（完了 {played}/{total}）',
            statusNoSegments: '有効な音声セグメントが検出されませんでした',
            statusInterrupted: '録音が中断されました、再開してください',
            
            visualizerLabel: 'リアルタイム音声波形',
            
            voiceControlTitle: '音声コントロール',
            voiceControlOff: '音声コントロールオフ',
            voiceControlListening: '聞いています...',
            voiceControlWaiting: 'コマンド待機中...',
            
            commandsTitle: '使用可能なコマンド：',
            commandStart: '開始 - 聴写を開始',
            commandNext: '次 - 次のセグメントを再生',
            commandReplay: '何 - 現在のセグメントを再生',
            commandPrevious: '前 - 前のセグメントを再生',
            
            settingsTitle: '詳細設定',
            settingSilence: '無音閾値 (秒):',
            settingVolume: '音量閾値:',
            settingLanguage: '言語:',
            
            segmentsTitle: '音声セグメント',
            playButton: '再生',
            
            emptyState: '「録音開始」をクリックして開始<br>単語間に1秒の間隔',
            
            alertNeedRecording: '先に内容を録音してください',
            alertMicPermission: 'マイクにアクセスできません、権限を確認してください',
            alertRecordingInterrupted: 'ロック画面中に録音が中断されました、再開してください',
            alertStorageFull: 'ストレージ容量不足、録音を保存できません',
            
            wechatTitle: '録音機能が使用できません',
            wechatText: 'WeChatブラウザはマイクアクセスを制限しています<br>システムブラウザで開いてください',
            wechatStep1: '右上の ··· メニューをタップ',
            wechatStep2: '「ブラウザで開く」を選択',
            wechatSupport: 'Chrome、Safari、Edgeなどをサポート'
        },
        
        fr: {
            appTitle: 'Assistant de Dictée',
            startRecording: 'Démarrer',
            stopRecording: 'Arrêter',
            startDictation: 'Commencer',
            pauseDictation: 'Pause',
            statusReady: 'Prêt',
            statusRecording: 'Enregistrement...',
            statusProcessing: 'Traitement...',
            statusComplete: 'Enregistrement terminé, divisé en {count} segments',
            statusRestored: '{count} segments restaurés',
            statusRestoredWithProgress: '{count} segments restaurés (complété {played}/{total})',
            statusNoSegments: 'Aucun segment vocal valide détecté',
            statusInterrupted: 'Enregistrement interrompu, veuillez recommencer',
            
            visualizerLabel: 'Forme d\'onde en direct',
            
            voiceControlTitle: 'Contrôle vocal',
            voiceControlOff: 'Contrôle vocal désactivé',
            voiceControlListening: 'Écoute...',
            voiceControlWaiting: 'En attente de commande...',
            
            commandsTitle: 'Commandes disponibles :',
            commandStart: 'Commencer - Démarrer la dictée',
            commandNext: 'Suivant - Segment suivant',
            commandReplay: 'Répéter - Rejouer le segment',
            commandPrevious: 'Précédent - Segment précédent',
            
            settingsTitle: 'Paramètres avancés',
            settingSilence: 'Seuil de silence (sec):',
            settingVolume: 'Seuil de volume:',
            settingLanguage: 'Langue:',
            
            segmentsTitle: 'Segments audio',
            playButton: 'Lire',
            
            emptyState: 'Cliquez sur "Démarrer" pour commencer<br>Pause d\'1 seconde entre les mots',
            
            alertNeedRecording: 'Veuillez d\'abord enregistrer du contenu',
            alertMicPermission: 'Impossible d\'accéder au microphone, vérifiez les autorisations',
            alertRecordingInterrupted: 'Enregistrement interrompu pendant le verrouillage, recommencez',
            alertStorageFull: 'Stockage plein, impossible d\'enregistrer',
            
            wechatTitle: 'Fonction d\'enregistrement non disponible',
            wechatText: 'Le navigateur WeChat restreint l\'accès au microphone<br>Veuillez ouvrir dans le navigateur système',
            wechatStep1: 'Appuyez sur le menu ··· en haut à droite',
            wechatStep2: 'Sélectionnez "Ouvrir dans le navigateur"',
            wechatSupport: 'Supporte Chrome, Safari, Edge, etc.'
        },
        
        de: {
            appTitle: 'Diktat-Assistent',
            startRecording: 'Aufnahme starten',
            stopRecording: 'Aufnahme stoppen',
            startDictation: 'Diktat starten',
            pauseDictation: 'Pause',
            statusReady: 'Bereit',
            statusRecording: 'Aufnahme läuft...',
            statusProcessing: 'Verarbeitung...',
            statusComplete: 'Aufnahme abgeschlossen, in {count} Segmente aufgeteilt',
            statusRestored: '{count} Segmente wiederhergestellt',
            statusRestoredWithProgress: '{count} Segmente wiederhergestellt (abgeschlossen {played}/{total})',
            statusNoSegments: 'Keine gültigen Sprachsegmente erkannt',
            statusInterrupted: 'Aufnahme unterbrochen, bitte neu starten',
            
            visualizerLabel: 'Live-Audio-Wellenform',
            
            voiceControlTitle: 'Sprachsteuerung',
            voiceControlOff: 'Sprachsteuerung aus',
            voiceControlListening: 'Hört zu...',
            voiceControlWaiting: 'Warten auf Befehl...',
            
            commandsTitle: 'Verfügbare Befehle:',
            commandStart: 'Start - Diktat beginnen',
            commandNext: 'Weiter - Nächstes Segment',
            commandReplay: 'Wiederholen - Aktuelles Segment',
            commandPrevious: 'Zurück - Vorheriges Segment',
            
            settingsTitle: 'Erweiterte Einstellungen',
            settingSilence: 'Pausenschwelle (Sek.):',
            settingVolume: 'Lautstärkeschwelle:',
            settingLanguage: 'Sprache:',
            
            segmentsTitle: 'Audio-Segmente',
            playButton: 'Abspielen',
            
            emptyState: 'Klicken Sie auf "Aufnahme starten"<br>1 Sekunde Pause zwischen Wörtern',
            
            alertNeedRecording: 'Bitte zuerst Inhalt aufnehmen',
            alertMicPermission: 'Kein Mikrofonzugriff, bitte Berechtigungen prüfen',
            alertRecordingInterrupted: 'Aufnahme während Bildschirmsperre unterbrochen, bitte neu starten',
            alertStorageFull: 'Speicher voll, Aufnahme kann nicht gespeichert werden',
            
            wechatTitle: 'Aufnahmefunktion nicht verfügbar',
            wechatText: 'WeChat-Browser beschränkt Mikrofonzugriff<br>Bitte im Systembrowser öffnen',
            wechatStep1: 'Tippen Sie auf ··· Menü oben rechts',
            wechatStep2: 'Wählen Sie "Im Browser öffnen"',
            wechatSupport: 'Unterstützt Chrome, Safari, Edge usw.'
        },
        
        es: {
            appTitle: 'Asistente de Dictado',
            startRecording: 'Iniciar grabación',
            stopRecording: 'Detener grabación',
            startDictation: 'Iniciar dictado',
            pauseDictation: 'Pausar',
            statusReady: 'Listo',
            statusRecording: 'Grabando...',
            statusProcessing: 'Procesando...',
            statusComplete: 'Grabación completa, dividida en {count} segmentos',
            statusRestored: '{count} segmentos restaurados',
            statusRestoredWithProgress: '{count} segmentos restaurados (completado {played}/{total})',
            statusNoSegments: 'No se detectaron segmentos de voz válidos',
            statusInterrupted: 'Grabación interrumpida, por favor reinicie',
            
            visualizerLabel: 'Forma de onda en vivo',
            
            voiceControlTitle: 'Control por voz',
            voiceControlOff: 'Control por voz desactivado',
            voiceControlListening: 'Escuchando...',
            voiceControlWaiting: 'Esperando comando...',
            
            commandsTitle: 'Comandos disponibles:',
            commandStart: 'Empezar - Iniciar dictado',
            commandNext: 'Siguiente - Siguiente segmento',
            commandReplay: 'Repetir - Repetir segmento',
            commandPrevious: 'Anterior - Segmento anterior',
            
            settingsTitle: 'Configuración avanzada',
            settingSilence: 'Umbral de silencio (seg.):',
            settingVolume: 'Umbral de volumen:',
            settingLanguage: 'Idioma:',
            
            segmentsTitle: 'Segmentos de audio',
            playButton: 'Reproducir',
            
            emptyState: 'Haga clic en "Iniciar grabación"<br>Pausa de 1 segundo entre palabras',
            
            alertNeedRecording: 'Por favor grabe contenido primero',
            alertMicPermission: 'No se puede acceder al micrófono, verifique los permisos',
            alertRecordingInterrupted: 'Grabación interrumpida durante bloqueo de pantalla, reinicie',
            alertStorageFull: 'Almacenamiento lleno, no se puede guardar',
            
            wechatTitle: 'Función de grabación no disponible',
            wechatText: 'El navegador WeChat restringe el acceso al micrófono<br>Ábralo en el navegador del sistema',
            wechatStep1: 'Toque el menú ··· arriba a la derecha',
            wechatStep2: 'Seleccione "Abrir en navegador"',
            wechatSupport: 'Compatible con Chrome, Safari, Edge, etc.'
        }
    },
    
    // 语音命令配置（每种语言的关键词）
    voiceCommands: {
        zh: {
            next: ['好', '好了', '好啦', '好咯', 'ok', '下一个', '下一条', '下一题', '好的', '写好了', '继续', '下一句', '对了', '完成', '知道了'],
            replay: ['什么', '啥', '开始', '重播', '再说一遍', '再来一次', '没听清', '再听', '听不清', '重复', '重来'],
            previous: ['上一个', '上一题', '回退', '返回', '上一句', '前一个']
        },
        en: {
            next: ['ok', 'okay', 'good', 'next', 'continue', 'done', 'yes'],
            replay: ['what', 'start', 'repeat', 'again', 'replay', 'pardon'],
            previous: ['previous', 'back', 'before', 'last']
        },
        ja: {
            next: ['はい', 'いい', '次', 'つぎ', '続き', '完了', 'ok'],
            replay: ['何', 'なに', '開始', 'もう一度', '繰り返し'],
            previous: ['前', 'まえ', '戻る', '前回']
        },
        fr: {
            next: ['ok', 'bien', 'suivant', 'continuer', 'terminé', 'oui'],
            replay: ['quoi', 'commencer', 'répéter', 'encore'],
            previous: ['précédent', 'retour', 'avant']
        },
        de: {
            next: ['ok', 'gut', 'weiter', 'nächste', 'fertig', 'ja'],
            replay: ['was', 'start', 'wiederholen', 'nochmal'],
            previous: ['zurück', 'vorherige', 'vorher']
        },
        es: {
            next: ['ok', 'bien', 'siguiente', 'continuar', 'listo', 'sí'],
            replay: ['qué', 'empezar', 'repetir', 'otra vez'],
            previous: ['anterior', 'atrás', 'volver']
        }
    },
    
    // 初始化
    init() {
        // 先尝试从localStorage加载保存的语言
        const savedLang = localStorage.getItem('appLanguage');
        if (savedLang && this.languages[savedLang]) {
            this.currentLanguage = savedLang;
            console.log('使用保存的语言:', savedLang);
        } else {
            // 检测浏览器语言
            this.currentLanguage = this.detectLanguage();
            console.log('检测到浏览器语言:', this.currentLanguage);
        }
        
        // 更新HTML的lang属性
        document.documentElement.lang = this.getSpeechLang();
    },
    
    // 自动检测语言
    detectLanguage() {
        const browserLang = navigator.language.toLowerCase();
        const langCode = browserLang.split('-')[0];
        
        // 检查是否支持该语言
        return this.languages[langCode] ? langCode : 'en';
    },
    
    // 切换语言
    setLanguage(langCode) {
        if (this.languages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('appLanguage', langCode);
            document.documentElement.lang = this.getSpeechLang();
            console.log('语言已切换到:', langCode);
            return true;
        }
        return false;
    },
    
    // 获取翻译文本（支持变量替换）
    t(key, variables = {}) {
        let text = this.translations[this.currentLanguage]?.[key] || 
                   this.translations['en'][key] || 
                   key;
        
        // 替换变量 {count} {played} {total} 等
        Object.keys(variables).forEach(varKey => {
            text = text.replace(`{${varKey}}`, variables[varKey]);
        });
        
        return text;
    },
    
    // 获取语音识别语言代码
    getSpeechLang() {
        return this.languages[this.currentLanguage].speechLang;
    },
    
    // 获取当前语言的语音命令
    getVoiceCommands() {
        return this.voiceCommands[this.currentLanguage] || this.voiceCommands['en'];
    },
    
    // 获取所有支持的语言（用于UI显示）
    getAllLanguages() {
        return Object.keys(this.languages).map(code => ({
            code,
            ...this.languages[code]
        }));
    }
};

// 自动初始化
if (typeof window !== 'undefined') {
    i18n.init();
}

