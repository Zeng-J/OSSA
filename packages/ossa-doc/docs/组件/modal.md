---
sidebar_position: 19
demo_url: 'https://neteaseyanxuan.github.io/OSSA/#/components/modal/demo/index'
---

# Modal 对话框

## 介绍
用于一些信息告知、操作确认的交互式弹窗。

## 用法
### 基础
```jsx
const [showBase, setShowBase] = useState(false);
```
```jsx
<OsButton 
  onClick={() => {
    setShowBase(true);
  }}
>
  基础
</OsButton>

<OsModal
  title='基础弹窗'
  cancelText='取消'
  confirmText='确定啊'
  content='这里是正文这里是正文这里是正文'
  isShow={showBase}
  onCancel={() => setShowBase(false)}
  onClose={() => setShowBase(false)}
  onConfirm={() => setShowBase(false)}
></OsModal>
```
### 单个按钮
```jsx
const [showSingleBtn, setShowSingleBtn] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowSingleBtn(true);
  }}
>
  单个按钮
</OsButton>
<OsModal
  title='单个按钮'
  cancelText='取消'
  content='这里是正文这里是正文这里是正文'
  isShow={showSingleBtn}
  showCloseIcon={false}
  onCancel={() => setShowSingleBtn(false)}
  onClose={() => setShowSingleBtn(false)}
  onConfirm={() => setShowSingleBtn(false)}
></OsModal>
```
### 高级用法1
```jsx
const [showSlot, setShowSlot] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowSlot(true);
  }}
>
  高级用法1
</OsButton>
<OsModal
  cancelText='取消'
  isShow={showSlot}
  closeIconPosition='bottom'
  onCancel={() => setShowSlot(false)}
  onClose={() => setShowSlot(false)}
  onConfirm={() => setShowSlot(false)}
>
  <View className='custom-content'>
    <View className='custom-content__title'>活动优惠</View>
    <View className='custom-content__row'>
      <Text>套装</Text>
      <Text>-￥18.00</Text>
    </View>
    <View className='custom-content__row'>
      <Text>满额减</Text>
      <Text>-￥18.00</Text>
    </View>
    <View className='custom-content__row'>
      <Text>全场满额减</Text>
      <Text>-￥18.00</Text>
    </View>
  </View>
</OsModal>
```
### 高级用法2
```jsx
const [showSlot1, setShowSlot1] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowSlot1(true);
  }}
>
  高级用法2
</OsButton>
<OsModal
  cancelText='取消'
  isShow={showSlot1}
  onCancel={() => setShowSlot1(false)}
  onClose={() => setShowSlot1(false)}
  onConfirm={() => setShowSlot1(false)}
  className='custom-demo'
>
  <View className='custom-content-1'>
    <Image
      className='custom-content-1__img'
      src='https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95'
      mode='aspectFill'
    ></Image>
  </View>
</OsModal>
```
### 高级用法3
```jsx
const [showDisabled, setShowDisabled] = useState(false);
```
```jsx
<OsButton
  onClick={() => {
    setShowDisabled(true);
  }}
>
  高级用法3
</OsButton>
<OsModal
  cancelText='取消'
  confirmText='确定'
  closeOnClickMask
  isShow={showDisabled}
  disableConfirmBtn
  onCancel={() => setShowDisabled(false)}
  onConfirm={() => setShowDisabled(false)}
  onClose={() => setShowDisabled(false)}
>
  <View className='custom-content-1'>
    <Image
      className='custom-content-1__img'
      src='https://yanxuan.nosdn.127.net/15565188113590869.png?imageView&thumbnail=630x336&quality=95'
      mode='aspectFill'
    ></Image>
  </View>
</OsModal>
```



## API
### 属性
|参数|说明|类型|默认值|
|------|------|------|------|
|isShow|是否显示弹窗，必选|boolean|false|
|title|弹窗标题，可选|string|-|
|content|弹窗内容，可选|string|-|
|cancelText|取消按钮文案，可选|string|-|
|confirmText|确认按钮文案，可选|string|-|
|disableCancelBtn|置灰取消按钮，可选|boolean|false|
|disableConfirmBtn|置灰确认按钮，可选|boolean|false|
|closeOnClickMask|点击遮罩是否隐藏弹窗，可选|boolean|false|
|custom|是否仅保留遮罩，完全自定义弹窗内容，可选|boolean|false|
|showCloseIcon|是否显示关闭icon，可选|boolean|true|
|closeIconPosition|关闭icon位置，可选|top-left \| top-right \| bottom-left \| bottom-right \| top \| bottom|top-right|


### 方法
|函数名|说明|参数|
|------|------|------|
|onClose|弹窗关闭时的回调，可选|-|
|onCancel|点击取消按钮时的回调，可选|-|
|onConfirm|弹窗确认按钮时的回调，可选|-|

