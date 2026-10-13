import React, { useEffect, useRef, useState } from "react";
import AdvancedLab from "./AdvancedLab.jsx";
import { AnimatePresence, LayoutGroup, Reorder, motion, useReducedMotion } from "motion/react";

/**
 * Sixteen genuinely interactive React + Motion examples.
 * Demo styling is independently authored. It is NOT official shadcn Luma/Rhea,
 * and production apps should supply installed/tested shadcn primitives.
 */

function Example({ id, title, detail, children }) {
  return <section className="example" data-pattern={id} aria-labelledby={"title-" + id}>
    <header><span className="pattern-id">{id}</span><h3 id={"title-" + id}>{title}</h3></header>
    <p className="example-detail">{detail}</p>
    <div className="demo-body">{children}</div>
  </section>;
}
const natural = { type: "spring", stiffness: 320, damping: 28 };
const short = { duration: 0.18, ease: "easeOut" };

function PressDemo() {
  const [count, setCount] = useState(0);
  return <div className="demo-row"><motion.button className="primary" whileTap={{scale: .95}} transition={natural} onClick={() => setCount(c => c + 1)}>执行操作</motion.button><output>已执行 {count} 次</output></div>;
}

function SwitchDemo() {
  const [on, setOn] = useState(true);
  const reduced = useReducedMotion();
  return <div className="demo-row"><label className="switch-label"><input type="checkbox" role="switch" checked={on} onChange={e => setOn(e.target.checked)} aria-label="通知" /><span className={"switch-track " + (on ? "on" : "")}><motion.span className="switch-knob" animate={{x: on ? 19 : 0}} transition={reduced ? {duration:0} : natural}/></span>启用通知</label><output>{on ? "已启用" : "已关闭"}</output></div>;
}

function SegmentedDemo() {
  const [v, setV] = useState("本周");
  const options = ["本周", "本月", "本年"];
  return <div className="demo-row"><div className="segments" role="group" aria-label="统计范围">{options.map(x =>
    <button key={x} className="segment" onClick={() => setV(x)} aria-pressed={v === x}>
      {v === x && <motion.span layoutId="segment-thumb" className="segment-bg" transition={natural}/>}
      <span className="segment-text">{x}</span>
    </button>)}</div><output>当前：{v}</output></div>;
}

function TabsDemo() {
  const tabs = ["概览", "详细", "活动"];
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const reduced = useReducedMotion();
  const choose = n => { setActive(n); refs.current[n]?.focus(); };
  const key = e => {
    const i = tabs.indexOf(e.currentTarget.textContent || "");
    if (e.key === "ArrowRight") {e.preventDefault(); choose((i+1) % tabs.length);}
    if (e.key === "ArrowLeft") {e.preventDefault(); choose((i+tabs.length-1) % tabs.length);}
    if (e.key === "Home") {e.preventDefault(); choose(0);}
    if (e.key === "End") {e.preventDefault(); choose(tabs.length-1);}
  };
  return <div><div className="tab-bar" role="tablist" aria-label="内容标签">{tabs.map((x,i) => <button key={x} ref={el => refs.current[i]=el} role="tab" id={"tab-"+i} aria-controls={"panel-"+i} aria-selected={active===i} tabIndex={active===i?0:-1} onKeyDown={key} onClick={()=>setActive(i)}>{x}{active===i && <motion.span layoutId="tab-line" className="tab-line" transition={natural}/>}</button>)}</div>
    <AnimatePresence mode="wait" initial={false}>{tabs.map((x,i) => i===active ? <motion.div key={x} role="tabpanel" id={"panel-"+i} aria-labelledby={"tab-"+i} tabIndex={0} initial={reduced?false:{opacity:0,y:5}} animate={{opacity:1,y:0}} exit={reduced?{opacity:0}:{opacity:0,y:-5}} transition={reduced?{duration:0}:short} className="tab-panel">{x}内容 · 与所选标签一致</motion.div>:null)}</AnimatePresence></div>;
}

