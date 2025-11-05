// 国际化（i18n）系统
const i18n = {
    // 当前语言
    currentLanguage: 'en',
    
    // 支持的语言配置
    languages: {
        'en': { 
            name: 'English', 
            flag: '🇺🇸',
            speechLang: 'en-US'
        },
        'zh': { 
            name: '中文', 
            flag: '🇨🇳',
            speechLang: 'zh-CN'
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
        },
        'ko': { 
            name: '한국어', 
            flag: '🇰🇷',
            speechLang: 'ko-KR'
        },
        'ru': { 
            name: 'Русский', 
            flag: '🇷🇺',
            speechLang: 'ru-RU'
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
            secondUnit: '秒',
            
            emptyState: '点击"开始录制"按钮开始录音<br>每词间隔一秒',
            
            alertNeedRecording: '请先录制听写内容',
            alertMicPermission: '无法访问麦克风,请检查权限设置',
            alertRecordingInterrupted: '录音在锁屏期间被中断，请重新开始录制',
            alertStorageFull: '存储空间不足，无法保存录音数据',
            alertStorageFullWithUsable: '存储空间不足，无法保存录音数据。\n\n当前片段仍可正常使用，但刷新页面后会丢失。',
            
            errorSpeechNotSupported: '不支持语音识别',
            errorSpeechServiceAbnormal: '识别服务异常，请重新开启',
            errorMicPermissionDenied: '麦克风权限被拒绝',
            errorNetworkIssue: '网络连接问题',
            errorRecognition: '识别错误',
            
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
            secondUnit: 's',
            
            emptyState: 'Click "Start Recording" to begin<br>Pause 1 second between words',
            
            alertNeedRecording: 'Please record content first',
            alertMicPermission: 'Cannot access microphone, please check permissions',
            alertRecordingInterrupted: 'Recording interrupted during lock screen, please start again',
            alertStorageFull: 'Storage full, cannot save recording',
            alertStorageFullWithUsable: 'Storage full, cannot save recording.\n\nCurrent segments can still be used, but will be lost after refresh.',
            
            errorSpeechNotSupported: 'Speech recognition not supported',
            errorSpeechServiceAbnormal: 'Recognition service error, please restart',
            errorMicPermissionDenied: 'Microphone permission denied',
            errorNetworkIssue: 'Network connection issue',
            errorRecognition: 'Recognition error',
            
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
            secondUnit: '秒',
            
            emptyState: '「録音開始」をクリックして開始<br>単語間に1秒の間隔',
            
            alertNeedRecording: '先に内容を録音してください',
            alertMicPermission: 'マイクにアクセスできません、権限を確認してください',
            alertRecordingInterrupted: 'ロック画面中に録音が中断されました、再開してください',
            alertStorageFull: 'ストレージ容量不足、録音を保存できません',
            alertStorageFullWithUsable: 'ストレージ容量不足、録音を保存できません。\n\n現在のセグメントは使用できますが、ページを更新すると失われます。',
            
            errorSpeechNotSupported: '音声認識はサポートされていません',
            errorSpeechServiceAbnormal: '認識サービスエラー、再起動してください',
            errorMicPermissionDenied: 'マイク権限が拒否されました',
            errorNetworkIssue: 'ネットワーク接続の問題',
            errorRecognition: '認識エラー',
            
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
            secondUnit: 's',
            
            emptyState: 'Cliquez sur "Démarrer" pour commencer<br>Pause d\'1 seconde entre les mots',
            
            alertNeedRecording: 'Veuillez d\'abord enregistrer du contenu',
            alertMicPermission: 'Impossible d\'accéder au microphone, vérifiez les autorisations',
            alertRecordingInterrupted: 'Enregistrement interrompu pendant le verrouillage, recommencez',
            alertStorageFull: 'Stockage plein, impossible d\'enregistrer',
            alertStorageFullWithUsable: 'Stockage plein, impossible d\'enregistrer.\n\nLes segments actuels peuvent toujours être utilisés, mais seront perdus après l\'actualisation.',
            
            errorSpeechNotSupported: 'Reconnaissance vocale non supportée',
            errorSpeechServiceAbnormal: 'Erreur du service de reconnaissance, veuillez redémarrer',
            errorMicPermissionDenied: 'Permission du microphone refusée',
            errorNetworkIssue: 'Problème de connexion réseau',
            errorRecognition: 'Erreur de reconnaissance',
            
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
            secondUnit: 's',
            
            emptyState: 'Klicken Sie auf "Aufnahme starten"<br>1 Sekunde Pause zwischen Wörtern',
            
            alertNeedRecording: 'Bitte zuerst Inhalt aufnehmen',
            alertMicPermission: 'Kein Mikrofonzugriff, bitte Berechtigungen prüfen',
            alertRecordingInterrupted: 'Aufnahme während Bildschirmsperre unterbrochen, bitte neu starten',
            alertStorageFull: 'Speicher voll, Aufnahme kann nicht gespeichert werden',
            alertStorageFullWithUsable: 'Speicher voll, Aufnahme kann nicht gespeichert werden.\n\nAktuelle Segmente können weiterhin verwendet werden, gehen aber nach dem Aktualisieren verloren.',
            
            errorSpeechNotSupported: 'Spracherkennung nicht unterstützt',
            errorSpeechServiceAbnormal: 'Fehler im Erkennungsdienst, bitte neu starten',
            errorMicPermissionDenied: 'Mikrofonberechtigung verweigert',
            errorNetworkIssue: 'Netzwerkverbindungsproblem',
            errorRecognition: 'Erkennungsfehler',
            
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
            secondUnit: 's',
            
            emptyState: 'Haga clic en "Iniciar grabación"<br>Pausa de 1 segundo entre palabras',
            
            alertNeedRecording: 'Por favor grabe contenido primero',
            alertMicPermission: 'No se puede acceder al micrófono, verifique los permisos',
            alertRecordingInterrupted: 'Grabación interrumpida durante bloqueo de pantalla, reinicie',
            alertStorageFull: 'Almacenamiento lleno, no se puede guardar',
            alertStorageFullWithUsable: 'Almacenamiento lleno, no se puede guardar.\n\nLos segmentos actuales aún se pueden usar, pero se perderán después de actualizar.',
            
            errorSpeechNotSupported: 'Reconocimiento de voz no compatible',
            errorSpeechServiceAbnormal: 'Error del servicio de reconocimiento, reinicie',
            errorMicPermissionDenied: 'Permiso de micrófono denegado',
            errorNetworkIssue: 'Problema de conexión de red',
            errorRecognition: 'Error de reconocimiento',
            
            wechatTitle: 'Función de grabación no disponible',
            wechatText: 'El navegador WeChat restringe el acceso al micrófono<br>Ábralo en el navegador del sistema',
            wechatStep1: 'Toque el menú ··· arriba a la derecha',
            wechatStep2: 'Seleccione "Abrir en navegador"',
            wechatSupport: 'Compatible con Chrome, Safari, Edge, etc.'
        },
        
        ko: {
            appTitle: '받아쓰기 도우미',
            startRecording: '녹음 시작',
            stopRecording: '녹음 중지',
            startDictation: '받아쓰기 시작',
            pauseDictation: '일시 정지',
            statusReady: '준비 완료',
            statusRecording: '녹음 중...',
            statusProcessing: '처리 중...',
            statusComplete: '녹음 완료, {count}개 세그먼트로 분할',
            statusRestored: '{count}개 세그먼트 복원됨',
            statusRestoredWithProgress: '{count}개 세그먼트 복원됨 (완료 {played}/{total})',
            statusNoSegments: '유효한 음성 세그먼트가 감지되지 않았습니다',
            statusInterrupted: '녹음이 중단되었습니다, 다시 시작해주세요',
            
            visualizerLabel: '실시간 오디오 파형',
            
            voiceControlTitle: '음성 제어',
            voiceControlOff: '음성 제어 꺼짐',
            voiceControlListening: '듣는 중...',
            voiceControlWaiting: '명령 대기 중...',
            
            commandsTitle: '사용 가능한 명령:',
            commandStart: '시작 - 받아쓰기 시작',
            commandNext: '다음 - 다음 세그먼트 재생',
            commandReplay: '반복 - 현재 세그먼트 재생',
            commandPrevious: '이전 - 이전 세그먼트 재생',
            
            settingsTitle: '고급 설정',
            settingSilence: '무음 임계값 (초):',
            settingVolume: '볼륨 임계값:',
            settingLanguage: '언어:',
            
            segmentsTitle: '오디오 세그먼트',
            playButton: '재생',
            secondUnit: '초',
            
            emptyState: '"녹음 시작"을 클릭하여 시작<br>단어 사이 1초 간격',
            
            alertNeedRecording: '먼저 내용을 녹음해주세요',
            alertMicPermission: '마이크에 접근할 수 없습니다, 권한을 확인해주세요',
            alertRecordingInterrupted: '화면 잠금 중 녹음이 중단되었습니다, 다시 시작해주세요',
            alertStorageFull: '저장 공간이 부족하여 녹음을 저장할 수 없습니다',
            alertStorageFullWithUsable: '저장 공간이 부족하여 녹음을 저장할 수 없습니다.\n\n현재 세그먼트는 사용할 수 있지만 페이지를 새로 고침하면 손실됩니다.',
            
            errorSpeechNotSupported: '음성 인식이 지원되지 않습니다',
            errorSpeechServiceAbnormal: '인식 서비스 오류, 다시 시작해주세요',
            errorMicPermissionDenied: '마이크 권한이 거부되었습니다',
            errorNetworkIssue: '네트워크 연결 문제',
            errorRecognition: '인식 오류',
            
            wechatTitle: '녹음 기능을 사용할 수 없습니다',
            wechatText: 'WeChat 브라우저는 마이크 접근을 제한합니다<br>시스템 브라우저에서 여세요',
            wechatStep1: '오른쪽 상단의 ··· 메뉴를 누르세요',
            wechatStep2: '"브라우저에서 열기"를 선택하세요',
            wechatSupport: 'Chrome, Safari, Edge 등을 지원합니다'
        },
        
        ru: {
            appTitle: 'Помощник для диктанта',
            startRecording: 'Начать запись',
            stopRecording: 'Остановить запись',
            startDictation: 'Начать диктант',
            pauseDictation: 'Пауза',
            statusReady: 'Готов',
            statusRecording: 'Запись...',
            statusProcessing: 'Обработка...',
            statusComplete: 'Запись завершена, разделено на {count} сегментов',
            statusRestored: 'Восстановлено {count} сегментов',
            statusRestoredWithProgress: 'Восстановлено {count} сегментов (завершено {played}/{total})',
            statusNoSegments: 'Не обнаружено действительных голосовых сегментов',
            statusInterrupted: 'Запись прервана, пожалуйста, начните заново',
            
            visualizerLabel: 'Форма волны в реальном времени',
            
            voiceControlTitle: 'Голосовое управление',
            voiceControlOff: 'Голосовое управление выключено',
            voiceControlListening: 'Слушаю...',
            voiceControlWaiting: 'Ожидание команды...',
            
            commandsTitle: 'Доступные команды:',
            commandStart: 'Начать - Начать диктант',
            commandNext: 'Далее - Следующий сегмент',
            commandReplay: 'Повтор - Повторить текущий сегмент',
            commandPrevious: 'Назад - Предыдущий сегмент',
            
            settingsTitle: 'Расширенные настройки',
            settingSilence: 'Порог тишины (сек.):',
            settingVolume: 'Порог громкости:',
            settingLanguage: 'Язык:',
            
            segmentsTitle: 'Аудио сегменты',
            playButton: 'Играть',
            secondUnit: 'с',
            
            emptyState: 'Нажмите "Начать запись" для начала<br>Пауза 1 секунда между словами',
            
            alertNeedRecording: 'Пожалуйста, сначала запишите содержимое',
            alertMicPermission: 'Нет доступа к микрофону, проверьте разрешения',
            alertRecordingInterrupted: 'Запись прервана во время блокировки экрана, начните заново',
            alertStorageFull: 'Хранилище заполнено, невозможно сохранить запись',
            alertStorageFullWithUsable: 'Хранилище заполнено, невозможно сохранить запись.\n\nТекущие сегменты все еще можно использовать, но они будут потеряны после обновления.',
            
            errorSpeechNotSupported: 'Распознавание речи не поддерживается',
            errorSpeechServiceAbnormal: 'Ошибка службы распознавания, перезапустите',
            errorMicPermissionDenied: 'Разрешение на микрофон отклонено',
            errorNetworkIssue: 'Проблема с сетевым подключением',
            errorRecognition: 'Ошибка распознавания',
            
            wechatTitle: 'Функция записи недоступна',
            wechatText: 'Браузер WeChat ограничивает доступ к микрофону<br>Откройте в системном браузере',
            wechatStep1: 'Нажмите на меню ··· в правом верхнем углу',
            wechatStep2: 'Выберите "Открыть в браузере"',
            wechatSupport: 'Поддерживает Chrome, Safari, Edge и др.'
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
        },
        ko: {
            next: ['좋아', '좋아요', '다음', '계속', '완료', '네', 'ok', '오케이'],
            replay: ['뭐', '뭐라고', '시작', '다시', '반복', '한번더'],
            previous: ['이전', '앞으로', '뒤로', '전으로']
        },
        ru: {
            next: ['хорошо', 'ок', 'далее', 'следующий', 'продолжить', 'готово', 'да'],
            replay: ['что', 'начать', 'повтор', 'повторить', 'ещё раз', 'не слышу'],
            previous: ['назад', 'предыдущий', 'вернуться']
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

