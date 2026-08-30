// ============================================================
// 网站数据（与之前完全相同，可自由增删）
// ============================================================
const siteData = [
    {
        category: "🔍√ 常用网址",
        sites: [
            { name: "阿里公告更新", desc: "规则专题首页", url: "https://onetouch.alibaba.com/moBasedata/luyou/home/act/icbu_rules/index"  },
            { name: "Google Trends（谷歌趋势）", desc: "谷歌搜索趋势", url: "https://trends.google.com/home"}
        ]
    },
    {
        category: "📦 ∞ 压缩网址",
        sites: [
            { name: "外贸人工具网", desc: "外贸人工具网", url: "https://ywange.com/tool" },
            { name: "AMZ123", desc: "AMZ123", url: "https://www.amz123.com/" },
            { name: "tool.lu", desc: "开发者工具箱，提供代码格式化、加密解密、时间处理、谐音梗", url: "https://tool.lu/"}
        ]
    },
    {
        category: "💰电商平台",
        sites: [
            { name: "Alibaba", desc: "阿里国际站买家端", url: "https://www.alibaba.com/"},
            { name: "Amazon", desc: "亚马逊买家端", url: "https://www.amazon.com/"},
            { name: "亚马逊以图购物", desc: "或者是在搜索框里面搜索shop the look", url: "https://www.amazon.com/stylesnap?pd_rd_w=DCUiY&content-id=amzn1.sym.d26e24db-d6a0-41ff-bb8a-bf1969aea086:amzn1.sym.d26e24db-d6a0-41ff-bb8a-bf1969aea086&pf_rd_p=d26e24db-d6a0-41ff-bb8a-bf1969aea086&pf_rd_r=DWDEKPQS8MVW2VZ4R0HV&pd_rd_wg=wKHZw&pd_rd_r=cb2e604b-f50c-4121-a0da-b41f47684af8&qid=1722580308&ref_=sxts_snpl_1_0_d26e24db-d6a0-41ff-bb8a-bf1969aea086"},
            { name: "亚马逊帮助", desc: "亚马逊帮助，需要登陆", url: "https://sellercentral.amazon.com/help/hub/reference/G2"}
        ]
    },

    {
        category: "🧰工具TOOL",
        sites: [
            { name: "Excalidraw", desc: "手绘风格的白板工具，非常适合画架构图、流程图", url: "https://excalidraw.com/"},
            { name: "XMind", desc: "思维导图软件，有助于梳理思路和规划，要登录", url: "https://xmind.cn/"},
            { name: "iLovePDF", desc: "免费功能全面的 PDF 在线处理工具，支持合并、拆分、压缩、转换等", url: "https://www.ilovepdf.com/zh-cn"}
        ]
    },
    {
        category: "🧲主流社媒平台",
        sites: [
            { name: "小红书", desc: "年轻人生活社区，UGC 笔记种草，兼具社交、消费决策与电商", url: "https://www.xiaohongshu.com/"},                        
            { name: "Bilibili (B站)", desc: "“B站大学”，上面有海量的编程教学视频", url: "https://www.bilibili.com/"},
            { name: "知乎", desc: "综合性问答社区", url: "https://www.zhihu.com/"},
            { name: "WhatSapp", desc: "WA", url: "https://web.whatsapp.com/"},  
            { name: "Instagram", desc: "INS", url: "https://www.instagram.com/"},
            { name: "Facebook", desc: "FB", url: "https://www.facebook.com/"},
            { name: "YouTube", desc: "油管", url: "https://www.youtube.com/"},
            { name: "tiktok", desc: "国外抖音", url: "https://www.tiktok.com/"},
            { name: "Gmail邮箱", desc: "邮箱", url: "https://mail.google.com/"}
        ]
    },
    {
        category: "🤖 AI 与辅助",
        sites: [
            { name: "chatgpt", desc: "AI聊天机器人的开创者，功能全面，通用性强。擅长复杂的写作、编程、研究和头脑风暴", url: "https://chatgpt.com/" },
            { name: "Google Gemini (谷歌)", desc: "以性价比和与Google生态的深度整合为特点。能处理文本、图像、音频等多种输入", url: "https://gemini.google.com"},
            { name: "Claude (Anthropic)", desc: "以长文本处理和符合伦理的生成内容见长。上下文窗口达200K tokens，适合处理长篇文档", url: "https://claude.ai"},
            { name: "Deepseek", desc: "通用人工智能助手，它的能力覆盖了工作、学习、编程、创作、生活等多个场景", url: "https://chat.deepseek.com/"},
            { name: "豆包 (字节跳动)", desc: "集成语音识别和图像生成，适合移动端", url: "https://www.doubao.com"},
            { name: "Kimi (月之暗面)", desc: "超长上下文处理能力", url: "https://kimi.moonshot.cn/"},            
            { name: "通义千问 (阿里巴巴)", desc: "国内综合实力强劲的模型之一。其Qwen Chat提供“深度思考”模式，功能与DeepSeek类似", url: "https://chat.qwen.ai"},
            { name: "文心一言 (百度)", desc: "与你对话、回答问题、协助创作，并在文学创作、商业文案、数理推算、中文理解和多模态生成这五大场景中提供强大助力的知识增强大语言模型", url: "https://yiyan.baidu.com"},
            { name: "智谱清言 (智谱AI)", desc: "在编程和完成复杂任务方面表现突出", url: "https://chatglm.cn/"},
            { name: "腾讯元宝 (腾讯)", desc: "一款深度整合微信、腾讯文档等腾讯生态的全能AI助手，支持AI搜索、文档处理、图片视频生成等多种功能", url: "https://yuanbao.tencent.com/"},
            { name: "扣子", desc: "组建、管理虚拟AI团队，让多个AI像同事一样分工协作，共同完成复杂任务的智能平台", url: " https://www.coze.cn/task/7618061058796421395?from=space_self_intro"}
        ]
    },
    {
        category: "🧮 编程学习",
        sites: [
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "W3School ", desc: "初学者入门Web开发的最佳选择之一", url: "https://www.w3school.com.cn/"},
            { name: "CSDN", desc: "国内老牌的技术社区，拥有海量的原创技术文章和资料", url: "https://www.csdn.net/"},
            { name: "Stack Overflow", desc: "全球最著名的技术问答社区，遇到编程难题时，在这里几乎总能找到答案", url: "http://stackoverflow.com/"},
            { name: "MDN Web 文档", desc: "Web 开发者的官方权威文档库，由 Mozilla 维护，是查询 HTML、CSS、JavaScript 标准最可靠的地方", url: "https://developer.mozilla.org/zh-CN/"},
            { name: "博客园 (Cnblogs)", desc: "界面干净、专注于知识分享的开发者社区", url: "https://www.cnblogs.com/"},
            { name: "稀土掘金 (Juejin)", desc: "技术社区，资深开发者和牛人分享编程经验和干货", url: "https://juejin.cn/"},
            { name: "Gitee", desc: "国内版GitHub，代码托管快", url: "https://gitee.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"}
        ]
    },
    {
        category: "🔠E英语学习",
        sites: [
            { name: "letmeenglish.com", desc: "完全免费英语学习网站", url: "https://letmeenglish.com/zh-hans/"},
            { name: "待更新", desc: "待更新", url: "待更新"}
        ]
    },
    //        {
    //     category: "标题",
    //     sites: [
    //         { name: "名字", desc: "描述", url: "网址"},
    //         { name: "", desc: "", url: ""},
    //         { name: "", desc: "", url: ""},
    //         { name: "", desc: "", url: ""},
    //         { name: "", desc: "", url: ""}
    //     ]
    // },
    {
        category: "🎨 绘画 & 设计 待更新",
        sites: [
            { name: "iconfont)", desc: "阿里巴巴旗下的矢量图标库，提供海量免费图标素材", url: "https://www.iconfont.cn/"},
            { name: "即时设计", desc: "功能全面的免费在线设计工具，支持多人协作", url: "https://js.design/"},
            { name: "抠抠图", desc: "免费 AI智能在线抠图一键自动去背景", url: "https://www.koukoutu.com/removebgtool/all"},
            { name: "蕉点AI", desc: "模仿banana", url: "https://www.jiaodianai.com/"},
            { name: "即梦AI", desc: "付费即刻造梦", url: "https://jimeng.jianying.com/"},
            { name: "昵图网", desc: "图片设计素材", url: "https://www.nipic.com/"},
            { name: "pexels", desc: "摄影素材", url: "https://www.pexels.com/"},
            { name: "可画canva", desc: "素材", url: "https://www.canva.com/"},
            { name: "pinterest", desc: "素材", url: "https://pinterest.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"},
            { name: "菜鸟教程 (Runoob)", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},        
            { name: "GitHub", desc: "全球最大的代码托管平台", url: "https://github.com/"}
        ]
    },

    // {
    //     category: "🎨 绘画 & 设计",
    //     sites: [
    //         { name: "Pixiv", desc: "二次元插画社区" },
    //         { name: "Behance", desc: "设计作品展示" },
    //         { name: "Dribbble", desc: "UI/UX 灵感" },
    //         { name: "Krita", desc: "免费数字绘画软件" },
    //         { name: "Coolors", desc: "配色方案生成" }
    //     ]
    // },
    // {
    //     category: "🧳 外贸工具",
    //     sites: [
    //         { name: "中国国际贸易单一窗口", desc: "报关、税率、通关信息" },
    //         { name: "装柜计算", desc: "集装箱/厢式货车/自定义" },
    //         { name: "网站时光机", desc: "查看客户网站历史" },
    //         { name: "虚拟号码", desc: "用于接收验证码短信" },
    //         { name: "临时邮箱", desc: "Snapmail 虚拟邮箱服务" },
    //         { name: "Opencorporates", desc: "国外版企查查" },
    //         { name: "美国关税查询", desc: "出口美国商品税率" },
    //         { name: "原产地证查询", desc: "查询原产地证书" },
    //         { name: "国际小包查询", desc: "追踪国际包裹" }
    //     ]
    // },
    // {
    //     category: "🔍💻 📀 💼搜索 & 数据",
    //     sites: [
    //         { name: "Whois", desc: "查询域名信息" },
    //         { name: "Hunter.io", desc: "输入域名查邮箱" },
    //         { name: "Rocketreach", desc: "客户挖掘与背调" },
    //         { name: "全球展会查询", desc: "贸易展览与活动" },
    //         { name: "Projecthoneypot", desc: "查IP被拉黑/投诉" }
    //     ]
    // },
    {
        category: "📦物流 & 单证 待更新",
        sites: [
            { name: "物流单号购买", desc: "各种单号购买" },
            { name: "原产地证查询", desc: "查询原产地证书" },
            { name: "原来是菜鸟", desc: "主打编程零基础教学", url: "https://www.runoob.com/"},  
            { name: "国际小包查询", desc: "追踪国际包裹" }
        ]
    }
];

