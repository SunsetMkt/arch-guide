import{_ as a,c as s,o as i,a4 as p}from"./chunks/framework.DhooLXd5.js";const r="/assets/AppArmor_logo.BtxgLg_W.png",n="/assets/apparmor-check.DHRe4iFM.png",e="/assets/aa-status.Sn7QeLZK.png",F=JSON.parse('{"title":"Apparmor","description":"","frontmatter":{},"headers":[],"relativePath":"guide/security/apparmor.md","filePath":"guide/security/apparmor.md","lastUpdated":1723805031000}'),t={name:"guide/security/apparmor.md"},l=p('<h1 id="apparmor" tabindex="-1">Apparmor <a class="header-anchor" href="#apparmor" aria-label="Permalink to &quot;Apparmor&quot;">​</a></h1><p><img src="'+r+'" alt="apparmor"></p><h2 id="什么是-apparmor-它是干什么的" tabindex="-1">什么是 Apparmor，它是干什么的？ <a class="header-anchor" href="#什么是-apparmor-它是干什么的" aria-label="Permalink to &quot;什么是 Apparmor，它是干什么的？&quot;">​</a></h2><p>AppArmor 是一个有效且易于使用的 Linux 应用程序安全系统 (LSM, Linux Security Module)。 AppArmor 通过强制访问控制（<a href="https://wiki.archlinux.org/title/Security#Mandatory_access_control" target="_blank" rel="noreferrer">MAC, Mandatory access control</a>）来补充传统的Unix自主访问控制（DAC）模型，主动保护操作系统和应用程序免受外部或内部威胁，甚至 zero-day attacks。</p><h1 id="在-arch-linux-启用-apparmor" tabindex="-1">在 Arch Linux 启用 Apparmor <a class="header-anchor" href="#在-arch-linux-启用-apparmor" aria-label="Permalink to &quot;在 Arch Linux 启用 Apparmor&quot;">​</a></h1><h2 id="_1-检查内核是否支持-apparmor" tabindex="-1">1. 检查内核是否支持 Apparmor <a class="header-anchor" href="#_1-检查内核是否支持-apparmor" aria-label="Permalink to &quot;1. 检查内核是否支持 Apparmor&quot;">​</a></h2><p>如果你使用的是官方内核则无需检查，因为官方内核默认支持 Apparmor</p><p>如果你使用的是第三方内核，请检查内核是否支持 Apparmor：</p><p><img src="'+n+`" alt="apparmor-check"></p><p><strong>如果能找到 CONFIG_SECURITY_APPARMOR=y 和 CONFIG_AUDIT=y 则说明此内核支持 Apparmor</strong></p><h2 id="_2-添加内核启动参数" tabindex="-1">2. 添加内核启动参数 <a class="header-anchor" href="#_2-添加内核启动参数" aria-label="Permalink to &quot;2. 添加内核启动参数&quot;">​</a></h2><p>由于官方内核默认没有开启 Apparmor，所以要添加 lsm=apparmor 和 audit=1 到内核启动参数里</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/grub/grub.cfg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ......</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GRUB_CMDLINE_LINUX_DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;quiet splash lsm=apparmor audit=1&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 找到这一行并添加参数到末尾</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ......</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grub-mkconfig</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /boot/grub/grub.cfg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="_3-安装-apparmor" tabindex="-1">3. 安装 Apparmor <a class="header-anchor" href="#_3-安装-apparmor" aria-label="Permalink to &quot;3. 安装 Apparmor&quot;">​</a></h2><p>3-1. 安装所需组件</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pacman</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apparmor</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> audit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">reboot</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>3-2. 重启后检查 Apparmor 状态</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aa-status</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+e+'" alt="aa-status"></p>',19),o=[l];function h(c,d,m,k,u,b){return i(),s("div",null,o)}const _=a(t,[["render",h]]);export{F as __pageData,_ as default};
