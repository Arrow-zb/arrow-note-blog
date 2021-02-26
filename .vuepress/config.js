module.exports = {
  title: "Arrow's Blog",
  description: 'Try Your Best.\nDo Your Best.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '主页', link: '/', icon: 'reco-home' },
      { text: '回顾', link: '/timeline/', icon: 'reco-date' },
      // { text: 'Docs', 
      //   icon: 'reco-message',
      //   items: [
      //     { text: 'vuepress-reco', link: '/docs/theme-reco/' }
      //   ]
      // },
      { text: '我', 
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/Arrow-zb', icon: 'reco-github' },
          { text: 'CSDN', link: 'https://arrow.blog.csdn.net/', icon: 'reco-csdn' }
        ]
      }
    ],
    // sidebar: {
    //   '/docs/theme-reco/': [
    //     '',
    //     'theme',
    //     'plugin',
    //     'api'
    //   ]
    // },  
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2,
        text: '归类' 
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    friendLink: [
      {
        title: 'CSDN',
        desc: 'Share my all',
        // email: '1156743527@qq.com',
        link: 'https://arrow.blog.csdn.net/'
      },
      // {
      //   title: 'vuepress-theme-reco',
      //   desc: 'A simple and beautiful vuepress Blog & Doc theme.',
      //   avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
      //   link: 'https://vuepress-theme-reco.recoluan.com'
      // },
    ],
    logo: '/logo.png',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    lastUpdated: 'Last Updated',
    author: 'arrow',
    authorAvatar: '/avatar.png',
    record: '蜀ICP备19036961号-1',
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    valineConfig: {
      appId: 'qOJeJWv99OvLCHGMI82CBTAM-gzGzoHsz',// your appId
      appKey: 'Hkl1ml7O9W0atFRaqGmUYt5K', // your appKey
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
       'dynamic-title',
       {
          showIcon: '/favicon.ico',
          showText: '(/≧▽≦/)初出茅庐不可欺！',
          hideIcon: '/favicon.ico',
          hideText: '(●—●)莫欺少年穷！',
          recoverTime: 2000,
       },
    ],
    [
      'ribbon',
      {
         size: 60, // width of the ribbon, default: 90
         opacity: 0.1, // opacity of the ribbon, default: 0.3
         zIndex: -1, // z-index property of the background, default: -1
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['miku'],
        messages: { 
          welcome: '欢迎来到arrow note！', 
          home: '没有什么比努力更幸福了！', 
          theme: '莫欺少年穷！', 
          close: '天官赐福！' 
        }
      },
    ],
  //   [
  //     'meting',
  //     { 
  //       meting: {
  //         server: "netease",
  //         type: "playlist",
  //         mid: "966357361",
  //        },
  //       aplayer: {
  //         mini: true,
  //         theme: "#b7daff",
  //         autoplay: true
  //       },
  //     }
  //  ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: 'Heartbeats',
            artist: 'Amy Diamond',
            url: '/bgm/heartbeats.mp3',
            cover: '/bgm/heartbeats.jpg'
          }
        ],  
        autoShrink: true,
        position: { 
          left: '10px', 
          bottom: '50px', 
          'z-index': '999999'
        },
        floatStyle: { bottom: '100px', 'z-index': '999999' },
        autoPlay: true
      },
    ]
 ]
}  
