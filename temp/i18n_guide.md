# 多语言功能使用指南

## ✨ 已实现功能

### 支持的语言
- 🇨🇳 中文 (Chinese)
- 🇺🇸 英语 (English)
- 🇯🇵 日语 (Japanese)
- 🇫🇷 法语 (French)
- 🇩🇪 德语 (German)
- 🇪🇸 西班牙语 (Spanish)

## 🚀 核心特性

### 1. 自动语言检测
- 使用 `navigator.language` 检测浏览器语言
- 自动设置对应的界面语言和语音识别语言
- 不支持的语言默认使用英语

### 2. 手动语言切换
- 在"高级设置"中提供语言选择器
- 点击 [🇨🇳 中文] 等按钮即可切换
- 当前语言高亮显示（紫色背景）

### 3. 语言持久化
- 选择的语言自动保存到 localStorage
- 下次打开页面保持之前的语言设置
- 独立于录音数据存储

### 4. 语音识别语言联动
- 切换界面语言时，自动更新语音识别语言
- 例如：切换到日语 → 语音识别使用 ja-JP
- 如果正在听写，会自动重启语音识别

### 5. 语音命令本地化
- 每种语言有独立的语音命令配置
- 中文："好了"、"什么"、"上一个"
- 英语："next"、"repeat"、"previous"
- 日语："次"、"何"、"前"
- 等等...

## 📁 文件结构

```
/break-voice/
├── index.html       ← 主应用（已更新）
├── i18n.js          ← 多语言配置文件（新增）
├── favicon-128.ico  ← 图标文件
└── manifest.json    ← PWA配置
```

## 🔧 架构设计

### i18n.js 结构
```javascript
const i18n = {
    currentLanguage: 'en',
    
    // 语言配置（便于扩展）
    languages: {
        'zh': { name: '中文', flag: '🇨🇳', speechLang: 'zh-CN' },
        // ... 添加新语言只需在这里添加配置
    },
    
    // 翻译文本（便于扩展）
    translations: {
        zh: { appTitle: '听写助手', ... },
        en: { appTitle: 'Dictation Assistant', ... },
        // ... 添加新语言只需复制并翻译
    },
    
    // 语音命令（便于扩展）
    voiceCommands: {
        zh: { next: [...], replay: [...], previous: [...] },
        en: { next: [...], replay: [...], previous: [...] },
        // ... 添加新语言的语音命令
    },
    
    // 工具方法
    t(key, variables),        // 获取翻译文本
    getSpeechLang(),          // 获取语音识别语言代码
    getVoiceCommands(),       // 获取当前语言的语音命令
    setLanguage(code),        // 切换语言
    detectLanguage()          // 自动检测语言
};
```

### 扩展新语言只需3步

#### 步骤1: 添加语言配置
```javascript
languages: {
    'ko': {  // 韩语
        name: '한국어',
        flag: '🇰🇷',
        speechLang: 'ko-KR'
    }
}
```

#### 步骤2: 添加翻译
```javascript
translations: {
    ko: {
        appTitle: '받아쓰기 도우미',
        startRecording: '녹음 시작',
        // ... 复制其他键并翻译
    }
}
```

#### 步骤3: 添加语音命令
```javascript
voiceCommands: {
    ko: {
        next: ['다음', '좋아', '계속'],
        replay: ['뭐', '다시', '반복'],
        previous: ['이전', '뒤로']
    }
}
```

完成！无需修改其他代码。

## 🧪 测试方法

### 测试1: 自动语言检测
1. 打开浏览器
2. 设置浏览器语言为中文
3. 打开应用
4. **验证**: 界面显示中文 ✅

### 测试2: 手动切换语言
1. 展开"高级设置"
2. 点击 🇺🇸 English
3. **验证**:
   - ✅ 所有界面文字变成英文
   - ✅ 按钮高亮显示
   - ✅ 语音命令说明更新
   - ✅ 状态消息变成英文

### 测试3: 语言持久化
1. 切换到日语 🇯🇵
2. 刷新页面（F5）
3. **验证**:
   - ✅ 界面保持日语
   - ✅ 日语按钮高亮

### 测试4: 语音识别语言切换
1. 切换到英语
2. 开启语音控制
3. 说英文命令"next"
4. **验证**:
   - ✅ 识别英文语音
   - ✅ 执行"播放下一个"命令

### 测试5: 不同语言的语音命令
- 中文: 说"好了" → 下一个 ✅
- 英语: 说"next" → 下一个 ✅
- 日语: 说"次" → 下一个 ✅

## 🌍 各语言的语音命令

### 中文 (zh)
- **下一个**: 好、好了、好啦、好咯、ok、下一个、下一条、下一题、好的、写好了、继续、下一句、对了、完成、知道了
- **重播**: 什么、啥、开始、重播、再说一遍、再来一次、没听清、再听、听不清、重复、重来
- **上一个**: 上一个、上一题、回退、返回、上一句、前一个

