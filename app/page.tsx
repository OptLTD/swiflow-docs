import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, Sparkles, Zap, Layers, Puzzle, Repeat } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Sparkles className="h-6 w-6" />
          <span>Swiflow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            功能
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
            工作原理
          </Link>
          <Link href="#use-cases" className="text-sm font-medium hover:underline underline-offset-4">
            使用场景
          </Link>
          <Link href="#download" className="text-sm font-medium hover:underline underline-offset-4">
            下载
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    聊天即功能，想法即实现
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Swiflow让你通过简单对话就能创建和使用各种功能，仿佛这些功能一直都是应用的一部分。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    立即体验
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">了解更多</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-50"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full max-w-md bg-background/95 backdrop-blur-sm rounded-lg border shadow-lg p-4">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <MessageSquare className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm">我需要一个能帮我跟踪每日支出的工具</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                          <Sparkles className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm">正在生成支出跟踪功能...</p>
                        </div>
                      </div>
                      <div className="border rounded-md p-3 bg-muted/30">
                        <div className="text-xs font-medium mb-2">每日支出跟踪器</div>
                        <div className="grid grid-cols-2 gap-2 mb-2">
                          <div className="h-2 bg-primary/20 rounded-full"></div>
                          <div className="h-2 bg-primary/40 rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>今日: ¥120</span>
                          <span>本月: ¥3,450</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">无限可能</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">对话生成功能，即时可用</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Swiflow通过自然对话理解你的需求，并立即创建可用的功能。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">自然对话</h3>
                <p className="text-center text-muted-foreground">用自然语言表达你的需求，无需学习复杂的命令或语法。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">即时生成</h3>
                <p className="text-center text-muted-foreground">几秒钟内生成功能，无需等待开发或更新。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">无缝集成</h3>
                <p className="text-center text-muted-foreground">
                  生成的功能与应用完美融合，就像它一直都是应用的一部分。
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">个性化定制</h3>
                <p className="text-center text-muted-foreground">根据你的具体需求定制功能，而不是使用通用解决方案。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Repeat className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">持续学习</h3>
                <p className="text-center text-muted-foreground">系统会记住你的偏好，随着使用变得更加智能和个性化。</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">创意激发</h3>
                <p className="text-center text-muted-foreground">提供建议和灵感，帮助你发现新的可能性和解决方案。</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">工作原理</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">简单三步，实现你的想法</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Swiflow如何将你的对话转化为实用功能
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">表达需求</h3>
                <p className="text-center text-muted-foreground">通过自然对话告诉Swiflow你需要什么功能或工具。</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">AI理解与创建</h3>
                <p className="text-center text-muted-foreground">Swiflow的AI引擎理解你的需求，并快速生成相应的功能。</p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">立即使用</h3>
                <p className="text-center text-muted-foreground">生成的功能立即可用，无需额外安装或配置。</p>
              </div>
            </div>
          </div>
        </section>
        <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">使用场景</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Swiflow能做什么？</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  探索Swiflow如何满足各种需求的实际例子
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-12">
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"我需要一个每周计划表，可以帮我安排工作和个人任务"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">个性化周计划工具</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Swiflow生成一个完整的周计划工具，包括任务分类、优先级设置和提醒功能。
                  </p>
                  <div className="bg-muted/30 rounded-md p-3">
                    <div className="grid grid-cols-7 gap-1 text-xs font-medium mb-2">
                      <div>一</div>
                      <div>二</div>
                      <div>三</div>
                      <div>四</div>
                      <div>五</div>
                      <div>六</div>
                      <div>日</div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-6 bg-primary/20 rounded-sm"></div>
                      <div className="h-6 bg-primary/30 rounded-sm"></div>
                      <div className="h-6 bg-primary/10 rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"帮我创建一个工具，可以跟踪我的健身进度和饮食"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">健康生活追踪器</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Swiflow生成一个健康追踪工具，记录运动数据、饮食摄入和进度统计。
                  </p>
                  <div className="bg-muted/30 rounded-md p-3">
                    <div className="flex justify-between text-xs font-medium mb-2">
                      <span>本周活动</span>
                      <span>目标完成度: 68%</span>
                    </div>
                    <div className="h-2 bg-muted mb-3 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[68%]"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>步数: 8,432</div>
                      <div>卡路里: 1,842</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"我想要一个工具来管理我的项目和团队任务"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">项目管理助手</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Swiflow创建一个项目管理工具，包括任务分配、进度跟踪和团队协作功能。
                  </p>
                  <div className="bg-muted/30 rounded-md p-3">
                    <div className="text-xs font-medium mb-2">项目进度</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>设计阶段</span>
                        <span>100%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-full"></div>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>开发阶段</span>
                        <span>45%</span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[45%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border overflow-hidden">
                <div className="bg-muted p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">"我需要一个简单的工具来学习新语言的单词"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">语言学习卡片</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Swiflow生成一个语言学习工具，包括单词卡片、发音指导和学习进度追踪。
                  </p>
                  <div className="bg-muted/30 rounded-md p-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-medium">今日单词</div>
                      <div className="text-xs">12/20</div>
                    </div>
                    <div className="bg-background p-2 rounded mb-2 text-center">
                      <div className="font-medium">Bonjour</div>
                      <div className="text-xs text-muted-foreground">你好</div>
                    </div>
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                      <div className="w-2 h-2 rounded-full bg-muted"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">立即开始使用Swiflow</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  下载应用，开始通过对话创建你需要的功能
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  iOS版本
                </Button>
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  Android版本
                </Button>
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  网页版
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Swiflow. 保留所有权利。</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            隐私政策
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            使用条款
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            联系我们
          </Link>
        </nav>
      </footer>
    </div>
  )
}
