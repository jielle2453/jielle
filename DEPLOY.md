# 部署到 GitHub Pages

## 步驟

### 1. 創建 GitHub 倉庫
如果還沒有倉庫，請在 GitHub 上創建一個新倉庫。

### 2. 推送代碼到 GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. 設置 GitHub Pages
1. 進入你的 GitHub 倉庫
2. 點擊 Settings（設置）
3. 在左側菜單找到 Pages
4. 在 "Build and deployment" 下：
   - Source: 選擇 "GitHub Actions"
5. 保存設置

### 4. 更新 Astro 配置（如果需要）

如果你的倉庫名稱**不是** `username.github.io`，需要更新 `site/astro.config.mjs`：

```javascript
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/YOUR_REPO_NAME',
  // ... 其他配置
});
```

如果你的倉庫名稱**是** `username.github.io`，則不需要設置 base。

### 5. 觸發部署
推送代碼到 main 分支後，GitHub Actions 會自動構建和部署網站。

你可以在倉庫的 Actions 標籤頁查看部署進度。

### 6. 訪問網站
部署完成後，你的網站將在以下地址可用：
- 如果是用戶頁面：`https://YOUR_USERNAME.github.io`
- 如果是項目頁面：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## 本地測試
在推送到 GitHub 之前，可以本地測試構建：

```bash
cd site
npm run build
npm run preview
```

## 故障排除

### 構建失敗
- 檢查 Actions 標籤頁的錯誤日誌
- 確保所有依賴都在 package.json 中
- 確保 Node 版本兼容（使用 Node 20）

### 頁面顯示 404
- 確認 GitHub Pages 設置正確
- 如果是項目頁面，確認 astro.config.mjs 中的 base 路徑正確
- 等待幾分鐘讓部署完成

### 資源加載失敗
- 檢查 astro.config.mjs 中的 site 和 base 配置
- 確保所有資源路徑使用相對路徑或正確的 base 路徑