function useDismiss(open, setOpen, areaRef, buttonRef) {
  useEffect(() => {
    if (!open) return;
    const onPointer = e => {if (areaRef.current && !areaRef.current.contains(e.target)) setOpen(false);};
    const onKey = e => {if (e.key === "Escape") {setOpen(false);buttonRef.current?.focus();}};
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {document.removeEventListener("pointerdown", onPointer);document.removeEventListener("keydown", onKey);};
  }, [open, setOpen, areaRef, buttonRef]);
}

function PopoverDemo() {
  const [open,setOpen] = useState(false);
  const area=useRef(null), trigger=useRef(null), reduced=useReducedMotion();
  useDismiss(open,setOpen,area,trigger);
  return <div className="floating-anchor" ref={area}><button ref={trigger} aria-expanded={open} aria-controls="p05-popover" onClick={()=>setOpen(x=>!x)}>显示说明 ▾</button>
    <AnimatePresence>{open && <motion.div key="popover" id="p05-popover" className="popover-panel" initial={reduced?false:{opacity:0,scale:.97,y:-4}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.97,y:-4}} transition={reduced?{duration:0}:short}><b>上下文说明</b><p>与触发按钮保持空间关联。</p><button onClick={()=>{setOpen(false);trigger.current?.focus();}}>关闭</button></motion.div>}</AnimatePresence>
  </div>;
}