// ============================================================
// 状态管理
// ============================================================
let currentCategory = null;          // 当前选中的分类名称（字符串）
let filteredData = [...siteData];   // 当前过滤后的数据（用于搜索）

// ============================================================
// DOM 引用
// ============================================================
const sidebar = document.getElementById('sidebar');
const contentArea = document.getElementById('contentArea');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// ============================================================
// 渲染左侧目录
// ============================================================
function renderSidebar(categories) {
    if (!categories || categories.length === 0) {
        sidebar.innerHTML = `<div class="category-item" style="cursor:default;color:#94a3b8;">无匹配分类</div>`;
        return;
    }

    let html = '';
    categories.forEach(cat => {
        const count = cat.sites.length;
        const activeClass = (currentCategory === cat.category) ? 'active' : '';
        html += `
            <div class="category-item ${activeClass}" data-category="${cat.category}">
                <span>${cat.category}</span>
                <span class="badge">${count}</span>
            </div>
        `;
    });
    sidebar.innerHTML = html;

    // 绑定点击事件
    document.querySelectorAll('.category-item[data-category]').forEach(el => {
        el.addEventListener('click', function() {
            const catName = this.dataset.category;
            // 从过滤后的数据中找到该分类
            const found = filteredData.find(c => c.category === catName);
            if (found) {
                currentCategory = catName;
                renderSidebar(filteredData);    // 重新渲染高亮
                renderContent(found);           // 显示该分类内容
            }
        });
    });
}

