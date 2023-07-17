// vuepress-theme-vdoing-doc 主题footer有些东西是直接写死的，没有配置可以删掉
// 我又不需要 footer 部分，所以直接用这个 js 删除
window.addEventListener('load', () => {
    document.querySelector('.footer').style.display = 'none'
})
