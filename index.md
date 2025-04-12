---
layout: home

hero:
  name: Swiflow
  text: 聊天即功能，想法即实现
  tagline: 通过简单对话表达需求，Swiflow即刻生成可用功能，就像这些功能一直都是应用的一部分。
  image:
    src: /hero-image.svg
    alt: Swiflow应用截图
  actions:
    - theme: brand
      text: 立即体验
      link: /#download
    - theme: alt
      text: 了解更多
      link: /#features
  theme:
    name: bg-gradient-to-r text-white
    text: text-3xl font-bold
    tagline: text-xl text-blue-100
---

<div class="feature-section" id="features">
  <div class="feature-container">
    <h2 class="section-title">对话生成功能，即时可用</h2>
    <p class="section-description">Swiflow通过自然对话理解你的需求，并立即创建可用的功能。</p>
    <div class="feature-grid">
      <FeatureCard 
        title="自然对话" 
        description="用自然语言表达你的需求，无需学习复杂的命令或语法。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </template>
      </FeatureCard>
      <FeatureCard 
        title="即时生成" 
        description="几秒钟内生成功能，无需等待开发或更新。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </template>
      </FeatureCard>
      <FeatureCard 
        title="无缝集成" 
        description="生成的功能与应用完美融合，就像它一直都是应用的一部分。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm3-8h1V4H2v1h2v4zm-1 3h1.8L2 15.1v.9h3v-1H3.2L6 10.9V10H3v1zm5-6v2h2V6H9v2h2v2h1V9h2V7h-2V5h-1v2h-2zM17 14h-1v3h-2v1h5v-1h-2v-3zm-1-4h2v.5h-1v1h1v.5h-2v1h3v-4h-3v1z"></path>
          </svg>
        </template>
      </FeatureCard>
      <FeatureCard 
        title="个性化定制" 
        description="根据你的具体需求定制功能，而不是使用通用解决方案。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.09-.706c.071-.564-.224-1.105-.743-1.337a1.009 1.009 0 0 0-1.337.743l-.289 2.2c-.070.471.224 1.105.743 1.337.413.177.882.12 1.244-.09l1.292-1.293c1.881-1.881 2.83-4.398 2.83-6.913 0-2.515-.949-5.033-2.83-6.913l-1.292-1.293a1.008 1.008 0 0 0-1.244-.09c-.519.232-.813.866-.743-1.337l.289 2.2c.07.47.48.8.949.742.471-.07.802-.48.743-.95l-.09-.705a.979.979 0 0 1 .277-.837l1.611-1.611a2.407 2.407 0 0 1 1.704-.706 2.407 2.407 0 0 1 1.704.706l1.568 1.568c.23.23.338.556.289.878z"></path>
            <path d="M7.304 11.282a1.009 1.009 0 0 0 1.337-.743l.289-2.2c.07-.471-.224-1.105-.743-1.337a1.009 1.009 0 0 0-1.337.743l-.289 2.2c-.07.471.224 1.105.743 1.337z"></path>
            <path d="M4.56 16.15c.049-.322-.059-.648-.289-.878l-1.568-1.568A2.407 2.407 0 0 1 2 11.999c0-.617.235-1.233.706-1.704L4.316 8.68a.979.979 0 0 1 .837-.276c.47.07.802.48.743.95l-.09.705c-.071.564.224 1.105.743 1.337a1.009 1.009 0 0 0 1.337-.743l.289-2.2c.07-.471-.224-1.105-.743-1.337a1.009 1.009 0 0 0-1.244.09l-1.292 1.293c-1.881 1.881-2.83 4.398-2.83 6.913 0 2.515.949 5.033 2.83 6.913l1.292 1.293c.362.21.831.267 1.244.09.519-.232.813-.866.743-1.337l-.289-2.2c-.07-.47-.48-.8-.949-.742-.471.07-.802.48-.743.95l.09.705a.979.979 0 0 1-.277.837l-1.611 1.611a2.407 2.407 0 0 1-1.704.706 2.407 2.407 0 0 1-1.704-.706l-1.568-1.568c-.23-.23-.338-.556-.289-.878z"></path>
            <path d="M16.696 12.718a1.009 1.009 0 0 0-1.337.743l-.289 2.2c-.07.471.224 1.105.743 1.337a1.009 1.009 0 0 0 1.337-.743l.289-2.2c.07-.471-.224-1.105-.743-1.337z"></path>
          </svg>
        </template>
      </FeatureCard>
      <FeatureCard 
        title="持续学习" 
        description="系统会记住你的偏好，随着使用变得更加智能和个性化。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 1l4 4-4 4"></path>
            <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
            <path d="M7 23l-4-4 4-4"></path>
            <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
          </svg>
        </template>
      </FeatureCard>
      <FeatureCard 
        title="创意激发" 
        description="提供建议和灵感，帮助你发现新的可能性和解决方案。">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2l.642.005.643.022.643.05.608.085.607.121.535.176.535.233.43.29.43.347.323.403.323.46.217.517.216.573.074.627.073.684v.684l-.073.684-.074.627-.216.573-.217.517-.323.46-.323.403-.43.347-.43.29-.535.233-.535.176-.607.121-.608.085-.643.05-.643.022L12 22l-.642-.005-.643-.022-.643-.05-.608-.085-.607-.121-.535-.176-.535-.233-.43-.29-.43-.347-.323-.403-.323-.46-.217-.517-.216-.573-.074-.627-.073-.684v-.684l.073-.684.074-.627.216-.573.217-.517.323-.46.323-.403.43-.347.43-.29.535-.233.535-.176.607-.121.608-.085.643-.05.643-.022L12 2z"></path>
          </svg>
        </template>
      </FeatureCard>
    </div>
  </div>
