// 翻译完整性检查脚本
const fs = require('fs');

// 读取i18n.js文件
const content = fs.readFileSync('../i18n.js', 'utf-8');

// 提取translations对象
const translationsMatch = content.match(/translations:\s*\{([\s\S]*?)\n\s{4}\},\s*\n\s{4}\/\/ 语音命令配置/);
if (!translationsMatch) {
    console.error('无法找到translations对象');
    process.exit(1);
}

// 解析每种语言的键
const languages = ['zh', 'en', 'ja', 'fr', 'de', 'es', 'ko', 'ru'];
const allKeys = {};
const missingKeys = {};

// 提取每种语言的所有键
languages.forEach(lang => {
    const langRegex = new RegExp(`${lang}:\\s*\\{([\\s\\S]*?)\\n\\s{8}\\}`, 'g');
    const match = translationsMatch[1].match(langRegex);
    
    if (match) {
        const keyRegex = /(\w+):/g;
        const keys = [];
        let m;
        while ((m = keyRegex.exec(match[0])) !== null) {
            if (m[1] !== lang) {
                keys.push(m[1]);
            }
        }
        allKeys[lang] = keys;
    } else {
        console.error(`无法找到语言: ${lang}`);
        allKeys[lang] = [];
    }
});

// 获取基准键列表（使用中文作为参考）
const baseKeys = allKeys['zh'];
console.log(`\n基准语言(zh)包含 ${baseKeys.length} 个键\n`);

// 检查每种语言
let hasIssues = false;

languages.forEach(lang => {
    const keys = allKeys[lang];
    const missing = baseKeys.filter(key => !keys.includes(key));
    const extra = keys.filter(key => !baseKeys.includes(key));
    
    console.log(`\n${lang.toUpperCase()}:`);
    console.log(`  总共: ${keys.length} 个键`);
    
    if (missing.length > 0) {
        console.log(`  ❌ 缺失: ${missing.length} 个`);
        console.log(`     ${missing.join(', ')}`);
        hasIssues = true;
        missingKeys[lang] = missing;
    } else {
        console.log(`  ✅ 完整`);
    }
    
    if (extra.length > 0) {
        console.log(`  ⚠️  多余: ${extra.length} 个`);
        console.log(`     ${extra.join(', ')}`);
        hasIssues = true;
    }
});

// 检查语音命令
console.log('\n\n=== 语音命令检查 ===\n');
const voiceCommandsMatch = content.match(/voiceCommands:\s*\{([\s\S]*?)\n\s{4}\},/);
if (voiceCommandsMatch) {
    languages.forEach(lang => {
        const hasCommands = voiceCommandsMatch[1].includes(`${lang}:`);
        if (hasCommands) {
            console.log(`${lang.toUpperCase()}: ✅ 有语音命令`);
        } else {
            console.log(`${lang.toUpperCase()}: ❌ 缺少语音命令`);
            hasIssues = true;
        }
    });
}

if (!hasIssues) {
    console.log('\n\n🎉 所有语言翻译完整！');
} else {
    console.log('\n\n⚠️  发现不一致，请修复');
}

process.exit(hasIssues ? 1 : 0);

