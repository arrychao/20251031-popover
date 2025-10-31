import React from 'react';
import './App.css';

// 图片资源链接（来自 Figma MCP）
const imgApex = "https://www.figma.com/api/mcp/asset/c2b6f981-2d83-4e8f-8d08-cb5548b0c7c7";
const imgFrame2119900563 = "https://www.figma.com/api/mcp/asset/56a2c27c-d992-45fb-b2bc-df1b679750eb";
const img = "https://www.figma.com/api/mcp/asset/1bf67052-1276-4ef6-a5aa-30a0d2148a97";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/5c4672c4-78df-4318-b076-0a987ada3c08";
const img1 = "https://www.figma.com/api/mcp/asset/d72adda9-3fd7-4cc0-8482-53c0b3a6f65f";
const img2 = "https://www.figma.com/api/mcp/asset/d7197e12-b845-4d4e-8aa8-8890c2f58f3b";
const img3 = "https://www.figma.com/api/mcp/asset/f230ab2d-c794-417c-946c-07866854984d";
const img4 = "https://www.figma.com/api/mcp/asset/25437f3c-d447-4813-bbdb-d2c238875fbb";
const img5 = "https://www.figma.com/api/mcp/asset/5cf0c42e-abb4-4b1f-a174-70cfd10c1543";

export default function App() {
  return (
    <div className="popover-container">
      {/* 顶部三角形 */}
      <div className="apex-wrapper">
        <div className="apex">
          <div className="apex-inner">
            <img alt="" src={imgApex} />
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="main-content">
        {/* 可滚动内容区域 */}
        <div className="scrollable-content">
          {/* 背景装饰 */}
          <div className="background-decoration">
            <div className="decoration-inner">
              <img alt="" src={imgFrame2119900563} />
            </div>
          </div>
          
          {/* 标题区域 */}
          <div className="header-section">
            <p className="title">成长中心</p>
            <div className="subtitle-wrapper">
              <p className="subtitle">查看行业优秀案例</p>
              <div className="arrow-icon">
                <div className="arrow-inner">
                  <img alt="" src={img} />
                </div>
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="content-area">
          {/* 已结束活动卡片 */}
          <div className="ended-section">
            <div className="ended-content">
              <div className="ended-header">
                <div className="ended-info">
                  <div className="ended-title-row">
                    <p className="ended-title">
                      完成「好店」激励活动，领<span className="highlight">千元</span>红包!
                    </p>
                    <div className="tag">
                      <p className="tag-text">已结束</p>
                    </div>
                  </div>
                  <p className="ended-time">活动时间 2025/11/05～2025/12/31</p>
                </div>
              </div>
              
              {/* 提示卡片 */}
              <div className="info-card">
                <div className="info-card-content">
                  <div className="info-text">
                    <p className="info-main">红包已领光，你未及时点击领取，欢迎下次参与</p>
                    <p className="info-link">完成情况</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 日常任务区域 */}
          <div className="daily-tasks-section">
            <p className="section-title">日常任务</p>
            <div className="tasks-list">
              {/* 任务 1 - 小店广告入门 */}
              <div className="task-item">
                <div className="task-icon">
                  <div className="icon-bg">
                    <img alt="" src={imgEllipse10} />
                  </div>
                  <div className="icon-main">
                    <div className="icon-inner">
                      <img alt="" src={img1} />
                    </div>
                  </div>
                </div>
                <div className="task-info">
                  <p className="task-title">小店广告入门</p>
                  <p className="task-desc">快速了解小店广告投放操作</p>
                </div>
                <p className="task-action">去查看</p>
              </div>

              {/* 任务 2 - 商品推广 */}
              <div className="task-item">
                <div className="task-icon">
                  <div className="icon-bg">
                    <img alt="" src={imgEllipse10} />
                  </div>
                  <div className="icon-main shopping-bag">
                    <div className="icon-inner">
                      <img alt="" src={img2} />
                    </div>
                  </div>
                </div>
                <div className="task-info">
                  <p className="task-title">商品推广 (0/5)</p>
                  <p className="task-desc">成功推广5个商品且日预算&gt;0</p>
                </div>
                <p className="task-action">去创建</p>
              </div>

              {/* 任务 3 - 添加素材 */}
              <div className="task-item">
                <div className="task-icon">
                  <div className="icon-bg">
                    <img alt="" src={imgEllipse10} />
                  </div>
                  <div className="icon-main video">
                    <div className="icon-inner">
                      <img alt="" src={img3} />
                    </div>
                  </div>
                </div>
                <div className="task-info">
                  <p className="task-title">添加素材 (0/1)</p>
                  <p className="task-desc">为你的广告添加1条视频素材</p>
                </div>
                <p className="task-action">去添加</p>
              </div>

              {/* 任务 4 - 账户充值 */}
              <div className="task-item">
                <div className="task-icon">
                  <div className="icon-bg">
                    <img alt="" src={imgEllipse10} />
                  </div>
                  <div className="icon-main refund">
                    <div className="icon-inner">
                      <img alt="" src={img4} />
                    </div>
                  </div>
                </div>
                <div className="task-info">
                  <p className="task-title">账户充值</p>
                  <p className="task-desc">为账户充值¥1000</p>
                </div>
                <p className="task-action">去充值</p>
              </div>

              {/* 任务 5 - 直播推广 */}
              <div className="task-item">
                <div className="task-icon">
                  <div className="icon-bg">
                    <img alt="" src={imgEllipse10} />
                  </div>
                  <div className="icon-main live">
                    <div className="icon-inner">
                      <img alt="" src={img5} />
                    </div>
                  </div>
                </div>
                <div className="task-info">
                  <p className="task-title">直播推广 (0/1）</p>
                  <div className="task-desc">
                    创建1个优化目标为「商品点击」<br />或「直播间观众」的广告
                  </div>
                </div>
                <p className="task-action">去创建</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

