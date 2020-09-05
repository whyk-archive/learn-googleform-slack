import { WebAPICallOptions } from '@slack/web-api';

const getEnvProperty = (property: string) => PropertiesService.getScriptProperties().getProperty(property)

const sendToSlack = (text: string, channel: string) => {
  const url = getEnvProperty('SLACK_CHANNEL_URL')
  const data: WebAPICallOptions = {
    channel,
    username: 'テスト通知',
    attachments: [
      {
        color: '#000',
        title: 'テスト投稿がされました',
        text
      }
    ],
    icon_url: 'http://2.bp.blogspot.com/-Rd_w7b2kq70/VnE4FZen5oI/AAAAAAAA18w/mMasxPYIuCM/s800/pose_kyosyu_boy.png'
  }
  const payload = JSON.stringify(data)
  const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
    method: 'post',
    'contentType': 'application/json',
    payload
  }
  const response = UrlFetchApp.fetch(url, options)
}

const onFormSubmit = (e: GoogleAppsScript.Events.FormsOnFormSubmit) => {
  const itemResponse = e.response.getItemResponses()
  let category: string | string[] | string[][],
      content: string | string[] | string[][]
  itemResponse.forEach(res => {
    const title = res.getItem().getTitle()
    const response = res.getResponse()

    if (title === 'カテゴリ') category = response
    else if (title === '内容') content = response

  })
  const body = `質問カテゴリ:【${category}】\n\n内容:\n${content}`
  sendToSlack(body, getEnvProperty('CHANNEL_NAME'))
}