function MenuDemo() {
  const [open,setOpen]=useState(false), [choice,setChoice]=useState("暂无操作");
  const area=useRef(null),trigger=useRef(null),reduced=useReducedMotion();
  useDismiss(open,setOpen,area,trigger);
  return <div className="demo-row"><div className="floating-anchor" ref={area}><button ref={trigger} aria-expanded={open} aria-controls="p06-actions" onClick={()=>setOpen(x=>!x)}>操作列表 ▾</button>
    <AnimatePresence>{open && <motion.div key="actions" id="p06-actions" className="popover-panel action-list" initial={reduced?false:{opacity:0,y:-5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={reduced?{duration:0}:short}>{["复制","查看","标记"].map(x=><button key={x} onClick={()=>{setChoice(x);setOpen(false);trigger.current?.focus();}}>{x}</button>)}</motion.div>}</AnimatePresence></div><output>{choice}</output></div>;
}

function NativeModal({open,close,type,title,children}) {
  const el=useRef(null),reduced=useReducedMotion();
  useEffect(()=>{
    const node=el.current;if(!node) return;
    if(open && !node.open) node.showModal();
    if(!open && node.open) node.close();
  },[open]);
  useEffect(()=>()=>{if(el.current?.open)el.current.close();},[]);
  return <dialog ref={el} className={"native-modal "+(type==="drawer"?"drawer":"dialog")} aria-label={title} onCancel={e=>{e.preventDefault();close();}}>
    {open && <motion.div initial={reduced?false:type==="drawer"?{x:36,opacity:.6}:{scale:.96,opacity:0,y:8}} animate={{x:0,scale:1,y:0,opacity:1}} transition={reduced?{duration:0}:natural}>
      <div className="modal-head"><h3>{title}</h3><button aria-label="关闭" onClick={close}>×</button></div>
      <div className="modal-content">{children}</div>
      <div className="modal-foot"><button onClick={close}>完成</button></div>
    </motion.div>}
  </dialog>;
}
function DialogDemo(){
  const [open,setOpen]=useState(false);
  return <><button onClick={()=>setOpen(true)}>打开确认对话框</button><NativeModal open={open} close={()=>setOpen(false)} type="dialog" title="示例对话框"><p>浏览器原生 dialog 提供模态语义、Escape 和焦点管理。业务操作不依赖动画结束。</p></NativeModal></>;
}
function DrawerDemo(){
  const [open,setOpen]=useState(false);
  return <><button onClick={()=>setOpen(true)}>打开详情侧栏</button><NativeModal open={open} close={()=>setOpen(false)} type="drawer" title="项目详情"><p>实际产品应采用现有 Sheet/Dialog 原语；选中记录和滚动由应用状态保留。</p><dl><dt>状态</dt><dd>待处理</dd><dt>优先级</dt><dd>普通</dd></dl></NativeModal></>;
}

function SidebarDemo(){
  const [expand,setExpand]=useState(true),reduced=useReducedMotion();
  return <div className="demo-row"><motion.aside animate={{width:expand?158:64}} transition={reduced?{duration:0}:natural} className="mini-sidebar" aria-label="示例导航"><div className="mini-brand">◎ {expand?"Workspace":""}</div><button onClick={()=>setExpand(v=>!v)} aria-expanded={expand}>{expand?"收起 ◀":"展开 ▶"}</button><div className="mini-nav">⌂ {expand?"工作台":""}</div><div className="mini-nav">▤ {expand?"记录":""}</div></motion.aside><output>{expand?"展开":"折叠"}</output></div>;
}

function SplitDemo(){
  const [width,setWidth]=useState(46),reduced=useReducedMotion();
  return <div className="split-example"><div className="split-wrap"><motion.div animate={{width:width+"%"}} transition={reduced?{duration:0}:short} className="split-left">文件列表</motion.div><div className="split-right">预览</div></div><label className="range-label">左侧宽度 <input type="range" min="25" max="75" value={width} onChange={e=>setWidth(Number(e.target.value))} aria-label="左侧面板比例"/><output>{width}%</output></label></div>;
}

function SharedElementDemo(){
  const [selected,setSelected]=useState(false),reduced=useReducedMotion();
  return <LayoutGroup id="shared-demo"><div className="shared-wrap">
    {!selected?<motion.button layoutId="shared-p11" className="shared-tile" onClick={()=>setSelected(true)} transition={reduced?{duration:0}:natural}>项目 A · 展开 ↗</motion.button>:
      <motion.div layoutId="shared-p11" className="shared-expanded" transition={reduced?{duration:0}:natural}><strong>项目 A · 详情</strong><p>对象在两个状态间保持位置关联。</p><button onClick={()=>setSelected(false)}>收起</button></motion.div>}
  </div></LayoutGroup>;
}
function ReorderDemo(){
  const [items,setItems]=useState(["文件 A","文件 B","文件 C"]);
  const reduced=useReducedMotion();
  const move=(i,d)=>{const next=[...items];const target=i+d;if(target<0||target>=next.length)return;[next[i],next[target]]=[next[target],next[i]];setItems(next);};
  return <Reorder.Group axis="y" values={items} onReorder={setItems} className="reorder-list" aria-label="排序列表">{items.map((x,i)=><Reorder.Item key={x} value={x} layout={!reduced} transition={reduced?{duration:0}:natural} className="reorder-item"><span className="drag-grip" aria-hidden="true">⠿</span><span>{x}</span><div><button aria-label={"上移"+x} disabled={i===0} onPointerDown={e=>e.stopPropagation()} onClick={()=>move(i,-1)}>↑</button><button aria-label={"下移"+x} disabled={i===items.length-1} onPointerDown={e=>e.stopPropagation()} onClick={()=>move(i,1)}>↓</button></div></Reorder.Item>)}</Reorder.Group>;
}
function DragDropDemo(){
  const [hasFile,setHasFile]=useState(false),[over,setOver]=useState(false);
  return <div className="demo-row"><div className="drag-item" draggable onDragStart={e=>{e.dataTransfer.setData("text/plain","demo");e.dataTransfer.effectAllowed="move";}}>拖拽这个项目</div><div className={"drop-target "+(over?"over":"")} onDragOver={e=>{e.preventDefault();setOver(true);}} onDragLeave={()=>setOver(false)} onDrop={e=>{e.preventDefault();if(e.dataTransfer.getData("text/plain")==="demo")setHasFile(true);setOver(false);}}><span>{hasFile?"✓ 已放入":"放置区域"}</span><button onClick={()=>setHasFile(true)}>键盘/点击替代</button><button onClick={()=>setHasFile(false)}>重置</button></div></div>;
}
function LoadingDemo(){
  const [state,setState]=useState("idle"),timer=useRef(null);
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  const run=()=>{if(state==="loading")return;setState("loading");clearTimeout(timer.current);timer.current=setTimeout(()=>setState("success"),800);};
  return <div className="demo-row"><button disabled={state==="loading"} onClick={run}>{state==="loading"?"处理中…":"运行任务"}</button><span aria-live="polite" aria-atomic="true">{state==="success"?"✓ 已完成":state==="loading"?"正在处理":"准备就绪"}</span></div>;
}
function ToastDemo(){
  const [message,setMessage]=useState(""),timer=useRef(null),reduced=useReducedMotion();
  useEffect(()=>()=>clearTimeout(timer.current),[]);
  const show=()=>{clearTimeout(timer.current);setMessage("文件已加入待处理列表");timer.current=setTimeout(()=>setMessage(""),2400);};
  return <div className="toast-host"><button onClick={show}>发送通知</button><div aria-live="polite" aria-atomic="true" className="sr-only">{message}</div><AnimatePresence>{message&&<motion.div className="toast" key="toast" initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:5}} transition={reduced?{duration:0}:short}>{message}</motion.div>}</AnimatePresence></div>;
}
function DataUpdateDemo(){
  const [value,setValue]=useState(42),reduced=useReducedMotion();
  return <div className="demo-row"><button onClick={()=>setValue(v=>v+7)}>追加处理结果</button><span className="number-window">总数：<AnimatePresence mode="wait" initial={false}><motion.strong key={value} initial={reduced?false:{opacity:0,y:5}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={reduced?{duration:0}:short}>{value}</motion.strong></AnimatePresence></span></div>;
}

const PATTERNS = [
  ["P01","Button Press","按压反馈不延迟实际操作",PressDemo],
  ["P02","Switch","状态立即更新；滑块平滑切换",SwitchDemo],
  ["P03","Segmented Control","共享背景指示所选范围",SegmentedDemo],
  ["P04","Tabs","键盘方向键切换与内容过渡",TabsDemo],
  ["P05","Popover","锚定出现、外部点击/ESC 收起",PopoverDemo],
  ["P06","Action Menu","普通操作列表，不伪装成 ARIA menu",MenuDemo],
  ["P07","Dialog","原生 dialog 模态语义和入场动效",DialogDemo],
  ["P08","Drawer","原生 dialog 侧边呈现与关闭",DrawerDemo],
  ["P09","Sidebar","结构尺寸变化保持空间联系",SidebarDemo],
  ["P10","Split View","滑块/键盘调整面板占比",SplitDemo],
  ["P11","Shared Element","同一对象连续展开/收起",SharedElementDemo],
  ["P12","Reorder","拖拽排序，按钮键盘替代",ReorderDemo],
  ["P13","Drag & Drop","放置反馈，点击可替代拖拽",DragDropDemo],
  ["P14","Loading","真实 pending 状态，阻止重复提交",LoadingDemo],
  ["P15","Toast","带有礼貌状态播报的短反馈",ToastDemo],
  ["P16","Data Update","值随状态同步更新，不制造假图表",DataUpdateDemo],
];

const seedRows=[
  {id:"DOC-101",name:"供应商合同.pdf",group:"合同",status:"待复核"},
  {id:"DOC-102",name:"二季度明细.xlsx",group:"表格",status:"已整理"},
  {id:"DOC-103",name:"费用发票.zip",group:"附件",status:"待复核"},
  {id:"DOC-104",name:"项目说明.docx",group:"文档",status:"已整理"},
];
function CompactWorkbench(){
  const [query,setQuery]=useState(""),[selected,setSelected]=useState("DOC-101");
  const [compact,setCompact]=useState(true);
  const list=seedRows.filter(r=>r.name.toLowerCase().includes(query.toLowerCase())||r.id.toLowerCase().includes(query.toLowerCase()));
  const record=seedRows.find(r=>r.id===selected);
  return <section className={"sample-app "+(compact?"dense":"")} aria-label="高密度文件处理工作台">
    <div className="sample-heading"><div><h2>文件处理工作台</h2><p>演示任务密度与对象上下文；不连接任何服务器。</p></div><button onClick={()=>setCompact(x=>!x)} aria-pressed={compact}>{compact?"舒适密度":"紧凑密度"}</button></div>
    <div className="workbench"><aside className="workbench-nav"><strong>资料分类</strong><span>▣ 全部文件</span><span>▤ 待复核</span><span>▧ 已整理</span></aside>
      <main className="workbench-main"><label className="search-label">搜索文件 <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="名称或编号"/></label><div className="table-wrap"><table><thead><tr><th>文件</th><th>类型</th><th>状态</th></tr></thead><tbody>{list.map(row=><tr key={row.id} className={selected===row.id?"selected-row":""} onClick={()=>setSelected(row.id)}><td><button className="table-action" onClick={()=>setSelected(row.id)} aria-pressed={selected===row.id}>{row.name}</button></td><td>{row.group}</td><td>{row.status}</td></tr>)}</tbody></table>{list.length===0&&<p className="muted">没有匹配结果。清除搜索词可恢复。</p>}</div></main>
      <aside className="workbench-inspector" aria-label="文件详情"><strong>当前选择</strong>{record?<><h3>{record.name}</h3><p>编号 {record.id}</p><p>状态 {record.status}</p><button onClick={()=>setSelected(seedRows[(seedRows.findIndex(r=>r.id===selected)+1)%seedRows.length].id)}>下一条</button></>:<p>没有选择</p>}</aside>
    </div>
  </section>;
}
function ProductivityUtility(){
  const [files,setFiles]=useState([]),[prefix,setPrefix]=useState("归档"),[show,setShow]=useState(false);
  return <section className="sample-app" aria-label="轻量文件命名工具"><div className="sample-heading"><div><h2>批量命名预览</h2><p>示例只读取选中文件的名称，不上传，不改写原始文件。</p></div></div>
    <div className="utility-layout"><label className="file-drop">选择本地文件<input type="file" multiple onChange={e=>{setFiles(Array.from(e.target.files||[]).map(f=>f.name));setShow(false);}}/></label><label>文件名前缀 <input value={prefix} onChange={e=>{setPrefix(e.target.value);setShow(false);}} /></label><button className="primary" onClick={()=>setShow(true)} disabled={!files.length}>生成重命名预览</button></div>
    <div className="utility-results"><h3>处理预览</h3>{files.length===0?<p>尚未选择文件</p>:<ol>{files.map((name,i)=><li key={i}><span>{name}</span>{show&&<strong>{prefix||"文件"}_{String(i+1).padStart(3,"0")}_{name}</strong>}</li>)}</ol>}{show&&<p role="status">仅展示预览，没有重命名磁盘文件。</p>}</div>
  </section>;
}
export default function App(){
  const [page,setPage]=useState("gallery"),[theme,setTheme]=useState("light");
  const reduced=useReducedMotion();
  return <div className="lab-root" data-theme={theme}>
    <header className="site-header"><div className="brand"><b>◈ Apple Provider</b><span>Motion Pattern Lab · 非官方 shadcn 视觉预设</span></div>
      <nav aria-label="演示区域"><button aria-current={page==="gallery"?"page":undefined} onClick={()=>setPage("gallery")}>16 动效</button><button aria-current={page==="advanced"?"page":undefined} onClick={()=>setPage("advanced")}>高级联动</button><button aria-current={page==="workbench"?"page":undefined} onClick={()=>setPage("workbench")}>紧凑工作台</button><button aria-current={page==="utility"?"page":undefined} onClick={()=>setPage("utility")}>轻量工具</button></nav>
      <button className="theme-toggle" onClick={()=>setTheme(t=>t==="light"?"dark":"light")}>主题：{theme==="light"?"Light":"Dark"}</button>
    </header>
    <main className="main-content"><div className="page-intro"><h1>{page==="gallery"?"可交互 Motion 模式库":page==="advanced"?"高级联动交互":page==="workbench"?"桌面工作流示例":"轻量工具示例"}</h1><p>{page==="gallery"?"每个组件都可点击操作，验证键盘、快速切换及减少动态效果。": "示例用于验证布局和组件适配，不代表已经安装官方 Luma / Rhea 样式。"} <span className="reduced-note">系统减少动画：{reduced?"开启":"关闭"}</span></p></div>
      {page==="advanced"?<AdvancedLab/>:page==="gallery"?<div className="gallery-grid">{PATTERNS.map(([id,title,detail,Comp])=><Example key={id} id={id} title={title} detail={detail}><Comp/></Example>)}</div>:
       page==="workbench"?<CompactWorkbench/>:<ProductivityUtility/>}
    </main>
    <footer className="footer">Apple-inspired Provider v3.0 · React + Motion · 由目标项目安装官方 shadcn Luma/Rhea</footer>
  </div>;
}