### English (en)
- **Next**: ok, okay, good, next, continue, done, yes
- **Replay**: what, start, repeat, again, replay, pardon
- **Previous**: previous, back, before, last

### 日本語 (ja)
- **次**: はい、いい、次、つぎ、続き、完了、ok
- **繰り返し**: 何、なに、開始、もう一度、繰り返し
- **前**: 前、まえ、戻る、前回

### Français (fr)
- **Suivant**: ok, bien, suivant, continuer, terminé, oui
- **Répéter**: quoi, commencer, répéter, encore
- **Précédent**: précédent, retour, avant

### Deutsch (de)
- **Weiter**: ok, gut, weiter, nächste, fertig, ja
- **Wiederholen**: was, start, wiederholen, nochmal
- **Zurück**: zurück, vorherige, vorher

### Español (es)
- **Siguiente**: ok, bien, siguiente, continuar, listo, sí
- **Repetir**: qué, empezar, repetir, otra vez
- **Anterior**: anterior, atrás, volver

## 💾 存储结构

### localStorage 键
- `appLanguage` - 当前语言代码（如 'zh', 'en'）
- `voiceRecorderSettings` - 设置（停顿阈值、音量阈值）
- `voiceRecorderData` - 录音数据和播放进度

### 示例
```javascript
localStorage.getItem('appLanguage')  // 'zh'
localStorage.getItem('voiceRecorderSettings')  // '{"silenceThreshold":1.0,...}'
```

## 🎯 用户体验

### 首次使用
```
用户打开页面（浏览器语言：中文）
  ↓
自动检测：navigator.language = 'zh-CN'
  ↓
提取语言代码：'zh'
  ↓
界面显示中文 ✅
语音识别使用中文 ✅
语音命令使用中文 ✅
```

### 语言切换
```
用户点击 🇺🇸 English
  ↓
保存到 localStorage
  ↓
更新所有界面文本
  ↓
更新语音识别语言为 'en-US'
  ↓
更新语音命令为英文
  ↓
如果正在听写，自动重启语音识别
  ↓
完成！界面全英文 ✅
```

### 下次打开
```
用户打开页面
  ↓
检查 localStorage.getItem('appLanguage')
  ↓
找到 'en'
  ↓
使用英语（覆盖浏览器语言设置）✅
```

## 🔍 调试方法

### 查看当前语言
```javascript
console.log('当前语言:', i18n.currentLanguage);
console.log('语音识别语言:', i18n.getSpeechLang());
```

### 手动切换语言
```javascript
i18n.setLanguage('ja');  // 切换到日语
recorder.updateUI();      // 更新界面
```

### 查看语音命令
```javascript
console.log('当前语音命令:', i18n.getVoiceCommands());
```

### 清除语言设置
```javascript
localStorage.removeItem('appLanguage');
location.reload();  // 重新加载，使用浏览器默认语言
```

## ⚙️ 技术细节

### 语音识别语言映射
- 中文 → zh-CN
- 英语 → en-US
- 日语 → ja-JP
- 法语 → fr-FR
- 德语 → de-DE
- 西班牙语 → es-ES

### 变量替换
翻译文本支持变量：
```javascript
i18n.t('statusComplete', { count: 5 })
// 中文: "录音完成,已分割为 5 个片段"
// 英语: "Recording complete, split into 5 segments"
```

### 备用语言
如果翻译缺失，自动使用英语：
```javascript
i18n.t('unknownKey')  // 返回英语版本或key本身
```

## 🎨 UI效果

### 语言选择器
```
语言:
[🇨🇳 中文] [🇺🇸 English] [🇯🇵 日本語] 
[🇫🇷 Français] [🇩🇪 Deutsch] [🇪🇸 Español]

← 当前选中的按钮有紫色背景
```

### 点击后
- 立即切换界面语言
- 所有文本更新
- 按钮高亮变化
- 如果正在听写，语音识别会重启

## 📝 未来扩展示例

### 添加韩语支持

#### 1. 在 i18n.js 中添加：
```javascript
languages: {
    'ko': { name: '한국어', flag: '🇰🇷', speechLang: 'ko-KR' }
}

translations: {
    ko: {
        appTitle: '받아쓰기 도우미',
        startRecording: '녹음 시작',
        // ... 翻译所有键
    }
}

voiceCommands: {
    ko: {
        next: ['다음', '좋아', '계속'],
        replay: ['뭐', '다시', '반복'],
        previous: ['이전', '뒤로']
    }
}
```

#### 2. 完成！
无需修改 index.html，语言选择器会自动显示新语言。

## 总结

多语言系统已完全实现：
- ✅ 自动检测浏览器语言
- ✅ 手动切换6种语言
- ✅ 语言持久化存储
- ✅ 语音识别语言联动
- ✅ 语音命令本地化
- ✅ 便于扩展新语言
- ✅ 完整的翻译覆盖

支持全球用户使用！🌏

