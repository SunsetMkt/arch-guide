(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[802],{2397:(e,n,l)=>{"use strict";l.r(n),l.d(n,{data:()=>s});const s={key:"v-fa8b044c",path:"/advanced/power-ctl.html",title:"功耗控制",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"电压下探",slug:"电压下探",children:[{level:3,title:"英特尔 四代酷睿 Haswell 及更新 cpu",slug:"英特尔-四代酷睿-haswell-及更新-cpu",children:[]},{level:3,title:"英特尔 四代酷睿 Haswell 之前的 cpu",slug:"英特尔-四代酷睿-haswell-之前的-cpu",children:[]},{level:3,title:"AMD",slug:"amd",children:[]}]},{level:2,title:"降低功率墙",slug:"降低功率墙",children:[]},{level:2,title:"使用 TLP 延长电池寿命",slug:"使用-tlp-延长电池寿命",children:[{level:3,title:"安装与配置",slug:"安装与配置",children:[]},{level:3,title:"使用 TLP 显示相关系统信息",slug:"使用-tlp-显示相关系统信息",children:[]}]}],filePathRelative:"advanced/power-ctl.md",git:{updatedTime:1622601938e3,contributors:[{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},8562:(e,n,l)=>{"use strict";l.r(n),l.d(n,{default:()=>Me});var s=l(6252);const a=(0,s.Wm)("h1",{id:"功耗控制"},[(0,s.Wm)("a",{class:"header-anchor",href:"#功耗控制"},"#"),(0,s.Uk)(" 功耗控制")],-1),r=(0,s.Wm)("p",null,"针对散热不好的设备，功耗控制显得非常必要。这里说的功耗控制不是指直接对处理器的频率做出限制，而是对处理器的电压进行最大限度的下探，在挖掘 cpu 体质的极限的同时，起到既能降低发热，又能最大限度保持性能的效果。除了电压的下探，同时也可以尝试对处理器的功率墙(又常被称为 TDP)做出降低的限制，比如考虑这种情况，在 cpu 满睿频时，其实不需要默认的那么多功耗来维持，也许在默认功耗的基础上减几瓦，也能维持满睿频，这样就又可以进一步降低温度。对功率墙进行限制不同于对电压进行下探，若限制功率墙的参数较低，这会不可避免的损失较多的性能，但是在散热过差的设备上这也是一个好办法。",-1),t=(0,s.Wm)("h2",{id:"电压下探"},[(0,s.Wm)("a",{class:"header-anchor",href:"#电压下探"},"#"),(0,s.Uk)(" 电压下探")],-1),p={href:"https://wiki.archlinux.org/index.php/Undervolting_CPU#Tools",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("官方参考文档"),i=(0,s.Uk)('如果正常操作，降低电压一般不会损害 cpu，一般建议从 50 毫伏进行尝试，每次降压尝试多增加 10 毫伏。只要确保在降低电压前，系统中任务均被正确保存即可。网络上传言的降低 cpu 电压会"缩肛"是谣言'),o={href:"https://www.zhihu.com/question/62335676",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("[1]"),m=(0,s.Uk)("。"),h=(0,s.Wm)("h3",{id:"英特尔-四代酷睿-haswell-及更新-cpu"},[(0,s.Wm)("a",{class:"header-anchor",href:"#英特尔-四代酷睿-haswell-及更新-cpu"},"#"),(0,s.Uk)(" 英特尔 四代酷睿 Haswell 及更新 cpu")],-1),d=(0,s.Wm)("p",null,"如文档中所说，使用 intel-undervolt 即可降压。对于其配置文件中降压部分的五个参数含义如下:",-1),k=(0,s.Wm)("ul",null,[(0,s.Wm)("li",null,"0:cpu 核心电压"),(0,s.Wm)("li",null,"1:cpu 核芯显卡电压"),(0,s.Wm)("li",null,"2:cpu 缓存电压"),(0,s.Wm)("li",null,"3:系统周边电压，与内存等设备相关"),(0,s.Wm)("li",null,"4:模拟 I/O 电压")],-1),b=(0,s.Wm)("p",null,"一般来说只调整 0 和 2 两项电压即可。",-1),g=(0,s.Uk)("在调整完电压，apply 之后，可以尝试使用 "),W={href:"https://archlinux.org/packages/community/any/s-tui/",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("s-tui"),U=(0,s.Uk)(" 这个工具进行烤机测试，同时观察温度、频率、TDP 的数据。"),v=(0,s.uE)('<p>在调整到一个合适的降压配置后，开启其对应 service 即可。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> --now intel-undervolt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="英特尔-四代酷睿-haswell-之前的-cpu"><a class="header-anchor" href="#英特尔-四代酷睿-haswell-之前的-cpu">#</a> 英特尔 四代酷睿 Haswell 之前的 cpu</h3>',3),w=(0,s.Uk)("arch 官方文档中提到，二代酷睿及以前的 cpu 可使用 PHC 的方式进行降压。经测试，在 i7-2760QM 上不能直接使用，需要在内核启动参数中加入"),_=(0,s.Wm)("code",null,"intel_pstate=disable",-1),P=(0,s.Uk)("才能正确识别到 phc 的 driver，"),x={href:"https://wiki.archlinux.org/index.php/CPU_frequency_scaling",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("参考 1"),T=(0,s.Uk)("，可用命令"),L=(0,s.Wm)("code",null,"cpupower frequency-info",-1),A=(0,s.Uk)("验证。接下来进行降压尝试，按照 archwiki 的操作始终不能更改 phc_vid 文件，其中内容始终为 0,即便已经用 vim 将其更改为其他值。也许是 cpu/主板 BIOS 不支持降频。翻阅了 phc-intel 的官方文档，其说明只支持酷睿，酷睿 2 及之前的 cpu 系列，不支持酷睿 i,这与 archwiki 的描述相矛盾。"),E=(0,s.Uk)("对于夹在中间的三代酷睿 lvy bridge，"),C={href:"https://github.com/tiziw/iuvolt",target:"_blank",rel:"noopener noreferrer"},O=(0,s.Uk)("有项目"),B=(0,s.Uk)("称可以使用 intel-undervolt 的原理进行降压，但是经测试失败了，尝试用 PHC 的方式依旧失败。目前应该没有什么好的办法可以降压三代酷睿。"),D=(0,s.Uk)("对于此范围内的老设备降压，我将不会花费更多时间探索。如果你知道有办法可以正确降压，欢迎提交 PR,或"),H={href:"https://t.me/kdwu1fan",target:"_blank",rel:"noopener noreferrer"},I=(0,s.Uk)("进群讨论"),S=(0,s.Uk)("。"),R=(0,s.Uk)("ref: "),q={href:"https://www.reddit.com/r/intel/comments/8ubdsg/undervolting_intel_i5_3230m/",target:"_blank",rel:"noopener noreferrer"},z=(0,s.Uk)("[1]"),M=(0,s.Uk)(),N={href:"https://forum.thinkpads.com/viewtopic.php?t=128707",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("[2]"),K=(0,s.uE)('<h3 id="amd"><a class="header-anchor" href="#amd">#</a> AMD</h3><p>我没有设备，TODO。</p><h2 id="降低功率墙"><a class="header-anchor" href="#降低功率墙">#</a> 降低功率墙</h2><p>对于功率墙的调整，有些主板在 BIOS 中提供了设置项可以直接调整。对于没有设置项的主板，有的主板是锁定了瞬时和长时功率墙，这种情况就无法调整功率墙了。有的主板 BIOS 随没有提供功率墙调整项，但依旧可以通过命令行设置。通过以下的命令可以查看主板是否可以调整功率墙。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token builtin class-name">.</span> /sys/class/powercap/intel-rapl/intel-rapl:0/*\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>如果在输出中看到了如下的 enable 值为 1，即可以调整。第一行的代表现有的功率墙限制。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/sys/class/powercap/intel-rapl/intel-rapl:0/constraint_0_power_limit_uw:100000000\n/sys/class/powercap/intel-rapl/intel-rapl:0/enabled:1\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>',7),Q=(0,s.Uk)("具体的调整步骤参考"),Y={href:"https://askubuntu.com/questions/1226254/set-max-tdp-of-intel-h-series-cpu",target:"_blank",rel:"noopener noreferrer"},F=(0,s.Uk)("这个链接"),G=(0,s.Uk)("。有空的时候我再翻译整理。"),J=(0,s.Uk)("Ref: "),V={href:"https://askubuntu.com/questions/1231091/tee-constraint-0-power-limit-uw-no-data-available",target:"_blank",rel:"noopener noreferrer"},X=(0,s.Uk)("[1]"),Z=(0,s.Uk)(","),$={href:"https://miloserdov.org/?p=1932",target:"_blank",rel:"noopener noreferrer"},ee=(0,s.Uk)("[2]"),ne=(0,s.Uk)(","),le={href:"https://zhuanlan.zhihu.com/p/25537264",target:"_blank",rel:"noopener noreferrer"},se=(0,s.Uk)("[3]"),ae=(0,s.Wm)("p",null,[(0,s.Uk)("此外，intel-undervolt 也可直接进行功率墙限制。如看到"),(0,s.Wm)("code",null,"package power limit is locked"),(0,s.Uk)(",则说明这台电脑不可更改功率墙。")],-1),re=(0,s.Wm)("h2",{id:"使用-tlp-延长电池寿命"},[(0,s.Wm)("a",{class:"header-anchor",href:"#使用-tlp-延长电池寿命"},"#"),(0,s.Uk)(" 使用 TLP 延长电池寿命")],-1),te=(0,s.Wm)("p",null,"多年来，Linux 在电池优化方面取得了很大进步，但仍然有一些可选步骤改善笔记本电脑的电池寿命。TLP 作为一款自由开源的高级电源管理工具提供开箱即用的默认配置。同时也可以高度定制化，以满足特定需求。",-1),pe=(0,s.Wm)("h3",{id:"安装与配置"},[(0,s.Wm)("a",{class:"header-anchor",href:"#安装与配置"},"#"),(0,s.Uk)(" 安装与配置")],-1),ce=(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,"安装相关软件包")],-1),ie=(0,s.Uk)("另外需要安装 "),oe={href:"https://archlinux.org/packages/extra/x86_64/smartmontools/",target:"_blank",rel:"noopener noreferrer"},ue=(0,s.Uk)("smartmontools"),me=(0,s.Uk)(" 以显示 "),he=(0,s.Wm)("code",null,"tlp-stat",-1),de=(0,s.Uk)(" 中的 S.M.A.R.T. 数据。若是 ThinkPad 机型请查阅"),ke={href:"https://linrunner.de/tlp/installation/arch.html#thinkpads-only",target:"_blank",rel:"noopener noreferrer"},be=(0,s.Uk)("官方文档安装说明"),ge=(0,s.Uk)("。"),We=(0,s.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pacman -S tlp tlp-rdw\nyay -S tlpui <span class="token comment"># 可选安装图形界面</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>相关服务设置</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> tlp.service\n<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> NetworkManager-dispatcher.service\n<span class="token function">sudo</span> systemctl mask systemd-rfkill.service <span class="token comment"># 屏蔽以下服务以避免冲突，确保 TLP 无线设备的开关选项可以正确运行</span>\n<span class="token function">sudo</span> systemctl mask systemd-rfkill.socket\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ol start="3"><li>手动启动 TLP</li></ol><p>安装后，TLP 将在开机时自动启动。为了避免第一次重启系统，可以使用以下命令手动启动：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> tlp start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),fe=(0,s.Uk)("还可以使用此命令在编辑配置后应用更改。所有 TLP 设置都存储在 "),Ue=(0,s.Wm)("code",null,"/etc/default/tlp",-1),ve=(0,s.Uk)(" 中。一般情况下默认配置即可满足需求。此外为防止 "),we=(0,s.Wm)("code",null,"Btrfs",-1),_e=(0,s.Uk)(" 文件系统损坏，需要另外设置："),Pe=(0,s.Wm)("code",null,"SATA_LINKPWR_ON_BAT=max_performance",-1),xe=(0,s.Uk)("。更多信息请参阅"),ye={href:"https://linrunner.de/tlp/settings/index.html",target:"_blank",rel:"noopener noreferrer"},Te=(0,s.Uk)("官方文档"),Le=(0,s.Uk)("和 "),Ae={href:"https://wiki.archlinux.org/title/TLP_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)",target:"_blank",rel:"noopener noreferrer"},Ee=(0,s.Uk)("archwiki"),Ce=(0,s.Uk)("。若安装了 "),Oe={href:"https://aur.archlinux.org/packages/tlpui/",target:"_blank",rel:"noopener noreferrer"},Be=(0,s.Uk)("TLPUI"),De=(0,s.Wm)("sup",null,"AUR",-1),He=(0,s.Uk)(" 可在图形界面进行相关配置。语言可在 "),Ie=(0,s.Wm)("em",null,"菜单栏",-1),Se=(0,s.Uk)(" > "),Re=(0,s.Wm)("em",null,"Language",-1),qe=(0,s.Uk)(" 更改。"),ze=(0,s.uE)('<h3 id="使用-tlp-显示相关系统信息"><a class="header-anchor" href="#使用-tlp-显示相关系统信息">#</a> 使用 TLP 显示相关系统信息</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> tlp-stat -b <span class="token comment"># 显示电池信息</span>\n<span class="token function">sudo</span> tlp-stat -d <span class="token comment"># 显示磁盘信息</span>\n<span class="token function">sudo</span> tlp-stat -e <span class="token comment"># 显示 PCI 设备信息</span>\n<span class="token function">sudo</span> tlp-stat -g <span class="token comment"># 显示图形卡信息</span>\n<span class="token function">sudo</span> tlp-stat -p <span class="token comment"># 显示处理器信息</span>\ntlp-stat -s <span class="token comment"># 显示系统数据信息 / 验证 TLP 服务运行状况</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>',2),Me={render:function(e,n){const l=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[a,r,t,(0,s.Wm)("p",null,[(0,s.Wm)("a",p,[c,(0,s.Wm)(l)])]),(0,s.Wm)("p",null,[i,(0,s.Wm)("a",o,[u,(0,s.Wm)(l)]),m]),h,d,k,b,(0,s.Wm)("p",null,[g,(0,s.Wm)("a",W,[f,(0,s.Wm)(l)]),U]),v,(0,s.Wm)("p",null,[w,_,P,(0,s.Wm)("a",x,[y,(0,s.Wm)(l)]),T,L,A]),(0,s.Wm)("p",null,[E,(0,s.Wm)("a",C,[O,(0,s.Wm)(l)]),B]),(0,s.Wm)("p",null,[D,(0,s.Wm)("a",H,[I,(0,s.Wm)(l)]),S]),(0,s.Wm)("p",null,[R,(0,s.Wm)("a",q,[z,(0,s.Wm)(l)]),M,(0,s.Wm)("a",N,[j,(0,s.Wm)(l)])]),K,(0,s.Wm)("p",null,[Q,(0,s.Wm)("a",Y,[F,(0,s.Wm)(l)]),G]),(0,s.Wm)("p",null,[J,(0,s.Wm)("a",V,[X,(0,s.Wm)(l)]),Z,(0,s.Wm)("a",$,[ee,(0,s.Wm)(l)]),ne,(0,s.Wm)("a",le,[se,(0,s.Wm)(l)])]),ae,re,te,pe,ce,(0,s.Wm)("p",null,[ie,(0,s.Wm)("a",oe,[ue,(0,s.Wm)(l)]),me,he,de,(0,s.Wm)("a",ke,[be,(0,s.Wm)(l)]),ge]),We,(0,s.Wm)("p",null,[fe,Ue,ve,we,_e,Pe,xe,(0,s.Wm)("a",ye,[Te,(0,s.Wm)(l)]),Le,(0,s.Wm)("a",Ae,[Ee,(0,s.Wm)(l)]),Ce,(0,s.Wm)("a",Oe,[Be,(0,s.Wm)(l)]),De,He,Ie,Se,Re,qe]),ze],64)}}}}]);