// ============================================================
// 渲染右侧内容（展示指定分类的站点）
// ============================================================
function renderContent(category) {
    if (!category || !category.sites || category.sites.length === 0) {
        contentArea.innerHTML = `<div class="empty-tip">该分类下暂无站点</div>`;
        return;
    }

    let html = `<div class="content-title">${category.category}</div>`;
    html += `<div class="site-list">`;
    category.sites.forEach(site => {
        html += `
            <div class="site-item">
                <span class="site-name"><a href="${site.url || '#'}" target="_blank">${site.name}</a></span>
                <span class="site-desc">${site.desc}</span>
            </div>
        `;
    });
    html += `</div>`;
    contentArea.innerHTML = html;
}

// ============================================================
// 搜索过滤（只匹配站点名称）
// ============================================================
function filterByKeyword(keyword) {
    if (!keyword.trim()) {
        return siteData.map(cat => ({ ...cat, sites: [...cat.sites] }));
    }
    const lower = keyword.toLowerCase().trim();
    const result = [];
    siteData.forEach(cat => {
        const matched = cat.sites.filter(site => site.name.toLowerCase().includes(lower));
        if (matched.length > 0) {
            result.push({ ...cat, sites: matched });
        }
    });
    return result;
}

// ============================================================
// 执行搜索（更新 filteredData，重绘左侧，并自动选中第一个分类）
// ============================================================
function performSearch() {
    const keyword = searchInput.value;
    filteredData = filterByKeyword(keyword);

    // 重置当前选中为第一个分类（如果有）
    if (filteredData.length > 0) {
        currentCategory = filteredData[0].category;
    } else {
        currentCategory = null;
    }

    // 重新渲染左侧
    renderSidebar(filteredData);

    // 渲染右侧内容（当前选中的分类）
    if (currentCategory) {
        const selected = filteredData.find(c => c.category === currentCategory);
        if (selected) {
            renderContent(selected);
        } else {
            // 理论上不会发生
            contentArea.innerHTML = `<div class="empty-tip">请从左侧选择一个分类</div>`;
        }
    } else {
        contentArea.innerHTML = `<div class="empty-tip">没有找到匹配的网站</div>`;
    }
}

// ============================================================
// 初始化：加载全部数据
// ============================================================
function init() {
    filteredData = siteData.map(cat => ({ ...cat, sites: [...cat.sites] }));
    if (filteredData.length > 0) {
        currentCategory = filteredData[0].category;
        renderSidebar(filteredData);
        const first = filteredData[0];
        renderContent(first);
    } else {
        sidebar.innerHTML = `<div class="category-item" style="cursor:default;">暂无数据</div>`;
        contentArea.innerHTML = `<div class="placeholder">暂无数据</div>`;
    }
}

// ============================================================
// 绑定搜索事件
// ============================================================
searchInput.addEventListener('input', performSearch);
searchBtn.addEventListener('click', performSearch);

// ============================================================
// 启动
// ============================================================
init();