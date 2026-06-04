@echo off
echo Osvobozhdenie portov 5173 i 4173...
for %%P in (5173 4173) do (
  for /f "tokens=5" %%a in ('netstat -ano ^| findstr :%%P ^| findstr LISTENING') do (
    taskkill /PID %%a /F >nul 2>&1
  )
)
echo Gotovo. Teper mozhno zapustit: npm run dev
pause
