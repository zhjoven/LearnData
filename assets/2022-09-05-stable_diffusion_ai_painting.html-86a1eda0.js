import{ae as s,G as l,H as d,E as e,S as o,N as t,af as n,W as r}from"./framework-0f3f6485.js";const c={},h=e("p",null,"我从小特别羡慕会画画的伙伴，他们能绘出心中所想，而本人水平最高的肖像画是丁老头。接触 Stable Diffusion 后，我脱胎换骨，给自己贴上了「会画画」的新标签。",-1),p=e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-09-04-11-53-20.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"丁老头进化旅程")],-1),f=e("p",null,[o("Stable Diffusion 是一个「文本到图像」的人工智能模型，也是唯一一款开源且能部署在家用电脑（对硬件要求不高）上的 AI 绘图工具，"),e("strong",null,"可以在 6GB 显存显卡或无显卡（只依赖 CPU）下运行"),o("，并在几秒内生成图像，无需预处理和后处理。")],-1),u={href:"https://huggingface.co/spaces/stabilityai/stable-diffusion",target:"_blank",rel:"noopener noreferrer"},b={href:"https://beta.dreamstudio.ai/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://wenxin.baidu.com/moduleApi/ernieVilg",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/invoke-ai/InvokeAI/blob/main/docs/installation/INSTALL_MAC.md#doesnt-work-anymore",target:"_blank",rel:"noopener noreferrer"},k=e("strong",null,"M1/M2 Mac",-1),x={href:"https://www.charl-e.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://sspai.com/post/75682",target:"_blank",rel:"noopener noreferrer"},v=n('<figure><img src="http://tc.seoipo.com/2022-09-05-16-22-45.png" alt="" tabindex="0" loading="lazy"><figcaption>Stable Diffusion 部署流程</figcaption></figure><p>本文以 Windows 平台为例，下面会依次介绍环境配置，Stable Diffusion 安装和基本使用方法。</p><h2 id="docker-环境配置" tabindex="-1"><a class="header-anchor" href="#docker-环境配置" aria-hidden="true">#</a> Docker 环境配置</h2><p>本方案基于 Docker 配置，而 Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，它必须部署在 Linux 内核的系统上。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> 因此，Mac 不用特别配置，而 Windows 系统想部署 Docker 就必须需要安装一个虚拟 Linux 环境，<strong>配置 WSL 或是启用 Hyper-V</strong>，二选一即可，推荐使用子系统 WSL（占用系统盘 30G 的空间）。</p><h3 id="安装-wsl" tabindex="-1"><a class="header-anchor" href="#安装-wsl" aria-hidden="true">#</a> 安装 WSL</h3><p>在管理员 PowerShell 输入命令 <code>wsl --install</code>，之后终端会默认安装 Ubuntu。系统下载时间较长，注意别关机。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> 安装 Ubuntu 完成后，按提示设置 Ubuntu 账户和密码。</p><h3 id="启用-hyper-v" tabindex="-1"><a class="header-anchor" href="#启用-hyper-v" aria-hidden="true">#</a> 启用 Hyper-V</h3><p>以管理员身份打开 PowerShell 控制台，输入命令 <code>Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All</code>。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup> 重启电脑后，将开启 Hyper-V。</p><h3 id="linux-路径-windows" tabindex="-1"><a class="header-anchor" href="#linux-路径-windows" aria-hidden="true">#</a> Linux 路径（Windows）</h3><p>配置 WebUI Docker 要进入 Linux 环境，因此 Windows 用户需将其路径转换为 Linux 路径，Mac/Linux 用户可忽略本步。</p><p>假设容器位于 <code>D:\\Desktop\\stable-diffusion-webui-docker</code>：</p><ol><li>把磁盘符号改为小写，转换为 <code>d:\\Desktop\\stable-diffusion-webui-docker</code></li><li>添加 <code>/mnt/</code> 前缀，转换为 <code>/mnt/d:\\Desktop\\stable-diffusion-webui-docker</code>。因为 Windows 本地磁盘是挂载在 Linux 的 mnt 目录下的。</li><li>将反斜扛 <code>\\</code> 替换为 <code>/</code>。最终得到 Linux 路径 <code>/mnt/d:/Desktop/stable-diffusion-webui-docker</code>。</li></ol><h2 id="配置-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#配置-stable-diffusion" aria-hidden="true">#</a> 配置 Stable Diffusion</h2><h3 id="安装-docker-desktop" tabindex="-1"><a class="header-anchor" href="#安装-docker-desktop" aria-hidden="true">#</a> 安装 Docker Desktop</h3>',14),D={href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"下载-webui-docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#下载-webui-docker","aria-hidden":"true"},"#"),o(" 下载 WebUI Docker")],-1),S={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/releases/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://www.aliyundrive.com/s/EKmK7MGrHdn",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"分支介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分支介绍","aria-hidden":"true"},"#"),o(" 分支介绍")],-1),L=e("p",null,[o("目前 Stable Diffusion 有 sygil、auto、auto-cpu 和 invoke 四个分支。如果要更换分支，则更改镜像构建命令 "),e("code",null,"docker compose --profile [ui] up --build"),o("，将 "),e("code",null,"[ui]"),o(" 替换为所需的镜像名即可。原本的 hlkcy 分支更名为 sygil，原本的 lstein 分支更名为 invoke。")],-1),W=e("li",null,[e("strong",null,"sygil"),o("：界面直观，最高分辨率为 1024x1024，镜像构建命令为 "),e("code",null,"docker compose --profile sygil up --build"),o("。")],-1),G=e("strong",null,"auto",-1),R=e("code",null,"docker compose --profile auto up --build",-1),E=e("code",null,"--medvram",-1),B=e("code",null,"--lowvram",-1),P={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Install-and-Run-on-AMD-GPUs#running-inside-docker",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[e("strong",null,"auto-cpu"),o("：唯一不依赖显卡的分支。如果没有符合要求的显卡，可以使用 CPU 版本，稍后的镜像构建命令为 "),e("code",null,"docker compose --profile auto-cpu up --build"),o("。")],-1),N=e("li",null,[e("strong",null,"invoke"),o("：cli 端非常成熟，WebUI 端参数较少，能自动读取图片记录，适合无进阶需求的新手和 Mac 用户使用，镜像构建命令为 "),e("code",null,"docker compose --profile invoke up --build"),o("。")],-1),T=n(`<h3 id="构建-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#构建-stable-diffusion" aria-hidden="true">#</a> 构建 Stable Diffusion</h3><p>启动 Docker Desktop，打开 WSL（Ubuntu）或 Mac 终端输入路径切换命令 <code>cd /mnt/d/Desktop/stable-diffusion-webui-docker</code>，该路径为 Stable Diffusion WebUI Docker 解压文件目录。然后，输入下方的部署命令。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 自动下载采样模型和依赖包</span>
<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> download up <span class="token parameter variable">--build</span>
<span class="token comment"># 上方命令需要 20 分钟或更长，完成后执行镜像构建命令</span>

<span class="token function">docker</span> compose <span class="token parameter variable">--profile</span> sygil up <span class="token parameter variable">--build</span>
<span class="token comment"># auto 是功能最多的分支，可以选择 auto | auto-cpu | invoke | sygil | sygil-sl</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="http://tc.seoipo.com/2022-09-04-18-32-31.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>构建完成后，提示访问 <code>http://localhost:7860/</code>，你就可以在本地电脑上用 AI 生成图片了。<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></p><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> 使用说明</h2><p>使用界面以 sygil 分支为例，其他分支的主题界面略有不同，但功能上并没有根本性差异。</p><h3 id="启动-stable-diffusion" tabindex="-1"><a class="header-anchor" href="#启动-stable-diffusion" aria-hidden="true">#</a> 启动 Stable Diffusion</h3><ol><li>打开 Docker Desktop。</li><li>在 Containers 中选中分支容器，点击启动。</li><li>浏览器中访问 <code>http://localhost:7860/</code>。</li></ol><figure><img src="http://tc.seoipo.com/2022-09-04-17-06-27.png" alt="" tabindex="0" loading="lazy"><figcaption>Docker Desktop 界面</figcaption></figure><h3 id="text-to-image" tabindex="-1"><a class="header-anchor" href="#text-to-image" aria-hidden="true">#</a> Text-to-Image</h3><p>Text-to-Image 是 Stable Diffusion 依据文字描述来生成图像。风景、创意画等崇尚空间结构的画作类型时，优先推荐竖图或者横图。人像类画作推荐 1:1 的方图，否则可能会出现两个或者多个人脸的叠加现象。生成图片的分辨率是有限制的，可以用 Upscale 放大结果图片。</p><figure><img src="http://tc.seoipo.com/2022-09-05-08-28-23.png" alt="" tabindex="0" loading="lazy"><figcaption>Text-to-Image 界面</figcaption></figure><p>默认使用 Simple 简单模式，点击右侧按钮 Advanced，可查看进阶选项，使用进阶的场景矩阵、面孔修复和分辨率放大等多种功能。</p><h3 id="image-to-image" tabindex="-1"><a class="header-anchor" href="#image-to-image" aria-hidden="true">#</a> Image-to-Image</h3><p>Image-to-Image 依据文字描述和输入源图，生成相关的图像。该模式若以素描、结构画为来源图，可充分填充图像细节；若以细节充分的照片为来源图，则会输出差异较大的结果。更妙的是，你可以限定区域来生成图像，非常适合图像修改。</p><figure><img src="http://tc.seoipo.com/2022-09-04-15-39-00.png" alt="" tabindex="0" loading="lazy"><figcaption>Image-to-Image 界面</figcaption></figure><p>CLIP interrogator 会根据图像来生成文字描述。Denoising Strength 指与原图的差异度，建议在 0.75-0.9，魔改图片可以设为 0.5 以下。下图中的 Denoising Strength 只有 0.44，整体图片结构与要素没变，但结果如何你看到了。</p><figure><img src="http://tc.seoipo.com/2022-09-04-15-40-26.png" alt="" tabindex="0" loading="lazy"><figcaption>超级魔改图片</figcaption></figure><h3 id="image-lab" tabindex="-1"><a class="header-anchor" href="#image-lab" aria-hidden="true">#</a> Image Lab</h3><p>Image Lab 能批量修正面孔和放大图片分辨率。</p><p>Fix Faces 是通过 GFPGAN 模型来改善图片中的面孔，Effect strength 滑块可以控制效果的强度。但实际效果别报太高期许，下图右侧开启了 Fix Faces，只能说勉强有了五官。</p><figure><img src="http://tc.seoipo.com/2022-09-04-15-47-14.png" alt="" tabindex="0" loading="lazy"><figcaption>A woman flying in the air laughing</figcaption></figure><p>Upscale 放大分辨率功能有 RealESRGAN，GoBIG，Latent Diffusion Super Resolution 和 GoLatent 四种模型，其中的 RealESRGAN 有普通与卡通两种模式，可按需选择。Upscale 图片主要消耗 CPU 与内存资源。</p><h2 id="文字描述图像" tabindex="-1"><a class="header-anchor" href="#文字描述图像" aria-hidden="true">#</a> 文字描述图像</h2><p>Stable Diffusion 是以文字内容 (英文) 描绘一个场景或事物，从而决定你的画面中将出现什么。文字描绘是决定图像生成质量的关键因素。</p><p>样例：<code>A beautiful painting {画作种类} of a singular lighthouse, shining its light across a tumultuous sea of blood {画面描述} by greg rutkowski and thomas kinkade {画家/画风}, Trending on artstation {参考平台}, yellow color scheme {配色}</code>。<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></p><h3 id="常规描述" tabindex="-1"><a class="header-anchor" href="#常规描述" aria-hidden="true">#</a> 常规描述</h3><ol><li>输入图像的对象、主体，比如一只熊猫、一个持剑的战士，<strong>不要描述动作、情绪和事件</strong>；<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup></li><li><strong>画作种类</strong>：一幅画（a painting of + raw prompt）还是一张照片（a photograph of + raw prompt），或者 Watercolor（水彩）、Oil Paint（油画）、Comic（漫画）、Digital Art（数码艺术）、Illustration（插画）、realistic painting（写实画）、photorealistic（写实照片）、Portrait photogram（肖像照）、sculpture (雕塑) 等等，画作种类可以叠加。</li><li><strong>画家/画风</strong>：建议混合多个画家的风格，比如 <code>Studio Ghibli, Van Gogh, Monet</code>，或描述风格种类，比如 <code>very coherent symmetrical artwork</code>，将作品结构设为「连贯且对称」。</li><li><strong>色调</strong>：yellow color scheme 指整个画面的主色调为黄色。</li><li><strong>参考平台</strong>：Trending on ArtStation，也可以替换为「Facebook」「Pixiv」「Pixbay」等。 <img src="http://tc.seoipo.com/2022-09-16-22-33-26.png" alt="" title="相同参数下，不同平台生成的图片" loading="lazy"></li></ol><h3 id="特征描述" tabindex="-1"><a class="header-anchor" href="#特征描述" aria-hidden="true">#</a> 特征描述</h3><p>除画面主体外，可以用其他具象物体和形容词来填充画面细节。描述词要具体，讲出你要的物体和它的特征。</p><ul><li>次要元素：物体不要太多，两到三个就好。如果你想特别强调某个元素，可以加很多括号或者惊叹号，比如 <code>beautiful forest background, desert!!, (((sunset)))</code> 中会优先体现「desert」和「sunset」元素。</li><li>人物特征：<code>detailed gorgeous face, delicate features, elegant, Googly Eyes, Bone, big tits, silver hair, olive skin, Mini smile</code>；</li><li>特定润色：<code>insanely detailed and intricate, gorgeous, surrealism, smooth, sharp focus, Painting, Digital Art, Concept Art, Illustration, Artstation, in a symbolic and meaningful style, 8K</code>；</li><li>光线描述：<code>Natural Lighting, Cinematic Lighting, Crepuscular Rays, X-Ray, Backlight</code>，或逼真光照 <code>Unreal Engine</code>；</li><li>镜头视角：<code>Cinematic, Magazine, Golden Hour, F/22, Depth of Field, Side-View</code>；</li><li>画面质量：<code>award winning, breathtaking, groundbreaking, superb, outstanding</code>；</li><li>其他描述：细节和纹理、物体占据画面的大小、年代、渲染 / 建模工具等。</li></ul><h3 id="反向描述" tabindex="-1"><a class="header-anchor" href="#反向描述" aria-hidden="true">#</a> 反向描述</h3><p>negative prompt（反向描述）可以在 auto/auto-cpu 分支中设置，避免画面出现指定元素。</p><ul><li>避免畸形：<code>ugly, blurry, out of frame, bad proportions, duplicate, deformed, mutation, morbid, mutilated, bad anatomy, disfigured, extra limbs, armless, legless, cloned face, extra heads, extra legs, extra arms, malformed limbs, amputee, poorly drawn face, poorly drawn hands, poorly drawn feet, fat, long neck, poo art, bad hands, bad art</code>；</li><li>避免裸体：<code>nudity, bare breasts</code>。</li></ul><h3 id="prompt-参考" tabindex="-1"><a class="header-anchor" href="#prompt-参考" aria-hidden="true">#</a> prompt 参考</h3><p>除画面主体描述外，其他要素并非必须。如果你只是简单尝试，输入主体「apples」即可。</p>`,37),U={href:"https://promptomania.com/stable-diffusion-prompt-builder/",target:"_blank",rel:"noopener noreferrer"},F={href:"https://weirdwonderfulai.art/resources/disco-diffusion-modifiers/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://prompthero.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://openart.ai/",target:"_blank",rel:"noopener noreferrer"},z=n('<blockquote><p>goddess close-up portrait skull with mohawk, ram skull, skeleton, thorax, x-ray, backbone, jellyfish phoenix head, nautilus, orchid, skull, betta fish, bioluminiscent creatures, intricate artwork by Tooth Wu and wlop and beeple, highly detailed, digital painting, Trending on artstation, very coherent symmetrical artwork, concept art, smooth, sharp focus, illustration, 8k</p></blockquote><h2 id="prompt-matrix" tabindex="-1"><a class="header-anchor" href="#prompt-matrix" aria-hidden="true">#</a> Prompt matrix</h2><p>Prompt matrix 是 sygil 分支的功能，可以按不同条件组合生成多张相关但不同的画面，适合用于制作视频素材。<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup> 此时，批次数量的设置会被忽略。</p>',3),H=n(`<p>上方视频的调教词为 <code>A mecha robot in World War II in realistic style|Shoot with another mecha robot|Bombed by planes|Missile drop|broken|Repaired|cinematic lighting</code>。<code>|</code> 符号后的场景条件将进行排列组合，视频样例有 6 个场景条件生成 64 张图。</p><p>另外，我们可以指定场景条件位置，比如 <code>@(moba|rpg|rts) character (2d|3d) model</code> 表示 <code>(moba|rpg|rts 三选一) character (2d|3d 二选一) model</code>，也就是会生成 3*2 张图片。开头的 <code>@</code> 是触发指定场景条件位置的符号，不能省略。</p><h2 id="textual-inversion" tabindex="-1"><a class="header-anchor" href="#textual-inversion" aria-hidden="true">#</a> Textual Inversion</h2><p>Textual Inversion（文本倒置）是 auto/auto-cpu 分支提供的功能，可以个人定制单词在模型中的含义。比如大众模型中医生多是白人男性，而我们可以输入 5 张亚洲女性照片并将其与 doctor 关联，经过 Textual Inversion 处理后的模型生成的医生形象将以亚洲女性为主。<sup class="footnote-ref"><a href="#footnote8">[8]</a><a class="footnote-anchor" id="footnote-ref8"></a></sup></p><p>Textual Inversion 定制流程：</p><ol><li>Preprocess images：设置源图目录和输出目录。</li><li>Create embedding（新建嵌入）：建立模型属性。</li><li>待续。</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="docker-desktop-failed" tabindex="-1"><a class="header-anchor" href="#docker-desktop-failed" aria-hidden="true">#</a> Docker Desktop failed</h3><p>未正常安装/关闭 Docker 容器时，可能会报错 <code>Docker Desktop failed to start/stop</code>。</p><p>先删除 <code>%AppData%</code> 路径下的 Docker 文件夹，然后在 PowerShell 中输入下方命令，关闭 WSL 和 docker-desktop。最后，手动重启 Docker Desktop。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--shutdown</span>
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
wsl <span class="token parameter variable">--unregister</span> docker-desktop
wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-desktop-cannot-start" tabindex="-1"><a class="header-anchor" href="#docker-desktop-cannot-start" aria-hidden="true">#</a> Docker Desktop cannot start</h3><p><code>Hardware assisted virtualization and data execution protection must be enabled in the BIOS</code> 报错说明电脑没开启虚拟化。</p><p>在开机的时候多按几次 <code>F2</code> 或 <code>DEL</code> 进入 BIOS，然后设置中开启「Intel Virtual Technology」，AMD 则是将「SVM Support」设置为设置为「Enable」的状态；最后点击「F10」保存退出即可。</p><h3 id="docker-命令失败" tabindex="-1"><a class="header-anchor" href="#docker-命令失败" aria-hidden="true">#</a> docker 命令失败</h3><p><code>The command &#39;docker&#39; could not be found</code> 说明当前命令行确实 Docker 环境缺失，检查 Docker Desktop 是否启动。</p><h3 id="端口访问被拒" tabindex="-1"><a class="header-anchor" href="#端口访问被拒" aria-hidden="true">#</a> 端口访问被拒</h3><p>Docker 容器原本运行正常，端口访问突然被拒绝了，显示 <code>Error response from daemon: Ports are not available: exposing port TCP 0.0.0.0:7860 -&gt; 0.0.0.0:0: listen tcp 0.0.0.0:7860: bind: An attempt was made to access a socket in a way forbidden by its access permissions</code>。</p><p>在 Powershell 中输入 <code>netsh int ipv4 show excludedportrange protocol=tcp</code> 检查是否处于被排除端口范围，然后输入 <code>reg add HKLM\\SYSTEM\\CurrentControlSet\\Services\\hns\\State /v EnableExcludedPortRange /d 0 /f</code> 开启端口。操作完成后，重启电脑即可解封端口。<sup class="footnote-ref"><a href="#footnote9">[9]</a><a class="footnote-anchor" id="footnote-ref9"></a></sup></p><h3 id="filenotfounderror" tabindex="-1"><a class="header-anchor" href="#filenotfounderror" aria-hidden="true">#</a> FileNotFoundError</h3><p>再次架构容器时报错 <code>FileNotFoundError: [Errno 2] No such file or directory: &#39;/models/model.ckpt&#39;</code>，这是架构位置错误导致的。此时，我们需要检查是否通过 WSL 输入的架构命令，并且 Stable Diffusion WebUI Docker 解压路径是否配置正确。</p><h3 id="采样模型" tabindex="-1"><a class="header-anchor" href="#采样模型" aria-hidden="true">#</a> 采样模型</h3><p>采样模型是 AI 绘画的核心。2022.09.10 已支持自动下载采样模型，下方列表仅做参考。</p>`,23),O={href:"https://www.googleapis.com/storage/v1/b/aai-blog-files/o/sd-v1-4.ckpt?alt=media",target:"_blank",rel:"noopener noreferrer"},K=e("code",null,"model.ckpt",-1),q={href:"https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.1.0/RealESRGAN_x4plus.pth",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/xinntao/Real-ESRGAN/releases/download/v0.2.2.4/RealESRGAN_x4plus_anime_6B.pth",target:"_blank",rel:"noopener noreferrer"},X={href:"https://heibox.uni-heidelberg.de/f/578df07c8fc04ffbadf3/?dl=1",target:"_blank",rel:"noopener noreferrer"},J={href:"https://heibox.uni-heidelberg.de/f/31a76b13ea27482981b4/?dl=1",target:"_blank",rel:"noopener noreferrer"},Q=e("code",null,"LDSR.ckpt",-1),Z=e("code",null,"LDSR.yaml",-1),$=e("h2",{id:"最后",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),o(" 最后")],-1),ee=e("p",null,"Stable Diffusion 还不能作为生产力工具，但它让设计变得简单，也让更多普通人打开了 AI 绘画的可能性。推荐大家实际部署玩下，让自己拥有更多的可能。",-1),oe={href:"https://sspai.com/post/75544",target:"_blank",rel:"noopener noreferrer"},te=e("hr",{class:"footnotes-sep"},null,-1),ae={class:"footnotes"},ne={class:"footnotes-list"},re={id:"footnote1",class:"footnote-item"},ie={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},se=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),le={id:"footnote2",class:"footnote-item"},de={href:"https://docs.microsoft.com/zh-cn/windows/wsl/install#install-wsl-command",target:"_blank",rel:"noopener noreferrer"},ce=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),he={id:"footnote3",class:"footnote-item"},pe={href:"https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v#enable-hyper-v-using-powershell",target:"_blank",rel:"noopener noreferrer"},fe=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),ue={id:"footnote4",class:"footnote-item"},be={href:"https://github.com/AbdBarho/stable-diffusion-webui-docker/wiki/Setup",target:"_blank",rel:"noopener noreferrer"},ge=e("a",{href:"#footnote-ref4",class:"footnote-backref"},"↩︎",-1),me={id:"footnote5",class:"footnote-item"},_e={href:"https://www.ifanr.com/app/1484403",target:"_blank",rel:"noopener noreferrer"},ke=e("a",{href:"#footnote-ref5",class:"footnote-backref"},"↩︎",-1),xe={id:"footnote6",class:"footnote-item"},we={href:"https://www.guokr.com/article/462587/",target:"_blank",rel:"noopener noreferrer"},ve=e("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1),De={id:"footnote7",class:"footnote-item"},ye={href:"https://github.com/sygil/stable-diffusion#prompt-matrix",target:"_blank",rel:"noopener noreferrer"},Se=e("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎",-1),Ie={id:"footnote8",class:"footnote-item"},Ae={href:"https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Textual-Inversion",target:"_blank",rel:"noopener noreferrer"},Le=e("a",{href:"#footnote-ref8",class:"footnote-backref"},"↩︎",-1),We={id:"footnote9",class:"footnote-item"},Ge={href:"https://github.com/docker/for-win/issues/3171#issuecomment-572571882",target:"_blank",rel:"noopener noreferrer"},Re=e("a",{href:"#footnote-ref9",class:"footnote-backref"},"↩︎",-1);function Ee(Be,Pe){const a=r("ExternalLinkIcon"),i=r("BiliBili");return l(),d("div",null,[h,p,f,e("p",null,[o("体验 AI 绘图可借助在线工具 "),e("a",u,[o("Hugging Face"),t(a)]),o("、"),e("a",b,[o("DreamStudio"),t(a)]),o(" 或 "),e("a",g,[o("百度文心"),t(a)]),o("。与本地部署相比，Hugging Face 需排队，生成一张图约 5 分钟；DreamStudio 可免费生成 200 张图片，之后需要缴费；百度文心能用中文生成图片，但仍处于 beta 阶段，未正式商用。更重要的是，这类在线工具对图片的调教功能偏弱，无法批量生成图片，只能测试体验。")]),e("p",null,[o("如果想生成大量 AI 图片，可以通过 Docker Desktop 将 "),e("a",m,[o("Stable Diffusion WebUI Docker"),t(a)]),o(" 部署到家用电脑，从而免费实现 AI 文字绘画，不再被在线工具所限制。Mac 用户建议选择 Stable Diffusion 的 invoke 分支，部署报错参考 "),e("a",_,[o("InvokeAI 文档"),t(a)]),o("，"),k,o(" 推荐使用更简便的 "),e("a",x,[o("CHARL-E"),t(a)]),o(" 或 "),e("a",w,[o("DiffusionBee"),t(a)]),o("。")]),v,e("p",null,[o("按平台选 "),e("a",D,[o("Docker Desktop"),t(a)]),o(" 版本，安装后点击左侧的 Add Extensions，推荐 Disk usage 扩展，便于管理 Docker 存储空间。")]),y,e("p",null,[o("然后，下载 "),e("a",S,[o("Stable Diffusion WebUI Docker 配置包"),t(a)]),o(" 或 "),e("a",I,[o("阿里云盘聚合版"),t(a)]),o("，将其解压到指定路径。聚合版包括相关依赖，因此文件较大。之后更新 WebUI Docker，也是按上方步骤重新构建容器即可更新 Stable Diffusion。")]),A,L,e("ul",null,[W,e("li",null,[G,o("（推荐）：设置模块最丰富，显示绘画过程，支持随机插入艺术家、参数读取和否定描述，最高分辨率为 2048x2048（高分辨率对显存要求更高），镜像构建命令为 "),R,o("。默认使用 6GB 以上的显存，如果你的显卡内存较低，则将配置中的 "),E,o(" 改为 "),B,o("。A 卡用户注意修改 "),e("a",P,[o("显卡设置"),t(a)]),o("。")]),M,N]),T,e("p",null,[o("如果你不知道生成什么图像，可以使用 "),e("a",U,[o("promptoMANIA"),t(a)]),o(" 、"),e("a",F,[o("WEIRD WONDERFUL AI ART"),t(a)]),o(" 按提示组合描述，或参考 AI 图库 "),e("a",C,[o("PromptHero"),t(a)]),o(" 和 "),e("a",V,[o("OpenArt"),t(a)]),o(" 上其他人分享的成品图和描述文案，比如")]),z,t(i,{bvid:"BV1YP411V7vV"}),H,e("ul",null,[e("li",null,[e("a",O,[o("Stable Diffusion v1.4 (4GB)"),t(a)]),o(", 将压缩包文件重命名为 "),K,o("。")]),e("li",null,[o("(可选) "),e("a",q,[o("GFPGANv1.4.pth (340MB)"),t(a)]),o("。")]),e("li",null,[o("(可选) "),e("a",Y,[o("RealESRGAN_x4plus.pth (64MB)"),t(a)]),o(" 和 "),e("a",j,[o("RealESRGAN_x4plus_anime_6B.pth (18MB)"),t(a)]),o("。")]),e("li",null,[o("(可选) "),e("a",X,[o("LDSR (2GB)"),t(a)]),o(" 和 "),e("a",J,[o("LDSR 配置"),t(a)]),o("，分别重命名为 "),Q,o(" 和 "),Z,o("。")])]),$,ee,e("p",null,[o("本文于「"),e("a",oe,[o("少数派首发"),t(a)]),o("」。")]),te,e("section",ae,[e("ol",ne,[e("li",re,[e("p",null,[e("a",ie,[o("Windows Docker 安装"),t(a)]),o(),se])]),e("li",le,[e("p",null,[e("a",de,[o("使用 WSL 在 Windows 上安装 Linux"),t(a)]),o(),ce])]),e("li",he,[e("p",null,[e("a",pe,[o("在 Windows 10 上安装 Hyper-V"),t(a)]),o(),fe])]),e("li",ue,[e("p",null,[e("a",be,[o("Setup Stable Diffusion WebUI Docker"),t(a)]),o(),ge])]),e("li",me,[e("p",null,[e("a",_e,[o("外网爆火的 4 款「你说我画」自动作画工具，我们测了下，有 1 款的确超强"),t(a)]),o(),ke])]),e("li",xe,[e("p",null,[e("a",we,[o("最时髦的 AI 画画，一文包教包会"),t(a)]),o(),ve])]),e("li",De,[e("p",null,[e("a",ye,[o("stable-diffusion Prompt matrix"),t(a)]),o(),Se])]),e("li",Ie,[e("p",null,[e("a",Ae,[o("Textual Inversion"),t(a)]),o(),Le])]),e("li",We,[e("p",null,[e("a",Ge,[o("Windows 端口访问被拒"),t(a)]),o(),Re])])])])])}const Ne=s(c,[["render",Ee],["__file","2022-09-05-stable_diffusion_ai_painting.html.vue"]]);export{Ne as default};