</div>

<div class="feature-section alt" id="how-it-works">
  <div class="feature-container">
    <h2 class="section-title">简单三步，实现你的想法</h2>
    <p class="section-description">Swiflow如何将你的对话转化为实用功能</p>
    <div class="steps-container">
      <UseStepCard 
        number="1" 
        title="表达需求" 
        description="通过自然对话告诉Swiflow你需要什么功能或工具。" 
      />
      <UseStepCard 
        number="2" 
        title="AI理解与创建" 
        description="Swiflow的AI引擎理解你的需求，并快速生成相应的功能。" 
      />
      <UseStepCard 
        number="3" 
        title="立即使用" 
        description="生成的功能立即可用，无需额外安装或配置。" 
      />
    </div>
  </div>
</div>

<div class="feature-section" id="use-cases">
  <div class="feature-container">
    <h2 class="section-title">Swiflow能做什么？</h2>
    <p class="section-description">探索Swiflow如何满足各种需求的实际例子</p>
    <div class="use-case-grid">
      <UseCaseCard 
        query="我需要一个每周计划表，可以帮我安排工作和个人任务" 
        title="个性化周计划工具" 
        description="Swiflow生成一个完整的周计划工具，包括任务分类、优先级设置和提醒功能。">
        <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 0.25rem; font-size: 0.75rem; font-weight: 500; margin-bottom: 0.5rem;">
          <div>一</div>
          <div>二</div>
          <div>三</div>
          <div>四</div>
          <div>五</div>
          <div>六</div>
          <div>日</div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.25rem;">
          <div style="height: 1.5rem; background-color: rgba(62, 175, 124, 0.2); border-radius: 0.25rem;"></div>
          <div style="height: 1.5rem; background-color: rgba(62, 175, 124, 0.3); border-radius: 0.25rem;"></div>
          <div style="height: 1.5rem; background-color: rgba(62, 175, 124, 0.1); border-radius: 0.25rem;"></div>
        </div>
      </UseCaseCard>
      <UseCaseCard 
        query="帮我创建一个工具，可以跟踪我的健身进度和饮食" 
        title="健康生活追踪器" 
        description="Swiflow生成一个健康追踪工具，记录运动数据、饮食摄入和进度统计。">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 500; margin-bottom: 0.5rem;">
          <span>本周活动</span>
          <span>目标完成度: 68%</span>
        </div>
        <div style="height: 0.5rem; background-color: var(--vp-c-bg-soft); margin-bottom: 0.75rem; border-radius: 9999px; overflow: hidden;">
          <div style="height: 100%; background-color: var(--vp-c-brand); width: 68%;"></div>
        </div>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.75rem;">
          <div>步数: 8,432</div>
          <div>卡路里: 1,842</div>
        </div>
      </UseCaseCard>
      <UseCaseCard 
        query="我想要一个工具来管理我的项目和团队任务" 
        title="项目管理助手" 
        description="Swiflow创建一个项目管理工具，包括任务分配、进度跟踪和团队协作功能。">
        <div style="font-size: 0.75rem; font-weight: 500; margin-bottom: 0.5rem;">项目进度</div>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
              <span>设计阶段</span>
              <span>100%</span>
            </div>
            <div style="height: 0.375rem; background-color: var(--vp-c-bg-soft); border-radius: 9999px; overflow: hidden; margin-top: 0.25rem;">
              <div style="height: 100%; background-color: var(--vp-c-brand); width: 100%;"></div>
            </div>
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.75rem;">
              <span>开发阶段</span>
              <span>45%</span>
            </div>
            <div style="height: 0.375rem; background-color: var(--vp-c-bg-soft); border-radius: 9999px; overflow: hidden; margin-top: 0.25rem;">
              <div style="height: 100%; background-color: var(--vp-c-brand); width: 45%;"></div>
            </div>
          </div>
        </div>
      </UseCaseCard>
      <UseCaseCard 
        query="我需要一个简单的工具来学习新语言的单词" 
        title="语言学习卡片" 
        description="Swiflow生成一个语言学习工具，包括单词卡片、发音指导和学习进度追踪。">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
          <div style="font-size: 0.75rem; font-weight: 500;">今日单词</div>
          <div style="font-size: 0.75rem;">12/20</div>
        </div>
        <div style="background-color: var(--vp-c-bg); padding: 0.5rem; border-radius: 0.375rem; margin-bottom: 0.5rem; text-align: center;">
          <div style="font-weight: 500;">Bonjour</div>
          <div style="font-size: 0.75rem; color: var(--vp-c-text-2);">你好</div>
        </div>
        <div style="display: flex; justify-content: center; gap: 0.5rem;">
          <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-brand);"></div>
          <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-bg-soft);"></div>
          <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-bg-soft);"></div>
        </div>
      </UseCaseCard>
    </div>
  </div>
</div>

<div class="feature-section alt" id="download">
  <div class="feature-container">
    <h2 class="section-title">立即开始使用Swiflow</h2>
    <p class="section-description">下载应用，开始通过对话创建你需要的功能</p>
    <div class="download-buttons">
      <a href="#" class="vp-button medium brand">iOS版本</a>
      <a href="#" class="vp-button medium brand">Android版本</a>
      <a href="#" class="vp-button medium brand">网页版</a>
      <a href="/docs/" class="vp-button medium alt">查看文档</a>
    </div>
  </div>
</div>
