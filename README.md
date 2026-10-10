# Apple Design Provider

**把 Apple-inspired 的视觉品质和细腻交互动效，应用到真正可用的 Web 软件里。**

`apple-inspired-desktop-saas` 是一套可独立调用、也可作为 [product-ui](https://github.com/zengerai/codex-test) **Design Provider** 使用的 Agent Skill。它帮助 AI 选择合适的苹果风组件体系、统一主题和视觉细节、设计有空间连续性的交互动画，并检查风格实现质量。

**核心能力：**Apple HIG 的设计原则 + [shadcn Luma](https://ui.shadcn.com/docs/changelog/2026-03-luma) / [Rhea](https://ui.shadcn.com/docs/changelog/2026-05-rhea) 的视觉体系 + [Motion](https://motion.dev/docs/react) 动效。目标是现代桌面 Web 应用，而不是在浏览器里模拟 Mac 桌面。

> **一句话区别：**`product-ui` 负责决定页面怎么组织、功能怎么用、项目怎么推进；Apple Provider 负责这套页面的苹果式视觉、组件表现和运动细节。

## 能帮你做什么？

| 任务 | Apple Provider 的作用 |
|---|---|
| 设计苹果风页面 | 根据实际产品任务，建议合适的 Luma / Rhea 方案和组件映射 |
| 优化某个控件或页面 | 在**不改变业务流程**的前提下提升层次、主题和交互质感 |
| 加上自然的动态效果 | 为 Tabs、Popover、Drawer、Sidebar、列表变化等设计可中断、可降级的动效 |
| 让已有前端保持一致 | 检查控件状态、Light/Dark、动效、焦点反馈和实际设计系统是否一致 |
| 配合 product-ui 开发完整产品 | 接受 product-ui 确定好的页面结构，作为专业视觉提供方完成指定部分 |

**没有强制的蓝灰色、固定 Sidebar 或通用圆角数值。** 项目的品牌约束、已有 `DESIGN.md` 和具体界面任务优先。React 项目优先复用官方 shadcn 组件，而不是从零手写整套基础控件。

## 安装（Codex）

```bash
git clone https://github.com/zengerai/Apple_Skill.git
mkdir -p ~/.agents/skills
ln -s "$(cd Apple_Skill && pwd)" ~/.agents/skills/apple-inspired-desktop-saas
python3 Apple_Skill/scripts/validate.py
```

这会把 Skill 注册到默认的 `~/.agents/skills/apple-inspired-desktop-saas`。如已存在同名目录或软链接，请先确认当前安装位置，避免重复安装。Codex 如未立刻识别，可重新加载 / 重启。

**单独使用**时只需安装本 Skill。**与 product-ui 联用**时，还需要另行安装 [product-ui](https://github.com/zengerai/codex-test#安装codex)。安装 Skill 本身不会自动安装 shadcn 组件或 Motion 依赖；它们是在真正开发项目时，依据所选技术方案处理的。

## 安装后怎么告诉 AI？

在 Codex 中直接使用 `$apple-inspired-desktop-saas`。你可以自然语言描述任务，也可以明确指定下面的四种模式。

### 四种使用模式

| 模式 | 你想让 AI 做什么 | 会不会修改项目 |
|---|---|---|
| `style-candidate` | 提供苹果风视觉候选，供产品设计时比较 | **不会** |
| `spec` | 只设计组件、主题、动效和技术方案，先不开发 | **不会** |
| `implement` | 按确认的设计，在指定页面 / 文件实现界面和动画 | **仅在授权范围内** |
| `style-audit` | 检查现有页面的苹果风一致性与动效质量 | **不会** |

**例 1：只想先看看苹果风方向 — `style-candidate`**

```text
使用 $apple-inspired-desktop-saas，按 style-candidate 模式，
为一个桌面文件管理软件提供适合的 Apple-inspired 视觉候选。
对比 Luma / Rhea 的适用性，说明组件与信息密度的差异。
先给我方案，不修改项目文件。
```

**例 2：只出设计方案 — `spec`**

```text
使用 $apple-inspired-desktop-saas，按 spec 模式，
为当前 React 文件管理页面设计苹果风视觉方案。
优先考虑 shadcn Rhea，但请根据实际页面判断。
给出组件选型、主题适配、Drawer 和 Sidebar 动效方案；
只输出规范，不修改代码。
```

**例 3：在已有页面落地 — `implement`**

```text
使用 $apple-inspired-desktop-saas，按 implement 模式，
优化当前 React 页面中 Tabs、Popover 和详情 Drawer 的视觉与动效。
只允许修改相关前端组件和样式文件；
保留业务功能、接口、路由和原有数据状态，并运行可用测试。
```

**例 4：只读检查已有苹果风 — `style-audit`**

```text
使用 $apple-inspired-desktop-saas，按 style-audit 模式，
检查当前页面的苹果风组件一致性、Light/Dark、键盘焦点、
动画中断和 reduced-motion 适配。
按优先级提供有证据的问题与修复建议，不修改任何代码。
```

### 与 product-ui 一起使用（推荐开发完整产品时）

```text
使用 $product-ui 开发一个桌面文件整理工具，视觉采用 Apple-inspired。
请按 Design Provider 协议使用 $apple-inspired-desktop-saas。
由 product-ui 确定信息架构和业务交互，Apple Provider 负责
Luma/Rhea 组件选型、主题和 Motion；先给我一个真实核心页面验收。
```

如果你的 AI 环境没有安装原始 Skill，需要先安装，不能仅凭仓库链接声称“已经调用了 Provider”。如果你只要求改善一个动画，不必启动 product-ui 的完整项目开发流程。

## 设计方案：Luma、Rhea 和 Motion

### 视觉和组件

| 选择 | 典型适用场景 |
|---|---|
| **Luma** | 轻量生产力工具、编辑器、较舒展的操作页面 |
| **Rhea** | 高信息密度工作台、ERP / CRM、文件管理与记录处理 |
| **已有组件体系** | 已经上线、有现成视觉规范的项目；优先保持一致，明确要求重设计时再迁移 |

Luma / Rhea 是 **shadcn 官方的 Web 组件风格**，并非 Apple 官方组件库。新 React 项目应通过 [shadcn 官方创建流程](https://ui.shadcn.com/create) 选择并安装；本仓库不打包官方样式源码，也不声称任意 CSS 就能还原官方预设。Vue 和原生 HTML 目前提供不同程度的指导或适配，详见 [框架兼容规则](references/framework-compatibility.md)。

### 动效：16 个可交互模式

内置 React + Motion 的 **Motion Gallery**，覆盖按钮、开关、Segmented Control、Tabs、Popover、操作列表、Dialog、Drawer、Sidebar、Split View、共享元素、列表排序、拖放、加载反馈、Toast 和数据更新。

你可以直接运行：

```bash
cd examples/motion-gallery
npm install
npm run dev
```

浏览器打开终端显示的 Vite 地址，即可实际点击与测试这些动效；`npm run build` 可构建示例。Gallery 另有**紧凑文件工作台**和**批量命名预览工具**两种使用场景。

> Gallery 是为理解和测试交互而写的独立 React + Motion 示例，使用自己的演示样式，**不是官方 Luma / Rhea 的截图或完整组件发行版**。复杂菜单、拖拽、Modal 等在真实生产项目中仍应采用成熟可访问组件。参见 [Motion QA](quality/motion-qa.md)。

## 它如何作为 Design Provider 工作？

```text
用户需求 / 已有前端
       ↓
product-ui：决定业务操作、信息架构、项目模式与审批
       ↓
Apple Provider：接受已确定的页面结构、视觉方向、技术栈
       ↓
选择适合的 Luma / Rhea 或当前项目组件体系
       ↓
输出主题、组件映射、Motion 方案，或在许可范围内实现
       ↓
返回风格检查与实际验证结果
       ↓
product-ui：负责整体验收、用户确认与 DESIGN.md 固化
```

这是 **Agent Skills 的指令级协作协议**，不是需要启动服务器的插件接口。Provider 不接管业务逻辑、用户审批、Hallmark/Impeccable 调用，也不创建第二份生效的 `DESIGN.md`。只读模式严格不修改项目源码。

## 项目文件与开发者资料

| 文件 | 用途 |
|---|---|
| [SKILL.md](SKILL.md) | AI 实际读取的技能入口与执行规范 |
| [design-provider.json](design-provider.json) | Provider ID、支持范围与框架能力声明 |
| [Provider 协议适配](references/provider-protocol.md) | 与 product-ui v3.0 的输入输出与权限约定 |
| [风格选型规则](references/style-selection.md) | 选择 Luma / Rhea 或保持已有设计 |
| [组件映射](references/component-mapping.md) · [主题适配](references/theme-adaptation.md) | 专业视觉实现策略 |
| [Motion 规范](motion/foundations.md) · [16 个模式](motion/patterns.md) | 动效原则与场景 |
| [Motion Gallery](examples/motion-gallery/) | 可运行 React + Motion 示例 |
| [四种模式的交接示例](examples/handoffs/) | Provider 协议实例 |
| [质量验证](quality/style-audit.md) · [EVALS.md](EVALS.md) | 风格审查与设计评估 |
| [上游技术与许可说明](references/upstream-sources.md) | 第三方项目来源及复用边界 |
| [CHANGELOG.md](CHANGELOG.md) | 版本更新记录 |

**说明：**本项目不是 Apple、shadcn 或 Motion 的官方发行物，不分发 Apple 专有字体、SF Symbols 或其他受限品牌资源。需要追溯旧版实现时，可以查看 [v2.0 归档分支](https://github.com/zengerai/Apple_Skill/tree/archive/apple-skill-v2.0-20261010)。
