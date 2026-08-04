* {
    box-sizing: border-box;
}

html, body {
    width: 100%;
    height: 100%;
    height: 100dvh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}

#phone {
    width: 100vw;
    height: 100vh;
    height: 100dvh;
    background: url("https://picsum.photos/900/1600") center/cover;
    position: relative;
    overflow: hidden;
}

/* 锁屏 */
#lockScreen {
    position: absolute;
    inset: 0;
    color: white;
    text-align: center;
    padding-top: 180px;
    backdrop-filter: blur(5px);
    z-index: 10;
}

#time {
    font-size: 80px;
}

#date {
    font-size: 20px;
}

/* 上滑解锁动画 */
#unlock {
    position: absolute;
    bottom: calc(50px + env(safe-area-inset-bottom));
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-size: 18px;
    text-align: center;
    animation: moveUp 1.5s infinite;
}

#unlock::first-line {
    font-size: 30px;
}

@keyframes moveUp {
    0% { transform: translate(-50%, 0); }
    50% { transform: translate(-50%, -15px); }
    100% { transform: translate(-50%, 0); }
}

/* 桌面 */
#home {
    display: none;
    height: 100%;
    color: white;
    position: relative;
}

.status {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}

.apps {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 40px;
}

.app {
    text-align: center;
    font-size: 40px;
}

.app p {
    font-size: 14px;
}

.dock {
    position: absolute;
    bottom: calc(30px + env(safe-area-inset-bottom));
    width: 90%;
    left: 5%;
    padding: 15px;
    background: #ffffff55;
    border-radius: 30px;
    text-align: center;
    font-size: 35px;
}

/* APP窗口 */
#appWindow {
    display: none;
    position: absolute;
    inset: 0;
    background: white;
    padding: 40px;
    z-index: 20;
    color: black;
}
