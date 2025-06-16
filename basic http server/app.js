import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const baseDirectory = path.resolve(process.cwd(), 'public');

function getMimeType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
        case '.html': return 'text/html; charset=utf-8';
        case '.css': return 'text/css; charset=utf-8';
        case '.js': return 'application/javascript; charset=utf-8';
        case '.json': return 'application/json; charset=utf-8';
        case '.png': return 'image/png';
        case '.jpg': return 'image/jpeg';
        case '.gif': return 'image/gif';
        default: return 'application/octet-stream';
    }
}

const server = http.createServer(async (request, response) => {
    try {
        console.log(`Запрошенный адрес: ${request.url}`);
        
        // Если запрошен корневой путь, отдаем index.html
        const requestedPath = (request.url === '/') ? 'index.html' : request.url;
        const unsafePath = path.join(baseDirectory, requestedPath);
        const filePath = path.normalize(unsafePath);

        if (!filePath.startsWith(baseDirectory)) {
            response.statusCode = 403;
            response.setHeader('Content-Type', 'text/plain; charset=utf-8');
            response.end('Доступ запрещён');
            return;
        }

        const data = await fs.readFile(filePath);
        const message = "Изучаем Node.js"; 
        const header = "Главная страница";
        response.setHeader('Content-Type', getMimeType(filePath));
        const dataText = data.toString().replace(/{header}/g, header).replace(/{message}/g, message);
        response.write(dataText);
        response.end();

    } catch (e) {
        console.error(e);
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/plain; charset=utf-8');
        response.end('Ресурс не найден');
    }
});

server.listen(3000, () => {
    console.log('Сервер запущен по адресу: http://localhost:3000');
});
