# 语音识别问题诊断指南

## 📝 如何收集日志

### 步骤1: 打开应用和控制台
1. 在 Chrome 中打开 index.html
2. 按 F12 打开开发者工具
3. 切换到 **Console（控制台）** 标签
4. 点击控制台的 **Clear（清空）** 按钮

### 步骤2: 录制内容
1. 点击"开始录制"
2. 说几个词（如："苹果 香蕉 橘子"，每词间隔1秒）
3. 点击"结束录制"
4. 等待自动分段

### 步骤3: 开启听写并观察
1. 点击"开始听写"按钮
   - 观察控制台输出
2. 说"好了"触发播放
   - 观察麦克风图标是否闪烁
   - 观察控制台日志
3. 等待播放完成
4. 再说"好了"
5. 重复几次

### 步骤4: 收集日志
1. 在控制台中，右键点击日志区域
2. 选择"Save as..."保存日志
3. 或者直接复制所有日志文本

## 🔍 日志格式说明

### 日志结构
```
[HH:MM:SS.mmm] 🔊 事件名称 {详细信息}
```

### 关键日志事件

#### 1. 用户操作
```
[时间] 🔊 ============ 用户点击：开始听写 ============
[时间] 🔊 startVoiceControl - 调用 recognition.start()
[时间] 🔊 startVoiceControl - ✅ 语音控制已启动
```

#### 2. 语音识别事件
```
[时间] 🔊 onresult { transcript: "好了", isFinal: true }
[时间] 🔊 handleVoiceCommand - 收到命令 { command: "好了" }
[时间] 🔊 handleVoiceCommand - 识别为: 下一个
```

#### 3. 播放事件
```
[时间] 🔊 ------------ playSegmentTwice - 开始播放 ------------ { index: 0 }
[时间] 🔊 playSegmentTwice - 设置 isPlayingAudio = true
[时间] 🔊 playSegmentTwice - 第1次播放
[时间] 🔊 playSegmentTwice - 等待500ms
[时间] 🔊 playSegmentTwice - 第2次播放
[时间] 🔊 playSegmentTwice - 等待300ms后清除播放标志
[时间] 🔊 playSegmentTwice - 设置 isPlayingAudio = false，可以接受命令
[时间] 🔊 ------------ playSegmentTwice - 播放结束 ------------
```

#### 4. onend 事件（关键！）
```
[时间] 🔊 onend - 语音识别结束
[时间] 🔊 onend - 检查重启条件 { timeSinceLastRestart: 60000 }
[时间] 🔊 onend - 重启间隔正常，重置计数器
[时间] 🔊 onend - 将在1000ms后尝试重启
[时间] 🔊 onend - 尝试重启 recognition.start()
[时间] 🔊 onend - ✅ 重启成功
```

#### 5. 频繁重启（问题！）
```
[时间] 🔊 onend - 语音识别结束
[时间] 🔊 onend - ⚠️ 频繁重启 { timeSinceLastRestart: 500, restartCount: 1 }
[时间] 🔊 onend - 将在1000ms后尝试重启
[时间] 🔊 onend - 尝试重启 recognition.start()
[时间] 🔊 onend - ✅ 重启成功

[时间] 🔊 onend - 语音识别结束   ← 又立即触发！
[时间] 🔊 onend - ⚠️ 频繁重启 { timeSinceLastRestart: 1200, restartCount: 2 }
```

## 🎯 关键观察点

### 正常情况
```
开始听写
  ↓
每60-90秒触发一次 onend
  ↓
自动重启
  ↓
继续监听
```

### 异常情况（需要报告）
```
开始听写
  ↓
onend 频繁触发（<2秒）
  ↓
频繁重启警告
  ↓
麦克风闪烁
```

## 📊 要观察的数据

### 1. onend 触发频率
- **正常**: 每60-90秒一次
- **异常**: 每隔几秒就一次

### 2. timeSinceLastRestart 值
- **正常**: 60000ms（60秒）以上
- **异常**: <2000ms（2秒）

### 3. isPlayingAudio 状态
- 播放时应该是 `true`
- 播放结束应该变回 `false`

### 4. 错误类型
- 看是否频繁出现 `onerror - aborted`
- 看是否有其他错误

