# Mais info sobre o hidden start -> https://www.ntwind.com/software/hstart.html

taskkill /IM "node-shortcut-publisher.exe" /F
hstart.exe /NOCONSOLE "cmd /c "c:\node-shortcut-publisher\dist\node-shortcut-publisher.exe""