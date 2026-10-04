// Themes link to the hub's own sign-in page, which a preview does not have.
export const onRequest = () =>
  new Response("这是主题预览站，没有后台。把主题装到你自己的 hub 上，再在那里登录。", {
    headers: { "content-type": "text/plain; charset=utf-8" },
  })