## 💻 控制台辅助命令

### 查看当前状态
```javascript
getRecorderStatus()
```

返回示例：
```javascript
{
  isVoiceControlActive: true,
  isPlayingAudio: false,
  recognitionRestartCount: 0,
  lastRecognitionRestart: "10:30:45 GMT+0800",
  timeSinceLastRestart: 12345,
  currentPlayingIndex: -1,
  lastManualClickIndex: 2,
  segmentsCount: 5
}
```

### 关闭详细日志（如果太多）
```javascript
recorder.debugLog = false
```

### 重新开启详细日志
```javascript
recorder.debugLog = true
```

## 📤 如何分享日志给我

### 方法1: 复制粘贴（推荐）
1. 在控制台中选中所有日志
2. 右键 → Copy
3. 粘贴到文本发给我

### 方法2: 保存文件
1. 在控制台中右键
2. Save as... → 保存为 .log 文件
3. 发送文件

### 方法3: 截图
- 截取控制台的关键日志部分

## 🔍 重点关注的模式

### 模式1: 快速连续的 onend
```
[10:30:00.100] onend
[10:30:01.200] onend  ← 1秒后又触发
[10:30:02.300] onend  ← 又1秒后
```
**说明**: 语音识别每次启动后很快就结束了

### 模式2: onend 前有 onerror
```
[10:30:00.100] onerror { error: "aborted" }
[10:30:00.105] onend
```
**说明**: 可能是某个操作导致识别被中止

### 模式3: 播放期间触发 onend
```
[10:30:00.000] playSegmentTwice - 开始播放
[10:30:00.050] onend - 语音识别结束  ← 播放刚开始就onend
```
**说明**: 播放可能导致了识别结束

## 📋 诊断清单

请在日志中确认：

- [ ] 点击"开始听写"后，是否看到相应日志？
- [ ] 说"好了"后，是否看到 `onresult` 和 `handleVoiceCommand` 日志？
- [ ] 播放期间，`isPlayingAudio` 是否为 `true`？
- [ ] 播放结束后，`isPlayingAudio` 是否变为 `false`？
- [ ] `onend` 事件触发频率如何？（秒级还是分钟级？）
- [ ] 是否看到 "⚠️ 频繁重启" 的警告？
- [ ] 是否有 `onerror` 日志？错误类型是什么？

## 示例：正常的日志流程

```
[10:30:00.000] 🔊 ============ 用户点击：开始听写 ============
[10:30:00.010] 🔊 startVoiceControl - 调用 recognition.start()
[10:30:00.020] 🔊 startVoiceControl - ✅ 语音控制已启动

// 用户说"好了"
[10:30:05.000] 🔊 onresult { transcript: "好了", isFinal: true }
[10:30:05.002] 🔊 handleVoiceCommand - 收到命令 { command: "好了" }
[10:30:05.003] 🔊 handleVoiceCommand - 识别为: 下一个
[10:30:05.005] 🔊 ------------ playSegmentTwice - 开始播放 ------------ { index: 0 }
[10:30:05.006] 🔊 playSegmentTwice - 设置 isPlayingAudio = true
[10:30:05.010] 🔊 playSegmentTwice - 第1次播放
[10:30:06.500] 🔊 playSegmentTwice - 等待500ms
[10:30:07.000] 🔊 playSegmentTwice - 第2次播放
[10:30:08.500] 🔊 playSegmentTwice - 等待300ms后清除播放标志
[10:30:08.800] 🔊 playSegmentTwice - 设置 isPlayingAudio = false，可以接受命令
[10:30:08.801] 🔊 ------------ playSegmentTwice - 播放结束 ------------

// 约60秒后自动重启
[10:31:00.000] 🔊 onend - 语音识别结束
[10:31:00.002] 🔊 onend - 检查重启条件 { timeSinceLastRestart: 60000 }
[10:31:00.003] 🔊 onend - 重启间隔正常，重置计数器
[10:31:00.004] 🔊 onend - 将在1000ms后尝试重启
[10:31:01.010] 🔊 onend - 尝试重启 recognition.start()
[10:31:01.020] 🔊 onend - ✅ 重启成功
```

把你的日志发给我，我会帮你分析问题！🔍

