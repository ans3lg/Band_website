@echo off
cd /d "%~dp0"
echo.
echo  NEON RUSH - dev server
echo  Ne zakryvayte eto okno poka rabotaete nad saytom!
echo  Adres: http://127.0.0.1:5173/
echo.
call npx vite --host 127.0.0.1 --port 5173 --open
pause
