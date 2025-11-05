// 加载i18n文件并验证
const i18nPath = '../i18n.js';

// 动态加载i18n.js
eval(require('fs').readFileSync(i18nPath, 'utf-8'));

// 必需的翻译键
const requiredKeys = [
    'appTitle', 'startRecording', 'stopRecording', 'startDictation', 'pauseDictation',
    'statusReady', 'statusRecording', 'statusProcessing', 'statusComplete', 'statusRestored',
    'statusRestoredWithProgress', 'statusNoSegments', 'statusInterrupted',
    'visualizerLabel', 'voiceControlTitle', 'voiceControlOff', 'voiceControlListening', 'voiceControlWaiting',
    'commandsTitle', 'commandStart', 'commandNext', 'commandReplay', 'commandPrevious',
    'settingsTitle', 'settingSilence', 'settingVolume', 'settingLanguage',
    'segmentsTitle', 'playButton', 'secondUnit', 'emptyState',
    'alertNeedRecording', 'alertMicPermission', 'alertRecordingInterrupted', 'alertStorageFull', 'alertStorageFullWithUsable',
    'errorSpeechNotSupported', 'errorSpeechServiceAbnormal', 'errorMicPermissionDenied', 'errorNetworkIssue', 'errorRecognition',
    'wechatTitle', 'wechatText', 'wechatStep1', 'wechatStep2', 'wechatSupport'
];

const languages = Object.keys(i18n.translations);
let hasIssues = false;

console.log(`检查 ${languages.length} 种语言的 ${requiredKeys.length} 个翻译键\n`);

languages.forEach(lang => {
    const translations = i18n.translations[lang];
    const missing = requiredKeys.filter(key => !(key in translations));
    
    if (missing.length > 0) {
        console.log(`${lang.toUpperCase()}: ❌ 缺少 ${missing.length} 个键`);
        console.log(`  ${missing.join(', ')}`);
        hasIssues = true;
    } else {
        console.log(`${lang.toUpperCase()}: ✅ 完整 (${Object.keys(translations).length} 个键)`);
    }
});

// 检查语音命令
console.log('\n=== 语音命令检查 ===\n');
const requiredCommandKeys = ['next', 'replay', 'previous'];

languages.forEach(lang => {
    const commands = i18n.voiceCommands[lang];
    if (!commands) {
        console.log(`${lang.toUpperCase()}: ❌ 缺少语音命令`);
        hasIssues = true;
    } else {
        const missing = requiredCommandKeys.filter(key => !commands[key] || commands[key].length === 0);
        if (missing.length > 0) {
            console.log(`${lang.toUpperCase()}: ⚠️ 缺少命令: ${missing.join(', ')}`);
            hasIssues = true;
        } else {
            console.log(`${lang.toUpperCase()}: ✅ 完整 (next:${commands.next.length}, replay:${commands.replay.length}, previous:${commands.previous.length})`);
        }
    }
});

if (!hasIssues) {
    console.log('\n\n🎉 所有语言翻译完整且一致！');
} else {
    console.log('\n\n⚠️ 发现不一致，需要修复');
}

process.exit(hasIssues ? 1 : 0);

